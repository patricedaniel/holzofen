<?php

$content = file_get_contents("https://api.holzofenpizzawagen.ch/pizza/items/home");
$decoded_json = json_decode($content, false);
 
$icon1 = $decoded_json->data[0]->icon1;
$content1 = $decoded_json->data[0]->content1;
$icon2 = $decoded_json->data[0]->icon2;
$content2 = $decoded_json->data[0]->content2;
$icon3 = $decoded_json->data[0]->icon3;
$content3 = $decoded_json->data[0]->content3;

?>

<!DOCTYPE html> 
<html lang="de-CH">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8">
        <meta name="description" content="Planen Sie einen Anlass in der Region Solothurn? Unser einzigartiger Holzofenpizzawagen ist genau das richtige für Sie. Knusprige Pizzas sorgen immer für gute Laune.">
        <meta name="keywords" content="Pizza, Holzofen, Catering, Biberist, Solothurn, Holzofenpizza, Pizzawagen, Pizzamobil, Anlass, Firmenfest, Vereinsfest, Geburtstag, Hochzeit, Party">
        <!-- Stylesheets -->
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!-- Font -->
        <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <!-- Favicon -->
        <link rel="shortcut icon" href="/img/favicon/favicon.ico"> 
        <link rel="apple-touch-icon" href="/img/favicon/apple-icon- 144x144.png">
        <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg">
        <link rel="icon" type="image/png" href="/img/favicon/favicon.png">
        <!-- Scripts -->
        <!--<script src=“rsrc/scripts/meinScript.js“></script> -->
        
        <title>Holzofenpizzawagen</title>

    </head>
    <body>
        <!-- Header and Navigation bar -->
        <header class="header startpage" style="background-image: url('https://api.holzofenpizzawagen.ch/pizza/assets/header_holzofenpizza_pizzaiolo_2.jpg');"> 
            <!-- Logo -->
            <a href="index.php" class="logo startpage"><img src="https://api.holzofenpizzawagen.ch/pizza/assets/holzofenpizzawagen-signet-lightdough_neg.svg" alt="Logo - Abstrakte Zeichnung des Pizzaofens" title="Logo Holzofenpizza Biberist"><br>Holzofenpizza<br><p class="claim">garantiert gute Laune</p></a>
            <a class="header-cta-btn" href="https://anfrage.holzofenpizzawagen.ch"><button class="material primary">JETZT ANFRAGEN</button></a>
        </header> 
        <!-- Toolbar -->
        <div class="toolbar startpage"> 
            <!-- Logo for mobile integration in Toolbar ((no used on startpage))
            <a href="index.php" class="logomobile"><img src="https://api.holzofenpizzawagen.ch/pizza/assets/holzofenpizzawagen-thumb-lightdough.svg" alt="Logo - Abstrakte Zeichnung des Pizzaofens" title="Logo Holzofenpizza Biberist">Holzofenpizza</a>-->
            <!-- <hr class="divider headerdivider" />-->
            <!-- Hamburger icon -->
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
            <!-- nav -->
            <nav class="nav">
                <ul class="menu">
                    <li><a href="index.php" style="text-decoration: underline;">Home</a></li>
                    <li class="naveldivider">|</li>
                    <li><a href="ueberuns.php">Über uns</a> </li>
                    <li class="naveldivider">|</li>
                    <li><a href="https://anfrage.holzofenpizzawagen.ch">Reservierungsanfrage</a></li>
                    <li class="naveldivider">|</li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                </ul>
            </nav>
        </div>
        
        
        
        <!-- Main content -->
        <main class="onecolumn">
             <div class="divider-with-icon">
                <div class="iconwrapper">
                    <img src=<?php echo $icon1;?> alt="Icon 2 Luftballone" title="Icon Feiern">
                </div>
                <div class="icondividerwrapper">
                    <hr class="divider" />
                </div> 
            </div>
            <?php echo $content1;?>
            
            <div class="divider-with-icon">
                <div class="iconwrapper">
                    <img src=<?php echo $icon2;?> alt="Icon Pizza" title="Icon Pizza">
                </div>
                <div class="icondividerwrapper">
                    <hr class="divider" />
                </div> 
            </div>
            <?php echo $content2;?>
            
            <div class="divider-with-icon">
                <div class="iconwrapper">
                    <img src=<?php echo $icon3;?> alt="Icon Kalender" title="Icon Reservierungsanfrage">
                </div>
                <div class="icondividerwrapper">
                    <hr class="divider" />
                </div> 
            </div>
            <?php echo $content3;?>
            <br>
            <a href="https://anfrage.holzofenpizzawagen.ch"><button class="material accent cta">Jetzt anfragen</button></a>
        </main>
        
        <hr class="divider footerdivider" />
        <footer>
            holzofenpizzawagen.ch<br />
            Büttiker & Sutter&ensp;|&ensp;4562 Biberist<br />
            info@holzofenpizzawagen.ch<br /><br />
            <a href="ueberuns.php">Über uns</a>
            &ensp;|&ensp;<a href="impressum.html">Impressum</a>
            &ensp;|&ensp;<a href="datenschutz.php">Datenschutzerklärung</a>
            <svg class="footerimage" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.52 674.6"><defs><style>.b{fill:#E6D2B4;}</style></defs><path class="b" d="M617.18,365.96c-47.31-45.46-96.97-89.02-148-130.25-1.56-1.28-3.7-1.95-5.83-1.89-22.95-.24-45.78,1.19-68.61,3.06-68.35,6.49-136.49,15.03-204.23,26.42-1.8,.31-3.16,1.9-3.14,3.79,.03,2.09,1.75,3.77,3.84,3.74,22.94-.3,45.82-1.24,68.68-2.31,57.09-3.16,114.26-6.12,170.97-13.67,10.26-1.42,20.5-3.03,30.71-5.02,10.97,10.58,22.14,20.93,33.4,31.18,31.27,28.32,63.33,56.55,96.12,83.33-46.36,1.32-92.34,8.4-138,16.24-51.63,9.06-103.19,19.07-153.81,32.93-4.24-6.42-8.69-12.66-13.22-18.83-14.59-19.82-30.11-38.94-46.12-57.58-21.57-24.95-43.98-49.35-69.73-70.1-2.26-1.77-5.49-1.96-7.97-.24-14.45,9.95-28.39,20.53-42.16,31.31-27.51,21.61-54.21,44.2-80.33,67.47-13.02,11.69-25.91,23.54-38.35,35.93-.83,.84-1.37,1.99-1.4,3.26-.09,2.75,2.23,4.96,4.95,4.88,6.3,.15,12.55-.05,18.8-.34,18.68-.91,37.27-3,55.77-5.68,24.7-3.61,49.27-7.79,73.5-14.04,4.75-1.28,3.96-8.39-1.12-8.43-37.45,.71-74.67,4.88-111.57,11.1-4.61,.84-9.22,1.72-13.8,2.67,48.51-35.08,95.04-72.93,138.59-114.03,8.08,11.88,17.02,23.04,26.19,34.08,32.1,37.3,66.67,72.66,104.51,104.2,.72,.57,1.63,.91,2.62,.9,13.34-.15,26.63-.71,39.89-1.44,42.99-2.38,85.89-6.61,128.62-11.68,49.32-6.01,98.68-13.21,146.34-27.79,6.14-1.34,8.29-8.83,3.92-13.18h-.03Z"/><path class="b" d="M269.2,173.79c3.8,3.1,8.87-1.71,6.02-5.66l-.1-.14-4.08-5.54c-10.62-14.73-20.89-30.19-27.6-46.99-.62-1.38-1.09-3.01-1.14-4.47-.45-8.56,20.39-16.28,27.39-20.79,8.99-5.06,19.59-12.69,21.03-24.06,.79-5.51-.66-10.94-2.35-16.08C279.86,26.74,258.48,10.71,237.1,.05c-.22-.1-.49-.04-.63,.17-.16,.23-.1,.54,.13,.7,7.79,5.37,15.11,11.32,21.75,17.84,10.66,10.63,20.28,23.51,22.69,38.62,1.17,6.43-.47,11.55-5.86,15.95-6.73,5.51-15.58,8.75-23.68,12.75-13.58,6.25-27.23,16-21.01,33.31,8.11,21.12,21.81,39.61,38.71,54.41h0Z"/><path class="b" d="M305.46,31c17.33,15.13,34.65,33.88,37.46,57.36,4.28,29.09-68.07,25.55-59.89,66.17,.3,1.39,.78,2.75,1.23,4.08,5.34,13.83,13.32,26.84,22.58,38.07,7.25,8.82,15.1,16.85,24.28,23.74,1.22,.9,2.92,1,4.26,.13,1.73-1.12,2.22-3.44,1.09-5.16-13.48-20.76-26.65-40.79-35.13-63.08-.83-2.42-1.31-4.76,.04-7.11,1.74-3.1,5.54-5.74,8.92-7.86,6.84-4.26,13.97-7.45,21.3-11.65,10.76-5.96,23.39-15.42,25.04-28.97,.93-6.53-.76-13.13-2.86-19.25-10.11-27.16-35.41-45.79-60.69-57.49-.21-.09-.47-.03-.61,.16-.16,.22-.11,.54,.11,.7,4.44,3.25,8.72,6.66,12.87,10.17h0Z"/><path class="b" d="M520.1,470.64c-14.75-11.9-34.66-14.28-52.43-9-58.61,16.27-90.21,74.42-73.67,132.6,13,43.52,50.92,64.51,93.19,43.98,35.67-16.29,57.14-52.07,60.05-90.54,2.19-27.68-4.37-58.63-27.14-77.03h0Zm16.04,76.45c-.38,40.09-27.87,76.4-67.13,85.77-30.92,7.3-53.18-13.94-60.01-42.75-6.94-28.44,.54-60.77,20.02-82.38,11.69-13.06,27.38-22.03,44.18-26.8,41.37-12.46,63.93,30.51,62.93,66.16h.01Z"/><path class="b" d="M315.99,565.83c.44-.02,.17-.02,0,0h0Z"/><path class="b" d="M314.54,555.61c-4.26,.74-8.56,1.46-12.87,2.17,.13-21.32-5.27-42.54-17.71-60.4-16.65-23.36-43.63-31.85-71.04-24.39-63.23,17.86-97.31,83.19-78.92,145.62,14.07,46.75,53.99,69.25,99.72,47.86,8.02-3.53,15.56-8.06,22.47-13.39,2.27,3.72,4.61,7.39,7.05,11.01l.69,1.04,.17,.26c2.53,3.92,7.31,6.23,11.98,5.73,4.36-.4,8.07-3.4,11.52-5.74,15.2-11.13,25.58-27.95,30.67-45.75,.17-.64,.61-1.81,.72-2.41,2.74-12.95,4.13-26.23,4.14-39.46-.01-5.23-.19-10.44-.78-15.67-.12-4.26-3.76-7.29-7.82-6.48h.01Zm-37.33,88.26c-9.62-12.75-22.08-27.11-32.89-39.13-4.42-4.99-8.8-10.03-13.11-15.11-3.55-4.29-7.27-8.46-10.35-13.07,1.34-.16,4.29-.51,4.29-.51,28.56-3.37,57.96-7.12,86.63-9.81-.31,15.69-4.52,31.17-10.33,45.68-5.7,11.69-13.9,23.41-24.24,31.95Zm38.78-78.03c.17-.02,.44-.02,0,0h0Zm-97.31,97.07c-36.9,11.45-65-12.07-73.44-47.38-5.04-20.82-3.11-43.36,4.86-63.12,12.51-30.83,37.26-49.94,68.76-58.74,32.73-10.88,56.45,11.51,65.18,41.78,2.36,8.09,3.71,16.32,4.12,24.52-18.03,2.83-36.25,5.45-54.06,8.02-3.15,.45-11.74,1.75-14.75,2.17l-2.52,.37c-3.17,.37-4.86,4.39-2.98,6.93,6.1,7.87,10.35,17.05,15.19,25.74,7.45,14.07,14.61,28.32,22.55,42.1-9.4,7.74-20.43,13.82-32.91,17.62h0Z"/><path class="b" d="M290.5,574.79c-15.98,4.59-11.35,28.41,1.67,22.92s9.58-26.15-1.67-22.92Z"/><path class="b" d="M277.1,605.81c-15.98,4.59-11.35,28.41,1.67,22.92s9.58-26.15-1.67-22.92Z"/><path class="b" d="M260.01,578.48c-15.98,4.59-11.35,28.41,1.67,22.92,13.02-5.49,9.58-26.15-1.67-22.92Z"/></svg>
            <!--
            <img src="Bildtitel.jpg" alt="mehr Informationen zum Bild" title="das wird angezeigt wenn man mit der Maus drüberfährt">
            -->
        </footer>
    </body>
</html>