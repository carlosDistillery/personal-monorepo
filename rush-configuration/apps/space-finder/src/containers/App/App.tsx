import React from 'react'
// * Models
import { User } from '../../model/Model'
import { AuthService } from '../../services/AuthService'
// * Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from 'components/Navbar/Navbar'
import { Home } from 'containers/Home/Home'

interface AppState {
  user: User | undefined
}

class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService()

  constructor(props: any) {
    super(props)

    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User) {
    // Como esta utilizando el this con el setSatte, necesita un binding
    this.setState({ user })
    console.log('setting the user', user)
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export { App }
