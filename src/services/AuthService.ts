import {
  IAuthCredentials,
  IAuthRefreshCredentials,
  ISignInResponse,
  User,
} from '../types/Auth';
import store from '../store';

const BASE_URL = '/auth';

export interface IAuthService {
  /**
   * Log in to account
   */
  signin(credentials: IAuthCredentials): Promise<ISignInResponse>;

  /**
   * Create an account
   */
  signup(credentials: IAuthCredentials): Promise<User>;

  /**
   * Refresh our authentication
   */
  refresh(credentials: IAuthRefreshCredentials): Promise<User>;

  /**
   * Log a user out
   */
  signout(): void;
}

export default class AuthService implements IAuthService {
  constructor(private _axios: any) {}

  async signin(credentials: IAuthCredentials): Promise<ISignInResponse> {
    const { email, password } = credentials;

    const res = await this._axios.post(`${BASE_URL}/signin`, {
      email,
      password,
    });

    this.updateAccess(res.data);
    return res.data;
  }

  async signup(credentials: IAuthCredentials): Promise<User> {
    const { email, password } = credentials;

    const res = await this._axios.post(`${BASE_URL}/signup`, {
      email,
      password,
    });
    return res.data;
  }

  async refresh(credentials: IAuthRefreshCredentials): Promise<User> {
    const { email, refreshToken } = credentials;

    const res = await this._axios.post(`${BASE_URL}/refresh`, {
      email,
      refreshToken,
    });
    this.updateAccess(res.data);
    return res.data;
  }

  signout(): void {
    store.commit('setAccessToken', '');
    store.commit('setRefreshToken', '');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessExpires');
  }

  private updateAccess(tokens: ISignInResponse) {
    store.commit('setAccessToken', tokens.accessToken);
    localStorage.setItem('accessToken', tokens.accessToken);
    store.commit('setRefreshToken', tokens.refreshToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);

    const expires = new Date();
    expires.setHours(expires.getHours() + 1);
    localStorage.setItem('accessExpires', expires.toString());
  }
}
