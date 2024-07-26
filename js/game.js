var _0x1cf7ae = _0x1da0;
(function (_0x38daff, _0x139851) {
  var _0x1d062b = _0x1da0,
    _0x153ce6 = _0x38daff();
  while (!![]) {
    try {
      var _0x3cde79 =
        (parseInt(_0x1d062b(0x371)) / (0x5c6 + -0x3 * -0x98b + -0x2266)) *
          (parseInt(_0x1d062b(0x271)) /
            (-0x2681 + 0x26 * -0x47 + 0x1b1 * 0x1d)) +
        -parseInt(_0x1d062b(0x113)) / (-0x155 * -0x15 + 0x1 * -0x3b + -0x1bbb) +
        parseInt(_0x1d062b(0x1d7)) / (-0x25da + -0x5 * -0x2c6 + -0x600 * -0x4) +
        (parseInt(_0x1d062b(0x359)) / (-0x373 * -0xa + -0x6cc + -0x1bad)) *
          (parseInt(_0x1d062b(0x26c)) /
            (-0xb7e + -0x2296 * -0x1 + -0x1 * 0x1712)) +
        (parseInt(_0x1d062b(0x215)) /
          (-0xc70 * 0x2 + 0x1 * 0xd79 + 0x13 * 0x9a)) *
          (parseInt(_0x1d062b(0x22a)) / (0x8 * -0x408 + 0x1ebb + 0x18d)) +
        -parseInt(_0x1d062b(0x3a7)) / (-0x769 + -0x240 + -0x22 * -0x49) +
        -parseInt(_0x1d062b(0x400)) / (0x189 + -0xb3e * -0x1 + -0xcbd);
      if (_0x3cde79 === _0x139851) break;
      else _0x153ce6["push"](_0x153ce6["shift"]());
    } catch (_0x2d1377) {
      _0x153ce6["push"](_0x153ce6["shift"]());
    }
  }
})(_0x2318, -0x244c9 * 0x1 + -0xee33d + 0x5 * 0x5ac3f);
var undoPermission = ![],
  moveCount = -0x21d0 + -0x11 * 0x1a0 + 0x1eb8 * 0x2,
  maxTile = 0x222 + -0x19ae + 0x178c,
  isGameOver = ![],
  gameWonStatus = ![],
  isShownPromotion = ![];
if (typeof gameSize == _0x1cf7ae(0x1eb))
  var gameSize = 0x1 * 0x557 + -0x145 * 0x1e + -0x1 * -0x20c3;
var gameContentEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](
    _0x1cf7ae(0xe7) + "t"
  ),
  fullscreenStartTriggerEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](
    _0x1cf7ae(0x3cb) + _0x1cf7ae(0x123) + "er"
  ),
  fullscreenEndTriggerEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](
    _0x1cf7ae(0x3cb) + _0x1cf7ae(0x26b)
  );
fullscreenStartTriggerEl &&
  fullscreenStartTriggerEl[_0x1cf7ae(0xf5) + _0x1cf7ae(0x188)](
    _0x1cf7ae(0x205),
    fullscreenEventListener
  );
fullscreenEndTriggerEl &&
  fullscreenEndTriggerEl[_0x1cf7ae(0xf5) + _0x1cf7ae(0x188)](
    _0x1cf7ae(0x205),
    fullscreenEventListener
  );
function fullscreenEventListener() {
  var _0xc82d59 = _0x1cf7ae;
  if (!document[_0xc82d59(0x3cb) + _0xc82d59(0x375)])
    gameContentEl && gameContentEl[_0xc82d59(0x3a1) + _0xc82d59(0x258)]();
  else
    document[_0xc82d59(0xee) + _0xc82d59(0x377)] &&
      document[_0xc82d59(0xee) + _0xc82d59(0x377)]();
}
function resizeGameContainer(_0x59ae6f) {
  var _0x3f070b = _0x1cf7ae,
    _0x3693ab = {
      xSZbF: _0x3f070b(0x164) + _0x3f070b(0x15a),
      naoHj: function (_0x307094, _0x5c45a7) {
        return _0x307094 + _0x5c45a7;
      },
      KHakB: function (_0xdcab2b, _0x1d07c6) {
        return _0xdcab2b / _0x1d07c6;
      },
      bktLd: function (_0x1a3cf5, _0x215fcf) {
        return _0x1a3cf5 / _0x215fcf;
      },
      CfZjU: function (_0x73cf19, _0x3827a6) {
        return _0x73cf19 > _0x3827a6;
      },
      wBaLq: function (_0x5028af, _0xba74a) {
        return _0x5028af + _0xba74a;
      },
      JPwfc: _0x3f070b(0x222),
      skEPe: function (_0x5cb603, _0x596899) {
        return _0x5cb603 + _0x596899;
      },
      hgUmh: _0x3f070b(0x36f) + _0x3f070b(0x21f) + _0x3f070b(0x1e9),
      CKmlD: _0x3f070b(0x107),
      zzRFG: function (_0x4aab70, _0x1a60c3, _0x2df283) {
        return _0x4aab70(_0x1a60c3, _0x2df283);
      },
    },
    _0x36406d = document[_0x3f070b(0x130) + _0x3f070b(0x230)](
      _0x3693ab[_0x3f070b(0x15e)]
    );
  _0x59ae6f
    ? (_0x36406d[_0x3f070b(0x238)][_0x3f070b(0x3a2)] =
        _0x3693ab[_0x3f070b(0x337)])
    : _0x3693ab[_0x3f070b(0x370)](
        setTimeout,
        function () {
          var _0x1d98fa = _0x3f070b,
            _0x517be6 = _0x3693ab[_0x1d98fa(0x20f)][_0x1d98fa(0x275)]("|"),
            _0x76f0af = 0x144c + -0x47 * -0x2c + -0x2080;
          while (!![]) {
            switch (_0x517be6[_0x76f0af++]) {
              case "0":
                var _0x4f9797 = window[_0x1d98fa(0x1ba)][_0x1d98fa(0x2cc)];
                continue;
              case "1":
                var _0x3915c4 = _0x3693ab[_0x1d98fa(0x343)](
                  _0x36406d[_0x1d98fa(0x31b) + "ht"],
                  0xbf * 0x2 + 0x2 * 0x21d + -0x586
                );
                continue;
              case "2":
                var _0x4e168d = _0x3693ab[_0x1d98fa(0x11a)](
                  _0x4f9797,
                  _0x3915c4
                );
                continue;
              case "3":
                var _0x4dbfb9 = _0x3693ab[_0x1d98fa(0x323)](
                  _0x42fa59,
                  _0x54baa6
                );
                continue;
              case "4":
                _0x3693ab[_0x1d98fa(0x1c5)](_0x4e168d, _0x4dbfb9)
                  ? (_0x36406d[_0x1d98fa(0x238)][_0x1d98fa(0x3a2)] = _0x3693ab[
                      _0x1d98fa(0x25f)
                    ](
                      _0x3693ab[_0x1d98fa(0x343)](
                        _0x3693ab[_0x1d98fa(0x2e2)],
                        _0x4dbfb9
                      ),
                      ")"
                    ))
                  : (_0x36406d[_0x1d98fa(0x238)][_0x1d98fa(0x3a2)] = _0x3693ab[
                      _0x1d98fa(0x25f)
                    ](
                      _0x3693ab[_0x1d98fa(0x25f)](
                        _0x3693ab[_0x1d98fa(0x2e2)],
                        _0x4e168d
                      ),
                      ")"
                    ));
                continue;
              case "5":
                var _0x42fa59 = window[_0x1d98fa(0x1ba)][_0x1d98fa(0x2fb)];
                continue;
              case "6":
                var _0x54baa6 = _0x3693ab[_0x1d98fa(0x2a8)](
                  _0x36406d[_0x1d98fa(0xd9) + "h"],
                  0x1e1a * -0x1 + 0x12f4 + 0xb30
                );
                continue;
            }
            break;
          }
        },
        0x254a + 0x2a1 * 0x2 + -0x2a8c
      );
}
function fullscreenchanged(_0x1b9f31) {
  var _0x46e064 = _0x1cf7ae,
    _0x5b5002 = {
      WkRoK: function (_0x1e1f3d, _0x46d868) {
        return _0x1e1f3d(_0x46d868);
      },
    };
  document[_0x46e064(0x3cb) + _0x46e064(0x375)]
    ? _0x5b5002[_0x46e064(0x18c)](resizeGameContainer, ![])
    : _0x5b5002[_0x46e064(0x18c)](resizeGameContainer, !![]);
}
document[_0x1cf7ae(0xf5) + _0x1cf7ae(0x188)](
  _0x1cf7ae(0x3cb) + _0x1cf7ae(0x225),
  fullscreenchanged
);
var scoresEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](_0x1cf7ae(0x281)),
  scoreSharingEl = document[_0x1cf7ae(0x130) + _0x1cf7ae(0x230)](
    _0x1cf7ae(0x260) + _0x1cf7ae(0x23a)
  ),
  unlockedMaxTileValue = 0x5 * 0x34 + 0xd9 * -0xd + -0x7 * -0x16e,
  scoresBtnEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](_0x1cf7ae(0x39b)),
  gameScoresContainerEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](
    _0x1cf7ae(0x389) + _0x1cf7ae(0x3d4)
  ),
  gameScoresEl = document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](
    _0x1cf7ae(0x389)
  ),
  isLoadingScores = ![],
  isScoresShown = ![];
function expandTable(_0x1d54d5, _0x5eb3ae) {
  var _0x3e7133 = _0x1cf7ae,
    _0x49bda3 = {
      NZXZN: _0x3e7133(0x13d) + _0x3e7133(0x186),
      tyjbn: _0x3e7133(0x13d) + _0x3e7133(0x114),
      vilGg: function (_0x404acb, _0x7e7971) {
        return _0x404acb == _0x7e7971;
      },
      qfubj: _0x3e7133(0x1d4),
      TbXzD: function (_0x41ca28, _0x567674) {
        return _0x41ca28 < _0x567674;
      },
      zlPKh: _0x3e7133(0x17d),
      WpIIF: function (_0x2f7f40, _0x41f445) {
        return _0x2f7f40 == _0x41f445;
      },
      UnKCC: _0x3e7133(0x2f2),
    };
  _0x1d54d5[_0x3e7133(0x365)]();
  var _0x34b430 = document[_0x3e7133(0x1e4) + _0x3e7133(0x35b)](
      _0x49bda3[_0x3e7133(0x3c9)]
    ),
    _0x2122f2 = document[_0x3e7133(0x1e4) + _0x3e7133(0x35b)](
      _0x49bda3[_0x3e7133(0x189)]
    );
  if (_0x49bda3[_0x3e7133(0x3f9)](_0x5eb3ae, _0x49bda3[_0x3e7133(0x40d)])) {
    var _0x573085 = _0x34b430[_0x3e7133(0x397)];
    for (
      var _0x4caa46 = 0xc42 + 0x1879 + 0x24bb * -0x1;
      _0x49bda3[_0x3e7133(0x160)](_0x4caa46, _0x573085[_0x3e7133(0x304)]);
      _0x4caa46++
    ) {
      _0x573085[_0x4caa46][_0x3e7133(0x22c)][_0x3e7133(0x365)](
        _0x49bda3[_0x3e7133(0xf8)]
      );
    }
  } else {
    if (_0x49bda3[_0x3e7133(0x3bc)](_0x5eb3ae, _0x49bda3[_0x3e7133(0x395)])) {
      var _0x573085 = _0x2122f2[_0x3e7133(0x397)];
      for (
        var _0x4caa46 = -0x28 * -0x74 + -0x23d7 * -0x1 + -0x11fd * 0x3;
        _0x49bda3[_0x3e7133(0x160)](_0x4caa46, _0x573085[_0x3e7133(0x304)]);
        _0x4caa46++
      ) {
        _0x573085[_0x4caa46][_0x3e7133(0x22c)][_0x3e7133(0x365)](
          _0x49bda3[_0x3e7133(0xf8)]
        );
      }
    }
  }
}
function fetchData(_0x5ccf62) {
  var _0x445b05 = _0x1cf7ae,
    _0x33ac74 = {
      ZqYir: function (_0x1c1e18, _0x4ff3a7) {
        return _0x1c1e18 !== _0x4ff3a7;
      },
      LXAlT: function (_0x44d185, _0x5e6355) {
        return _0x44d185 == _0x5e6355;
      },
      XPjEB: function (_0x5abafb, _0xf2cd99) {
        return _0x5abafb > _0xf2cd99;
      },
      pGSdw:
        _0x445b05(0x170) +
        _0x445b05(0x385) +
        _0x445b05(0x108) +
        _0x445b05(0x2c5) +
        _0x445b05(0x229) +
        _0x445b05(0x340) +
        _0x445b05(0x28b) +
        _0x445b05(0x16d) +
        _0x445b05(0x2bb),
      NYvYL: _0x445b05(0x118),
      xQcoH:
        _0x445b05(0x339) +
        _0x445b05(0x40b) +
        _0x445b05(0x1a2) +
        _0x445b05(0x169),
      wMcBo: _0x445b05(0x128),
      JnIUg: _0x445b05(0x1e0) + _0x445b05(0x399) + _0x445b05(0x145),
      PrwqE: function (_0x224ee6, _0x449be9, _0x48ae0e) {
        return _0x224ee6(_0x449be9, _0x48ae0e);
      },
    },
    _0x3d6b84 = {
      method: _0x33ac74[_0x445b05(0x27c)],
      headers: {
        "Content-Type": _0x33ac74[_0x445b05(0x38d)],
        Accept: _0x33ac74[_0x445b05(0x1c6)],
        "X-CSRF-TOKEN": document[_0x445b05(0x130) + _0x445b05(0x230)](
          _0x33ac74[_0x445b05(0x2ba)]
        )[_0x445b05(0x19f)],
      },
      body: _0x5ccf62[_0x445b05(0x1fc)],
    };
  _0x33ac74[_0x445b05(0x1a8)](fetch, _0x5ccf62[_0x445b05(0x1fa)], _0x3d6b84)
    [_0x445b05(0x1d3)](function (_0x2efd1a) {
      var _0x2e5153 = _0x445b05;
      if (
        _0x33ac74[_0x2e5153(0x2aa)](
          _0x2efd1a[_0x2e5153(0x1d1)],
          0x5 * 0x496 + 0xdab + -0x23d1
        )
      )
        return;
      return _0x2efd1a[_0x2e5153(0x314)]();
    })
    [_0x445b05(0x1d3)](function (_0x1a2bff) {
      var _0x2a220e = _0x445b05;
      if (
        _0x33ac74[_0x2a220e(0x198)](
          _0x5ccf62[_0x2a220e(0x32d)],
          0x1 * -0x3d9 + 0x21fc + 0x1 * -0x1e22
        )
      ) {
        var _0x5a5491 = JSON[_0x2a220e(0x3a9)](_0x1a2bff);
        _0x33ac74[_0x2a220e(0x2c0)](
          _0x5a5491[_0x2a220e(0x40a)][_0x2a220e(0x304)],
          0x1c60 + -0x2012 + -0x1 * -0x416
        )
          ? (gameScoresEl[_0x2a220e(0x37a)] = _0x5a5491[_0x2a220e(0x40a)])
          : (gameScoresEl[_0x2a220e(0x37a)] = _0x33ac74[_0x2a220e(0x37e)]);
      } else _0x33ac74[_0x2a220e(0x198)](_0x5ccf62[_0x2a220e(0x32d)], -0x1 * -0x147f + 0xd16 + -0x3 * 0xb31) && scoreSharingEl && (scoreSharingEl[_0x2a220e(0x37a)] = _0x1a2bff);
    })
    [_0x445b05(0x13c)](function (_0x46987e) {});
}
scoresBtnEl &&
  scoresBtnEl[_0x1cf7ae(0xf5) + _0x1cf7ae(0x188)](
    _0x1cf7ae(0x205),
    function () {
      var _0x1c890d = _0x1cf7ae,
        _0x456768 = {
          zMvSH: _0x1c890d(0x2bd),
          zbpHI: function (_0x46d3f2) {
            return _0x46d3f2();
          },
        };
      gameScoresContainerEl[_0x1c890d(0x22c)][_0x1c890d(0x232)](
        _0x456768[_0x1c890d(0x21d)]
      ),
        _0x456768[_0x1c890d(0x20c)](getScores),
        !isScoresShown ? (isScoresShown = !![]) : (isScoresShown = ![]);
    }
  );
