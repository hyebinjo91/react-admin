import {
  Datagrid,
  DateField,
  Edit,
  NumberField,
  NumberInput,
  ReferenceInput,
  ReferenceManyCount,
  ReferenceManyField,
  SimpleForm,
  TabbedForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      {/* <TextInput source="description" fullWidth multiline /> */}
      <TextInput source="address.street" />
      <NumberInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);
