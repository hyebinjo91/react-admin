import {
  ChipField,
  Datagrid,
  EmailField,
  ImageField,
  List,
  NumberField,
  TextField,
  UrlField,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <ChipField source="username" />
        <TextField source="address.street" label="address" />
        <EmailField source="email" />
        <UrlField source="website" />
        <TextField source="company.name" />
        <ImageField source="files[0].src" label="image" />
      </Datagrid>
    </List>
  );
};
