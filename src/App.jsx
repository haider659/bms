import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';



const App = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
   <>
      {isSignup ? (
        <Signup />
      ) : (
        <Login onRegisterClick={() => setIsSignup(true)} />
      )}
   
   </>
    
  
  );
};

export default App;