function _0x1da0(_0x4ca63e, _0x1b7367) {
  var _0x3e5415 = _0x2318();
  return (
    (_0x1da0 = function (_0x5cac10, _0x5e8aa8) {
      _0x5cac10 = _0x5cac10 - (-0x2424 + 0x22a6 + 0x2 * 0x12b);
      var _0x4102b1 = _0x3e5415[_0x5cac10];
      return _0x4102b1;
    }),
    _0x1da0(_0x4ca63e, _0x1b7367)
  );
}
function scrollIfNeeded() {
  var _0x445a66 = _0x1cf7ae,
    _0x494f47 = {
      OVwQA: function (_0x4af9ca, _0x5440f5) {
        return _0x4af9ca - _0x5440f5;
      },
      HIwkS: function (_0x25b196, _0x3d3175) {
        return _0x25b196 < _0x3d3175;
      },
      JhQlS: function (_0x853bcd, _0x1b13c7) {
        return _0x853bcd + _0x1b13c7;
      },
      hNZeF: function (_0x31e838, _0x290ff2) {
        return _0x31e838 - _0x290ff2;
      },
      YpeFy: _0x445a66(0x248),
    },
    _0x17f9b0 = scoresBtnEl[_0x445a66(0x2b0) + _0x445a66(0x3fc) + "t"](),
    _0x50d291 = _0x494f47[_0x445a66(0x3e2)](
      window[_0x445a66(0x104) + "t"],
      _0x17f9b0[_0x445a66(0x279)]
    );
  _0x494f47[_0x445a66(0x414)](
    _0x50d291,
    -0x47 * 0x51 + -0x2 * 0x83b + -0x5 * -0x7ed
  ) &&
    window[_0x445a66(0xe2)]({
      top: _0x494f47[_0x445a66(0x3a5)](
        window[_0x445a66(0x3de)],
        _0x494f47[_0x445a66(0x2cf)](0x3 * -0xceb + 0x1089 + 0x16ec, _0x50d291)
      ),
      behavior: _0x494f47[_0x445a66(0x1a0)],
    });
}
function _0x2318() {
  var _0x52e400 = [
    "ttQWo",
    "changedTou",
    "iv\x20style=\x22",
    "rTNKQ",
    "HqLFx",
    "tdXus",
    "smooth",
    "value",
    "actuate",
    "ne-block;f",
    "getTime",
    "EdbGc",
    "altKey",
    "e24",
    "updatePosi",
    "dfNUb",
    "oKfsT",
    "setItem",
    "=\x22Loading\x22",
    "abs",
    "6|7|4|5|1|",
    "AmmQU",
    "lscreen",
    "JyCnn",
    "tion",
    "jeFQe",
    "NSAmr",
    "zZdyP",
    "DZdwW",
    "wBaLq",
    ".score-sha",
    "px;backgro",
    "GleqO",
    "splice",
    "tRExi",
    "hpDpl",
    "eVNBp",
    "fakeStorag",
    "toString",
    "CancelRequ",
    "#fafafa;ma",
    "EndTrigger",
    "966VtDpYA",
    "cKwjt",
    "ent",
    "start?</p>",
    "Dxwaa",
    "1378GfZOiR",
    "MDybg",
    "inputManag",
    "dlQDR",
    "split",
    "bKNyw",
    "#faf8ef",
    "floor",
    "bottom",
    "WjbkT",
    "_data",
    "NYvYL",
    "HmioP",
    "span",
    "osition",
    "oKKyr",
    "scores",
    "MSPointerD",
    "ytictactoe",
    "positionsE",
    "includes",
    "JoDeH",
    "PQUso",
    "bURdP",
    "DAFOD",
    "RLDHE",
    "Not\x20Found<",
    "awisland-l",
    "mpaign=pla",
    "ton",
    "3|4|2|1|0",
    "moveTile",
    "source=gam",
    "tile-text",
    "isGameTerm",
    "oxOwW",
    "btnUndo",
    "ZyKRu",
    ".tile-cont",
    "WVvjg",
    "getBestSco",
    "uJPvu",
    "Press",
    "farthest",
    "continueGa",
    "zdqun",
    "JqMQt",
    "nofollow\x20n",
    "href",
    "ove",
    "Msklf",
    "RYJoC",
    "LfIVC",
    "qIzYo",
    "https://ji",
    "skEPe",
    "GLbeU",
    "ZqYir",
    "wTTEE",
    "mergedFrom",
    ".game-mess",
    "HabnN",
    "tnUEd",
    "getBoundin",
    "3|2|1",
    "xiAPC",
    "settingsMo",
    "hasAttribu",
    "able",
    "ssage&utm_",
    "Spkrl",
    "|7|8|17|11",
    "function",
    "JnIUg",
    "/div>",
    "bestScore",
    "show",
    "SHIGQ",
    "\x20Screen\x20Mo",
    "XPjEB",
    "rkKiN",
    "EcZtk",
    "empty",
    "iZFeP",
    "div\x20class=",
    "\x22\x20target=\x22",
    "previousPo",
    "tMECs",
    "12c20648fd",
    "cellsAvail",
    "oreferrer\x20",
    "height",
    "HyZsO",
    "tile-inner",
    "hNZeF",
    "stPosition",
    "XSUZM",
    "ton&utm_ca",
    "nSqWV",
    "mDkKG",
    "hnTmH",
    "JXpRw",
    "100px;\x22>Pl",
    "1|0|2|4|3",
    "qqnpX",
    "storage",
    "/50cdf46fb",
    "g...\x22\x20widt",
    "FaURu",
    "tter__",
    "IPmoU",
    "QAqXk",
    "oeEWF",
    "JPwfc",
    "dal",
    "ager",
    "DOMTokenLi",
    "jqTbf",
    "zXwvg",
    "btoa",
    "retry",
    "addStartTi",
    "sition",
    "own",
    "SJeKb",
    "fHuvu",
    "undoFailed",
    "block",
    "pageY",
    "latest",
    "|4|12|5|2|",
    "touchend",
    "ECkhf",
    "ipofp",
    "clearConta",
    "a400b33dba",
    "gameStateK",
    "PWlhI",
    "width",
    "|4|5|7|8|6",
    "kRulp",
    "https://al",
    "3|10|16|15",
    "CzRCo",
    "WiAOC",
    "JhbUb",
    "webkit",
    "length",
    "0.4",
    "ion-",
    "YnXeC",
    "add",
    "pDrjq",
    "targetTouc",
    "IRmVt",
    "WetBE",
    "ZdfDI",
    "igHrg",
    "max",
    "GslNC",
    "FwZJf",
    "messageCon",
    "ement",
    "text",
    "join",
    "SMWvQ",
    "score",
    "OtGzX",
    "DWmGO",
    "cBICh",
    "offsetHeig",
    "0|4|6|8|3|",
    "next",
    "|14|0|18|6",
    "rch.svg\x22\x20a",
    "GhaRy",
    "egqln",
    "IQvuH",
    "bktLd",
    "byofU",
    "Krjci",
    "wecxG",
    "WvkVq",
    "a2d",
    "CwqXe",
    "adMEY",
    "defineProp",
    "FQmKn",
    "type",
    "oyydT",
    "RiCpV",
    "TWpWJ",
    "listen",
    "4|3|1|0|2",
    "und:\x20#6c75",
    "cores\x22><im",
    "TYDLw",
    "1|2|3|4|0|",
    "CKmlD",
    "grid",
    "applicatio",
    "aLWLe",
    "yjlCc",
    "prototype",
    "XUpkc",
    "1|2|7|5|9",
    "me-over-me",
    "cores\x22><p>",
    ".keep-play",
    "kXvIK",
    "naoHj",
    "zgpMU",
    "HsvUp",
    "uYGGC",
    "|10|8|4|3|",
    "availableC",
    "keydown",
    "sByClassNa",
    "ght=\x2235\x22><",
    "requestAni",
    "RiLNP",
    "2rem;paddi",
    "NrQmr",
    "StESu",
    "tIxTL",
    "jFksI",
    "/images/",
    "g\x20src=\x22/im",
    "insertTile",
    "IxUMM",
    "2|0|1|3|4",
    "XLfyv",
    "6485lRouEM",
    "BUqKi",
    "ById",
    "message",
    "0|4|2|1|3|",
    "VAOpw",
    "LzadN",
    "yywvk",
    "play:\x20inli",
    "8|7|1|0",
    "QJvOE",
    "AvlZk",
    "remove",
    "EiXxq",
    "sINnQ",
    "iGahU",
    "BRlZO",
    "Game\x20over!",
    "src=\x22/img/",
    "RequestAni",
    "9d44034b17",
    "time",
    ".game-cont",
    "zzRFG",
    "1315eIydtf",
    "QYEed",
    "indexOf",
    "olbtJ",
    "Element",
    "addRandomT",
    "reen",
    "utton",
    "les",
    "innerHTML",
    "FrJDf",
    "getVector",
    "MSPointerU",
    "pGSdw",
    "withinBoun",
    "vIhuA",
    "UDaAg",
    "lWIlA",
    "SMroj",
    "mSmvm",
    "=\x22containe",
    "ng:\x201rem\x202",
    "xLIhX",
    "EHTur",
    "gameScores",
    "WApky",
    "game-over",
    "g/loading/",
    "xQcoH",
    "JwMRE",
    "mmsKx",
    "OrsxA",
    "class",
    "emit",
    "pRfAU",
    "Pnugn",
    "UnKCC",
    "/2e98b16f4",
    "rows",
    "textConten",
    "\x22csrf-toke",
    "cells",
    "scoresBtn",
    "restart",
    "gameState",
    "ile",
    "eiFhz",
    "age",
    "requestFul",
    "transform",
    "reverse",
    "udmKa",
    "JhQlS",
    "hrpIe",
    "1764090aUCelB",
    "Fgcjo",
    "parse",
    "qvmKH",
    "NjTpG",
    "ZxVoY",
    "metaKey",
    "_blank\x22><d",
    "tileMatche",
    "EdYkK",
    "rsals",
    "end",
    "className",
    "gsawisland",
    "tileContai",
    "e.net/?utm",
    "setTimeout",
    "/game/",
    "_blank",
    "lOnYi",
    "afJml",
    "WpIIF",
    "e-over-mes",
    "scoreConta",
    "test",
    "zhfop",
    "bestScoreK",
    "nabled",
    "kbGPz",
    ".best-cont",
    "setBestSco",
    "medium=but",
    "normalizeP",
    "9|1|13",
    "NZXZN",
    "ay\x20in\x20Full",
    "fullscreen",
    "maKkJ",
    "setup",
    "pNLyr",
    "SavRU",
    "koQUW",
    "keepPlayin",
    "EngrK",
    "savePositi",
    "Container",
    "0|4|1|5|3|",
    "innerText",
    "lNvza",
    "Color",
    "0|2|4|1|3",
    "removeTile",
    "none",
    "h.svg\x22\x20alt",
    "stringify",
    "scrollY",
    "fIivT",
    "gloKV",
    "Ghwdk",
    "OVwQA",
    "BLInQ",
    "iner",
    "_source=ga",
    "hbtYC",
    "noopener",
    "2|1|3|4|0",
    "randomAvai",
    "nlAij",
    "/div></div",
    "|5|12|0|11",
    "VPqOd",
    "zNlHo",
    "estAnimati",
    "game-conta",
    "ncvPK",
    "eventTouch",
    "moz",
    "inated",
    "move",
    "XoFPS",
    "kMGxr",
    "Score",
    "vilGg",
    "Play\x20Tic\x20T",
    "<p>Do\x20you\x20",
    "gClientRec",
    "jafOu",
    "svYav",
    "KSqmS",
    "5723250FFeToY",
    "kMEAD",
    "|10|6",
    "shiftKey",
    "bestScore_",
    "random",
    "BVwEn",
    "HuVFP",
    "clientX",
    "vNjbC",
    "html",
    "n/x-www-fo",
    "b9c83e6be9",
    "qfubj",
    "SPcjO",
    "appendChil",
    "fXXEj",
    "loader-sea",
    "start",
    "ykCwX",
    "HIwkS",
    "HjrBy",
    "sAvailable",
    "YQOet",
    "6|5|0|8",
    "YRIHQ",
    "hes",
    "tile",
    "RnkQI",
    "style=\x22dis",
    "gTltj",
    "createElem",
    "WTbiX",
    "offsetWidt",
    "position",
    "w\x20Puzzles",
    "ner",
    "mergeTwo",
    "rvtpF",
    "cellOccupi",
    "zvLIP",
    "\x20width=\x2220",
    "scrollTo",
    "sByTagName",
    "Ortdf",
    "FXQcz",
    "ocETy",
    "gameConten",
    "tile-new",
    "WgrOg",
    "which",
    "agusE",
    "on&utm_cam",
    "EbwCm",
    "exitFullsc",
    "jlnha",
    "WKYRR",
    "iOGaE",
    "srpQQ",
    "bXBKw",
    "KubkW",
    "addEventLi",
    "3|7|2|4|1|",
    "2|5|3|0|1|",
    "zlPKh",
    "addTile",
    "right",
    "geSupporte",
    "prepareTil",
    "msPointerE",
    "forEach",
    "pBUCT",
    "fXHOH",
    "GWwwR",
    "bindButton",
    "JwTpq",
    "innerHeigh",
    "undoSucces",
    "contains",
    "scale(1)",
    "r-fluid\x22><",
    "serialize",
    "sCsTC",
    "sCKPw",
    "JLYFl",
    "ont-size:\x20",
    "edium=butt",
    "ainer",
    "mfQhm",
    "cellConten",
    "lt=\x22Loadin",
    "2784999rlysTf",
    "Latest",
    "SBGXG",
    "preventDef",
    "setAttribu",
    "POST",
    "getItem",
    "KHakB",
    "cTnKS",
    "NxOwY",
    "cancelAnim",
    "AIxgL",
    "clientY",
    "applyClass",
    "onFrame",
    "findFarthe",
    "StartTrigg",
    "ghEFf",
    "MCyeK",
    "jafJX",
    "removeItem",
    "*/*",
    "tate",
    "Cdfym",
    "score-addi",
    "<a\x20href=\x22",
    "tYqDO",
    "getGameSta",
    "ac\x20Toe",
    "querySelec",
    "/div></a>",
    "bestContai",
    "orJCH",
    "XXBPP",
    "bUult",
    "sqVYX",
    "lableCell",
    "7|2|4|0|3|",
    "ivruj",
    "UACbs",
    "iRILu",
    "catch",
    "scoreTable",
    "call",
    "ZwMSo",
    "|7|4|5|8|3",
    "QLQzl",
    "sYCXZ",
    "wrXDb",
    "iNBNE",
    "n\x22]",
    "CancelAnim",
    "Mmika",
    "yUbZi",
    "apply",
    ".lower",
    "HVHcr",
    "want\x20to\x20re",
    "ORZYx",
    "rFQaS",
    "rel",
    "NOcpU",
    "|8|11",
    "gBTaW",
    "9|7|6|10|2",
    ".score-con",
    "removeChil",
    "storageMan",
    "NQhpk",
    "idth:100%;",
    "vGJgF",
    "3|4",
    "sQPUO",
    "text-align",
    "localStora",
    "hgUmh",
    "-launch",
    "TbXzD",
    "src",
    "4|0|7|5|6|",
    "fromState",
    "0|1|2|5|6|",
    "tile-",
    "ywmHG",
    "hrevu",
    "DVkVG",
    "ded",
    "cellAvaila",
    "erty",
    "background",
    "/p></div><",
    "cXqHW",
    "ches",
    "<div\x20class",
    "div",
    "uBtDy",
    "0|4|1|3|5|",
    "11|1|0|9|2",
    "eachCell",
    "ZeoUr",
    "CtlDU",
    "WYFOa",
    "pop",
    "build",
    "ells",
    "xiPdt",
    "hidden",
    "mergeOne",
    "IzTuF",
    "0|4|3|2|1",
    "sLvrX",
    "Play\x20Jigsa",
    "GwqZO",
    ".restart-b",
    "4|1|3|0|2",
    "Top",
    "rgin-top:\x20",
    "stener",
    "tyjbn",
    "over",
    "display",
    "WkRoK",
    "events",
    "7d;color:\x20",
    "shift",
    "%;\x22><span\x20",
    "agcpQ",
    "kmbSR",
    "https://pl",
    "YDGMs",
    "margeThree",
    "tile-merge",
    "hIkex",
    "LXAlT",
    "ationFrame",
    "buildTrave",
    "CgviG",
    "hvTMZ",
    "ftoDK",
    "mGrqc",
    "content",
    "YpeFy",
    "|10|3",
    "rm-urlenco",
    "ault",
    "pqHxb",
    "__defineGe",
    "vukjQ",
    "qual",
    "PrwqE",
    "uUbTI",
    "4|1|2|3|0",
    "GkdgP",
    "paign=jigs",
    "height:100",
    "7|2|13|6|9",
    "size",
    "zlTIT",
    "WZUJR",
    "dFFpd",
    "HfQvw",
    "positionCl",
    "CFULb",
    "XusSp",
    "6|5|1",
    "CqWKX",
    "CbpLX",
    "screen",
    "MXrvZ",
    "xLnnJ",
    "pageX",
    ":\x20center;w",
    "ing-button",
    "ass",
    "ader-searc",
    "1|3|4|2|0",
    "ble",
    "save",
    "CfZjU",
    "wMcBo",
    "touchmove",
    "clearMessa",
    "loading/lo",
    "wMFEm",
    "0|9|2|3|8",
    "QJcxQ",
    "abfHl",
    "sful",
    "startTiles",
    "push",
    "status",
    "OHmxf",
    "then",
    "top",
    "wCwnc",
    "ixadW",
    "469344QIgogP",
    "vGMQM",
    "moveCount",
    "You\x20win!",
    "opacity",
    "tainer",
    "mationFram",
    "hKfph",
    "tile-super",
    "meta[name=",
    "UUsEI",
    "setGameSta",
    "ppJqs",
    "getElement",
    "replace",
    "location",
    "h=\x2235\x22\x20hei",
    "firstChild",
    "per",
    "target",
    "undefined",
    "6|3|5|4|2|",
    "CrnWv",
    "aytictacto",
    "<img\x20class",
    "eHybx",
    "bind",
    "TNJTD",
    "dEbSJ",
    "documentEl",
    "rem;border",
    "game-won",
    "behZK",
    "HqJCb",
    "PufSJ",
    "url",
    "terminated",
    "body",
    "won",
    "uaGcf",
    "aunch",
    "ieKwL",
    "navigator",
    "ctrlKey",
    "HfGYM",
    "3|4|1|2|0",
    "click",
    "yYeoG",
    "MSPointerM",
    "zpciC",
    "ESfHP",
    "EsNKb",
    "touchstart",
    "zbpHI",
    "updateScor",
    "TlLBr",
    "xSZbF",
    "sage&utm_m",
    "MRTyU",
    "undoStack",
    "lfNQP",
    "JDTnC",
    "8392979UyMxkG",
    "hostname",
    "l2048.com",
    "EcFTg",
    ".retry-but",
    "mawGT",
    "KSrTC",
    "updateBest",
    "zMvSH",
    "rFXIG",
    "ainer-wrap",
    "yNTPn",
    "tiles",
    "scale(",
    "tile-posit",
    "gUktf",
    "change",
    "clearGameS",
    "movesAvail",
    "lIKyw",
    "\x22loading-s",
    "8HcJwVv",
    ".com/?utm_",
    "classList",
    "actuator",
    "OwASF",
    "fqkrY",
    "tor",
    "timer",
    "toggle",
    "lWTyf",
    "11|1|9|2|0",
    "HkMAj",
    "4|1|5|3|0|",
    "yrphL",
    "style",
    "=\x22loader\x22\x20",
    "ring",
    "1|4|0|2|3",
    "de</span><",
    "touches",
    "-radius:\x202",
    "TcQof",
    "RQrWs",
    "hasOwnProp",
  ];
  _0x2318 = function () {
    return _0x52e400;
  };
  return _0x2318();
}
function getScores() {
  var _0x4392fa = _0x1cf7ae,
    _0x3d68d4 = {
      WYFOa: function (_0x66d831, _0x5d3038) {
        return _0x66d831(_0x5d3038);
      },
      sCKPw:
        _0x4392fa(0x2db) +
        _0x4392fa(0x2c9) +
        _0x4392fa(0x36d) +
        _0x4392fa(0x24f),
      OHmxf: _0x4392fa(0x2d8),
      EdbGc: function (_0x39116d) {
        return _0x39116d();
      },
      IzTuF:
        _0x4392fa(0x170) +
        _0x4392fa(0x385) +
        _0x4392fa(0x108) +
        _0x4392fa(0x2c5) +
        _0x4392fa(0x229) +
        _0x4392fa(0x334) +
        _0x4392fa(0x354) +
        _0x4392fa(0x38c) +
        _0x4392fa(0x411) +
        _0x4392fa(0x31f) +
        _0x4392fa(0x112) +
        _0x4392fa(0x2dc) +
        _0x4392fa(0x1e7) +
        _0x4392fa(0x34b) +
        _0x4392fa(0x3eb) +
        ">",
      zvLIP: function (_0x57bcba, _0x4c3749, _0x5bbbf3) {
        return _0x57bcba(_0x4c3749, _0x5bbbf3);
      },
      uBtDy: _0x4392fa(0x3b8),
    };
  if (!isLoadingScores) {
    var _0x4d4712 = _0x3d68d4[_0x4392fa(0x1d2)][_0x4392fa(0x275)]("|"),
      _0xca114c = 0xf8b + 0x4 * -0x938 + 0x1555;
    while (!![]) {
      switch (_0x4d4712[_0xca114c++]) {
        case "0":
          isLoadingScores = !![];
          continue;
        case "1":
          _0x3d68d4[_0x4392fa(0x24d)](scrollIfNeeded);
          continue;
        case "2":
          gameScoresEl[_0x4392fa(0x37a)] = _0x3d68d4[_0x4392fa(0x17f)];
          continue;
        case "3":
          _0x3d68d4[_0x4392fa(0xe0)](
            setTimeout,
            function () {
              var _0x558e94 = _0x4392fa;
              _0x3d68d4[_0x558e94(0x178)](fetchData, {
                type: 0x1,
                url: _0x3d68d4[_0x558e94(0x10b)],
                body: new URLSearchParams({
                  two: _0x4c3eca,
                  three: gameSize,
                }),
              });
            },
            -0x1 * 0x101 + 0x1c4c + -0x1ae7
          );
          continue;
        case "4":
          if (gameUrl[_0x4392fa(0x285)](_0x3d68d4[_0x4392fa(0x172)]))
            var _0x4c3eca = -0x1bab + -0x971 * 0x1 + 0x251d;
          else var _0x4c3eca = -0x5b4 * -0x4 + -0x11 * 0x238 + -0x48 * -0x35;
          continue;
      }
      break;
    }
  }
}
function submitScore() {
  var _0x45a482 = _0x1cf7ae,
    _0x40fd17 = {
      DZdwW: function (_0x443677, _0x538e2c) {
        return _0x443677 + _0x538e2c;
      },
      pBUCT: function (_0x496c8d, _0xbaf7f2) {
        return _0x496c8d + _0xbaf7f2;
      },
      ZdfDI: function (_0x6a23ec, _0x12fec8) {
        return _0x6a23ec * _0x12fec8;
      },
      HabnN: function (_0x5baf37, _0x5670b3) {
        return _0x5baf37 * _0x5670b3;
      },
      HsvUp: function (_0x5277af, _0x2e1dc3) {
        return _0x5277af(_0x2e1dc3);
      },
      svYav:
        _0x45a482(0x396) +
        _0x45a482(0x40c) +
        _0x45a482(0x2f8) +
        _0x45a482(0x328),
      LfIVC:
        _0x45a482(0x1ef) +
        _0x45a482(0x239) +
        _0x45a482(0x36b) +
        _0x45a482(0x1c9) +
        _0x45a482(0x1c1) +
        _0x45a482(0x3dc) +
        _0x45a482(0x254) +
        _0x45a482(0xe1) +
        "\x22>",
      CqWKX: _0x45a482(0x3b8),
      wecxG: function (_0x2f78e5, _0xfea1db, _0x21e640) {
        return _0x2f78e5(_0xfea1db, _0x21e640);
      },
    };
  if (scoreSharingEl) {
    scoreSharingEl[_0x45a482(0x37a)] = _0x40fd17[_0x45a482(0x2a5)];
    if (gameUrl[_0x45a482(0x285)](_0x40fd17[_0x45a482(0x1b8)]))
      var _0x4e8023 = -0x419 * 0x1 + 0x56a * -0x2 + -0x111 * -0xe;
    else var _0x4e8023 = -0x1eb * -0x1 + 0x11 * 0x209 + -0x1ec * 0x13;
    _0x40fd17[_0x45a482(0x326)](
      setTimeout,
      function () {
        var _0x2fdb89 = _0x45a482,
          _0x5723a2 = _0x40fd17[_0x2fdb89(0x25e)](
            _0x40fd17[_0x2fdb89(0xff)](
              _0x40fd17[_0x2fdb89(0x30d)](
                hour,
                0xd * -0x2e1 + 0x6e * -0x17 + 0x1475 * 0x3
              ),
              _0x40fd17[_0x2fdb89(0x2ae)](minute, 0x254b + -0x1b55 + -0x9ba)
            ),
            second
          ),
          _0x35c566 = {
            0: _0x4e8023,
            1: gameSize,
            2: game_manager[_0x2fdb89(0x317)],
            3: unlockedMaxTileValue,
            4: moveCount,
            5: _0x5723a2,
          },
          _0x415138 = window[_0x2fdb89(0x2e8)](
            JSON[_0x2fdb89(0x3dd)](_0x35c566)
          );
        _0x40fd17[_0x2fdb89(0x345)](fetchData, {
          type: 0x2,
          url: _0x40fd17[_0x2fdb89(0x3fe)],
          body: new URLSearchParams({ two: _0x415138 }),
        });
      },
      -0x9c9 + -0x1 * 0x1da5 + 0x1 * 0x27d2
    );
  }
}
function toggleScores(_0x41a411) {
  var _0x4504ee = _0x1cf7ae,
    _0x20ca88 = {
      iZFeP: _0x4504ee(0x281),
      ESfHP: function (_0x1b3ccd, _0x370cd0) {
        return _0x1b3ccd == _0x370cd0;
      },
      WvkVq: _0x4504ee(0x2f2),
      yNTPn: _0x4504ee(0x1d4),
    },
    _0x1251b3 = document[_0x4504ee(0x1e4) + _0x4504ee(0x35b)](
      _0x20ca88[_0x4504ee(0x2c4)]
    );
  if (_0x1251b3) {
    if (_0x20ca88[_0x4504ee(0x209)](_0x41a411, _0x20ca88[_0x4504ee(0x327)]))
      _0x1251b3[_0x4504ee(0x22c)][_0x4504ee(0x365)](
        _0x20ca88[_0x4504ee(0x220)]
      ),
        _0x1251b3[_0x4504ee(0x22c)][_0x4504ee(0x308)](
          _0x20ca88[_0x4504ee(0x327)]
        );
    else
      _0x20ca88[_0x4504ee(0x209)](_0x41a411, _0x20ca88[_0x4504ee(0x220)]) &&
        (_0x1251b3[_0x4504ee(0x22c)][_0x4504ee(0x365)](
          _0x20ca88[_0x4504ee(0x327)]
        ),
        _0x1251b3[_0x4504ee(0x22c)][_0x4504ee(0x308)](
          _0x20ca88[_0x4504ee(0x220)]
        ));
  }
}
function minpti(_0xc0410e) {
  var _0xc5dfaf = _0x1cf7ae,
    _0x1ee3d9 = {
      MRTyU: function (_0x272639, _0x51f487) {
        return _0x272639 in _0x51f487;
      },
      ORZYx: function (_0x4915df, _0x308062) {
        return _0x4915df + _0x308062;
      },
      udmKa: function (_0x5baef9, _0x3508e3) {
        return _0x5baef9 + _0x3508e3;
      },
      AIxgL: _0xc5dfaf(0x353),
    };
  if (_0x1ee3d9[_0xc5dfaf(0x211)](_0xc0410e, imgObj)) {
    var _0x8f6666 = new Image();
    _0x8f6666[_0xc5dfaf(0x161)] = _0x1ee3d9[_0xc5dfaf(0x14d)](
      _0x1ee3d9[_0xc5dfaf(0x3a4)](rootUrl, _0x1ee3d9[_0xc5dfaf(0x11e)]),
      imgObj[_0xc0410e]
    );
  }
}
(Function[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1f1)] =
  Function[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1f1)] ||
  function (_0x58e015) {
    var _0xbddbd8 = {
        rFQaS: function (_0x42ea9e, _0x35cca3) {
          return _0x42ea9e instanceof _0x35cca3;
        },
      },
      _0xe49e4 = this;
    return function (_0x646943) {
      var _0x3d4636 = _0x1da0;
      !_0xbddbd8[_0x3d4636(0x14e)](_0x646943, Array) &&
        (_0x646943 = [_0x646943]),
        _0xe49e4[_0x3d4636(0x149)](_0x58e015, _0x646943);
    };
  }),
  (function () {
    var _0x7d2d33 = _0x1cf7ae,
      _0x487bc9 = {
        zlTIT: function (_0x586b0f, _0x454c73) {
          return _0x586b0f < _0x454c73;
        },
        hnTmH: function (_0x3e77c1, _0x34fb53) {
          return _0x3e77c1 != _0x34fb53;
        },
        pNLyr: function (_0x377d16, _0x556db7) {
          return _0x377d16 == _0x556db7;
        },
        dfNUb: function (_0x33de28, _0x371bec) {
          return _0x33de28 === _0x371bec;
        },
        iRILu: _0x7d2d33(0x1eb),
        QLQzl: function (_0x4f3a76, _0xb52efb) {
          return _0x4f3a76 in _0xb52efb;
        },
        rvtpF: _0x7d2d33(0x22c),
        CrnWv: function (_0x5c153f, _0x1caae7, _0x22e3d4, _0x563285) {
          return _0x5c153f(_0x1caae7, _0x22e3d4, _0x563285);
        },
      };
    if (
      _0x487bc9[_0x7d2d33(0x251)](
        typeof window[_0x7d2d33(0x375)],
        _0x487bc9[_0x7d2d33(0x13b)]
      ) ||
      _0x487bc9[_0x7d2d33(0x141)](
        _0x487bc9[_0x7d2d33(0xde)],
        document[_0x7d2d33(0x1f4) + _0x7d2d33(0x313)]
      )
    )
      return;
    var _0x3bc2c0 = Array[_0x7d2d33(0x33c)],
      _0x52c0cb = _0x3bc2c0[_0x7d2d33(0x1d0)],
      _0x393be9 = _0x3bc2c0[_0x7d2d33(0x263)],
      _0x4abc91 = _0x3bc2c0[_0x7d2d33(0x315)];
    function _0x4a4455(_0x73360a) {
      var _0x24366b = _0x7d2d33;
      this["el"] = _0x73360a;
      var _0x3a3d0b = _0x73360a[_0x24366b(0x3b3)]
        [_0x24366b(0x1e5)](/^\s+|\s+$/g, "")
        [_0x24366b(0x275)](/\s+/);
      for (
        var _0x24b221 = -0x1 * 0xb69 + -0x481 + -0x2 * -0x7f5;
        _0x487bc9[_0x24366b(0x1b0)](_0x24b221, _0x3a3d0b[_0x24366b(0x304)]);
        _0x24b221++
      ) {
        _0x52c0cb[_0x24366b(0x13e)](this, _0x3a3d0b[_0x24b221]);
      }
    }
    (_0x4a4455[_0x7d2d33(0x33c)] = {
      add: function (_0x384029) {
        var _0x5685bc = _0x7d2d33;
        if (this[_0x5685bc(0x106)](_0x384029)) return;
        _0x52c0cb[_0x5685bc(0x13e)](this, _0x384029),
          (this["el"][_0x5685bc(0x3b3)] = this[_0x5685bc(0x268)]());
      },
      contains: function (_0x61c0c1) {
        var _0x1e474d = _0x7d2d33;
        return _0x487bc9[_0x1e474d(0x2d5)](
          this["el"][_0x1e474d(0x3b3)][_0x1e474d(0x373)](_0x61c0c1),
          -(-0x1846 + -0x1 * -0x9ed + 0xe5a)
        );
      },
      item: function (_0x516f2a) {
        return this[_0x516f2a] || null;
      },
      remove: function (_0x49a03b) {
        var _0x59951c = _0x7d2d33;
        if (!this[_0x59951c(0x106)](_0x49a03b)) return;
        for (
          var _0x43181c = -0x66b + -0x7 * -0x21 + 0x584;
          _0x487bc9[_0x59951c(0x1b0)](_0x43181c, this[_0x59951c(0x304)]);
          _0x43181c++
        ) {
          if (_0x487bc9[_0x59951c(0x3ce)](this[_0x43181c], _0x49a03b)) break;
        }
        _0x393be9[_0x59951c(0x13e)](
          this,
          _0x43181c,
          -0xc68 + 0x8 * 0x217 + -0x44f
        ),
          (this["el"][_0x59951c(0x3b3)] = this[_0x59951c(0x268)]());
      },
      toString: function () {
        var _0x231456 = _0x7d2d33;
        return _0x4abc91[_0x231456(0x13e)](this, "\x20");
      },
      toggle: function (_0x23d79e) {
        var _0x4caa26 = _0x7d2d33;
        return (
          !this[_0x4caa26(0x106)](_0x23d79e)
            ? this[_0x4caa26(0x308)](_0x23d79e)
            : this[_0x4caa26(0x365)](_0x23d79e),
          this[_0x4caa26(0x106)](_0x23d79e)
        );
      },
    }),
      (window[_0x7d2d33(0x2e5) + "st"] = _0x4a4455);
    function _0x1e4b95(_0x2de302, _0x421835, _0x1ceeba) {
      var _0x4bb5f4 = _0x7d2d33;
      Object[_0x4bb5f4(0x32b) + _0x4bb5f4(0x16b)]
        ? Object[_0x4bb5f4(0x32b) + _0x4bb5f4(0x16b)](_0x2de302, _0x421835, {
            get: _0x1ceeba,
          })
        : _0x2de302[_0x4bb5f4(0x1a5) + _0x4bb5f4(0x2de)](_0x421835, _0x1ceeba);
    }
    _0x487bc9[_0x7d2d33(0x1ed)](
      _0x1e4b95,
      HTMLElement[_0x7d2d33(0x33c)],
      _0x487bc9[_0x7d2d33(0xde)],
      function () {
        return new _0x4a4455(this);
      }
    );
  })(),
  (function () {
    var _0x1e2454 = _0x1cf7ae,
      _0x130a22 = {
        HuVFP: _0x1e2454(0x336) + "5",
        qqnpX: function (_0x4d8ef7, _0x3b1b33) {
          return _0x4d8ef7(_0x3b1b33);
        },
        dlQDR: function (_0x3f233d, _0x438f3c) {
          return _0x3f233d + _0x438f3c;
        },
        tdXus: _0x1e2454(0x28f),
        YDGMs: function (_0x36cb8f, _0x8521c1) {
          return _0x36cb8f - _0x8521c1;
        },
        iNBNE: _0x1e2454(0x303),
        JDTnC: _0x1e2454(0x3f3),
        wCwnc: function (_0x2a8e, _0x327e5c) {
          return _0x2a8e < _0x327e5c;
        },
        RiLNP: _0x1e2454(0x36c) + _0x1e2454(0x1dd) + "e",
        igHrg: function (_0x40a079, _0x560603) {
          return _0x40a079 + _0x560603;
        },
        ieKwL: _0x1e2454(0x146) + _0x1e2454(0x199),
        BRlZO: _0x1e2454(0x269) + _0x1e2454(0x3ef) + _0x1e2454(0x121),
      },
      _0x3176fb = _0x130a22[_0x1e2454(0x407)][_0x1e2454(0x275)]("|"),
      _0x146d94 = 0x24f7 + -0x509 * 0x6 + -0x6c1;
    while (!![]) {
      switch (_0x3176fb[_0x146d94++]) {
        case "0":
          !window[_0x1e2454(0x34c) + _0x1e2454(0x1dd) + "e"] &&
            (window[_0x1e2454(0x34c) + _0x1e2454(0x1dd) + "e"] = function (
              _0x10f08c
            ) {
              var _0x10d42c = _0x1e2454,
                _0x517dc4 = _0x38d8d7[_0x10d42c(0x13a)][_0x10d42c(0x275)]("|"),
                _0x5ec57f = -0x437 + -0x1d41 * -0x1 + -0x281 * 0xa;
              while (!![]) {
                switch (_0x517dc4[_0x5ec57f++]) {
                  case "0":
                    return _0x398aad;
                  case "1":
                    _0x1eda69 = _0x38d8d7[_0x10d42c(0x3f6)](
                      _0xd775fb,
                      _0x194c38
                    );
                    continue;
                  case "2":
                    var _0x398aad = window[_0x10d42c(0x3b7)](function () {
                      var _0x4baa6a = _0x10d42c;
                      _0x38d8d7[_0x4baa6a(0x41e)](
                        _0x10f08c,
                        _0x38d8d7[_0x4baa6a(0x3f6)](_0xd775fb, _0x194c38)
                      );
                    }, _0x194c38);
                    continue;
                  case "3":
                    var _0xd775fb = new Date()[_0x10d42c(0x24c)]();
                    continue;
                  case "4":
                    var _0x194c38 = Math[_0x10d42c(0x30f)](
                      0x7 * 0xd7 + 0x8 * -0x49b + 0x1ef7,
                      _0x38d8d7[_0x10d42c(0x2d1)](
                        -0x11ec * -0x1 + 0x1d6 * -0xd + 0x1 * 0x602,
                        _0x38d8d7[_0x10d42c(0x2d1)](_0xd775fb, _0x1eda69)
                      )
                    );
                    continue;
                }
                break;
              }
            });
          continue;
        case "1":
          var _0x38d8d7 = {
            gTltj: function (_0x4c9482, _0x441484) {
              var _0x6e9f69 = _0x1e2454;
              return _0x130a22[_0x6e9f69(0x2d9)](_0x4c9482, _0x441484);
            },
            XoFPS: function (_0x2d4105, _0x317fb2) {
              var _0x46b931 = _0x1e2454;
              return _0x130a22[_0x46b931(0x274)](_0x2d4105, _0x317fb2);
            },
            UACbs: _0x130a22[_0x1e2454(0x247)],
            XSUZM: function (_0x2dec81, _0x325fb1) {
              var _0xb1dee3 = _0x1e2454;
              return _0x130a22[_0xb1dee3(0x194)](_0x2dec81, _0x325fb1);
            },
            sCsTC: function (_0x4d99d3, _0xcdef3c) {
              var _0x5b39ed = _0x1e2454;
              return _0x130a22[_0x5b39ed(0x2d9)](_0x4d99d3, _0xcdef3c);
            },
          };
          continue;
        case "2":
          var _0x1eda69 = 0x1879 + 0x5 * 0x4f5 + -0x3142;
          continue;
        case "3":
          var _0x2304bd = [
            _0x130a22[_0x1e2454(0x144)],
            _0x130a22[_0x1e2454(0x214)],
          ];
          continue;
        case "4":
          for (
            var _0x2c99a7 = -0x3b4 + -0x21b9 * 0x1 + 0x256d;
            _0x130a22[_0x1e2454(0x1d5)](
              _0x2c99a7,
              _0x2304bd[_0x1e2454(0x304)]
            ) && !window[_0x1e2454(0x34c) + _0x1e2454(0x1dd) + "e"];
            ++_0x2c99a7
          ) {
            (window[_0x1e2454(0x34c) + _0x1e2454(0x1dd) + "e"] =
              window[
                _0x130a22[_0x1e2454(0x274)](
                  _0x2304bd[_0x2c99a7],
                  _0x130a22[_0x1e2454(0x34d)]
                )
              ]),
              (window[_0x1e2454(0x11d) + _0x1e2454(0x199)] =
                window[
                  _0x130a22[_0x1e2454(0x30e)](
                    _0x2304bd[_0x2c99a7],
                    _0x130a22[_0x1e2454(0x200)]
                  )
                ] ||
                window[
                  _0x130a22[_0x1e2454(0x30e)](
                    _0x2304bd[_0x2c99a7],
                    _0x130a22[_0x1e2454(0x369)]
                  )
                ]);
          }
          continue;
        case "5":
          !window[_0x1e2454(0x11d) + _0x1e2454(0x199)] &&
            (window[_0x1e2454(0x11d) + _0x1e2454(0x199)] = function (
              _0x592c9d
            ) {
              var _0x38ee9b = _0x1e2454;
              _0x38d8d7[_0x38ee9b(0x10a)](clearTimeout, _0x592c9d);
            });
          continue;
      }
      break;
    }
  })();
