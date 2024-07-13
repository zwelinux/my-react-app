import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const clientId = '355848340668-fahaem57osfp139vn4vbe1em0vpkto6f.apps.googleusercontent.com';

  const onSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle successful login here
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
    // Handle failed login here
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
