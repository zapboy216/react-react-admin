// in src/posts.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Create,
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
    <TextInput source="id" InputProps={{ disabled: true }} />
    <ReferenceInput source="userId" reference="users" link="show" />

    <TextInput source="title" />

    <TextInput source="body" multiline rows={5} />
  </SimpleForm>
</Edit>
);

export const PostCreate = () => (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Create>
  );
