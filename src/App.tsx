import { Admin, Resource, ShowGuesser, EditGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList } from "./posts";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={EditGuesser} />
   <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
  </Admin>
);