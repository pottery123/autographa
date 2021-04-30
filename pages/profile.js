import Profile from '../renderer/src/components/Modules/Projects/Profile';
import AuthenticationContextProvider from '../renderer/src/components/Login/AuthenticationContextProvider';

const projects = () => (
  <AuthenticationContextProvider>
    <Profile />
  </AuthenticationContextProvider>
);

export default projects;
