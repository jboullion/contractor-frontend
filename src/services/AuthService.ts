import { IAuthCredentials, ISignInResponse, User } from '../types/Auth';
// import store from '../store';

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
   * Log a user out
   */
  //signout(): Promise<void>;
}

export default class AuthService implements IAuthService {
  constructor(private _axios: any) {}

  async signin(credentials: IAuthCredentials): Promise<ISignInResponse> {
    const { email, password } = credentials;

    const res = await this._axios.post(`${BASE_URL}/signin`, {
      email,
      password,
    });
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

  // async signout(): Promise<void> {
  //   localStorage.removeItem('accessToken');
  //   store.commit('setJWT', '');
  // }
}
