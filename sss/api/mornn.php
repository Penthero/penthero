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
    <style>
        .container {
            max-width: 720px;
            margin: auto;
        }

        .comment {
            margin-bottom: 50px;
        }
    </style>
</head>
<body>
<div class="container">
    <?php echo comments() ?>
</div>
</body>
</html>