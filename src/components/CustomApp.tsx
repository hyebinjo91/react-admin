// "use client";

import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  memoryStore,
} from "react-admin";
import { dataProvider } from "@/data/dataProvider";
import authProvider from "@/data/authProvider";
import { DashBoard } from "./Dashboard";
import { UserList } from "./UserList";
import { UserCreate } from "./UserCreate";
import { UserEdit } from "./UserEdit";

import { UserShow } from "./UserShow";

const CustomApp = () => {
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
        edit={UserEdit}
        show={UserShow}
        create={UserCreate}
        recordRepresentation="name"
      />
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
