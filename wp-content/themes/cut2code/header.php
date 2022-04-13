<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php bloginfo('name'); ?></title>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


    <header class="header">

        <div class="header__logo">
            <img src="<?php echo get_template_directory_uri(); ?>/img/logoWhite.png" alt="Logo">
        </div>
        <div class="header__hamburger">
            <img class="menuToggle" src="<?php echo get_template_directory_uri(); ?>/img/icons/hamburger.png" alt="Menu">
        </div>

    </header>

    <?php get_template_part('template-parts/nav'); ?>