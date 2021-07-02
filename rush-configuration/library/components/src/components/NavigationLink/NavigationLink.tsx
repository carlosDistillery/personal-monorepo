import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLink(props: { label: string; to: string }) {
  return <Link to={props.to}>{props.label.toLowerCase()}</Link>;
}

export { NavigationLink };