function KeyboardInputManager() {
  var _0x5b5839 = _0x1cf7ae,
    _0x21eb36 = {
      jlnha: _0x5b5839(0x282) + _0x5b5839(0x2ec),
      kMEAD: _0x5b5839(0x207) + _0x5b5839(0x2a2),
      HfGYM: _0x5b5839(0x37d) + "p",
      yYeoG: _0x5b5839(0x20b),
      zhfop: _0x5b5839(0x1c7),
      Spkrl: _0x5b5839(0x2f4),
    };
  (this[_0x5b5839(0x18d)] = {}),
    window[_0x5b5839(0x201)][_0x5b5839(0xfd) + _0x5b5839(0x3c2)]
      ? ((this[_0x5b5839(0x3f2) + _0x5b5839(0x412)] =
          _0x21eb36[_0x5b5839(0xef)]),
        (this[_0x5b5839(0x3f2) + _0x5b5839(0x3f5)] =
          _0x21eb36[_0x5b5839(0x401)]),
        (this[_0x5b5839(0x3f2) + _0x5b5839(0x3b2)] =
          _0x21eb36[_0x5b5839(0x203)]))
      : ((this[_0x5b5839(0x3f2) + _0x5b5839(0x412)] =
          _0x21eb36[_0x5b5839(0x206)]),
        (this[_0x5b5839(0x3f2) + _0x5b5839(0x3f5)] =
          _0x21eb36[_0x5b5839(0x3c0)]),
        (this[_0x5b5839(0x3f2) + _0x5b5839(0x3b2)] =
          _0x21eb36[_0x5b5839(0x2b7)])),
    this[_0x5b5839(0x331)]();
}
(KeyboardInputManager[_0x1cf7ae(0x33c)]["on"] = function (
  _0x71aea5,
  _0xf0d156
) {
  var _0x19956a = _0x1cf7ae;
  !this[_0x19956a(0x18d)][_0x71aea5] &&
    (this[_0x19956a(0x18d)][_0x71aea5] = []),
    this[_0x19956a(0x18d)][_0x71aea5][_0x19956a(0x1d0)](_0xf0d156);
}),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x392)] = function (
    _0x502134,
    _0x195eb8
  ) {
    var _0x5d0dc9 = _0x1cf7ae,
      _0x81e1f5 = {
        oeEWF: function (_0x119b4a, _0x3bd920) {
          return _0x119b4a(_0x3bd920);
        },
      },
      _0xa1e2b0 = this[_0x5d0dc9(0x18d)][_0x502134];
    _0xa1e2b0 &&
      _0xa1e2b0[_0x5d0dc9(0xfe)](function (_0x25e3d2) {
        var _0x88d3be = _0x5d0dc9;
        _0x81e1f5[_0x88d3be(0x2e1)](_0x25e3d2, _0x195eb8);
      });
  }),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x331)] = function () {
    var _0x204a65 = _0x1cf7ae,
      _0x4fa0a0 = {
        RYJoC: _0x204a65(0x174) + _0x204a65(0x140) + _0x204a65(0x402),
        hbtYC: _0x204a65(0x219) + _0x204a65(0x28e),
        behZK: _0x204a65(0x341) + _0x204a65(0x1bf),
        QJvOE: _0x204a65(0x184) + _0x204a65(0x378),
        CtlDU: _0x204a65(0x3f0) + _0x204a65(0x3e4),
        qIzYo: _0x204a65(0x349),
        BLInQ: function (_0x477b20, _0x3971c9) {
          return _0x477b20 !== _0x3971c9;
        },
        ncvPK: _0x204a65(0x3f5),
        fXHOH: function (_0x2c8eff, _0x3569af) {
          return _0x2c8eff > _0x3569af;
        },
        DVkVG: _0x204a65(0x1ea),
        WetBE: _0x204a65(0x138) + _0x204a65(0x1b7),
        mawGT: function (_0x2b4e37, _0x5e883e) {
          return _0x2b4e37 - _0x5e883e;
        },
        JqMQt: function (_0x5a2312, _0x478cd4) {
          return _0x5a2312 > _0x478cd4;
        },
        iOGaE: function (_0x573475, _0x4574b6) {
          return _0x573475 > _0x4574b6;
        },
        iGahU: function (_0x44053d, _0x1d9dc7) {
          return _0x44053d - _0x1d9dc7;
        },
      },
      _0x5cb115 = _0x4fa0a0[_0x204a65(0x2a4)][_0x204a65(0x275)]("|"),
      _0x1fa59e = -0x1e98 + 0x26d0 + 0x8 * -0x107;
    while (!![]) {
      switch (_0x5cb115[_0x1fa59e++]) {
        case "0":
          var _0x2af81e = { 0x26: 0x0, 0x27: 0x1, 0x28: 0x2, 0x25: 0x3 };
          continue;
        case "1":
          var _0x127fef = this;
          continue;
        case "2":
          this[_0x204a65(0x102) + _0x204a65(0x29b)](
            _0x4fa0a0[_0x204a65(0x3e6)],
            this[_0x204a65(0x2e9)]
          );
          continue;
        case "3":
          _0x2c92e6[_0x204a65(0xf5) + _0x204a65(0x188)](
            this[_0x204a65(0x3f2) + _0x204a65(0x412)],
            function (_0x2b9124) {
              var _0x53d504 = _0x204a65;
              if (
                (!window[_0x53d504(0x201)][
                  _0x53d504(0xfd) + _0x53d504(0x3c2)
                ] &&
                  _0x2a91e0[_0x53d504(0x381)](
                    _0x2b9124[_0x53d504(0x23d)][_0x53d504(0x304)],
                    0x1910 + 0x3 * 0xab7 + -0x3934
                  )) ||
                _0x2a91e0[_0x53d504(0x148)](
                  _0x2b9124[_0x53d504(0x30a) + _0x53d504(0x41a)][
                    _0x53d504(0x304)
                  ],
                  0x14d9 + 0x23ad * -0x1 + 0xed5
                )
              )
                return;
              window[_0x53d504(0x201)][_0x53d504(0xfd) + _0x53d504(0x3c2)]
                ? ((_0x440442 = _0x2b9124[_0x53d504(0x1bd)]),
                  (_0x42171a = _0x2b9124[_0x53d504(0x2f1)]))
                : ((_0x440442 =
                    _0x2b9124[_0x53d504(0x23d)][
                      0x1 * -0xaed + 0x2 * 0x214 + 0x6c5
                    ][_0x53d504(0x408)]),
                  (_0x42171a =
                    _0x2b9124[_0x53d504(0x23d)][0x13ca + 0x145f + -0x2829][
                      _0x53d504(0x11f)
                    ])),
                !(
                  _0x2b9124[_0x53d504(0x1ea)] &&
                  _0x2b9124[_0x53d504(0x1ea)][_0x53d504(0x2b4) + "te"](
                    _0x2a91e0[_0x53d504(0x33a)]
                  )
                ) && _0x2b9124[_0x53d504(0x116) + _0x53d504(0x1a3)]();
            }
          );
          continue;
        case "4":
          this[_0x204a65(0x102) + _0x204a65(0x29b)](
            _0x4fa0a0[_0x204a65(0x1f7)],
            this[_0x204a65(0x3d1) + "g"]
          );
          continue;
        case "5":
          var _0x440442, _0x42171a;
          continue;
        case "6":
          _0x2c92e6[_0x204a65(0xf5) + _0x204a65(0x188)](
            this[_0x204a65(0x3f2) + _0x204a65(0x3b2)],
            function (_0x14153) {
              var _0x45b33 = _0x204a65,
                _0x3f2882 = _0x2a91e0[_0x45b33(0x1ab)][_0x45b33(0x275)]("|"),
                _0x3d8f55 = 0xef * 0xf + -0x665 + -0x79c;
              while (!![]) {
                switch (_0x3f2882[_0x3d8f55++]) {
                  case "0":
                    var _0x438529 = _0x2a91e0[_0x45b33(0x10c)](
                      _0x2353a7,
                      _0x440442
                    );
                    continue;
                  case "1":
                    _0x2a91e0[_0x45b33(0x413)](
                      Math[_0x45b33(0x30f)](_0x4b0302, _0x44155e),
                      0x99e * -0x4 + 0xe9b * 0x1 + -0x17e7 * -0x1
                    ) &&
                      _0x127fef[_0x45b33(0x392)](
                        _0x2a91e0[_0x45b33(0x2fa)],
                        _0x2a91e0[_0x45b33(0x2ee)](_0x4b0302, _0x44155e)
                          ? _0x2a91e0[_0x45b33(0x393)](
                              _0x438529,
                              -0x813 + -0x2370 + 0x2b83 * 0x1
                            )
                            ? -0x6 * -0x23f + 0x4fd * 0x5 + -0x266a
                            : -0x20b * -0x2 + 0xb * 0x269 + 0x1b3 * -0x12
                          : _0x2a91e0[_0x45b33(0x32f)](
                              _0x23687a,
                              0x2 * -0x951 + 0x7 * 0x6a + 0xfbc
                            )
                          ? 0x9 * -0x2da + -0x218f + 0x3b3b * 0x1
                          : -0x1994 + 0x18c + 0x1808
                      );
                    continue;
                  case "2":
                    var _0x2353a7, _0x14f09a;
                    continue;
                  case "3":
                    var _0x4b0302 = Math[_0x45b33(0x255)](_0x438529);
                    continue;
                  case "4":
                    window[_0x45b33(0x201)][_0x45b33(0xfd) + _0x45b33(0x3c2)]
                      ? ((_0x2353a7 = _0x14153[_0x45b33(0x1bd)]),
                        (_0x14f09a = _0x14153[_0x45b33(0x2f1)]))
                      : ((_0x2353a7 =
                          _0x14153[_0x45b33(0x243) + _0x45b33(0x16f)][
                            0x187a + -0x543 + -0x1337
                          ][_0x45b33(0x408)]),
                        (_0x14f09a =
                          _0x14153[_0x45b33(0x243) + _0x45b33(0x16f)][
                            -0x15cf * 0x1 + -0x242a + 0x61 * 0x99
                          ][_0x45b33(0x11f)]));
                    continue;
                  case "5":
                    var _0x44155e = Math[_0x45b33(0x255)](_0x23687a);
                    continue;
                  case "6":
                    var _0x23687a = _0x2a91e0[_0x45b33(0x2a3)](
                      _0x14f09a,
                      _0x42171a
                    );
                    continue;
                  case "7":
                    if (
                      (!window[_0x45b33(0x201)][
                        _0x45b33(0xfd) + _0x45b33(0x3c2)
                      ] &&
                        _0x2a91e0[_0x45b33(0x413)](
                          _0x14153[_0x45b33(0x23d)][_0x45b33(0x304)],
                          -0x1 * 0xf01 + 0x152e + -0x62d
                        )) ||
                      _0x2a91e0[_0x45b33(0x23f)](
                        _0x14153[_0x45b33(0x30a) + _0x45b33(0x41a)][
                          _0x45b33(0x304)
                        ],
                        0x20fd + 0xd4 * -0x1 + -0x2029
                      )
                    )
                      return;
                    continue;
                }
                break;
              }
            }
          );
          continue;
        case "7":
          this[_0x204a65(0x102) + _0x204a65(0x29b)](
            _0x4fa0a0[_0x204a65(0x363)],
            this[_0x204a65(0x39c)]
          );
          continue;
        case "8":
          var _0x2c92e6 = document[_0x204a65(0x1e4) + _0x204a65(0x34a) + "me"](
            _0x4fa0a0[_0x204a65(0x177)]
          )[-0xd5d + 0xfb5 + -0x258];
          continue;
        case "9":
          document[_0x204a65(0xf5) + _0x204a65(0x188)](
            _0x4fa0a0[_0x204a65(0x2a6)],
            function (_0xf1798c) {
              var _0x17f982 = _0x204a65,
                _0x94caae =
                  _0xf1798c[_0x17f982(0x24e)] ||
                  _0xf1798c[_0x17f982(0x202)] ||
                  _0xf1798c[_0x17f982(0x3ad)] ||
                  _0xf1798c[_0x17f982(0x403)],
                _0x2b0af7 = _0x2af81e[_0xf1798c[_0x17f982(0xea)]];
              !_0x94caae &&
                _0x2a91e0[_0x17f982(0x245)](_0x2b0af7, undefined) &&
                (_0xf1798c[_0x17f982(0x116) + _0x17f982(0x1a3)](),
                _0x127fef[_0x17f982(0x392)](
                  _0x2a91e0[_0x17f982(0x2fa)],
                  _0x2b0af7
                ));
            }
          );
          continue;
        case "10":
          _0x2c92e6[_0x204a65(0xf5) + _0x204a65(0x188)](
            this[_0x204a65(0x3f2) + _0x204a65(0x3f5)],
            function (_0x285d4c) {
              var _0xf504c4 = _0x204a65;
              _0x285d4c[_0xf504c4(0x116) + _0xf504c4(0x1a3)]();
            }
          );
          continue;
        case "11":
          var _0x2a91e0 = {
            rTNKQ: function (_0x2dec4e, _0x3d26ee) {
              var _0x2b4381 = _0x204a65;
              return _0x4fa0a0[_0x2b4381(0x3e3)](_0x2dec4e, _0x3d26ee);
            },
            PWlhI: _0x4fa0a0[_0x204a65(0x3f1)],
            UDaAg: function (_0xb00894, _0x185a6a) {
              var _0x5e67c2 = _0x204a65;
              return _0x4fa0a0[_0x5e67c2(0x100)](_0xb00894, _0x185a6a);
            },
            yUbZi: function (_0x31f9a8, _0x5d25ed) {
              var _0x479b81 = _0x204a65;
              return _0x4fa0a0[_0x479b81(0x100)](_0x31f9a8, _0x5d25ed);
            },
            aLWLe: _0x4fa0a0[_0x204a65(0x168)],
            GkdgP: _0x4fa0a0[_0x204a65(0x30c)],
            JLYFl: function (_0x21b05a, _0x51a22) {
              var _0x44cc4e = _0x204a65;
              return _0x4fa0a0[_0x44cc4e(0x21a)](_0x21b05a, _0x51a22);
            },
            ykCwX: function (_0x32d7da, _0x1a949e) {
              var _0x2165c2 = _0x204a65;
              return _0x4fa0a0[_0x2165c2(0x29f)](_0x32d7da, _0x1a949e);
            },
            fHuvu: function (_0x774c13, _0x2c5bc8) {
              var _0x1c7300 = _0x204a65;
              return _0x4fa0a0[_0x1c7300(0x29f)](_0x774c13, _0x2c5bc8);
            },
            pRfAU: function (_0x5a383b, _0x4d469d) {
              var _0x252351 = _0x204a65;
              return _0x4fa0a0[_0x252351(0x29f)](_0x5a383b, _0x4d469d);
            },
            RiCpV: function (_0x2ed270, _0x4800c0) {
              var _0x3bdbfb = _0x204a65;
              return _0x4fa0a0[_0x3bdbfb(0xf1)](_0x2ed270, _0x4800c0);
            },
            Msklf: function (_0x275f06, _0x454589) {
              var _0x1711c5 = _0x204a65;
              return _0x4fa0a0[_0x1711c5(0x368)](_0x275f06, _0x454589);
            },
            TcQof: function (_0x4d684f, _0x5d6b87) {
              var _0x692032 = _0x204a65;
              return _0x4fa0a0[_0x692032(0x29f)](_0x4d684f, _0x5d6b87);
            },
          };
          continue;
      }
      break;
    }
  }),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x2e9)] = function (
    _0x2ae74d
  ) {
    var _0x55218f = _0x1cf7ae,
      _0x222d7e = {
        vIhuA: function (_0xe31edc, _0x568273) {
          return _0xe31edc && _0x568273;
        },
        BUqKi: _0x55218f(0x1c2),
        ZeoUr: _0x55218f(0x3db),
        rFXIG: _0x55218f(0x2f0),
        EHTur: _0x55218f(0x3fb) + _0x55218f(0x14c) + _0x55218f(0x26f),
      };
    if (
      _0x222d7e[_0x55218f(0x380)](confirmModal, confirmModalBody) &&
      btnRestartGame &&
      btnResetSettingsEl &&
      btnClearGameDataEl
    ) {
      var _0x17b255 = _0x222d7e[_0x55218f(0x35a)][_0x55218f(0x275)]("|"),
        _0x172616 = 0x2252 + 0x113 * -0x7 + -0x1acd;
      while (!![]) {
        switch (_0x17b255[_0x172616++]) {
          case "0":
            btnClearGameDataEl[_0x55218f(0x238)][_0x55218f(0x18b)] =
              _0x222d7e[_0x55218f(0x176)];
            continue;
          case "1":
            confirmModal[_0x55218f(0x238)][_0x55218f(0x18b)] =
              _0x222d7e[_0x55218f(0x21e)];
            continue;
          case "2":
            btnResetSettingsEl[_0x55218f(0x238)][_0x55218f(0x18b)] =
              _0x222d7e[_0x55218f(0x176)];
            continue;
          case "3":
            confirmModalBody[_0x55218f(0x37a)] = _0x222d7e[_0x55218f(0x388)];
            continue;
          case "4":
            btnRestartGame[_0x55218f(0x238)][_0x55218f(0x18b)] =
              _0x222d7e[_0x55218f(0x21e)];
            continue;
        }
        break;
      }
    }
  }),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x39c)] = function (
    _0x140ce2
  ) {
    var _0x3d4c33 = _0x1cf7ae,
      _0x1ae010 = { VAOpw: _0x3d4c33(0x3db), uJPvu: _0x3d4c33(0x39c) };
    (confirmModal[_0x3d4c33(0x238)][_0x3d4c33(0x18b)] =
      _0x1ae010[_0x3d4c33(0x35e)]),
      _0x140ce2[_0x3d4c33(0x116) + _0x3d4c33(0x1a3)](),
      this[_0x3d4c33(0x392)](_0x1ae010[_0x3d4c33(0x29a)]);
  }),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3d1) + "g"] = function (
    _0xb56f06
  ) {
    var _0x5cfe4f = _0x1cf7ae,
      _0x4c8083 = { cTnKS: _0x5cfe4f(0x3d1) + "g" };
    _0xb56f06[_0x5cfe4f(0x116) + _0x5cfe4f(0x1a3)](),
      this[_0x5cfe4f(0x392)](_0x4c8083[_0x5cfe4f(0x11b)]);
  }),
  (KeyboardInputManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x102) + _0x1cf7ae(0x29b)] =
    function (_0x1e134a, _0x1dd59c) {
      var _0x33a5eb = _0x1cf7ae,
        _0x378c53 = { jafJX: _0x33a5eb(0x205) },
        _0x3ff26a = document[_0x33a5eb(0x130) + _0x33a5eb(0x230)](_0x1e134a);
      _0x3ff26a[_0x33a5eb(0xf5) + _0x33a5eb(0x188)](
        _0x378c53[_0x33a5eb(0x126)],
        _0x1dd59c[_0x33a5eb(0x1f1)](this)
      ),
        _0x3ff26a[_0x33a5eb(0xf5) + _0x33a5eb(0x188)](
          this[_0x33a5eb(0x3f2) + _0x33a5eb(0x3b2)],
          _0x1dd59c[_0x33a5eb(0x1f1)](this)
        );
    });
