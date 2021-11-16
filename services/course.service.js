import YoutubeLib from '../lib/youtube';

class CourseService {
  constructor() {
    this.client = new YoutubeLib();
  }

  async getLastCourses() {
    const items = await this.client.getPlaylists(4);
    return items.map((item) => ({
      id: item.id,
      imgSrc: item.snippet.thumbnails.maxres.url,
      imgAlt: item.snippet.localized.title,
      title: item.snippet.localized.title,
    }));
  }
}

export default CourseService;
