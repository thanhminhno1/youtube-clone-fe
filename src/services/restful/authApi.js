class Auth extends V1 {
  login = (email, password) => this.client.post('/login', { email, password });
}

export const AuthApi = new Auth();
