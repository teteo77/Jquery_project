<?php

$likeFile = 'like_count_';

// 좋아요 버튼에 대한 ID 가져오기
$buttonId = isset($_GET['id']) ? $_GET['id'] : 1;

$likeFile .= $buttonId . '.txt';

// 파일에서 현재 좋아요 수 읽기
$currentLikes = (int)file_get_contents($likeFile);

// 좋아요 수 증가
$currentLikes++;

// 새로운 좋아요 수를 파일에 쓰기
file_put_contents($likeFile, $currentLikes);

// 현재 좋아요 수 반환
echo $currentLikes;

?>