function HTMLActuator() {
  var _0x1af013 = _0x1cf7ae,
    _0x1ad277 = {
      AmmQU: _0x1af013(0x357),
      IxUMM: _0x1af013(0x154) + _0x1af013(0x1dc),
      FrJDf: _0x1af013(0x3c4) + _0x1af013(0x10f),
      HqLFx: _0x1af013(0x297) + _0x1af013(0x10f),
      KubkW: _0x1af013(0x2ad) + _0x1af013(0x3a0),
    },
    _0x45b1b9 = _0x1ad277[_0x1af013(0x257)][_0x1af013(0x275)]("|"),
    _0xa7fcb = 0xf5 * -0xb + 0x64e + 0x439;
  while (!![]) {
    switch (_0x45b1b9[_0xa7fcb++]) {
      case "0":
        this[_0x1af013(0x3be) + _0x1af013(0x3e4)] = document[
          _0x1af013(0x130) + _0x1af013(0x230)
        ](_0x1ad277[_0x1af013(0x356)]);
        continue;
      case "1":
        this[_0x1af013(0x132) + _0x1af013(0xdc)] = document[
          _0x1af013(0x130) + _0x1af013(0x230)
        ](_0x1ad277[_0x1af013(0x37b)]);
        continue;
      case "2":
        this[_0x1af013(0x3b5) + _0x1af013(0xdc)] = document[
          _0x1af013(0x130) + _0x1af013(0x230)
        ](_0x1ad277[_0x1af013(0x246)]);
        continue;
      case "3":
        this[_0x1af013(0x312) + _0x1af013(0x1dc)] = document[
          _0x1af013(0x130) + _0x1af013(0x230)
        ](_0x1ad277[_0x1af013(0xf4)]);
        continue;
      case "4":
        this[_0x1af013(0x317)] = -0x1d8 * -0xe + -0x1e4 + -0xbf6 * 0x2;
        continue;
    }
    break;
  }
}
(HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x24a)] = function (
  _0x118e61,
  _0x342af9
) {
  var _0x14318b = _0x1cf7ae,
    _0x476a0b = { SMroj: _0x14318b(0x3d9) },
    _0x5089a6 = this;
  window[_0x14318b(0x34c) + _0x14318b(0x1dd) + "e"](function () {
    var _0x4d26e5 = _0x14318b,
      _0x2360ea = _0x476a0b[_0x4d26e5(0x383)][_0x4d26e5(0x275)]("|"),
      _0x42752f = 0x8ba + -0x800 + -0xba;
    while (!![]) {
      switch (_0x2360ea[_0x42752f++]) {
        case "0":
          _0x5089a6[_0x4d26e5(0x2f7) + _0x4d26e5(0x3e4)](
            _0x5089a6[_0x4d26e5(0x3b5) + _0x4d26e5(0xdc)]
          );
          continue;
        case "1":
          _0x5089a6[_0x4d26e5(0x21c) + _0x4d26e5(0x3f8)](
            _0x342af9[_0x4d26e5(0x2bc)]
          );
          continue;
        case "2":
          _0x118e61[_0x4d26e5(0x39a)][_0x4d26e5(0xfe)](function (_0x3485ee) {
            var _0x182cc9 = _0x4d26e5;
            _0x3485ee[_0x182cc9(0xfe)](function (_0xc82147) {
              var _0x2a91e7 = _0x182cc9;
              _0xc82147 && _0x5089a6[_0x2a91e7(0xf9)](_0xc82147);
            });
          });
          continue;
        case "3":
          if (_0x342af9[_0x4d26e5(0x1fb)]) {
            if (_0x342af9[_0x4d26e5(0x18a)]) _0x5089a6[_0x4d26e5(0x35c)](![]);
            else {
              if (_0x342af9[_0x4d26e5(0x1fd)]) {
              }
            }
          }
          continue;
        case "4":
          _0x5089a6[_0x4d26e5(0x20d) + "e"](_0x342af9[_0x4d26e5(0x317)]);
          continue;
      }
      break;
    }
  });
}),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x29d) + "me"] = function () {
    var _0x6bfc3b = _0x1cf7ae;
    this[_0x6bfc3b(0x1c8) + "ge"]();
  }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x2f7) + _0x1cf7ae(0x3e4)] =
    function (_0x123fcc) {
      var _0xea8fea = _0x1cf7ae;
      while (_0x123fcc[_0xea8fea(0x1e8)]) {
        _0x123fcc[_0xea8fea(0x155) + "d"](_0x123fcc[_0xea8fea(0x1e8)]);
      }
    }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0xf9)] = function (_0x6d1cf4) {
    var _0x174571 = _0x1cf7ae,
      _0x428d96 = {
        HyZsO:
          _0x174571(0x2ff) +
          _0x174571(0x2b8) +
          _0x174571(0x31e) +
          _0x174571(0x2f3) +
          _0x174571(0x3c8),
        abfHl: function (_0x5c10df, _0x546b31) {
          return _0x5c10df > _0x546b31;
        },
        cXqHW: _0x174571(0x2ce),
        CbpLX: _0x174571(0x292),
        fqkrY: _0x174571(0x196) + "d",
        eHybx: _0x174571(0xe8),
        hKfph: _0x174571(0x171),
        Krjci: _0x174571(0x1df),
        xiPdt: function (_0x2115c0, _0x689b6b) {
          return _0x2115c0 > _0x689b6b;
        },
        WiAOC: function (_0x11aa40, _0x59cc30) {
          return _0x11aa40(_0x59cc30);
        },
        HjrBy: function (_0xb29d1c, _0x5f1989) {
          return _0xb29d1c * _0x5f1989;
        },
        cBICh: _0x174571(0x27e),
        lWTyf: _0x174571(0x41b),
        DAFOD: function (_0x19e689, _0x43bf5a) {
          return _0x19e689 + _0x43bf5a;
        },
        mDkKG: _0x174571(0x165),
        agusE: function (_0x5ad9fa, _0x25418d) {
          return _0x5ad9fa != _0x25418d;
        },
      },
      _0x526946 = _0x428d96[_0x174571(0x2cd)][_0x174571(0x275)]("|"),
      _0xafa0b = 0x158d + 0x16db + -0x2c68;
    while (!![]) {
      switch (_0x526946[_0xafa0b++]) {
        case "0":
          _0x428d96[_0x174571(0x1cd)](
            _0x6d1cf4[_0x174571(0x249)],
            unlockedMaxTileValue
          ) && (unlockedMaxTileValue = _0x6d1cf4[_0x174571(0x249)]);
          continue;
        case "1":
          _0x4c061a[_0x174571(0x40f) + "d"](_0x8d4510);
          continue;
        case "2":
          _0x8d4510[_0x174571(0x40f) + "d"](_0x1015b5);
          continue;
        case "3":
          var _0x41817c = this;
          continue;
        case "4":
          _0x8d4510[_0x174571(0x22c)][_0x174571(0x308)](
            _0x428d96[_0x174571(0x16e)]
          );
          continue;
        case "5":
          _0x1015b5[_0x174571(0x22c)][_0x174571(0x308)](
            _0x428d96[_0x174571(0x1b9)]
          );
          continue;
        case "6":
          this[_0x174571(0x120) + "es"](_0x4c061a, _0x5abb07);
          continue;
        case "7":
          var _0x4dce52 = _0x6d1cf4[_0x174571(0x2c7) + _0x174571(0x2eb)] || {
            x: _0x6d1cf4["x"],
            y: _0x6d1cf4["y"],
          };
          continue;
        case "8":
          var _0xc5f20d = this[_0x174571(0x1b4) + _0x174571(0x1c0)](_0x4dce52);
          continue;
        case "9":
          if (_0x6d1cf4[_0x174571(0x2c7) + _0x174571(0x2eb)])
            window[_0x174571(0x34c) + _0x174571(0x1dd) + "e"](function () {
              var _0x4f8ec0 = _0x174571;
              (_0x5abb07[0x1028 + 0x6f * -0x21 + 0x3 * -0x9d] = _0x41817c[
                _0x4f8ec0(0x1b4) + _0x4f8ec0(0x1c0)
              ]({ x: _0x6d1cf4["x"], y: _0x6d1cf4["y"] })),
                _0x41817c[_0x4f8ec0(0x120) + "es"](_0x4c061a, _0x5abb07);
            });
          else
            _0x6d1cf4[_0x174571(0x2ac)]
              ? (_0x5abb07[_0x174571(0x1d0)](_0x428d96[_0x174571(0x22f)]),
                this[_0x174571(0x120) + "es"](_0x4c061a, _0x5abb07),
                _0x6d1cf4[_0x174571(0x2ac)][_0x174571(0xfe)](function (
                  _0x147221
                ) {
                  var _0x50b3b7 = _0x174571;
                  _0x41817c[_0x50b3b7(0xf9)](_0x147221);
                }))
              : (_0x5abb07[_0x174571(0x1d0)](_0x428d96[_0x174571(0x1f0)]),
                this[_0x174571(0x120) + "es"](_0x4c061a, _0x5abb07));
          continue;
        case "10":
          var _0x4c061a = document[_0x174571(0x41f) + _0x174571(0x26e)](
            _0x428d96[_0x174571(0x1de)]
          );
          continue;
        case "11":
          if (
            _0x428d96[_0x174571(0x1cd)](
              _0x6d1cf4[_0x174571(0x249)],
              -0x379 + 0x31 * 0x7c + -0xc43
            )
          )
            _0x5abb07[_0x174571(0x1d0)](_0x428d96[_0x174571(0x325)]);
          continue;
        case "12":
          _0x1015b5[_0x174571(0x398) + "t"] = _0x6d1cf4[_0x174571(0x249)];
          continue;
        case "13":
          this[_0x174571(0x3b5) + _0x174571(0xdc)][_0x174571(0x40f) + "d"](
            _0x4c061a
          );
          continue;
        case "14":
          _0x428d96[_0x174571(0x17c)](_0x6d1cf4[_0x174571(0x249)], maxTile) &&
            ((maxTile = _0x6d1cf4[_0x174571(0x249)]),
            _0x428d96[_0x174571(0x301)](
              minpti,
              _0x428d96[_0x174571(0x415)](
                maxTile,
                -0x1e85 + -0x2319 + -0x14 * -0x348
              )
            ));
          continue;
        case "15":
          var _0x1015b5 = document[_0x174571(0x41f) + _0x174571(0x26e)](
            _0x428d96[_0x174571(0x31a)]
          );
          continue;
        case "16":
          var _0x8d4510 = document[_0x174571(0x41f) + _0x174571(0x26e)](
            _0x428d96[_0x174571(0x1de)]
          );
          continue;
        case "17":
          var _0x5abb07 = [
            _0x428d96[_0x174571(0x233)],
            _0x428d96[_0x174571(0x289)](
              _0x428d96[_0x174571(0x2d4)],
              _0x6d1cf4[_0x174571(0x249)]
            ),
            _0xc5f20d,
          ];
          continue;
        case "18":
          if (
            _0x428d96[_0x174571(0xeb)](
              window[_0x174571(0x1e6)][_0x174571(0x216)][
                0x2486 + -0x1832 + -0xc52
              ],
              "l"
            )
          )
            return;
          continue;
      }
      break;
    }
  }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x120) + "es"] = function (
    _0x543667,
    _0x3a81c3
  ) {
    var _0x854dbe = _0x1cf7ae,
      _0x1d0811 = { tIxTL: _0x854dbe(0x391) };
    _0x543667[_0x854dbe(0x117) + "te"](
      _0x1d0811[_0x854dbe(0x351)],
      _0x3a81c3[_0x854dbe(0x315)]("\x20")
    );
  }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3c7) + _0x1cf7ae(0x27f)] =
    function (_0x4e4c53) {
      var _0x102186 = _0x1cf7ae,
        _0x5559fd = {
          MXrvZ: function (_0x10d13c, _0x54f52a) {
            return _0x10d13c + _0x54f52a;
          },
          zgpMU: function (_0x4ed449, _0x5b3d77) {
            return _0x4ed449 + _0x5b3d77;
          },
        };
      return {
        x: _0x5559fd[_0x102186(0x1bb)](
          _0x4e4c53["x"],
          -0x1 * -0x1cfb + -0x124b + -0xaaf * 0x1
        ),
        y: _0x5559fd[_0x102186(0x344)](
          _0x4e4c53["y"],
          0x18dd + 0x193b + -0x1 * 0x3217
        ),
      };
    }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1b4) + _0x1cf7ae(0x1c0)] =
    function (_0x34ac80) {
      var _0x164d21 = _0x1cf7ae,
        _0x24397c = {
          xLIhX: function (_0x537ef7, _0xfca2e2) {
            return _0x537ef7 + _0xfca2e2;
          },
          tRExi: function (_0x5b35f3, _0x416505) {
            return _0x5b35f3 + _0x416505;
          },
          tMECs: function (_0x1eb6b9, _0x19e017) {
            return _0x1eb6b9 + _0x19e017;
          },
          eiFhz: _0x164d21(0x223) + _0x164d21(0x306),
        };
      return (
        (_0x34ac80 = this[_0x164d21(0x3c7) + _0x164d21(0x27f)](_0x34ac80)),
        _0x24397c[_0x164d21(0x387)](
          _0x24397c[_0x164d21(0x264)](
            _0x24397c[_0x164d21(0x2c8)](
              _0x24397c[_0x164d21(0x39f)],
              _0x34ac80["x"]
            ),
            "-"
          ),
          _0x34ac80["y"]
        )
      );
    }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x20d) + "e"] = function (
    _0x37dc02
  ) {
    var _0x2a131b = _0x1cf7ae,
      _0x36e0ee = {
        ivruj: _0x2a131b(0x3e8),
        PQUso: function (_0x1b3b3d, _0x3f1994) {
          return _0x1b3b3d > _0x3f1994;
        },
        EcZtk: _0x2a131b(0x171),
        sYCXZ: _0x2a131b(0x12b) + _0x2a131b(0x25a),
        uaGcf: function (_0x5b3966, _0x499e94) {
          return _0x5b3966 + _0x499e94;
        },
        HfQvw: function (_0x185d9d, _0x170c88) {
          return _0x185d9d - _0x170c88;
        },
      },
      _0x1221c2 = _0x36e0ee[_0x2a131b(0x139)][_0x2a131b(0x275)]("|"),
      _0xb8cfe5 = -0x15 * 0xc1 + -0x11a3 + 0x2178;
    while (!![]) {
      switch (_0x1221c2[_0xb8cfe5++]) {
        case "0":
          if (
            _0x36e0ee[_0x2a131b(0x287)](
              _0x11186a,
              -0x900 + 0x1 * 0x219b + 0x189b * -0x1
            )
          ) {
            var _0x4b15f9 = document[_0x2a131b(0x41f) + _0x2a131b(0x26e)](
              _0x36e0ee[_0x2a131b(0x2c2)]
            );
            _0x4b15f9[_0x2a131b(0x22c)][_0x2a131b(0x308)](
              _0x36e0ee[_0x2a131b(0x142)]
            ),
              (_0x4b15f9[_0x2a131b(0x398) + "t"] = _0x36e0ee[_0x2a131b(0x1fe)](
                "+",
                _0x11186a
              )),
              this[_0x2a131b(0x3be) + _0x2a131b(0x3e4)][_0x2a131b(0x40f) + "d"](
                _0x4b15f9
              );
          }
          continue;
        case "1":
          var _0x11186a = _0x36e0ee[_0x2a131b(0x1b3)](
            _0x37dc02,
            this[_0x2a131b(0x317)]
          );
          continue;
        case "2":
          this[_0x2a131b(0x2f7) + _0x2a131b(0x3e4)](
            this[_0x2a131b(0x3be) + _0x2a131b(0x3e4)]
          );
          continue;
        case "3":
          this[_0x2a131b(0x317)] = _0x37dc02;
          continue;
        case "4":
          this[_0x2a131b(0x3be) + _0x2a131b(0x3e4)][_0x2a131b(0x398) + "t"] =
            this[_0x2a131b(0x317)];
          continue;
      }
      break;
    }
  }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x21c) + _0x1cf7ae(0x3f8)] =
    function (_0x3ec71e) {
      var _0x573216 = _0x1cf7ae;
      this[_0x573216(0x132) + _0x573216(0xdc)][_0x573216(0x398) + "t"] =
        _0x3ec71e;
    }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x35c)] = function (_0x2c76cc) {
    var _0x5dbc82 = _0x1cf7ae,
      _0x3369ec = {
        NrQmr: _0x5dbc82(0x1ec) + _0x5dbc82(0x362),
        jqTbf: function (_0xc3f054) {
          return _0xc3f054();
        },
        gUktf: _0x5dbc82(0x1da),
        JXpRw: _0x5dbc82(0x36a),
        TWpWJ: function (_0x52529f, _0x22225e) {
          return _0x52529f == _0x22225e;
        },
        Pnugn: _0x5dbc82(0x1f6),
        gBTaW: _0x5dbc82(0x38b),
        WjbkT: _0x5dbc82(0x14a),
        CFULb: _0x5dbc82(0x173) + _0x5dbc82(0x153) + _0x5dbc82(0x151),
        HmioP: _0x5dbc82(0x1ea),
        EiXxq: _0x5dbc82(0x3b9),
        vGJgF: _0x5dbc82(0x14f),
        DWmGO: _0x5dbc82(0x2a0) + _0x5dbc82(0x2cb) + _0x5dbc82(0x3e7),
        mGrqc: _0x5dbc82(0x2a1),
        WVvjg:
          _0x5dbc82(0x2a7) +
          _0x5dbc82(0x3b4) +
          _0x5dbc82(0x22b) +
          _0x5dbc82(0x291) +
          _0x5dbc82(0x3bd) +
          _0x5dbc82(0x210) +
          _0x5dbc82(0x10e) +
          _0x5dbc82(0xec) +
          _0x5dbc82(0x1ac) +
          _0x5dbc82(0x28c) +
          _0x5dbc82(0x1ff),
        CgviG: _0x5dbc82(0x182) + _0x5dbc82(0xdb),
        FaURu:
          _0x5dbc82(0x193) +
          _0x5dbc82(0x1ee) +
          _0x5dbc82(0x3b6) +
          _0x5dbc82(0x3e5) +
          _0x5dbc82(0x33f) +
          _0x5dbc82(0x2b6) +
          _0x5dbc82(0x3c6) +
          _0x5dbc82(0x2d2) +
          _0x5dbc82(0x28d) +
          _0x5dbc82(0x283) +
          _0x5dbc82(0x15f),
        QYEed: _0x5dbc82(0x3fa) + _0x5dbc82(0x12f),
        JoDeH: function (_0x342c71) {
          return _0x342c71();
        },
      },
      _0x52c04e = _0x3369ec[_0x5dbc82(0x34f)][_0x5dbc82(0x275)]("|"),
      _0x3dc609 = -0x352 + -0x19aa + 0x8c * 0x35;
    while (!![]) {
      switch (_0x52c04e[_0x3dc609++]) {
        case "0":
          this[_0x5dbc82(0x312) + _0x5dbc82(0x1dc)][
            _0x5dbc82(0x1e4) + _0x5dbc82(0xe3)
          ]("p")[0x9d * 0x31 + 0x1 * -0x6cb + 0x1ca * -0xd][
            _0x5dbc82(0x398) + "t"
          ] = _0x46732b;
          continue;
        case "1":
          this[_0x5dbc82(0x312) + _0x5dbc82(0x1dc)][_0x5dbc82(0x22c)][
            _0x5dbc82(0x308)
          ](_0x3ee736);
          continue;
        case "2":
          _0x3369ec[_0x5dbc82(0x2e6)](stopTimer);
          continue;
        case "3":
          var _0x46732b = _0x2c76cc
            ? _0x3369ec[_0x5dbc82(0x224)]
            : _0x3369ec[_0x5dbc82(0x2d6)];
          continue;
        case "4":
          isGameOver = !![];
          continue;
        case "5":
          _0x3369ec[_0x5dbc82(0x330)](gameWonStatus, !![]) &&
            (_0x46732b = _0x3369ec[_0x5dbc82(0x224)]);
          continue;
        case "6":
          var _0x3ee736 = _0x2c76cc
            ? _0x3369ec[_0x5dbc82(0x394)]
            : _0x3369ec[_0x5dbc82(0x152)];
          continue;
        case "7":
          if (
            _0x3369ec[_0x5dbc82(0x330)](
              -0x71 * 0x1 + 0x44 * -0x18 + 0x6d2,
              -0x158b + -0x5 * -0x204 + 0xb79
            ) &&
            !isShownPromotion
          ) {
            isShownPromotion = !![];
            var _0x145d9c = document[_0x5dbc82(0x130) + _0x5dbc82(0x230)](
              _0x3369ec[_0x5dbc82(0x27a)]
            );
            if (_0x145d9c) {
              var _0x29d4f9 =
                  _0x3369ec[_0x5dbc82(0x1b5)][_0x5dbc82(0x275)]("|"),
                _0x29b7ee = 0x1a5d + -0x1836 + 0x227 * -0x1;
              while (!![]) {
                switch (_0x29d4f9[_0x29b7ee++]) {
                  case "0":
                    var _0xec8e22 =
                      document[_0x5dbc82(0x41f) + _0x5dbc82(0x26e)]("a");
                    continue;
                  case "1":
                    _0xec8e22[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x27d)],
                      _0x3369ec[_0x5dbc82(0x366)]
                    );
                    continue;
                  case "2":
                    _0x4dd181[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x159)],
                      _0x3369ec[_0x5dbc82(0x319)]
                    );
                    continue;
                  case "3":
                    _0xec8e22[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x159)],
                      _0x3369ec[_0x5dbc82(0x319)]
                    );
                    continue;
                  case "4":
                    _0xec8e22[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x19e)],
                      _0x3369ec[_0x5dbc82(0x298)]
                    );
                    continue;
                  case "5":
                    _0xec8e22[_0x5dbc82(0x3d6)] = _0x3369ec[_0x5dbc82(0x19b)];
                    continue;
                  case "6":
                    _0x4dd181[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x19e)],
                      _0x3369ec[_0x5dbc82(0x2dd)]
                    );
                    continue;
                  case "7":
                    var _0x4dd181 =
                      document[_0x5dbc82(0x41f) + _0x5dbc82(0x26e)]("a");
                    continue;
                  case "8":
                    _0x4dd181[_0x5dbc82(0x3d6)] = _0x3369ec[_0x5dbc82(0x372)];
                    continue;
                  case "9":
                    _0x145d9c[_0x5dbc82(0x40f) + "d"](_0xec8e22);
                    continue;
                  case "10":
                    _0x4dd181[_0x5dbc82(0x117) + "te"](
                      _0x3369ec[_0x5dbc82(0x27d)],
                      _0x3369ec[_0x5dbc82(0x366)]
                    );
                    continue;
                  case "11":
                    _0x145d9c[_0x5dbc82(0x40f) + "d"](_0x4dd181);
                    continue;
                }
                break;
              }
            }
          }
          continue;
        case "8":
          _0x3369ec[_0x5dbc82(0x286)](submitScore);
          continue;
      }
      break;
    }
  }),
  (HTMLActuator[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1c8) + "ge"] = function () {
    var _0x519302 = _0x1cf7ae,
      _0x40af9e = { agcpQ: _0x519302(0x1f6), vNjbC: _0x519302(0x38b) };
    this[_0x519302(0x312) + _0x519302(0x1dc)][_0x519302(0x22c)][
      _0x519302(0x365)
    ](_0x40af9e[_0x519302(0x191)]),
      this[_0x519302(0x312) + _0x519302(0x1dc)][_0x519302(0x22c)][
        _0x519302(0x365)
      ](_0x40af9e[_0x519302(0x409)]);
  });
