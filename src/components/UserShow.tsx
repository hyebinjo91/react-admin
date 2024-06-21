// in src/posts.jsx
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  usePermissions,
} from "react-admin";

export const UserShow = () => {
  const { isLoading, permissions } = usePermissions();
  console.log(permissions);
  return isLoading ? (
    <div>Waiting for permissions...</div>
  ) : (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
