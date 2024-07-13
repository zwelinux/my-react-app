import './App.css';
import ResponsiveAppBar from './Appbar';
import GoogleLoginButton from './GoogleLoginButton';
import OneRowTwoColumns from './OneRowTwoColumn';
import BasicSpeedDial from './Quick';


function App() {
  return (
    <>
      <GoogleLoginButton />
      <ResponsiveAppBar />
      <OneRowTwoColumns />
      <BasicSpeedDial />
    </>
  );
}

export default App;
