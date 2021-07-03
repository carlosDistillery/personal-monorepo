import React from 'react'
import { AuthService } from '../../services/AuthService'

interface LoginProps {
  authService: AuthService
}

interface LoginState {
  userName: string
  password: string
  loginAttempted: boolean
  loginSuccesfull: boolean
}

// * Interface para el evento
interface CustomEvent {
  target: HTMLInputElement
}

/**
 * Este componente va a acceder a nuestro servicio que se le pasa por props
 */
class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccesfull: false,
  }

  // private setInputValue(event: CustomEvent) {
  //   this.setState({ [event.target.id]: event.target.value })
  // }

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value })
  }
  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value })
  }

  private async handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    this.setState({ loginAttempted: true })

    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password,
    )

    if (result) {
      console.log('result', result)
      this.setState({ loginSuccesfull: true })
    } else {
      console.log('wrong login')
      this.setState({ loginSuccesfull: false })
    }
  }

  render() {
    let loginMessage: any

    if (this.state.loginAttempted) {
      if (this.state.loginSuccesfull) {
        loginMessage = <label>Login successfull</label>
      } else {
        loginMessage = <label>Login failed</label>
      }
    }

    return (
      <div>
        <h2>Please login</h2>
        {/* Sino hago bind the esta function, debo de pasar un arrow function, de lo contrario this es undefined */}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            value={this.state.userName}
            id="userName"
            onChange={(event) => this.setUserName(event)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => this.setPassword(event)}
          />
          <button type="submit">Login</button>
        </form>

        {loginMessage}
      </div>
    )
  }
}

export { Login }
