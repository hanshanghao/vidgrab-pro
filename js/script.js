// Updated download button functionality
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn && urlInput) {
    downloadBtn.addEventListener('click', async () => {
        const videoUrl = urlInput.value;
        const selectedQuality = document.querySelector('.quality-option.active');
        const quality = selectedQuality ? selectedQuality.getAttribute('data-quality') : '720';
        
        if (!videoUrl) {
            showNotification('Please enter a video URL', 'error');
            return;
        }
        
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        downloadBtn.disabled = true;
        
        try {
            // Using a free video download API
            const response = await fetch(`https://your-api.com/download?url=${encodeURIComponent(videoUrl)}&quality=${quality}`);
            const data = await response.json();
            
            if (data.download_url) {
                window.location.href = data.download_url;
                showNotification('Download started!', 'success');
            }
        } catch (error) {
            showNotification('Download failed. Please try again.', 'error');
        } finally {
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Now';
            downloadBtn.disabled = false;
        }
    });
}
