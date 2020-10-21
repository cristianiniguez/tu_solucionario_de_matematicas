const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyD9gWzf1dK89nBTYezoavBCkFYQd3Is8O8';
const CHANNEL_ID = 'UCfndi4CyqsQc0zRzrMBgiOw';

export const getPlaylists = async () => {
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
