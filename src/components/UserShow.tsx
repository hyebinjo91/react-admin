// in src/posts.jsx
import { useMutation } from "@tanstack/react-query";
import {
  Show,
  SimpleShowLayout,
  TextField,
  usePermissions,
  useDataProvider,
  ArrayField,
  SingleFieldList,
  ChipField,
  FileField,
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
        <ChipField source="username" size="small" />
        <ArrayField source="tags">
          <SingleFieldList linkType={false}>
            <ChipField source="name" size="small" />
          </SingleFieldList>
        </ArrayField>
        <FileField source="files[0].src" label="file" />
      </SimpleShowLayout>
    </Show>
  );
};
