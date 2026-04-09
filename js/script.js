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
    const pasteBtn = document.getElementById('pasteBtn');
    const urlInput = document.getElementById('videoUrl');
    
    if (pasteBtn && urlInput) {
        pasteBtn.addEventListener('click', async () => {
            try {
                const text = await navigator.clipboard.readText();
                urlInput.value = text;
                showNotification('URL pasted successfully!', 'success');
            } catch (err) {
                showNotification('Failed to paste. Please paste manually (Ctrl+V)', 'error');
            }
        });
    }

    // Download button functionality
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn && urlInput) {
        downloadBtn.addEventListener('click', () => {
            if (!urlInput.value) {
                showNotification('Please enter a video URL', 'error');
                return;
            }
            
            if (!isValidUrl(urlInput.value)) {
                showNotification('Please enter a valid URL', 'error');
                return;
            }
            
            // Get selected quality
            const selectedQuality = document.querySelector('.quality-option.active');
            const quality = selectedQuality ? selectedQuality.getAttribute('data-quality') : '720';
            
            // Simulate download process
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            downloadBtn.disabled = true;
            
            setTimeout(() => {
                showNotification(`Download started! (${quality}p) - Your video will be saved shortly`, 'success');
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Now';
                downloadBtn.disabled = false;
                
                // Simulate file download
                simulateDownload();
            }, 2000);
        });
    }

    // Platform selection
    const platforms = document.querySelectorAll('.platform');
    platforms.forEach(platform => {
        platform.addEventListener('click', () => {
            const platformName = platform.querySelector('.platform-name').textContent;
            if (urlInput) {
                urlInput.placeholder = `Paste ${platformName} video URL here...`;
                urlInput.focus();
                showNotification(`${platformName} selected. Paste your video URL now.`, 'info');
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

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                const successMessage = document.getElementById('successMessage');
                successMessage.classList.add('show');
                contactForm.reset();
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }, 1500);
        });
    }
});

// Helper functions
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4bb543' : type === 'error' ? '#dc3545' : '#4361ee'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function simulateDownload() {
    // Create a dummy file for demonstration
    const link = document.createElement('a');
    const content = "This is a demonstration video file. In production, this would be your actual video download.";
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'video_download_demo.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);