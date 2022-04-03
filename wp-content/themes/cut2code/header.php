<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


    <header class="header">

        <div class="header__logo">
            <img src="<?php echo get_template_directory_uri(); ?>/img/logoWhite.png" alt="Logo">
        </div>
        <div class="header__menu">
            <img src="<?php echo get_template_directory_uri(); ?>/img/icons/hamburger.png" alt="Menu">
        </div>

    </header>