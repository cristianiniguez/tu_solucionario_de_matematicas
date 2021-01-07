const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCfndi4CyqsQc0zRzrMBgiOw';

const getPlaylists = async (n) => {
  const url = `${BASE_URL}/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=${n}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};

export const getLastPlaylists = async () => {
  const items = await getPlaylists(4);
  return items.map((item) => ({
    id: item.id,
    imgSrc: item.snippet.thumbnails.maxres.url,
    imgAlt: item.snippet.localized.title,
    title: item.snippet.localized.title,
  }));
};

export const getLastSubjects = async () => {
  const playlists = await getPlaylists(12);
  const subjects = playlists.map((pl) => pl.snippet.description.match(/^(\w+)\s\//)[1]);
  return [...new Set(subjects)].splice(0, 4);
};

export const getInfoFromPlaylist = async (id) => {
  const response = await fetch(`${BASE_URL}/playlists?key=${API_KEY}&id=${id}&part=snippet`);
  const data = await response.json();
  const playlist = data.items.filter((item) => item.snippet.channelId === CHANNEL_ID);
  return playlist[0]
    ? {
        title: playlist[0].snippet.title,
        description: playlist[0].snippet.description,
        subject: playlist[0].snippet.description.match(/^(\w+)\s\//)[1],
      }
    : {
        title: '',
        description: '',
        subject: '',
      };
};

export const getVideosFromPlaylist = async (id, pageToken = null) => {
  const url = `${BASE_URL}/playlistItems?key=${API_KEY}&playlistId=${id}&part=snippet,id&maxResults=10${
    pageToken ? '&pageToken=' + pageToken : ''
  }`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      throw data.error;
    }
    const videos = data.items
      .filter((item) => item.snippet.channelId === CHANNEL_ID)
      .map((item) => ({
        id: item.id,
        title: item.snippet.title,
        imgSrc: item.snippet.thumbnails.default.url,
      }));
    const pages = {
      previous: data.prevPageToken,
      next: data.nextPageToken,
    };
    return { videos, pages };
  } catch (error) {
    console.error(`Error al obtener videos: ${error.message}`);
    throw error;
  }
};

export const getPlaylistsFromSubject = async (subject) => {
  const url = `${BASE_URL}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=10&q=${subject}&type=playlist`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items.map((item) => ({
    id: item.id.playlistId,
    imgSrc: item.snippet.thumbnails.high.url,
    imgAlt: item.snippet.title,
    title: item.snippet.title,
  }));
};

export const getPlaylistItemFromId = async (id) => {
  const url = `${BASE_URL}/playlistItems?key=${API_KEY}&part=snippet&id=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.items.length > 0) {
    const {
      channelId,
      playlistId,
      title,
      description,
      resourceId: { videoId },
    } = data.items[0].snippet;
    if (channelId === CHANNEL_ID) {
      return { videoId, title, description, playlistId };
    } else {
      return {};
    }
  } else {
    return {};
  }
};
