import { User } from '../model/Model'

/**
 * Un servicio con clases no lo veo mal, ya que puedes aplicar el patron de
 * singleton para este tipo de casos. Un ejemplo es con firebase c:
 */

export class AuthService {
  public async login(
    userName: string,
    password: string,
  ): Promise<User | undefined> {
    if (userName === 'user' && password === '1234') {
      return { userName: userName, email: 'something' }
    } else {
      return undefined
    }
  }
}
