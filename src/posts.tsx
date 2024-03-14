// in src/posts.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
} from "react-admin";

export const PostList = () => {
  /* ... */
};

export const PostEdit = () => (
  <Edit>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="id" />
          <TextInput source="title" />
          <TextInput source="body" />
      </SimpleForm>
  </Edit>
);


