import { Link } from 'react-router-dom'
// * Models
import { User } from 'model/Model'

function Navbar(props: { user: User | undefined }) {
  let loginLogOut: any

  if (props.user) {
    loginLogOut = <Link to="/logout">{props.user.userName}</Link>
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

export { Navbar }
