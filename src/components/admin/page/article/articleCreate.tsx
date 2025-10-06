import { Create, SimpleForm, TextInput, required } from "react-admin";

export const ArticleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="caption" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
