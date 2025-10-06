import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  DateInput,
  required,
} from "react-admin";

export const ArticleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput source="description" multiline rows={3} fullWidth />
      <TextInput source="content" multiline rows={10} fullWidth />
      <TextInput source="image" fullWidth />
      <TextInput source="slug" fullWidth />
      <DateInput source="createdAt" disabled />
      <DateInput source="updatedAt" disabled />
    </SimpleForm>
  </Edit>
);
