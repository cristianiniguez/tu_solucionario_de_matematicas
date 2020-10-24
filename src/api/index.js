const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyD9gWzf1dK89nBTYezoavBCkFYQd3Is8O8';
const CHANNEL_ID = 'UCfndi4CyqsQc0zRzrMBgiOw';

export const getAllPlaylists = async () => {
  const response = await fetch(
    `${BASE_URL}/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id`,
  );
  const data = await response.json();
  console.log(data);
};

export const getLastPlaylists = async () => {
  const response = await fetch(
    `${BASE_URL}/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&maxResults=4`,
  );
  const data = await response.json();
  return data.items.map((item) => ({
    id: item.id,
    imgSrc: item.snippet.thumbnails.maxres.url,
    imgAlt: item.snippet.localized.title,
    title: item.snippet.localized.title,
    description: item.snippet.localized.description,
  }));
};

export const getLastSubjects = async () => {
  return [];
};

export const getTitleFromPlaylist = async (id) => {
  const response = await fetch(`${BASE_URL}/playlists?key=${API_KEY}&id=${id}&part=snippet`);
  const data = await response.json();
  const playlist = data.items.filter((item) => item.snippet.channelId === CHANNEL_ID);
  return playlist[0] ? playlist[0].snippet.title : '';
};

export const getVideosFromPlaylist = async (id) => {
  const response = await fetch(
    `${BASE_URL}/playlistItems?key=${API_KEY}&playlistId=${id}&part=snippet,id`,
  );
  const data = await response.json();
  return data.items
    .filter((item) => item.snippet.channelId === CHANNEL_ID)
    .map((item) => ({
      id: item.id,
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
    }));
};
