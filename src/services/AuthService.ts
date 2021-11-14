import { IAuthCredentials, ISignInResponse, User } from '../types/Auth';

const BASE_URL = '/auth';

export interface IAuthService {
  /**
   * Log in to account
   */
  signin(credentials: IAuthCredentials): Promise<ISignInResponse>;

  /**
   * Create an account
   *
   * TODO: Do we want to return a User here? Or just redirect them to the login page?
   * TODO: If successful do we want to just return a JWT here?
   */
  signup(credentials: IAuthCredentials): Promise<User>;
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
}
