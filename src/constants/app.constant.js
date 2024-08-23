export const BUTTON_LIST = [
  "All",
  "Music",
  "Bollywood Music",
  "Mixes",
  "Javascript",
  "Live",
  "Comedy",
  "Gaming",
  "Recently Uploaded",
  // "New to you",
];

const API_KEY = "AIzaSyCbxGFG0aUwBTl699r3IthfhTivrIdRJeE";
export const YOUTUBE_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
export const VIDEO_BY_ID_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;
export const SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
