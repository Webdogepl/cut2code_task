<?php

function register_styles()
{

	wp_enqueue_style('styles', get_stylesheet_uri());
	wp_enqueue_style('minified', get_template_directory() . 'styles.min.css');
}
add_action('wp_enqueue_scripts', 'register_styles');


function register_scripts()
{
	wp_enqueue_script('js', get_template_directory_uri() . '/js/main.js', '', '1.0', true);
}
add_action('wp_enqueue_scripts', 'register_scripts');
