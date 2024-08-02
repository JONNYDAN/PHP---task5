function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;

  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var text      = document.createElement("span"); // Create the span element
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classList because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];

  if (tile.value > 2048) classes.push("tile-super");

  this.applyClasses(wrapper, classes);

  inner.classList.add("tile-inner");
  inner.textContent = tile.value;

  // Check the visibility state from btnTvSettings before adding text
  const btnTvSettings = document.getElementById('btnTvSettings');
  if (btnTvSettings.textContent !== 'Hidden') {
    // Adding the span element with class "tile-text" only if visible
    text.classList.add("tile-text");
    text.style.display = 'block';
    text.textContent = tile.value; // Set the content of the span to match the tile's value
    inner.appendChild(text); // Append the span to the inner div
  }else{
    text.classList.add("tile-text");
    text.style.display = 'none';
    text.textContent = tile.value; // Set the content of the span to match the tile's value
    inner.appendChild(text);
  }

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";
  
  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;

  if (!won) {
    var score = this.score;
    var maxTileValue = this.getMaxTileValue();
    
    // Lấy id_game và size từ đường dẫn URL
    var pathParts = window.location.pathname.split('/');
    var id_game = pathParts[3];
    var size = pathParts[4];
    var tableName = 'rankings_' + size; // Chọn bảng theo kích thước
    
    // Sử dụng AJAX để gửi điểm số và maxTileValue đến server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save-score.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id_game=" + id_game + "&score=" + score + "&maxTileValue=" + maxTileValue + "&tableName=" + tableName);
  }
};

HTMLActuator.prototype.getMaxTileValue = function () {
  var tiles = document.querySelectorAll('.tile-text');
  var maxTileValue = 0;

  tiles.forEach(function(tile) {
    var value = parseInt(tile.textContent.trim(), 10);
    console.log('Tile value:', value); // Log each tile value
    if (!isNaN(value) && value > maxTileValue) {
      maxTileValue = value;
    }
  });

  console.log('Max tile value:', maxTileValue); // Log the max tile value
  return maxTileValue;
};


HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};
