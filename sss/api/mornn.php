<?php

function comments(): string
{
    $row = 0;
    $html = '';
    if (($handle = fopen("mornn.csv", "r")) !== FALSE) :
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) :
            if (++$row === 1) {
                continue;
            }

            $html .= '<div class="comment">';
            ob_start(); ?>
            <h2><?php echo $data[3] ?></h2>
            <p><a target="_blank" href="<?php echo $data[7] ?>">Link to comment</a></p>
            <div class="comment-body">
                <?php echo $data[5] ?>
            </div>
            <?php
            $html .= ob_get_clean();
            $html .= '</div>';
        endwhile;
        fclose($handle);
    endif;
    return $html;
} ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./normalize.css">
    <style type="text/css">

        .container {
            max-width: 720px;
            margin: auto;
            padding: 15px;
        }

        .comment {
            margin-bottom: 50px;
        }

        .spoiler-inner {
            display: block !important;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<div class="container">
    <?php echo comments() ?>
</div>
</body>
</html>