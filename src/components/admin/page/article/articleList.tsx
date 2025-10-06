import { List, Datagrid, TextField, EditButton } from "react-admin";

export const ArticleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="caption" />
      <EditButton />
    </Datagrid>
  </List>
);
