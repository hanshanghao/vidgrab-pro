        <footer>
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            
            <?php if (is_front_page()): ?>
            <div class="adsense-ad">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                     data-ad-slot="FOOTER_AD"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
            <?php endif; ?>
        </footer>
    </div>
    <?php wp_footer(); ?>
</body>
</html>