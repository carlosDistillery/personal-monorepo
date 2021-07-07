import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
// * Models
import { User } from 'model/Model'

class Navbar extends React.Component<
  { user: User | undefined },
  RouteComponentProps
> {
  render() {
    let loginLogOut: any
    if (this.props.user) {
      loginLogOut = <Link to="/logout">{this.props.user.userName}</Link>
    } else {
      loginLogOut = <Link to="/logout">Login</Link>
    }
    return (
      <div>
        <Link to="/"> Home</Link>
        <Link to="/profile">Profile</Link>
        {loginLogOut}
      </div>
    )
  }
}

export { Navbar }
