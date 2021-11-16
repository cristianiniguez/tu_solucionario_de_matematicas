import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

class YoutubeLib {
  constructor() {
    this.channelId = process.env.YOUTUBE_CHANNEL_ID;
    this.apiKey = process.env.YOUTUBE_API_KEY;
  }

  async getPlaylists(n) {
    const url = `${BASE_URL}/playlists?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&maxResults=${n}`;
    const { data } = await axios(url);
    return data.items;
  }
}

export default YoutubeLib;
