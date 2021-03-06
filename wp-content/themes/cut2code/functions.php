<?php


/********************
 * 
 * TABLE OF CONTENTS
 * 
 *******************
 
 1. Register Styles & Scripts
 2. Theme support
 2. Menu
 
 */



/* 1. Register Styles & Scripts */

function register_styles()
{
	wp_enqueue_style('styles', get_stylesheet_uri());
	wp_enqueue_style('minified', get_template_directory_uri() . '/style.min.css');
}
add_action('wp_enqueue_scripts', 'register_styles');


function register_scripts()
{
	wp_enqueue_script('js', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'register_scripts');


/* 2. Theme support */

add_theme_support('custom-logo');


/* 3. Menu */

function menu()
{
	register_nav_menu('menu', __('Menu'));
}
add_action('init', 'menu');
