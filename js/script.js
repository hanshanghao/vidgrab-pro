// Real download function
async function downloadVideo(videoUrl, quality) {
    try {
        const response = await fetch('http://localhost:3000/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: videoUrl,
                quality: quality
            })
        });
        
        const data = await response.json();
        
        if (data.download_url) {
            // Create hidden link to download
            const link = document.createElement('a');
            link.href = data.download_url;
            link.download = `${data.title}.mp4`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification(`Downloading: ${data.title}`, 'success');
        }
    } catch (error) {
        showNotification('Download failed: ' + error.message, 'error');
    }
}