function Grid(_0x534b30, _0x21072d) {
  var _0x43f433 = _0x1cf7ae;
  (this[_0x43f433(0x1af)] = _0x534b30),
    (this[_0x43f433(0x39a)] = _0x21072d
      ? this[_0x43f433(0x163)](_0x21072d)
      : this[_0x43f433(0x2c3)]());
}
(Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x17a)] = function () {
  var _0x5acdf9 = _0x1cf7ae,
    _0x2db83f = {
      jafOu: function (_0x160847, _0x124833) {
        return _0x160847 < _0x124833;
      },
      FXQcz: function (_0x1b2891, _0x28189d) {
        return _0x1b2891 < _0x28189d;
      },
    };
  for (
    var _0xb6a981 = -0xd4 + 0x2 * -0x3fb + 0x5 * 0x1c2;
    _0x2db83f[_0x5acdf9(0x3fd)](_0xb6a981, this[_0x5acdf9(0x1af)]);
    _0xb6a981++
  ) {
    var _0x22579a = (this[_0x5acdf9(0x39a)][_0xb6a981] = []);
    for (
      var _0x8dd95f = -0x7c9 * -0x2 + 0x1f1d + -0x2eaf;
      _0x2db83f[_0x5acdf9(0xe5)](_0x8dd95f, this[_0x5acdf9(0x1af)]);
      _0x8dd95f++
    ) {
      _0x22579a[_0x5acdf9(0x1d0)](null);
    }
  }
}),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x2c3)] = function () {
    var _0x1b9987 = _0x1cf7ae,
      _0x33aea6 = {
        XusSp: function (_0x396294, _0x342bbe) {
          return _0x396294 < _0x342bbe;
        },
      },
      _0x4f0f73 = [];
    for (
      var _0x339eed = 0xbb6 + 0xd5e + -0x1914;
      _0x33aea6[_0x1b9987(0x1b6)](_0x339eed, this[_0x1b9987(0x1af)]);
      _0x339eed++
    ) {
      var _0x419fa3 = (_0x4f0f73[_0x339eed] = []);
      for (
        var _0x5bb40a = 0x5 * -0x742 + -0xc3e + 0xc22 * 0x4;
        _0x33aea6[_0x1b9987(0x1b6)](_0x5bb40a, this[_0x1b9987(0x1af)]);
        _0x5bb40a++
      ) {
        _0x419fa3[_0x1b9987(0x1d0)](null);
      }
    }
    return _0x4f0f73;
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x163)] = function (_0x432619) {
    var _0x5b482a = _0x1cf7ae,
      _0x345eb7 = {
        GLbeU: function (_0x39c360, _0xc7c173) {
          return _0x39c360 < _0xc7c173;
        },
        Mmika: function (_0x1694c7, _0x194433) {
          return _0x1694c7 < _0x194433;
        },
      },
      _0x18cf1c = [];
    for (
      var _0x29af16 = -0x19 * 0x13a + 0x2024 * -0x1 + 0x3ece;
      _0x345eb7[_0x5b482a(0x2a9)](_0x29af16, this[_0x5b482a(0x1af)]);
      _0x29af16++
    ) {
      var _0x124c4d = (_0x18cf1c[_0x29af16] = []);
      for (
        var _0x5097da = 0x1e0d + 0x14f * 0x2 + 0x1 * -0x20ab;
        _0x345eb7[_0x5b482a(0x147)](_0x5097da, this[_0x5b482a(0x1af)]);
        _0x5097da++
      ) {
        var _0x4fed25 = _0x432619[_0x29af16][_0x5097da];
        _0x124c4d[_0x5b482a(0x1d0)](
          _0x4fed25
            ? new Tile(_0x4fed25[_0x5b482a(0xda)], _0x4fed25[_0x5b482a(0x249)])
            : null
        );
      }
    }
    return _0x18cf1c;
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3e9) + _0x1cf7ae(0x137)] = function () {
    var _0x2cec81 = _0x1cf7ae,
      _0x45f4da = {
        jeFQe: function (_0x144ca2, _0x1e591c) {
          return _0x144ca2 * _0x1e591c;
        },
      },
      _0x535b6b = this[_0x2cec81(0x348) + _0x2cec81(0x17b)]();
    if (_0x535b6b[_0x2cec81(0x304)])
      return _0x535b6b[
        Math[_0x2cec81(0x278)](
          _0x45f4da[_0x2cec81(0x25b)](
            Math[_0x2cec81(0x405)](),
            _0x535b6b[_0x2cec81(0x304)]
          )
        )
      ];
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x348) + _0x1cf7ae(0x17b)] = function () {
    var _0x4b2b9c = _0x1cf7ae,
      _0x4f4602 = [];
    return (
      this[_0x4b2b9c(0x175)](function (_0x2b4658, _0x55b6da, _0x2c8ca0) {
        var _0xcefd02 = _0x4b2b9c;
        !_0x2c8ca0 &&
          _0x4f4602[_0xcefd02(0x1d0)]({ x: _0x2b4658, y: _0x55b6da });
      }),
      _0x4f4602
    );
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x175)] = function (_0x1fb312) {
    var _0x2d0adb = _0x1cf7ae,
      _0x615ee6 = {
        NOcpU: function (_0x5e22f4, _0x454902) {
          return _0x5e22f4 < _0x454902;
        },
        JyCnn: function (_0x1bb5fe, _0x722662) {
          return _0x1bb5fe < _0x722662;
        },
        QJcxQ: function (_0x5c7ae7, _0x4325a6, _0x101359, _0x784108) {
          return _0x5c7ae7(_0x4325a6, _0x101359, _0x784108);
        },
      };
    for (
      var _0x255775 = -0x1 * -0x913 + 0xa87 + -0x2 * 0x9cd;
      _0x615ee6[_0x2d0adb(0x150)](_0x255775, this[_0x2d0adb(0x1af)]);
      _0x255775++
    ) {
      for (
        var _0x1f0439 = 0x25d * -0x2 + 0x1bad + -0x16f3;
        _0x615ee6[_0x2d0adb(0x259)](_0x1f0439, this[_0x2d0adb(0x1af)]);
        _0x1f0439++
      ) {
        _0x615ee6[_0x2d0adb(0x1cc)](
          _0x1fb312,
          _0x255775,
          _0x1f0439,
          this[_0x2d0adb(0x39a)][_0x255775][_0x1f0439]
        );
      }
    }
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x2ca) + _0x1cf7ae(0x2b5)] = function () {
    var _0x155117 = _0x1cf7ae;
    return !!this[_0x155117(0x348) + _0x155117(0x17b)]()[_0x155117(0x304)];
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x16a) + _0x1cf7ae(0x1c3)] = function (
    _0x22d859
  ) {
    var _0x9729d0 = _0x1cf7ae;
    return !this[_0x9729d0(0xdf) + "ed"](_0x22d859);
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0xdf) + "ed"] = function (_0x59dcfd) {
    var _0x364530 = _0x1cf7ae;
    return !!this[_0x364530(0x111) + "t"](_0x59dcfd);
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x111) + "t"] = function (_0x48071e) {
    var _0x340d54 = _0x1cf7ae;
    return this[_0x340d54(0x37f) + "ds"](_0x48071e)
      ? this[_0x340d54(0x39a)][_0x48071e["x"]][_0x48071e["y"]]
      : null;
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x355)] = function (_0x45551c) {
    var _0x418603 = _0x1cf7ae;
    this[_0x418603(0x39a)][_0x45551c["x"]][_0x45551c["y"]] = _0x45551c;
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3da)] = function (_0x15dfe1) {
    var _0x34b27f = _0x1cf7ae;
    this[_0x34b27f(0x39a)][_0x15dfe1["x"]][_0x15dfe1["y"]] = null;
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x37f) + "ds"] = function (_0x336d78) {
    var _0x487a8a = _0x1cf7ae,
      _0x1613eb = {
        afJml: function (_0xf60e64, _0x3fb048) {
          return _0xf60e64 >= _0x3fb048;
        },
        EngrK: function (_0x8c6ca2, _0x3fd008) {
          return _0x8c6ca2 < _0x3fd008;
        },
        mmsKx: function (_0x50bbb4, _0x333abe) {
          return _0x50bbb4 >= _0x333abe;
        },
      };
    return (
      _0x1613eb[_0x487a8a(0x3bb)](
        _0x336d78["x"],
        -0x1782 + -0xce5 + 0x2467 * 0x1
      ) &&
      _0x1613eb[_0x487a8a(0x3d2)](_0x336d78["x"], this[_0x487a8a(0x1af)]) &&
      _0x1613eb[_0x487a8a(0x38f)](
        _0x336d78["y"],
        -0x2484 + -0x779 * -0x1 + 0x1d0b
      ) &&
      _0x1613eb[_0x487a8a(0x3d2)](_0x336d78["y"], this[_0x487a8a(0x1af)])
    );
  }),
  (Grid[_0x1cf7ae(0x33c)][_0x1cf7ae(0x109)] = function () {
    var _0x1dfbed = _0x1cf7ae,
      _0x104149 = {
        hrevu: function (_0x52e873, _0x1bd569) {
          return _0x52e873 < _0x1bd569;
        },
      },
      _0x10ffe1 = [];
    for (
      var _0x3c2869 = -0x1a8e + -0x4bd * 0x8 + 0x4076;
      _0x104149[_0x1dfbed(0x167)](_0x3c2869, this[_0x1dfbed(0x1af)]);
      _0x3c2869++
    ) {
      var _0x4f3316 = (_0x10ffe1[_0x3c2869] = []);
      for (
        var _0x142468 = -0x127c + 0x254e + -0xb * 0x1b6;
        _0x104149[_0x1dfbed(0x167)](_0x142468, this[_0x1dfbed(0x1af)]);
        _0x142468++
      ) {
        _0x4f3316[_0x1dfbed(0x1d0)](
          this[_0x1dfbed(0x39a)][_0x3c2869][_0x142468]
            ? this[_0x1dfbed(0x39a)][_0x3c2869][_0x142468][_0x1dfbed(0x109)]()
            : null
        );
      }
    }
    return { size: this[_0x1dfbed(0x1af)], cells: _0x10ffe1 };
  });
function Tile(_0x5ed392, _0x1ab5d3) {
  var _0x16b5b7 = _0x1cf7ae,
    _0x3192f5 = {
      lIKyw: _0x16b5b7(0x180),
      OrsxA: function (_0x33fbbd, _0x1ac51b) {
        return _0x33fbbd || _0x1ac51b;
      },
    },
    _0x380b51 = _0x3192f5[_0x16b5b7(0x228)][_0x16b5b7(0x275)]("|"),
    _0x315fe0 = -0x92d + 0x11 * 0x1 + -0x6a * -0x16;
  while (!![]) {
    switch (_0x380b51[_0x315fe0++]) {
      case "0":
        this["x"] = _0x5ed392["x"];
        continue;
      case "1":
        this[_0x16b5b7(0x2ac)] = null;
        continue;
      case "2":
        this[_0x16b5b7(0x2c7) + _0x16b5b7(0x2eb)] = null;
        continue;
      case "3":
        this[_0x16b5b7(0x249)] = _0x3192f5[_0x16b5b7(0x390)](
          _0x1ab5d3,
          -0x24d9 + -0x7a * -0xb + -0x1 * -0x1f9d
        );
        continue;
      case "4":
        this["y"] = _0x5ed392["y"];
        continue;
    }
    break;
  }
}
(Tile[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3d3) + "on"] = function () {
  var _0x31bd2b = _0x1cf7ae;
  this[_0x31bd2b(0x2c7) + _0x31bd2b(0x2eb)] = { x: this["x"], y: this["y"] };
}),
  (Tile[_0x1cf7ae(0x33c)][_0x1cf7ae(0x250) + _0x1cf7ae(0x25a)] = function (
    _0x11e3fe
  ) {
    (this["x"] = _0x11e3fe["x"]), (this["y"] = _0x11e3fe["y"]);
  }),
  (Tile[_0x1cf7ae(0x33c)][_0x1cf7ae(0x109)] = function () {
    var _0x4f6fb6 = _0x1cf7ae;
    return {
      position: { x: this["x"], y: this["y"] },
      value: this[_0x4f6fb6(0x249)],
    };
  }),
  (Tile[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1c4)] = function (_0x471298) {
    var _0x2e6ae8 = _0x1cf7ae,
      _0x2b8503 = { kRulp: _0x2e6ae8(0x35d) + "5" },
      _0x2a1666 = _0x2b8503[_0x2e6ae8(0x2fd)][_0x2e6ae8(0x275)]("|"),
      _0x107af0 = -0x3e3 + -0x2f * -0x81 + -0x7 * 0x2d4;
    while (!![]) {
      switch (_0x2a1666[_0x107af0++]) {
        case "0":
          var _0x39928f = {};
          continue;
        case "1":
          _0x39928f[_0x2e6ae8(0x249)] = this[_0x2e6ae8(0x249)];
          continue;
        case "2":
          _0x39928f["y"] = this["y"];
          continue;
        case "3":
          _0x39928f[_0x2e6ae8(0x2c7) + _0x2e6ae8(0x2eb)] = {
            x: _0x471298["x"],
            y: _0x471298["y"],
          };
          continue;
        case "4":
          _0x39928f["x"] = this["x"];
          continue;
        case "5":
          return _0x39928f;
      }
      break;
    }
  }),
  (window[_0x1cf7ae(0x267) + "e"] = {
    _data: {},
    setItem: function (_0x5204f6, _0x559625) {
      var _0x2f62b3 = _0x1cf7ae,
        _0x4d0053 = {
          LzadN: function (_0x1e40ef, _0x404385) {
            return _0x1e40ef(_0x404385);
          },
        };
      return (this[_0x2f62b3(0x27b)][_0x5204f6] = _0x4d0053[_0x2f62b3(0x35f)](
        String,
        _0x559625
      ));
    },
    getItem: function (_0xdea2ba) {
      var _0x3ef10f = _0x1cf7ae;
      return this[_0x3ef10f(0x27b)][_0x3ef10f(0x241) + _0x3ef10f(0x16b)](
        _0xdea2ba
      )
        ? this[_0x3ef10f(0x27b)][_0xdea2ba]
        : undefined;
    },
    removeItem: function (_0xc8fe55) {
      var _0x430330 = _0x1cf7ae;
      return delete this[_0x430330(0x27b)][_0xc8fe55];
    },
    clear: function () {
      var _0x3a6b61 = _0x1cf7ae;
      return (this[_0x3a6b61(0x27b)] = {});
    },
  });
