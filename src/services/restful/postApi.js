import V1 from './v1';

class Post extends V1 {
  fetchPost = () => this.client.get('/posts');
}

export const PostApi = new Post();
