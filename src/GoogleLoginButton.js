import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const clientId = '858449804555-qpkgk25anocmfd92fpc53rqpjb51qj34.apps.googleusercontent.com';
  const [user, setUser] = useState(null);

  const onSuccess = (response) => {
    console.log('Login Success:', response);
    // Assuming response contains a token that you can decode to get user information
    // Here we just log the response and set it to the user state
    setUser(response);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
        />
        {user && (
          <div>
            <h2>Welcome, {user.profileObj.name}</h2>
            <img src={user.profileObj.imageUrl} alt={user.profileObj.name} />
            <p>Email: {user.profileObj.email}</p>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;

