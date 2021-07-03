import React from 'react'
// * Models
import { User } from '../../model/Model'
import { AuthService } from '../../services/AuthService'
// * Components
import { LoginF } from 'components/Login/LoginF'

interface AppStateF {
  user: User | undefined
}

function AppF() {
  const [state, setState] = React.useState<AppStateF>({ user: undefined })
  const authService: AuthService = new AuthService()

  return (
    <div className="App">
      App Works
      <LoginF authService={authService} />
    </div>
  )
}

export { AppF }
