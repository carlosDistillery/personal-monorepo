import React from 'react'
// * Models
import { User } from '../../model/Model'
import { AuthService } from '../../services/AuthService'
// * Components
import { Login } from 'components/Login/Login'

interface AppState {
  user: User | undefined
}

class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService()

  render() {
    return (
      <div>
        App :o
        <Login authService={this.authService} />
      </div>
    )
  }
}

export { App }
