import { Datagrid, List, ReferenceField, TextField, EditButton,  Edit, ReferenceInput, SimpleForm, TextInput, Create, useRecordContext } from "react-admin";

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
  };

  const postFilters = [
    <TextInput source="q" label="Search" alwaysOn  key=""/>,
    <ReferenceInput source="userId" label="User" reference="users" key="" />,
];



export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />

      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" link="show"/>
            
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
  <Create>
      <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
          <ReferenceInput source="userId" reference="users"/>
          
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
      </SimpleForm>
  </Create>
);


