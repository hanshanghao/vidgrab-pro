<?php
/**
 * Template Name: Supported Sites
 */
get_header(); ?>

<div class="main-content">
    <div class="page-content">
        <h1>Supported Platforms & Sites</h1>
        <p>VidGrab Pro supports video downloading from over 150+ platforms. Here are the most popular ones:</p>
        
        <div class="platforms-grid">
            <?php
            $platforms = array(
                array('YouTube', 'fab fa-youtube', '#FF0000'),
                array('Facebook', 'fab fa-facebook', '#1877F2'),
                array('Instagram', 'fab fa-instagram', '#E4405F'),
                array('TikTok', 'fab fa-tiktok', '#000000'),
                array('Twitter', 'fab fa-twitter', '#1DA1F2'),
                array('Vimeo', 'fab fa-vimeo', '#1AB7EA'),
                array('Dailymotion', 'fab fa-dailymotion', '#0066DC'),
                array('Twitch', 'fab fa-twitch', '#9146FF'),
                array('LinkedIn', 'fab fa-linkedin', '#0A66C2'),
                array('Pinterest', 'fab fa-pinterest', '#BD081C'),
                array('Reddit', 'fab fa-reddit', '#FF4500'),
                array('Snapchat', 'fab fa-snapchat', '#FFFC00'),
                array('Vine', 'fab fa-vine', '#00b488'),
                array('Tumblr', 'fab fa-tumblr', '#35465c'),
                array('Flickr', 'fab fa-flickr', '#0063dc'),
                array('Metacafe', 'fas fa-play-circle', '#ff0000'),
                array('Veoh', 'fas fa-film', '#ff9900'),
                array('LiveLeak', 'fas fa-video', '#ff0000'),
                array('Break', 'fas fa-play', '#ff6600'),
                array('SoundCloud', 'fab fa-soundcloud', '#ff3300'),
            );
            
            foreach ($platforms as $platform) {
                echo '
                <div class="platform">
                    <i class="' . $platform[1] . '" style="color: ' . $platform[2] . ';"></i>
                    <div class="platform-name">' . $platform[0] . '</div>
                </div>
                ';
            }
            ?>
        </div>
        
        <div class="adsense-ad">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                 data-ad-slot="SUPPORTED_SITES_AD"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
        
        <div class="legal-notice">
            <h3><i class="fas fa-sync"></i> Constantly Updated</h3>
            <p>We continuously add support for new platforms and update existing ones to ensure compatibility. If you don't see your preferred platform listed, please contact us and we'll prioritize adding it.</p>
        </div>
    </div>
</div>

<?php get_footer(); ?>