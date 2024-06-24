// in src/posts.jsx
import { useMutation } from "@tanstack/react-query";
import {
  Show,
  SimpleShowLayout,
  TextField,
  usePermissions,
  useDataProvider,
  NumberField,
  ImageField,
} from "react-admin";
import { useParams } from "react-router-dom";

export const UserShow = () => {
  const param = useParams();
  const dataProvider = useDataProvider();
  const { isLoading, permissions } = usePermissions();
  console.log(permissions);
  return isLoading ? (
    <div>Waiting for permissions...</div>
  ) : (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="address.street" />
        <NumberField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
        <ImageField source="files[0].src" label="image" />
      </SimpleShowLayout>
    </Show>
  );
};
