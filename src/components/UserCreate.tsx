import {
  Create,
  FileInput,
  ImageField,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="description" fullWidth multiline />
      <TextInput source="address.street" />
      <NumberInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
      <FileInput
        source="files"
        placeholder={<p>Drop your file here</p>}
        multiple
      >
        <ImageField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
