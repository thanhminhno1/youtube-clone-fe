import V1 from './v1';

class Category extends V1 {
  fetchCaregories = () => this.client.get('/categories');
}

export const CategoryApi = new Category();
