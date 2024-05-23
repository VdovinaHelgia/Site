<?php
function testButtonClick($buttonId, $expectedUrl) {
    $_GET[$buttonId] = 'click';
    ob_start();
    include 'index.html'; 
    $output = ob_get_clean();

    if (strpos($output, $expectedUrl) !== false) {
        echo "Тест пройден: страница $expectedUrl была загружена.";
    } else {
        echo "Тест не пройден: страница $expectedUrl не была загружена.";
    }
}




testButtonClick('button_main', './main.html');
?>

