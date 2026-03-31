<?php
// Enqueue styles and scripts
function vidgrab_pro_scripts() {
    wp_enqueue_style('vidgrab-style', get_stylesheet_uri());
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    wp_enqueue_script('vidgrab-script', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'vidgrab_pro_scripts');

// Add theme support
function vidgrab_pro_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form'));
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'vidgrab-pro'),
    ));
}
add_action('after_setup_theme', 'vidgrab_pro_setup');

// AdSense code integration
function vidgrab_pro_adsense() {
    if (is_front_page() || is_page()) {
        echo '
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_CLIENT_ID"
            crossorigin="anonymous"></script>
        ';
    }
}
add_action('wp_head', 'vidgrab_pro_adsense');

// Add AdSense placements
function vidgrab_pro_adsense_placements() {
    if (is_front_page()) {
        echo '
        <div class="adsense-ad">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                 data-ad-slot="HOME_HEADER_AD"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
        ';
    }
}
add_action('vidgrab_after_header', 'vidgrab_pro_adsense_placements');

// Create custom pages on theme activation
function vidgrab_pro_create_pages() {
    $pages = array(
        'How It Works' => array(
            'content' => 'templates/how-it-works.php',
            'template' => 'how-it-works'
        ),
        'Supported Sites' => array(
            'content' => 'templates/supported-sites.php', 
            'template' => 'supported-sites'
        ),
        'FAQ' => array(
            'content' => 'templates/faq.php',
            'template' => 'faq'
        ),
        'Contact' => array(
            'content' => 'templates/contact.php',
            'template' => 'contact'
        ),
    );
    
    foreach ($pages as $page_title => $page_data) {
        $page_check = get_page_by_title($page_title);
        if (!$page_check) {
            $page_id = wp_insert_post(array(
                'post_title' => $page_title,
                'post_content' => '',
                'post_status' => 'publish',
                'post_type' => 'page',
                'page_template' => $page_data['template']
            ));
        }
    }
}
add_action('after_switch_theme', 'vidgrab_pro_create_pages');
?>