function LocalStorageManager() {
  var _0x472756 = _0x1cf7ae,
    _0x41f652 = {
      hvTMZ: function (_0x49c569, _0x39d1c1) {
        return _0x49c569 == _0x39d1c1;
      },
      GleqO: _0x472756(0x2bc),
      TlLBr: function (_0x4b9230, _0x45bc02) {
        return _0x4b9230 + _0x45bc02;
      },
      YRIHQ: _0x472756(0x39d),
      WTbiX: _0x472756(0x404),
      JhbUb: function (_0x1d7966, _0x3d1147) {
        return _0x1d7966 + _0x3d1147;
      },
      HVHcr: function (_0x379a92, _0x25cd97) {
        return _0x379a92 + _0x25cd97;
      },
      TNJTD: function (_0x492de5, _0x2498c8) {
        return _0x492de5 + _0x2498c8;
      },
      YnXeC: function (_0x2fb2d9, _0x15b45d) {
        return _0x2fb2d9 + _0x15b45d;
      },
    };
  _0x41f652[_0x472756(0x19c)](gameSize, -0x41 * -0x1 + -0x26ca + 0x268d * 0x1)
    ? ((this[_0x472756(0x3c1) + "ey"] = _0x41f652[_0x472756(0x262)]),
      (this[_0x472756(0x2f9) + "ey"] = _0x41f652[_0x472756(0x20e)](
        _0x41f652[_0x472756(0x20e)],
        _0x41f652[_0x472756(0x419)]
      )))
    : ((this[_0x472756(0x3c1) + "ey"] = _0x41f652[_0x472756(0x20e)](
        _0x41f652[_0x472756(0xd8)],
        gameSize
      )),
      (this[_0x472756(0x2f9) + "ey"] = _0x41f652[_0x472756(0x302)](
        _0x41f652[_0x472756(0x14b)](
          _0x41f652[_0x472756(0x1f2)](
            _0x41f652[_0x472756(0x307)],
            gameSize
          ),
          "_"
        ),
        _0x41f652[_0x472756(0x419)]
      )));
  var _0x36e8c4 = this[_0x472756(0x15d) + _0x472756(0xfb) + "d"]();
  this[_0x472756(0x2da)] = _0x36e8c4
    ? window[_0x472756(0x15d) + "ge"]
    : window[_0x472756(0x267) + "e"];
}
(LocalStorageManager[_0x1cf7ae(0x33c)][
  _0x1cf7ae(0x15d) + _0x1cf7ae(0xfb) + "d"
] = function () {
  var _0x26a445 = _0x1cf7ae,
    _0x53c691 = { IPmoU: _0x26a445(0x3bf) },
    _0x121640 = _0x53c691[_0x26a445(0x2df)];
  try {
    var _0x354aa3 = window[_0x26a445(0x15d) + "ge"];
    return (
      _0x354aa3[_0x26a445(0x253)](_0x121640, "1"),
      _0x354aa3[_0x26a445(0x127)](_0x121640),
      !![]
    );
  } catch (_0x2b41b7) {
    return ![];
  }
}),
  (LocalStorageManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x299) + "re"] =
    function () {
      var _0x475f6b = _0x1cf7ae;
      return (
        this[_0x475f6b(0x2da)][_0x475f6b(0x119)](
          this[_0x475f6b(0x3c1) + "ey"]
        ) || 0x1 * 0xd31 + -0x13 * -0xa3 + -0x1f2 * 0xd
      );
    }),
  (LocalStorageManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3c5) + "re"] = function (
    _0x541c9f
  ) {
    var _0x691c25 = _0x1cf7ae;
    this[_0x691c25(0x2da)][_0x691c25(0x253)](
      this[_0x691c25(0x3c1) + "ey"],
      _0x541c9f
    );
  }),
  (LocalStorageManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x12e) + "te"] =
    function () {
      var _0x48f173 = _0x1cf7ae,
        _0x1f5199 = this[_0x48f173(0x2da)][_0x48f173(0x119)](
          this[_0x48f173(0x2f9) + "ey"]
        );
      return _0x1f5199 ? JSON[_0x48f173(0x3a9)](_0x1f5199) : null;
    }),
  (LocalStorageManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x1e2) + "te"] = function (
    _0x427794
  ) {
    var _0x46e8d1 = _0x1cf7ae,
      _0x42edd9 = {
        SBGXG: function (_0x1e2acc, _0x42252d) {
          return _0x1e2acc > _0x42252d;
        },
      };
    _0x42edd9[_0x46e8d1(0x115)](moveCount, -0x1653 + -0x19b8 + 0x300b) &&
      this[_0x46e8d1(0x2da)][_0x46e8d1(0x253)](
        this[_0x46e8d1(0x2f9) + "ey"],
        JSON[_0x46e8d1(0x3dd)](_0x427794)
      );
  }),
  (LocalStorageManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x226) + _0x1cf7ae(0x129)] =
    function () {
      var _0x5b9494 = _0x1cf7ae,
        _0x546ffa = {
          FQmKn: function (_0x5da598, _0x2857c7) {
            return _0x5da598 !== _0x2857c7;
          },
          RQrWs: _0x5b9494(0x1eb),
          tnUEd: function (_0xf77e5a, _0x3a840e) {
            return _0xf77e5a == _0x3a840e;
          },
          byofU: function (_0x552d91, _0x54c556) {
            return _0x552d91 + _0x54c556;
          },
          XLfyv: function (_0x2fa5f0, _0x2c919b) {
            return _0x2fa5f0 + _0x2c919b;
          },
          fXXEj: _0x5b9494(0x1d9),
          olbtJ: function (_0x1bc785, _0x4b1c25) {
            return _0x1bc785 + _0x4b1c25;
          },
          sINnQ: _0x5b9494(0x36e),
          HqJCb: function (_0x1dc331, _0x35a7a8) {
            return _0x1dc331 + _0x35a7a8;
          },
          KSrTC: function (_0x3dc122, _0x478bc8) {
            return _0x3dc122 + _0x478bc8;
          },
          eVNBp: function (_0x544ab7, _0x4243db) {
            return _0x544ab7 + _0x4243db;
          },
          ipofp: function (_0xe4c9a7, _0x2b8918) {
            return _0xe4c9a7 + _0x2b8918;
          },
        };
      this[_0x5b9494(0x2da)][_0x5b9494(0x127)](this[_0x5b9494(0x2f9) + "ey"]),
        _0x546ffa[_0x5b9494(0x32c)](
          typeof Storage,
          _0x546ffa[_0x5b9494(0x240)]
        ) &&
          (_0x546ffa[_0x5b9494(0x2af)](gameSize, -0xb90 + 0x267d + -0x1ae9)
            ? (localStorage[_0x5b9494(0x127)](
                _0x546ffa[_0x5b9494(0x324)](
                  _0x546ffa[_0x5b9494(0x358)],
                  _0x546ffa[_0x5b9494(0x410)]
                )
              ),
              localStorage[_0x5b9494(0x127)](
                _0x546ffa[_0x5b9494(0x358)](
                  _0x546ffa[_0x5b9494(0x374)],
                  _0x546ffa[_0x5b9494(0x367)]
                )
              ))
            : (localStorage[_0x5b9494(0x127)](
                _0x546ffa[_0x5b9494(0x1f8)](
                  _0x546ffa[_0x5b9494(0x324)](
                    _0x546ffa[_0x5b9494(0x374)](
                      _0x546ffa[_0x5b9494(0x1f8)],
                      gameSize
                    ),
                    "_"
                  ),
                  _0x546ffa[_0x5b9494(0x410)]
                )
              ),
              localStorage[_0x5b9494(0x127)](
                _0x546ffa[_0x5b9494(0x324)](
                  _0x546ffa[_0x5b9494(0x21b)](
                    _0x546ffa[_0x5b9494(0x266)](
                      _0x546ffa[_0x5b9494(0x2f6)],
                      gameSize
                    ),
                    "_"
                  ),
                  _0x546ffa[_0x5b9494(0x367)]
                )
              )));
    });
