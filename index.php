<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="container">
        <header>
            <div class="logo">
                <i class="fas fa-download"></i>
                <h1><?php bloginfo('name'); ?></h1>
            </div>
            <p class="tagline"><?php bloginfo('description'); ?></p>
            
            <?php if (has_nav_menu('primary')): ?>
            <nav class="primary-menu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'menu',
                    'container' => false
                ));
                ?>
            </nav>
            <?php endif; ?>
        </header>
        
        <?php do_action('vidgrab_after_header'); ?>