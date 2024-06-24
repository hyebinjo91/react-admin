import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  memoryStore,
  withLifecycleCallbacks,
  DataProvider,
  CustomRoutes,
} from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider as baseDataProvider } from "@/providers/dataProvider";
import authProvider from "@/providers/authProvider";
import { DashBoard } from "./Dashboard";
import { UserList } from "./UserList";
import { UserCreate } from "./UserCreate";
import { UserEdit } from "./UserEdit";
import { UserShow } from "./UserShow";
import { MyLayout } from "./Layout/MyLayout";
import FormPage from "./FormPage";

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
      layout={MyLayout}
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
      <CustomRoutes>
        <Route path="/form" element={<FormPage />} />
      </CustomRoutes>
    </Admin>
  );
};

export default CustomApp;