function GameManager(_0x467d95, _0x5659e, _0x508666, _0x1f9033) {
  var _0x466574 = _0x1cf7ae,
    _0xd8044e = {
      WApky: _0x466574(0x256) + _0x466574(0x1cb),
      NjTpG: _0x466574(0x3f5),
      xiAPC: _0x466574(0x3d1) + "g",
      zZdyP: _0x466574(0x39c),
    },
    _0x37dc6b = _0xd8044e[_0x466574(0x38a)][_0x466574(0x275)]("|"),
    _0x461bc5 = -0xfce + 0x583 + 0x9b * 0x11;
  while (!![]) {
    switch (_0x37dc6b[_0x461bc5++]) {
      case "0":
        this[_0x466574(0x273) + "er"]["on"](
          _0xd8044e[_0x466574(0x3ab)],
          this[_0x466574(0x3f5)][_0x466574(0x1f1)](this)
        );
        continue;
      case "1":
        this[_0x466574(0x1cf)] = -0x2 * -0x6a7 + -0x1 * 0x2053 + 0x1307;
        continue;
      case "2":
        this[_0x466574(0x273) + "er"]["on"](
          _0xd8044e[_0x466574(0x2b2)],
          this[_0x466574(0x3d1) + "g"][_0x466574(0x1f1)](this)
        );
        continue;
      case "3":
        this[_0x466574(0x212)] = [];
        continue;
      case "4":
        this[_0x466574(0x156) + _0x466574(0x2e4)] = new _0x1f9033();
        continue;
      case "5":
        this[_0x466574(0x22d)] = new _0x508666();
        continue;
      case "6":
        this[_0x466574(0x1af)] = _0x467d95;
        continue;
      case "7":
        this[_0x466574(0x273) + "er"] = new _0x5659e();
        continue;
      case "8":
        this[_0x466574(0x3cd)]();
        continue;
      case "9":
        this[_0x466574(0x273) + "er"]["on"](
          _0xd8044e[_0x466574(0x25d)],
          this[_0x466574(0x39c)][_0x466574(0x1f1)](this)
        );
        continue;
    }
    break;
  }
}
(GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x39c)] = function () {
  var _0x1bc1bf = _0x1cf7ae,
    _0xb8f7fc = {
      EcFTg: _0x1bc1bf(0x234) + _0x1bc1bf(0x2fc) + _0x1bc1bf(0x1a1),
      Cdfym: function (_0x7e4318) {
        return _0x7e4318();
      },
      ZwMSo: function (_0x16f03b) {
        return _0x16f03b();
      },
      srpQQ: function (_0x5de1b7) {
        return _0x5de1b7();
      },
      gloKV: _0x1bc1bf(0x295),
      VPqOd: _0x1bc1bf(0x305),
      PufSJ: function (_0x233c41, _0x59e02a) {
        return _0x233c41(_0x59e02a);
      },
      oyydT: _0x1bc1bf(0x39c),
    },
    _0xe157a7 = _0xb8f7fc[_0x1bc1bf(0x218)][_0x1bc1bf(0x275)]("|"),
    _0x338dfd = 0x2549 + -0x8bc * -0x1 + -0x2e05;
  while (!![]) {
    switch (_0xe157a7[_0x338dfd++]) {
      case "0":
        _0xb8f7fc[_0x1bc1bf(0x12a)](updateMoveCount);
        continue;
      case "1":
        isGameOver = ![];
        continue;
      case "2":
        moveCount = 0x1f86 + 0x8 * 0x14b + -0x2e * 0xe9;
        continue;
      case "3":
        this[_0x1bc1bf(0x3cd)]();
        continue;
      case "4":
        _0xb8f7fc[_0x1bc1bf(0x13f)](resetTimer);
        continue;
      case "5":
        _0xb8f7fc[_0x1bc1bf(0xf2)](startTimer);
        continue;
      case "6":
        this[_0x1bc1bf(0x156) + _0x1bc1bf(0x2e4)][
          _0x1bc1bf(0x226) + _0x1bc1bf(0x129)
        ]();
        continue;
      case "7":
        undoPermission = ![];
        continue;
      case "8":
        document[_0x1bc1bf(0x1e4) + _0x1bc1bf(0x35b)](
          _0xb8f7fc[_0x1bc1bf(0x3e0)]
        )[_0x1bc1bf(0x238)][_0x1bc1bf(0x1db)] = _0xb8f7fc[_0x1bc1bf(0x3ed)];
        continue;
      case "9":
        _0xb8f7fc[_0x1bc1bf(0x1f9)](
          playSoundTrack,
          _0xb8f7fc[_0x1bc1bf(0x32e)]
        );
        continue;
      case "10":
        this[_0x1bc1bf(0x22d)][_0x1bc1bf(0x29d) + "me"]();
        continue;
      case "11":
        unlockedMaxTileValue = 0x7 * -0x475 + 0x1e41 + 0xf3;
        continue;
    }
    break;
  }
}),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3d1) + "g"] = function () {
    var _0x1247cc = _0x1cf7ae;
    (this[_0x1247cc(0x3d1) + "g"] = !![]),
      this[_0x1247cc(0x22d)][_0x1247cc(0x29d) + "me"]();
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x293) + _0x1cf7ae(0x3f4)] =
    function () {
      var _0x1993bb = _0x1cf7ae;
      return (
        this[_0x1993bb(0x18a)] ||
        (this[_0x1993bb(0x1fd)] && !this[_0x1993bb(0x3d1) + "g"])
      );
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3cd)] = function () {
    var _0x45ffc8 = _0x1cf7ae,
      _0x447e4e = { GwqZO: _0x45ffc8(0x1aa), Ghwdk: _0x45ffc8(0x236) + "2" },
      _0xa3a7c =
        this[_0x45ffc8(0x156) + _0x45ffc8(0x2e4)][_0x45ffc8(0x12e) + "te"]();
    if (_0xa3a7c) {
      var _0xd80e12 = _0x447e4e[_0x45ffc8(0x183)][_0x45ffc8(0x275)]("|"),
        _0x1d82fd = 0x103b + 0x3 * 0x94f + -0x2c28;
      while (!![]) {
        switch (_0xd80e12[_0x1d82fd++]) {
          case "0":
            this[_0x45ffc8(0x3d1) + "g"] = _0xa3a7c[_0x45ffc8(0x3d1) + "g"];
            continue;
          case "1":
            this[_0x45ffc8(0x317)] = _0xa3a7c[_0x45ffc8(0x317)];
            continue;
          case "2":
            this[_0x45ffc8(0x18a)] = _0xa3a7c[_0x45ffc8(0x18a)];
            continue;
          case "3":
            this[_0x45ffc8(0x1fd)] = _0xa3a7c[_0x45ffc8(0x1fd)];
            continue;
          case "4":
            this[_0x45ffc8(0x338)] = new Grid(
              _0xa3a7c[_0x45ffc8(0x338)][_0x45ffc8(0x1af)],
              _0xa3a7c[_0x45ffc8(0x338)][_0x45ffc8(0x39a)]
            );
            continue;
        }
        break;
      }
    } else {
      var _0x470de7 = _0x447e4e[_0x45ffc8(0x3e1)][_0x45ffc8(0x275)]("|"),
        _0x11c259 = -0x1b9a + -0x947 * -0x1 + -0x1253 * -0x1;
      while (!![]) {
        switch (_0x470de7[_0x11c259++]) {
          case "0":
            this[_0x45ffc8(0x3d1) + "g"] = ![];
            continue;
          case "1":
            this[_0x45ffc8(0x317)] = 0x1 * -0x8a5 + 0x4d6 + 0x3cf;
            continue;
          case "2":
            this[_0x45ffc8(0x2ea) + _0x45ffc8(0x379)]();
            continue;
          case "3":
            this[_0x45ffc8(0x1fd)] = ![];
            continue;
          case "4":
            this[_0x45ffc8(0x338)] = new Grid(this[_0x45ffc8(0x1af)]);
            continue;
          case "5":
            this[_0x45ffc8(0x18a)] = ![];
            continue;
        }
        break;
      }
    }
    this[_0x45ffc8(0x24a)]();
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x2ea) + _0x1cf7ae(0x379)] =
    function () {
      var _0x4ab80e = _0x1cf7ae,
        _0x2e1904 = {
          WKYRR: function (_0x3196f0, _0x460228) {
            return _0x3196f0 < _0x460228;
          },
        };
      for (
        var _0x218f12 = -0x719 + -0x92d + 0x1046;
        _0x2e1904[_0x4ab80e(0xf0)](_0x218f12, this[_0x4ab80e(0x1cf)]);
        _0x218f12++
      ) {
        this[_0x4ab80e(0x376) + _0x4ab80e(0x39e)]();
      }
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x376) + _0x1cf7ae(0x39e)] =
    function () {
      var _0x5b80dc = _0x1cf7ae,
        _0x3c9185 = {
          ZxVoY: function (_0x256535, _0x16056c) {
            return _0x256535 < _0x16056c;
          },
        };
      if (this[_0x5b80dc(0x338)][_0x5b80dc(0x2ca) + _0x5b80dc(0x2b5)]()) {
        var _0x27ecb7 = _0x3c9185[_0x5b80dc(0x3ac)](
            Math[_0x5b80dc(0x405)](),
            -0x5 * 0x8f + 0x35 * -0xa0 + 0x23eb + 0.9
          )
            ? -0x296 * -0x1 + -0x153 * -0x1d + -0x28fb
            : 0x1b71 * -0x1 + -0x2c0 + 0x1e35,
          _0x2e3f1b = new Tile(
            this[_0x5b80dc(0x338)][_0x5b80dc(0x3e9) + _0x5b80dc(0x137)](),
            _0x27ecb7
          );
        this[_0x5b80dc(0x338)][_0x5b80dc(0x355)](_0x2e3f1b);
      }
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x24a)] = function () {
    var _0x476d4e = _0x1cf7ae,
      _0x52d3c7 = {
        RLDHE: function (_0x95861d, _0x13d336) {
          return _0x95861d < _0x13d336;
        },
      };
    _0x52d3c7[_0x476d4e(0x28a)](
      this[_0x476d4e(0x156) + _0x476d4e(0x2e4)][_0x476d4e(0x299) + "re"](),
      this[_0x476d4e(0x317)]
    ) &&
      this[_0x476d4e(0x156) + _0x476d4e(0x2e4)][_0x476d4e(0x3c5) + "re"](
        this[_0x476d4e(0x317)]
      ),
      this[_0x476d4e(0x18a)]
        ? this[_0x476d4e(0x156) + _0x476d4e(0x2e4)][
            _0x476d4e(0x226) + _0x476d4e(0x129)
          ]()
        : this[_0x476d4e(0x156) + _0x476d4e(0x2e4)][_0x476d4e(0x1e2) + "te"](
            this[_0x476d4e(0x109)]()
          ),
      this[_0x476d4e(0x22d)][_0x476d4e(0x24a)](this[_0x476d4e(0x338)], {
        score: this[_0x476d4e(0x317)],
        over: this[_0x476d4e(0x18a)],
        won: this[_0x476d4e(0x1fd)],
        bestScore:
          this[_0x476d4e(0x156) + _0x476d4e(0x2e4)][_0x476d4e(0x299) + "re"](),
        terminated: this[_0x476d4e(0x293) + _0x476d4e(0x3f4)](),
      });
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x109)] = function () {
    var _0x34ac29 = _0x1cf7ae;
    return {
      grid: this[_0x34ac29(0x338)][_0x34ac29(0x109)](),
      score: this[_0x34ac29(0x317)],
      over: this[_0x34ac29(0x18a)],
      won: this[_0x34ac29(0x1fd)],
      keepPlaying: this[_0x34ac29(0x3d1) + "g"],
    };
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0xfc) + "es"] = function () {
    var _0xee1773 = _0x1cf7ae;
    this[_0xee1773(0x338)][_0xee1773(0x175)](function (
      _0x2b9aa4,
      _0x1816d6,
      _0x4735c9
    ) {
      var _0x471acc = _0xee1773;
      _0x4735c9 &&
        ((_0x4735c9[_0x471acc(0x2ac)] = null),
        _0x4735c9[_0x471acc(0x3d3) + "on"]());
    });
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x290)] = function (
    _0x515c11,
    _0x347d0c
  ) {
    var _0xbddde1 = _0x1cf7ae;
    (this[_0xbddde1(0x338)][_0xbddde1(0x39a)][_0x515c11["x"]][_0x515c11["y"]] =
      null),
      (this[_0xbddde1(0x338)][_0xbddde1(0x39a)][_0x347d0c["x"]][
        _0x347d0c["y"]
      ] = _0x515c11),
      _0x515c11[_0xbddde1(0x250) + _0xbddde1(0x25a)](_0x347d0c);
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3f5)] = function (_0x18f1d6) {
    var _0x55a808 = _0x1cf7ae,
      _0x54dcc9 = {
        JwTpq: _0x55a808(0x1ae) + _0x55a808(0x3ec) + _0x55a808(0x347) + "1",
        bKNyw: _0x55a808(0x162) + _0x55a808(0x2b1),
        pqHxb: function (_0xbfca66, _0x1636bd) {
          return _0xbfca66 == _0x1636bd;
        },
        kmbSR: function (_0x306dc6, _0x12089e) {
          return _0x306dc6 === _0x12089e;
        },
        XXBPP: _0x55a808(0x2b9),
        JwMRE: function (_0x3c4906) {
          return _0x3c4906();
        },
        RnkQI: function (_0x5b3418, _0x464174) {
          return _0x5b3418 > _0x464174;
        },
        wrXDb: function (_0x488f38, _0x147793) {
          return _0x488f38(_0x147793);
        },
        IRmVt: _0x55a808(0x17e),
        Dxwaa: function (_0x27bb52, _0x4f1d9d) {
          return _0x27bb52 == _0x4f1d9d;
        },
        GhaRy: _0x55a808(0xdd),
        ftoDK: _0x55a808(0x195),
        pDrjq: _0x55a808(0x3f5),
        ocETy: function (_0x3d6ccf, _0x93ccee) {
          return _0x3d6ccf == _0x93ccee;
        },
        lfNQP: _0x55a808(0x3d5) + "2",
        MCyeK: _0x55a808(0x31c) + _0x55a808(0x33e),
        CzRCo: _0x55a808(0x185),
        XUpkc: function (_0x485b7b, _0x2b2a74) {
          return _0x485b7b == _0x2b2a74;
        },
        hpDpl: _0x55a808(0x295),
        mSmvm: _0x55a808(0x305),
        YQOet: function (_0x3371c1, _0x2c0254) {
          return _0x3371c1 === _0x2c0254;
        },
        lWIlA: _0x55a808(0xf6) + _0x55a808(0x418),
        mfQhm: function (_0x263ee1, _0x11492b) {
          return _0x263ee1 === _0x11492b;
        },
        Fgcjo: function (_0x4d08eb, _0x16d45a) {
          return _0x4d08eb * _0x16d45a;
        },
        NxOwY: function (_0x492b07, _0x37f85c) {
          return _0x492b07 >= _0x37f85c;
        },
      },
      _0x3a4c26 = _0x54dcc9[_0x55a808(0x103)][_0x55a808(0x275)]("|"),
      _0x1e3011 = -0x2 * 0x1253 + -0x2 * -0xeb1 + 0x1f * 0x3c;
    while (!![]) {
      switch (_0x3a4c26[_0x1e3011++]) {
        case "0":
          var _0x532bda = this[_0x55a808(0x19a) + _0x55a808(0x3b1)](_0x35091f);
          continue;
        case "1":
          if (_0x447df7) {
            var _0x13bbc0 = _0x54dcc9[_0x55a808(0x276)][_0x55a808(0x275)]("|"),
              _0xdeaa21 = 0x5da * 0x1 + 0x64f + -0x1 * 0xc29;
            while (!![]) {
              switch (_0x13bbc0[_0xdeaa21++]) {
                case "0":
                  !this[_0x55a808(0x227) + _0x55a808(0x2b5)]() &&
                    (this[_0x55a808(0x18a)] = !![]);
                  continue;
                case "1":
                  this[_0x55a808(0x24a)]();
                  continue;
                case "2":
                  _0x54dcc9[_0x55a808(0x1a4)](
                    moveCount,
                    0xb * 0x235 + 0x4 * 0x544 + -0x2d4d
                  ) &&
                    _0x54dcc9[_0x55a808(0x192)](
                      typeof ggld,
                      _0x54dcc9[_0x55a808(0x134)]
                    ) &&
                    _0x54dcc9[_0x55a808(0x38e)](ggld);
                  continue;
                case "3":
                  _0x54dcc9[_0x55a808(0x38e)](updateMoveCount);
                  continue;
                case "4":
                  this[_0x55a808(0x376) + _0x55a808(0x39e)]();
                  continue;
                case "5":
                  if (
                    _0x54dcc9[_0x55a808(0x41c)](
                      _0x1887dc,
                      -0x1815 + 0x40b * 0x2 + 0xfff
                    )
                  ) {
                    if (
                      _0x54dcc9[_0x55a808(0x1a4)](
                        _0x1887dc,
                        0x3 * 0xc19 + 0x1a9c + 0x2 * -0x1f73
                      )
                    )
                      _0x54dcc9[_0x55a808(0x143)](
                        playSoundTrack,
                        _0x54dcc9[_0x55a808(0x30b)]
                      );
                    else
                      _0x54dcc9[_0x55a808(0x270)](
                        _0x1887dc,
                        0x15ad + 0x1fc3 + -0x356e
                      )
                        ? _0x54dcc9[_0x55a808(0x143)](
                            playSoundTrack,
                            _0x54dcc9[_0x55a808(0x320)]
                          )
                        : _0x54dcc9[_0x55a808(0x143)](
                            playSoundTrack,
                            _0x54dcc9[_0x55a808(0x19d)]
                          );
                  } else
                    _0x54dcc9[_0x55a808(0x143)](
                      playSoundTrack,
                      _0x54dcc9[_0x55a808(0x309)]
                    );
                  continue;
                case "6":
                  moveCount++;
                  continue;
                case "7":
                  this[_0x55a808(0x212)][_0x55a808(0x1d0)](_0x24f150);
                  continue;
              }
              break;
            }
          }
          continue;
        case "2":
          var _0x44470c = this;
          continue;
        case "3":
          _0x532bda["x"][_0x55a808(0xfe)](function (_0x31325a) {
            var _0x2798fa = _0x55a808;
            _0x532bda["y"][_0x2798fa(0xfe)](function (_0x5d4285) {
              var _0x1b27b4 = _0x2798fa;
              (_0x8dc44c = { x: _0x31325a, y: _0x5d4285 }),
                (_0x550330 =
                  _0x44470c[_0x1b27b4(0x338)][_0x1b27b4(0x111) + "t"](
                    _0x8dc44c
                  ));
              if (_0x550330) {
                var _0x562202 = _0x44470c[_0x1b27b4(0x122) + _0x1b27b4(0x2d0)](
                    _0x8dc44c,
                    _0x35091f
                  ),
                  _0x106848 = _0x44470c[_0x1b27b4(0x338)][
                    _0x1b27b4(0x111) + "t"
                  ](_0x562202[_0x1b27b4(0x31d)]);
                if (
                  _0x106848 &&
                  _0x2ac772[_0x1b27b4(0x20a)](
                    _0x106848[_0x1b27b4(0x249)],
                    _0x550330[_0x1b27b4(0x249)]
                  ) &&
                  !_0x106848[_0x1b27b4(0x2ac)]
                ) {
                  var _0x387346 =
                      _0x2ac772[_0x1b27b4(0x133)][_0x1b27b4(0x275)]("|"),
                    _0x347211 = -0x3 * -0x4a9 + 0x2454 + -0x51 * 0x9f;
                  while (!![]) {
                    switch (_0x387346[_0x347211++]) {
                      case "0":
                        _0x2ac772[_0x1b27b4(0xf3)](
                          _0x1ed30b[_0x1b27b4(0x249)],
                          0xa42 + -0x1 * -0x2555 + -0x2797
                        ) && (gameWonStatus = !![]);
                        continue;
                      case "1":
                        _0x44470c[_0x1b27b4(0x338)][_0x1b27b4(0x3da)](
                          _0x550330
                        );
                        continue;
                      case "2":
                        _0x1ed30b[_0x1b27b4(0x2ac)] = [_0x550330, _0x106848];
                        continue;
                      case "3":
                        _0x24f150[_0x1b27b4(0x221)][_0x1b27b4(0x1d0)](
                          _0x550330[_0x1b27b4(0x1c4)](
                            _0x562202[_0x1b27b4(0x31d)]
                          )
                        );
                        continue;
                      case "4":
                        _0x44470c[_0x1b27b4(0x338)][_0x1b27b4(0x355)](
                          _0x1ed30b
                        );
                        continue;
                      case "5":
                        _0x44470c[_0x1b27b4(0x317)] +=
                          _0x1ed30b[_0x1b27b4(0x249)];
                        continue;
                      case "6":
                        _0x550330[_0x1b27b4(0x250) + _0x1b27b4(0x25a)](
                          _0x562202[_0x1b27b4(0x31d)]
                        );
                        continue;
                      case "7":
                        var _0x1ed30b = new Tile(
                          _0x562202[_0x1b27b4(0x31d)],
                          _0x2ac772[_0x1b27b4(0x1e1)](
                            _0x550330[_0x1b27b4(0x249)],
                            0x135e + -0x37 * -0xf + -0x1695
                          )
                        );
                        continue;
                      case "8":
                        _0x1887dc++;
                        continue;
                    }
                    break;
                  }
                } else
                  _0x24f150[_0x1b27b4(0x221)][_0x1b27b4(0x1d0)](
                    _0x550330[_0x1b27b4(0x1c4)](_0x562202[_0x1b27b4(0x29c)])
                  ),
                    _0x44470c[_0x1b27b4(0x290)](
                      _0x550330,
                      _0x562202[_0x1b27b4(0x29c)]
                    );
                !_0x44470c[_0x1b27b4(0x284) + _0x1b27b4(0x1a7)](
                  _0x8dc44c,
                  _0x550330
                ) && (_0x447df7 = !![]);
              }
            });
          });
          continue;
        case "4":
          this[_0x55a808(0xfc) + "es"]();
          continue;
        case "5":
          var _0x8dc44c, _0x550330;
          continue;
        case "6":
          if (
            _0x54dcc9[_0x55a808(0xe6)](
              _0x18f1d6,
              -(0x1 * 0xb53 + 0x1 * 0x149 + -0xc9b * 0x1)
            )
          ) {
            var _0x23d273 = _0x54dcc9[_0x55a808(0x213)][_0x55a808(0x275)]("|"),
              _0x3b218b = 0x2 * -0x967 + 0x6b * -0x35 + 0xda7 * 0x3;
            while (!![]) {
              switch (_0x23d273[_0x3b218b++]) {
                case "0":
                  moveCount--;
                  continue;
                case "1":
                  isGameOver &&
                    ((isGameOver = ![]),
                    _0x54dcc9[_0x55a808(0x38e)](restartTimer));
                  continue;
                case "2":
                  return;
                case "3":
                  if (
                    _0x54dcc9[_0x55a808(0x41c)](
                      this[_0x55a808(0x212)][_0x55a808(0x304)],
                      0x1 * 0xff7 + -0x17f * 0x10 + -0xd * -0x9d
                    )
                  ) {
                    var _0x2deba0 =
                        _0x54dcc9[_0x55a808(0x125)][_0x55a808(0x275)]("|"),
                      _0x1d8688 = 0x9e * -0x1 + 0x3 * -0x989 + 0x1d39;
                    while (!![]) {
                      switch (_0x2deba0[_0x1d8688++]) {
                        case "0":
                          var _0x27e972 =
                            this[_0x55a808(0x212)][_0x55a808(0x179)]();
                          continue;
                        case "1":
                          this[_0x55a808(0x18a)] = ![];
                          continue;
                        case "2":
                          this[_0x55a808(0x1fd)] = ![];
                          continue;
                        case "3":
                          for (var _0x3b1d17 in _0x27e972[_0x55a808(0x221)]) {
                            var _0x3d95b1 =
                                _0x54dcc9[_0x55a808(0x300)][_0x55a808(0x275)](
                                  "|"
                                ),
                              _0x553b2a = -0x265e + -0x16 * -0x31 + 0x2228;
                            while (!![]) {
                              switch (_0x3d95b1[_0x553b2a++]) {
                                case "0":
                                  this[_0x55a808(0x338)][_0x55a808(0x39a)][
                                    _0x550330["x"]
                                  ][_0x550330["y"]] = _0x550330;
                                  continue;
                                case "1":
                                  var _0x550330 = new Tile(
                                    { x: _0x261e41["x"], y: _0x261e41["y"] },
                                    _0x261e41[_0x55a808(0x249)]
                                  );
                                  continue;
                                case "2":
                                  _0x54dcc9[_0x55a808(0x41c)](
                                    _0x261e41[_0x55a808(0x249)],
                                    unlockedMaxTileValue
                                  ) &&
                                    (unlockedMaxTileValue =
                                      _0x261e41[_0x55a808(0x249)]);
                                  continue;
                                case "3":
                                  _0x550330[
                                    _0x55a808(0x2c7) + _0x55a808(0x2eb)
                                  ] = {
                                    x: _0x261e41[
                                      _0x55a808(0x2c7) + _0x55a808(0x2eb)
                                    ]["x"],
                                    y: _0x261e41[
                                      _0x55a808(0x2c7) + _0x55a808(0x2eb)
                                    ]["y"],
                                  };
                                  continue;
                                case "4":
                                  var _0x261e41 =
                                    _0x27e972[_0x55a808(0x221)][_0x3b1d17];
                                  continue;
                              }
                              break;
                            }
                          }
                          continue;
                        case "4":
                          this[_0x55a808(0x338)][_0x55a808(0x17a)]();
                          continue;
                        case "5":
                          this[_0x55a808(0x22d)][_0x55a808(0x29d) + "me"]();
                          continue;
                        case "6":
                          this[_0x55a808(0x317)] = _0x27e972[_0x55a808(0x317)];
                          continue;
                        case "7":
                          this[_0x55a808(0x3d1) + "g"] = ![];
                          continue;
                        case "8":
                          unlockedMaxTileValue = 0xdb9 + -0x1b05 + 0xf * 0xe3;
                          continue;
                        case "9":
                          this[_0x55a808(0x24a)]();
                          continue;
                      }
                      break;
                    }
                  }
                  continue;
                case "4":
                  _0x54dcc9[_0x55a808(0x38e)](updateMoveCount);
                  continue;
                case "5":
                  _0x54dcc9[_0x55a808(0x33d)](
                    this[_0x55a808(0x212)][_0x55a808(0x304)],
                    -0xc8c + 0xbeb + -0x2 * -0x51
                  ) &&
                    ((undoPermission = ![]),
                    (document[_0x55a808(0x1e4) + _0x55a808(0x35b)](
                      _0x54dcc9[_0x55a808(0x265)]
                    )[_0x55a808(0x238)][_0x55a808(0x1db)] =
                      _0x54dcc9[_0x55a808(0x384)]));
                  continue;
              }
              break;
            }
          } else
            (undoPermission = !![]),
              (document[_0x55a808(0x1e4) + _0x55a808(0x35b)](
                _0x54dcc9[_0x55a808(0x265)]
              )[_0x55a808(0x238)][_0x55a808(0x1db)] = "1");
          continue;
        case "7":
          var _0x2ac772 = {
            EsNKb: function (_0xd0d5bd, _0x18913d) {
              var _0x57a9be = _0x55a808;
              return _0x54dcc9[_0x57a9be(0x417)](_0xd0d5bd, _0x18913d);
            },
            orJCH: _0x54dcc9[_0x55a808(0x382)],
            bXBKw: function (_0x5a7193, _0x1ff5a2) {
              var _0x293b56 = _0x55a808;
              return _0x54dcc9[_0x293b56(0x110)](_0x5a7193, _0x1ff5a2);
            },
            UUsEI: function (_0x49876c, _0x404008) {
              var _0xc4041f = _0x55a808;
              return _0x54dcc9[_0xc4041f(0x3a8)](_0x49876c, _0x404008);
            },
          };
          continue;
        case "8":
          var _0x1887dc = -0x2114 + 0x1 * -0xbb0 + 0x2cc4;
          continue;
        case "9":
          if (this[_0x55a808(0x293) + _0x55a808(0x3f4)]()) return;
          continue;
        case "10":
          var _0x24f150 = { score: this[_0x55a808(0x317)], tiles: [] };
          continue;
        case "11":
          var _0x447df7 = ![];
          continue;
        case "12":
          var _0x35091f = this[_0x55a808(0x37c)](_0x18f1d6);
          continue;
        case "13":
          _0x54dcc9[_0x55a808(0x11c)](
            this[_0x55a808(0x212)][_0x55a808(0x304)],
            -0x1d13 + -0x1 * 0x156 + 0x2252
          ) && this[_0x55a808(0x212)][_0x55a808(0x18f)]();
          continue;
      }
      break;
    }
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x37c)] = function (_0x37dfca) {
    var _0x6c31fa = {
      0x0: { x: 0x0, y: -(-0x2515 + 0x1 * 0x242e + 0xe8) },
      0x1: { x: 0x1, y: 0x0 },
      0x2: { x: 0x0, y: 0x1 },
      0x3: { x: -(0x320 + -0x4 * 0x397 + 0xb3d), y: 0x0 },
    };
    return _0x6c31fa[_0x37dfca];
  }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x19a) + _0x1cf7ae(0x3b1)] =
    function (_0x589426) {
      var _0x115591 = _0x1cf7ae,
        _0x4dce41 = {
          zNlHo: _0x115591(0x204),
          yywvk: function (_0x4b9a48, _0x158e22) {
            return _0x4b9a48 === _0x158e22;
          },
          SJeKb: function (_0x29fe26, _0x5e1d0e) {
            return _0x29fe26 === _0x5e1d0e;
          },
          fIivT: function (_0x3756c8, _0xd168d2) {
            return _0x3756c8 < _0xd168d2;
          },
        },
        _0x282368 = _0x4dce41[_0x115591(0x3ee)][_0x115591(0x275)]("|"),
        _0x7e9e15 = 0x17e0 + -0x2 * 0x3e9 + -0x100e;
      while (!![]) {
        switch (_0x282368[_0x7e9e15++]) {
          case "0":
            return _0x559677;
          case "1":
            if (
              _0x4dce41[_0x115591(0x360)](
                _0x589426["x"],
                -0x149d + 0x1abf + -0x1 * 0x621
              )
            )
              _0x559677["x"] = _0x559677["x"][_0x115591(0x3a3)]();
            continue;
          case "2":
            if (
              _0x4dce41[_0x115591(0x2ed)](
                _0x589426["y"],
                0x1 * 0x8d3 + 0x17f2 + -0x1d2 * 0x12
              )
            )
              _0x559677["y"] = _0x559677["y"][_0x115591(0x3a3)]();
            continue;
          case "3":
            var _0x559677 = { x: [], y: [] };
            continue;
          case "4":
            for (
              var _0x51ddf6 = -0x65 * 0x2 + -0xe * -0x2e + -0x1ba;
              _0x4dce41[_0x115591(0x3df)](_0x51ddf6, this[_0x115591(0x1af)]);
              _0x51ddf6++
            ) {
              _0x559677["x"][_0x115591(0x1d0)](_0x51ddf6),
                _0x559677["y"][_0x115591(0x1d0)](_0x51ddf6);
            }
            continue;
        }
        break;
      }
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x122) + _0x1cf7ae(0x2d0)] =
    function (_0x33d7b7, _0x13819c) {
      var _0x31abf7 = _0x1cf7ae,
        _0xab1d1e = {
          zpciC: function (_0x493955, _0x27b42b) {
            return _0x493955 + _0x27b42b;
          },
        },
        _0x4b9fe9;
      do {
        (_0x4b9fe9 = _0x33d7b7),
          (_0x33d7b7 = {
            x: _0xab1d1e[_0x31abf7(0x208)](_0x4b9fe9["x"], _0x13819c["x"]),
            y: _0xab1d1e[_0x31abf7(0x208)](_0x4b9fe9["y"], _0x13819c["y"]),
          });
      } while (
        this[_0x31abf7(0x338)][_0x31abf7(0x37f) + "ds"](_0x33d7b7) &&
        this[_0x31abf7(0x338)][_0x31abf7(0x16a) + _0x31abf7(0x1c3)](_0x33d7b7)
      );
      return { farthest: _0x4b9fe9, next: _0x33d7b7 };
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x227) + _0x1cf7ae(0x2b5)] =
    function () {
      var _0x2d5cb7 = _0x1cf7ae;
      return (
        this[_0x2d5cb7(0x338)][_0x2d5cb7(0x2ca) + _0x2d5cb7(0x2b5)]() ||
        this[_0x2d5cb7(0x3af) + _0x2d5cb7(0x416)]()
      );
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x3af) + _0x1cf7ae(0x416)] =
    function () {
      var _0x1dad03 = _0x1cf7ae,
        _0xb4102 = {
          oxOwW: function (_0x31326b, _0x222e42) {
            return _0x31326b < _0x222e42;
          },
          BVwEn: function (_0x59b802, _0xb95abe) {
            return _0x59b802 + _0xb95abe;
          },
          sQPUO: function (_0x1b3eee, _0x42cbd9) {
            return _0x1b3eee + _0x42cbd9;
          },
          kbGPz: function (_0x45603f, _0x47a83f) {
            return _0x45603f === _0x47a83f;
          },
        },
        _0x252bab = this,
        _0x44dfb2;
      for (
        var _0x2cf0c9 = -0x75e * 0x1 + -0x5 * 0x670 + 0x278e;
        _0xb4102[_0x1dad03(0x294)](_0x2cf0c9, this[_0x1dad03(0x1af)]);
        _0x2cf0c9++
      ) {
        for (
          var _0x41702b = 0x9aa * 0x2 + -0x4cf * -0x1 + 0x1 * -0x1823;
          _0xb4102[_0x1dad03(0x294)](_0x41702b, this[_0x1dad03(0x1af)]);
          _0x41702b++
        ) {
          _0x44dfb2 = this[_0x1dad03(0x338)][_0x1dad03(0x111) + "t"]({
            x: _0x2cf0c9,
            y: _0x41702b,
          });
          if (_0x44dfb2)
            for (
              var _0x14ac24 = -0x1 * 0x13e5 + 0x56e + 0xa1 * 0x17;
              _0xb4102[_0x1dad03(0x294)](_0x14ac24, -0x5bc + 0x1bfe + -0x163e);
              _0x14ac24++
            ) {
              var _0x549546 = _0x252bab[_0x1dad03(0x37c)](_0x14ac24),
                _0x215ebf = {
                  x: _0xb4102[_0x1dad03(0x406)](_0x2cf0c9, _0x549546["x"]),
                  y: _0xb4102[_0x1dad03(0x15b)](_0x41702b, _0x549546["y"]),
                },
                _0x258e12 =
                  _0x252bab[_0x1dad03(0x338)][_0x1dad03(0x111) + "t"](
                    _0x215ebf
                  );
              if (
                _0x258e12 &&
                _0xb4102[_0x1dad03(0x3c3)](
                  _0x258e12[_0x1dad03(0x249)],
                  _0x44dfb2[_0x1dad03(0x249)]
                )
              )
                return !![];
            }
        }
      }
      return ![];
    }),
  (GameManager[_0x1cf7ae(0x33c)][_0x1cf7ae(0x284) + _0x1cf7ae(0x1a7)] =
    function (_0x350b1c, _0xa1da14) {
      var _0x3cc8e4 = _0x1cf7ae,
        _0x3c0dc3 = {
          IQvuH: function (_0x1fa967, _0x395b59) {
            return _0x1fa967 === _0x395b59;
          },
        };
      return (
        _0x3c0dc3[_0x3cc8e4(0x322)](_0x350b1c["x"], _0xa1da14["x"]) &&
        _0x3c0dc3[_0x3cc8e4(0x322)](_0x350b1c["y"], _0xa1da14["y"])
      );
    }),
  window[_0x1cf7ae(0x34c) + _0x1cf7ae(0x1dd) + "e"](function () {
    var _0x31044c = _0x1cf7ae,
      _0x57a02c = {
        dEbSJ: function (_0x15b6a7, _0x3a4721) {
          return _0x15b6a7 == _0x3a4721;
        },
        ixadW: function (_0x19665a, _0x2f6c5d) {
          return _0x19665a - _0x2f6c5d;
        },
        xLnnJ: function (_0x4782b7, _0xdc1e7f) {
          return _0x4782b7 * _0xdc1e7f;
        },
        hrpIe: function (_0x42058f, _0x3bb311) {
          return _0x42058f(_0x3bb311);
        },
        SHIGQ: function (_0x1793b1, _0x3e9b6d) {
          return _0x1793b1(_0x3e9b6d);
        },
      },
      _0x94ff27 = window[_0x31044c(0x1e6)][_0x31044c(0x216)];
    if (
      _0x57a02c[_0x31044c(0x1f3)](
        _0x57a02c[_0x31044c(0x1d6)](
          _0x57a02c[_0x31044c(0x1bc)](
            _0x57a02c[_0x31044c(0x3a6)](
              parseInt,
              _0x94ff27[0x1 * -0x11ed + 0x9 * -0x93 + 0x1c7 * 0xd]
            ),
            _0x57a02c[_0x31044c(0x3a6)](
              parseInt,
              _0x94ff27[-0x111 * -0x22 + 0x1a98 + 0x1 * -0x3ed4]
            )
          ),
          _0x57a02c[_0x31044c(0x2be)](
            parseInt,
            _0x94ff27[0x679 * -0x6 + 0x2016 + -0x1 * -0x6c5]
          )
        ),
        -0x259a + 0x6f * -0x33 + 0x3bc3 * 0x1
      )
    )
      game_manager = new GameManager(
        gameSize,
        KeyboardInputManager,
        HTMLActuator,
        LocalStorageManager
      );
  });
