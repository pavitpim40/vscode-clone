import { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  console.log(window.location.origin)
  return (
    <Auth0Provider
      domain="dev-7fuylo00qknbsiv1.us.auth0.com"
      clientId="Dy8BSryIiuAHeUv1GAn1paYjkdYUxLEE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
