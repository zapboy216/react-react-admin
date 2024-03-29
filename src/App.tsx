import { Admin, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>

<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
   <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />

  </Admin>
);