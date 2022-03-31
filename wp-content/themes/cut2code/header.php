<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


    <header class="header">

        <div class="header__logo">
            <img src=<?php get_custom_logo() ?> alt="Logo">
        </div>
        <div class="header__menu"></div>

    </header>