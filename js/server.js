const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/download', async (req, res) => {
    const { url, quality } = req.body;
    
    if (!ytdl.validateURL(url)) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }
    
    try {
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: quality + 'p' });
        
        res.json({
            title: info.videoDetails.title,
            download_url: format.url,
            quality: quality
        });
    } catch (error) {
        res.status(500).json({ error: 'Download failed' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});