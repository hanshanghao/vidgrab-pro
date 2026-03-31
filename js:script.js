// Quality selection
document.addEventListener('DOMContentLoaded', function() {
    const qualityOptions = document.querySelectorAll('.quality-option');
    qualityOptions.forEach(option => {
        option.addEventListener('click', () => {
            qualityOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Paste button functionality
    const pasteBtn = document.querySelector('.paste-btn');
    const urlInput = document.querySelector('.url-input');
    
    if (pasteBtn && urlInput) {
        pasteBtn.addEventListener('click', async () => {
            try {
                const text = await navigator.clipboard.readText();
                urlInput.value = text;
            } catch (err) {
                alert('Failed to paste from clipboard. Please paste manually.');
            }
        });
    }

    // Download button functionality
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (!urlInput.value) {
                alert('Please enter a video URL');
                return;
            }
            
            // Simulate download process
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            downloadBtn.disabled = true;
            
            setTimeout(() => {
                alert('Download started! In a real application, this would begin your download.');
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Now';
                downloadBtn.disabled = false;
            }, 2000);
        });
    }

    // Platform selection
    const platforms = document.querySelectorAll('.platform');
    platforms.forEach(platform => {
        platform.addEventListener('click', () => {
            const platformName = platform.querySelector('.platform-name').textContent;
            if (urlInput) {
                urlInput.placeholder = `Paste ${platformName} video URL here`;
                urlInput.focus();
            }
        });
    });

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});