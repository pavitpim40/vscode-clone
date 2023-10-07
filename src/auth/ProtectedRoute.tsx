import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

type ProtectedRouteProps = {
  component: React.ComponentType<any>
  [key:string]:any
}

const ProtectedRoute = ({component, ...props}:ProtectedRouteProps) => {

  const Component = withAuthenticationRequired(component,{
    onRedirecting: () => <Loading />,
  })
  return <Component {...props}/>
}

export default ProtectedRoute