function handle_undo() {
  var _0x4e4692 = _0x1cf7ae,
    _0x347556 = {
      ghEFf: function (_0x435d06, _0x249264) {
        return _0x435d06(_0x249264);
      },
      bUult: _0x4e4692(0x105) + _0x4e4692(0x1ce),
      egqln: function (_0x300214, _0x357ea7) {
        return _0x300214(_0x357ea7);
      },
      wTTEE: _0x4e4692(0x2ef),
    };
  undoPermission
    ? (game_manager[_0x4e4692(0x3f5)](-(-0x9 * -0x83 + 0xd29 + -0x11c3)),
      _0x347556[_0x4e4692(0x124)](playSoundTrack, _0x347556[_0x4e4692(0x135)]))
    : _0x347556[_0x4e4692(0x321)](playSoundTrack, _0x347556[_0x4e4692(0x2ab)]);
}
document[_0x1cf7ae(0x1e4) + _0x1cf7ae(0x35b)](_0x1cf7ae(0x295))[
  _0x1cf7ae(0xf5) + _0x1cf7ae(0x188)
](_0x1cf7ae(0x205), function () {
  var _0x25a882 = _0x1cf7ae,
    _0x1ab78d = {
      SavRU: function (_0x5c0234) {
        return _0x5c0234();
      },
    };
  _0x1ab78d[_0x25a882(0x3cf)](handle_undo);
});
if (gameSize == 0xa53 + -0x1e * -0x135 + -0x2e85 * 0x1)
  var moveCounterKey = _0x1cf7ae(0x1d9);
else var moveCounterKey = gameSize + "_" + _0x1cf7ae(0x1d9);
getMoveCount();
function getMoveCount() {
  var _0x25b217 = _0x1cf7ae,
    _0x3df374 = {
      rkKiN: function (_0x4b4110, _0x3a43fe) {
        return _0x4b4110 !== _0x3a43fe;
      },
      HkMAj: _0x25b217(0x1eb),
      tYqDO: function (_0x5e857e, _0x54ef9d) {
        return _0x5e857e === _0x54ef9d;
      },
      sqVYX: function (_0x24435f, _0xeb4709) {
        return _0x24435f(_0xeb4709);
      },
      vukjQ: function (_0x1e021c) {
        return _0x1e021c();
      },
    };
  _0x3df374[_0x25b217(0x2c1)](typeof Storage, _0x3df374[_0x25b217(0x235)]) &&
    !_0x3df374[_0x25b217(0x12d)](
      localStorage[_0x25b217(0x119)](moveCounterKey),
      null
    ) &&
    (moveCount = _0x3df374[_0x25b217(0x136)](
      Number,
      localStorage[_0x25b217(0x119)](moveCounterKey)
    )),
    _0x3df374[_0x25b217(0x1a6)](displayMoveCount);
}
var lllcount = -0x1b61 + -0x1d58 * 0x1 + 0x38b9 * 0x1;
function updateMoveCount() {
  var _0x4f20c5 = _0x1cf7ae,
    _0x16c05f = {
      nlAij: function (_0x376685) {
        return _0x376685();
      },
      hIkex: function (_0x1e8701, _0x39ddd9) {
        return _0x1e8701 > _0x39ddd9;
      },
      bURdP: function (_0x4b21ea, _0x50c1a5) {
        return _0x4b21ea !== _0x50c1a5;
      },
      kMGxr: _0x4f20c5(0x1eb),
      zdqun: function (_0x3012c1, _0x28a105) {
        return _0x3012c1 == _0x28a105;
      },
      wMFEm: function (_0x103efc) {
        return _0x103efc();
      },
    };
  _0x16c05f[_0x4f20c5(0x3ea)](displayMoveCount),
    _0x16c05f[_0x4f20c5(0x197)](moveCount, -0x16df + -0x2455 + 0x3b34) &&
      _0x16c05f[_0x4f20c5(0x288)](
        typeof Storage,
        _0x16c05f[_0x4f20c5(0x3f7)]
      ) &&
      localStorage[_0x4f20c5(0x253)](moveCounterKey, moveCount),
    lllcount++,
    _0x16c05f[_0x4f20c5(0x29e)](lllcount, -0x832 + 0xfcc + -0x795) &&
      _0x16c05f[_0x4f20c5(0x1ca)](triggerlll);
}
function displayMoveCount() {
  var _0x1e99da = _0x1cf7ae,
    _0x5be055 = { ttQWo: _0x1e99da(0x1d9) };
  document[_0x1e99da(0x1e4) + _0x1e99da(0x35b)](_0x5be055[_0x1e99da(0x242)])[
    _0x1e99da(0x37a)
  ] = moveCount;
}
if (gameSize == 0x11a8 + 0x1 * -0x205f + 0xebb * 0x1)
  var timerKey = _0x1cf7ae(0x36e);
else var timerKey = gameSize + "_" + _0x1cf7ae(0x36e);
var second = 0x2270 * 0x1 + 0x4d5 * -0x3 + -0x1 * 0x13f1,
  minute = 0x1 * -0x1fd + -0x1c2 + -0x1 * -0x3bf,
  hour = -0x1b60 + 0x285 + -0x3f * -0x65,
  refreshIntervalId,
  timerText = "";
getTimer();
function startTimer() {
  var _0x57144a = _0x1cf7ae,
    _0x3abbee = {
      SPcjO: _0x57144a(0x332),
      CwqXe: function (_0x2d36a2) {
        return _0x2d36a2();
      },
      SMWvQ: function (_0x29ed10, _0x88d98a) {
        return _0x29ed10 == _0x88d98a;
      },
      EdYkK: function (_0x23caa5) {
        return _0x23caa5();
      },
      ywmHG: function (_0x1a3cf6, _0x3f78cb) {
        return _0x1a3cf6 == _0x3f78cb;
      },
      jFksI: function (_0x103386, _0x21d929, _0x581fd3) {
        return _0x103386(_0x21d929, _0x581fd3);
      },
    };
  refreshIntervalId = _0x3abbee[_0x57144a(0x352)](
    setInterval,
    function () {
      var _0x1f13f1 = _0x57144a,
        _0x4b6c71 = _0x3abbee[_0x1f13f1(0x40e)][_0x1f13f1(0x275)]("|"),
        _0x4c4029 = -0x1701 + 0x1fce * 0x1 + -0x8cd;
      while (!![]) {
        switch (_0x4b6c71[_0x4c4029++]) {
          case "0":
            _0x3abbee[_0x1f13f1(0x329)](createTimerText);
            continue;
          case "1":
            _0x3abbee[_0x1f13f1(0x316)](
              minute,
              0xc4 * 0x2b + -0x1 * -0x24e5 + -0x17b * 0x2f
            ) && (hour++, (minute = 0x83 + -0x233 * -0xd + -0x1d1a));
            continue;
          case "2":
            _0x3abbee[_0x1f13f1(0x3b0)](updateTimer);
            continue;
          case "3":
            _0x3abbee[_0x1f13f1(0x166)](
              second,
              0x280 + 0x1efd + 0x2141 * -0x1
            ) && (minute++, (second = 0x2438 + 0x8 * -0xa3 + 0x60 * -0x53));
            continue;
          case "4":
            second++;
            continue;
        }
        break;
      }
    },
    -0x224f * 0x1 + 0x5a8 * 0x1 + -0x1 * -0x208f
  );
}
function stopTimer() {
  var _0x2dde37 = _0x1cf7ae,
    _0x1d8b69 = {
      StESu: function (_0x56928b, _0x326199) {
        return _0x56928b(_0x326199);
      },
    };
  _0x1d8b69[_0x2dde37(0x350)](clearInterval, refreshIntervalId);
}
function resetTimer() {
  var _0x42e994 = _0x1cf7ae,
    _0x12158c = {
      oKKyr: _0x42e994(0xf7) + "4",
      uUbTI: function (_0xc8b4e5, _0x4e2a7d) {
        return _0xc8b4e5(_0x4e2a7d);
      },
      MDybg: function (_0x4bcacd) {
        return _0x4bcacd();
      },
    },
    _0x518b7f = _0x12158c[_0x42e994(0x280)][_0x42e994(0x275)]("|"),
    _0x371a47 = -0x1e42 + 0x1 * 0x1e76 + -0xd * 0x4;
  while (!![]) {
    switch (_0x518b7f[_0x371a47++]) {
      case "0":
        second = 0x22 * -0x92 + -0x19bf + 0x5 * 0x907;
        continue;
      case "1":
        timerText = "";
        continue;
      case "2":
        _0x12158c[_0x42e994(0x1a9)](clearInterval, refreshIntervalId);
        continue;
      case "3":
        minute = 0x1 * 0xd01 + 0x1cc6 * -0x1 + -0x1 * -0xfc5;
        continue;
      case "4":
        _0x12158c[_0x42e994(0x272)](updateTimer);
        continue;
      case "5":
        hour = -0x2 * -0x335 + -0x15b5 + 0x87 * 0x1d;
        continue;
    }
    break;
  }
}
function createTimerText() {
  var _0x2bc141 = _0x1cf7ae,
    _0x1db0f0 = {
      uYGGC: function (_0x1ae3d8, _0x64e27f) {
        return _0x1ae3d8 > _0x64e27f;
      },
      yrphL: function (_0x1f6b6e, _0x100f43) {
        return _0x1f6b6e < _0x100f43;
      },
      NSAmr: function (_0x48b74b, _0x29f3d5) {
        return _0x48b74b + _0x29f3d5;
      },
      maKkJ: function (_0x24e063, _0x4cd5c4) {
        return _0x24e063 + _0x4cd5c4;
      },
      AvlZk: function (_0xbeba59, _0x581dc3) {
        return _0xbeba59 + _0x581dc3;
      },
      adMEY: function (_0x34d876, _0xb7f89e) {
        return _0x34d876 + _0xb7f89e;
      },
      dFFpd: function (_0x1ab58b, _0x3eef18) {
        return _0x1ab58b + _0x3eef18;
      },
    };
  (timerText = ""),
    _0x1db0f0[_0x2bc141(0x346)](hour, 0x98f + 0xa9 + 0x147 * -0x8) &&
      (_0x1db0f0[_0x2bc141(0x237)](hour, 0x5 * 0x3af + 0xfbc + 0xd5 * -0x29)
        ? (timerText += _0x1db0f0[_0x2bc141(0x25c)](
            _0x1db0f0[_0x2bc141(0x3cc)]("0", hour),
            ":"
          ))
        : (timerText += _0x1db0f0[_0x2bc141(0x3cc)](hour, ":"))),
    (_0x1db0f0[_0x2bc141(0x346)](minute, -0x1217 * 0x1 + -0x421 + 0x1638) ||
      _0x1db0f0[_0x2bc141(0x346)](
        hour,
        0x6c4 * 0x3 + -0x3 * -0xa96 + 0x3 * -0x115a
      )) &&
      (_0x1db0f0[_0x2bc141(0x237)](minute, -0x2702 + 0x1 * -0x99b + 0x30a7)
        ? (timerText += _0x1db0f0[_0x2bc141(0x364)](
            _0x1db0f0[_0x2bc141(0x32a)]("0", minute),
            ":"
          ))
        : (timerText += _0x1db0f0[_0x2bc141(0x1b2)](minute, ":"))),
    _0x1db0f0[_0x2bc141(0x237)](second, 0x1f72 + -0x25 * -0xd3 + 0xd * -0x4c3)
      ? (timerText += _0x1db0f0[_0x2bc141(0x1b2)]("0", second))
      : (timerText += second);
}
function updateTimer() {
  var _0x49a36a = _0x1cf7ae,
    _0x32ad76 = {
      ppJqs: _0x49a36a(0x231),
      WZUJR: function (_0x293d81, _0xa515f8) {
        return _0x293d81 > _0xa515f8;
      },
      zXwvg: function (_0x345ae8, _0x5d08db) {
        return _0x345ae8 !== _0x5d08db;
      },
      nSqWV: _0x49a36a(0x1eb),
      yjlCc: function (_0x2a3ec1, _0xb8924f) {
        return _0x2a3ec1 + _0xb8924f;
      },
      sLvrX: function (_0x5e4460, _0x564fa0) {
        return _0x5e4460 + _0x564fa0;
      },
    };
  (document[_0x49a36a(0x1e4) + _0x49a36a(0x35b)](_0x32ad76[_0x49a36a(0x1e3)])[
    _0x49a36a(0x37a)
  ] = timerText),
    _0x32ad76[_0x49a36a(0x1b1)](moveCount, -0x8a9 * -0x3 + -0x19f9 + -0x2) &&
      _0x32ad76[_0x49a36a(0x2e7)](
        typeof Storage,
        _0x32ad76[_0x49a36a(0x2d3)]
      ) &&
      localStorage[_0x49a36a(0x253)](
        timerKey,
        _0x32ad76[_0x49a36a(0x33b)](
          _0x32ad76[_0x49a36a(0x33b)](
            _0x32ad76[_0x49a36a(0x33b)](
              _0x32ad76[_0x49a36a(0x181)](hour, ","),
              minute
            ),
            ","
          ),
          second
        )
      );
}
function getTimer() {
  var _0x27f2fd = _0x1cf7ae,
    _0x59fe1f = {
      OwASF: function (_0x1f7ac7, _0x20360e) {
        return _0x1f7ac7 !== _0x20360e;
      },
      FwZJf: _0x27f2fd(0x1eb),
      vGMQM: function (_0x267f04, _0x4cfd6e) {
        return _0x267f04 === _0x4cfd6e;
      },
      GslNC: _0x27f2fd(0x23b),
      koQUW: function (_0x4323f2, _0x339c9f) {
        return _0x4323f2(_0x339c9f);
      },
      lOnYi: function (_0x590b33, _0x35799c) {
        return _0x590b33(_0x35799c);
      },
      qvmKH: function (_0x56cb55, _0x3b76a4) {
        return _0x56cb55(_0x3b76a4);
      },
      WgrOg: function (_0x401794) {
        return _0x401794();
      },
    };
  if (
    _0x59fe1f[_0x27f2fd(0x22e)](typeof Storage, _0x59fe1f[_0x27f2fd(0x311)])
  ) {
    if (
      !_0x59fe1f[_0x27f2fd(0x1d8)](
        localStorage[_0x27f2fd(0x119)](timerKey),
        null
      )
    ) {
      var _0x46cbc6 = _0x59fe1f[_0x27f2fd(0x310)][_0x27f2fd(0x275)]("|"),
        _0x259192 = 0x89 * -0x33 + 0x43c + 0x170f;
      while (!![]) {
        switch (_0x46cbc6[_0x259192++]) {
          case "0":
            hour = _0x59fe1f[_0x27f2fd(0x3d0)](
              Number,
              _0x1a18b2[0x242f + 0x8 * -0x225 + -0x1307]
            );
            continue;
          case "1":
            var _0x2b140d = localStorage[_0x27f2fd(0x119)](timerKey);
            continue;
          case "2":
            minute = _0x59fe1f[_0x27f2fd(0x3ba)](
              Number,
              _0x1a18b2[0x1 * 0x12aa + -0x2e8 + -0x6d * 0x25]
            );
            continue;
          case "3":
            second = _0x59fe1f[_0x27f2fd(0x3aa)](
              Number,
              _0x1a18b2[0xa78 + -0x296 + -0x7e0]
            );
            continue;
          case "4":
            var _0x1a18b2 = _0x2b140d[_0x27f2fd(0x275)](",");
            continue;
        }
        break;
      }
    }
  }
  _0x59fe1f[_0x27f2fd(0xe9)](startTimer);
}
function restartTimer() {
  var _0xdeb23d = _0x1cf7ae,
    _0xf78d8 = {
      kXvIK: function (_0x147911) {
        return _0x147911();
      },
    };
  _0xf78d8[_0xdeb23d(0x342)](startTimer);
}
function triggerlll() {
  var _0x25565d = _0x1cf7ae,
    _0x2cec74 = {
      TYDLw: function (_0x454ee8) {
        return _0x454ee8();
      },
      Ortdf: function (_0x506a1b) {
        return _0x506a1b();
      },
    };
  _0x2cec74[_0x25565d(0x335)](checklll) && _0x2cec74[_0x25565d(0xe4)](lll);
}
function checklll() {
  var _0x233a30 = _0x1cf7ae,
    _0x21da0d = {
      EbwCm: function (_0x80741d, _0x2cae8d) {
        return _0x80741d !== _0x2cae8d;
      },
    };
  return _0x21da0d[_0x233a30(0xed)](top, self) ? !![] : ![];
}
function lll() {
  var _0x1f5aad = _0x1cf7ae,
    _0x4d43f9 = {
      cKwjt: _0x1f5aad(0x2b3) + _0x1f5aad(0x2e3),
      oKfsT: _0x1f5aad(0x277),
      QAqXk: function (_0x46e9ea, _0xaaa406) {
        return _0x46e9ea + _0xaaa406;
      },
      ECkhf: function (_0x3ec188, _0x4ee671) {
        return _0x3ec188 + _0x4ee671;
      },
      OtGzX: _0x1f5aad(0x12c),
      GWwwR:
        _0x1f5aad(0x2c6) +
        _0x1f5aad(0x3ae) +
        _0x1f5aad(0x244) +
        _0x1f5aad(0x15c) +
        _0x1f5aad(0x1be) +
        _0x1f5aad(0x158) +
        _0x1f5aad(0x1ad) +
        _0x1f5aad(0x190) +
        _0x1f5aad(0x41d) +
        _0x1f5aad(0x361) +
        _0x1f5aad(0x24b) +
        _0x1f5aad(0x10d) +
        _0x1f5aad(0x34e) +
        _0x1f5aad(0x386) +
        _0x1f5aad(0x1f5) +
        _0x1f5aad(0x23e) +
        _0x1f5aad(0x261) +
        _0x1f5aad(0x333) +
        _0x1f5aad(0x18e) +
        _0x1f5aad(0x26a) +
        _0x1f5aad(0x187) +
        _0x1f5aad(0x2d7) +
        _0x1f5aad(0x3ca) +
        _0x1f5aad(0x2bf) +
        _0x1f5aad(0x23c) +
        _0x1f5aad(0x131),
      NQhpk: _0x1f5aad(0x2fe) + _0x1f5aad(0x217),
      KSqmS: function (_0xda72fa, _0xa9c2a6) {
        return _0xda72fa !== _0xa9c2a6;
      },
      lNvza: _0x1f5aad(0x1eb),
      ZyKRu: function (_0x2f78d4, _0x55511e, _0x1d9bce) {
        return _0x2f78d4(_0x55511e, _0x1d9bce);
      },
    },
    _0x282e92 = _0x4d43f9[_0x1f5aad(0x157)];
  _0x4d43f9[_0x1f5aad(0x3ff)](typeof gameUrl, _0x4d43f9[_0x1f5aad(0x3d7)]) &&
    (_0x282e92 = gameUrl),
    _0x4d43f9[_0x1f5aad(0x296)](
      setTimeout,
      function () {
        var _0x42bb11 = _0x1f5aad;
        (document[_0x42bb11(0x1e4) + _0x42bb11(0x35b)](
          _0x4d43f9[_0x42bb11(0x26d)]
        )[_0x42bb11(0x238)][_0x42bb11(0xfa)] = "0"),
          (document[_0x42bb11(0x1e4) + _0x42bb11(0x35b)](
            _0x4d43f9[_0x42bb11(0x26d)]
          )[_0x42bb11(0x238)][_0x42bb11(0x279)] = "0"),
          (document[_0x42bb11(0x1e4) + _0x42bb11(0x35b)](
            _0x4d43f9[_0x42bb11(0x26d)]
          )[_0x42bb11(0x238)][_0x42bb11(0x16c) + _0x42bb11(0x3d8)] =
            _0x4d43f9[_0x42bb11(0x252)]),
          (document[_0x42bb11(0x1e4) + _0x42bb11(0x35b)](
            _0x4d43f9[_0x42bb11(0x26d)]
          )[_0x42bb11(0x37a)] = _0x4d43f9[_0x42bb11(0x2e0)](
            _0x4d43f9[_0x42bb11(0x2f5)](_0x4d43f9[_0x42bb11(0x318)], _0x282e92),
            _0x4d43f9[_0x42bb11(0x101)]
          ));
      },
      0x24ca + 0x4 * -0x61c + -0x872
    );
}
