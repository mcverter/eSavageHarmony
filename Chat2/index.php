<?php
session_start();
error_log("hllo error log");
if (!isset($_SESSION['userid'])):
    ?>

    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">

        <title>Chat2</title>

        <link rel="stylesheet" type="text/css" href="main.css" />

        <script src="../jquery.js"></script>
        <script src="check.js"></script>
    </head>

    <body>

    <div id="page-wrap">

        <div id="header">
            <h1><a href="/examples/Chat2/">Chat v2</a></h1>
        </div>

        <div id="section">
            <form method="post" action="jumpin.php">
                <label>Desired Username:</label>
                <div>
                    <input type="text" id="userid" name="userid" />
                    <input type="submit" value="Check" id="jumpin" />
                </div>
            </form>
        </div>

        <div id="status">
            <?php if (isset($_GET['error'])): ?>
                <!-- Display error when returning with error URL param? -->
            <?php endif;?>
        </div>

    </div>

    </body>

    </html>

<?php
else:
    require_once("chatrooms.php");
endif;
?>