import NewProject from '../renderer/src/components/Modules/Projects/NewProject';
import AuthenticationContextProvider from '../renderer/src/components/Login/AuthenticationContextProvider';

const projects = () => (
  <AuthenticationContextProvider>
    <NewProject />
  </AuthenticationContextProvider>
);

export default projects;
