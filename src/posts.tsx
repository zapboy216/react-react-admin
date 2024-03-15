import { Datagrid, List, ReferenceField, TextField, EditButton,  Edit, ReferenceInput, SimpleForm, TextInput, Create } from "react-admin";


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
        <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" link="show"/>
            
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
  <Edit>
      <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
          <ReferenceInput source="userId" reference="users"/>
          
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
      </SimpleForm>
  </Edit>
);
