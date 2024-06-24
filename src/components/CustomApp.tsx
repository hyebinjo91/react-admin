import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  memoryStore,
  withLifecycleCallbacks,
  DataProvider,
} from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider as baseDataProvider } from "@/providers/dataProvider";
import authProvider from "@/providers/authProvider";
import { DashBoard } from "./Dashboard";
import { UserList } from "./UserList";
import { UserCreate } from "./UserCreate";
import { UserEdit } from "./UserEdit";
import { UserShow } from "./UserShow";

const CustomApp = () => {
  const dataProvider = withLifecycleCallbacks(baseDataProvider, [
    {
      resource: "users",
      beforeCreate: async (params: any, dataProvider: DataProvider) => {
        // some logic before creating a user
        return params;
      },
    },
  ]);
  return (
    <Admin
      dashboard={DashBoard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      store={memoryStore()}
    >
      <Resource
        name="users"
        list={UserList}
        show={UserShow}
        create={UserCreate}
        edit={UserEdit}
        recordRepresentation={(record) => `${record.id} ${record.username}`}
      >
        <Route path=":usersId/books" element={<div>커스텀route</div>} />
      </Resource>
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="title"
      />
    </Admin>
  );
};

export default CustomApp;
