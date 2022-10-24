import axios from 'axios';
import ytdl from 'react-native-ytdl';

const baseURL = 'https://www.googleapis.com/youtube/v3';
const key = 'AIzaSyDqSLabWge8Pqu9v1lXFuOOyehM6N-wEGA';

const useYoutube = () => {
  const search = async text => {
    try {
      const result = await axios({
        method: 'get',
        url: `${baseURL}/search`,
        params: {
          part: 'snippet',
          maxResults: 20,
          q: text,
          type: 'video',
          key,
        },
      });
      return result?.data?.items || [];
    } catch (error) {
      console.error('error', error);
      return [];
    }
  };

  const download = async id => {
    console.log('start');
    // let info = await ytdl.getInfo(id);
    const info = await ytdl('https://youtu.be/9HXocME0XOI');
    console.log('info', info);
  };

  const getUrl = async id => {
    const info = await ytdl('https://youtu.be/' + id);
    return info?.[0]?.url;
  };

  return {search, download, getUrl};
};

export default useYoutube;
