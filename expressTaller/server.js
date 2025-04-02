import express from 'express';
import fetch from 'node-fetch';
import { apiKey } from './creds.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/youtube-channel', async (req, res) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UC7_WiJnJxpm4MRNesRttzWg&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const channel = data.items[0];
    const result = {
      title: channel.snippet.title,
      description: channel.snippet.description,
      views: channel.statistics.viewCount,
      subscribers: channel.statistics.subscriberCount,
      videos: channel.statistics.videoCount,
    };

    res.json(result);
  } catch (error) {
    console.error('YouTube API Error:', error);
    res.status(500).json({ error: 'Failed to fetch YouTube data' });
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});