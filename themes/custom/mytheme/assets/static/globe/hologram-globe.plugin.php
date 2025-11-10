<?php
/*
Plugin Name: Hyper Globe [hyper-hologram-globe]
Plugin URI: https://hyper.ac/globe/
Description: Integrates a Hyper Globe via shortcode [hyper-hologram-globe]
Version: 20
Author: Hyper
Author URI: https://hyper.ac
*/

if( defined('ABSPATH') && function_exists('is_admin') && ! is_admin() ) {
	add_shortcode( 'hyper-hologram-globe',  function() {
		return '<script async src="'. plugin_dir_url(__FILE__) .'hologram-globe.loader.js?v20"></script>';
	} );
}