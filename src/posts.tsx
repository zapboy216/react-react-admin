import { Datagrid, List, ReferenceField, TextField, EditButton,  Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";


export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />

      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);


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
