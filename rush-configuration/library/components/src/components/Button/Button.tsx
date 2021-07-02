import React from 'react'

interface props {
  onClick?: () => void
}

const Button: React.FC<props> = (props) => {
  return <div {...props}>{props.children}</div>
}

export { Button }