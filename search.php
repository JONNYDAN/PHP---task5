<?php
include("includes/inc/config.php");

$query = $_GET['query'] ?? '';
$html = '';

if ($query !== '') {
    $stmt = $pdo->prepare("SELECT * FROM games WHERE name_game LIKE :query ORDER BY datetime_game DESC");
    $stmt->execute(['query' => '%' . $query . '%']);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($results) {
        $html .= '<div class="container-fluid"><div class="game-blocks row no-gutters">';
        foreach ($results as $row) {
            $target_dir = "uploads/{$row['id_game']}/";
            $target_file = $target_dir . $row['thumbnail_game'];
            $html .= '
            <div class="col-lg-3 col-md-3 col-sm-3 col-xsm-6">
                <div class="search-result-single">
                    <div class="game-block">
                        <a href="game/' . $row['id_game'] . '/4" title="">
                            <div class="box" id="box_' . $row['id_game'] . '">
                                <img src="' . $target_file . '" accept="image/*" height="200px" style="object-fit: cover;">
                                <p class="game-name">' . $row['name_game'] . '</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>';
        }
        $html .= '</div></div>';
    } else {
        $html = '<p>No results found</p>';
    }
}

echo $html;
