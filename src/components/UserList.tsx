import {
  Datagrid,
  List,
  ListContextProvider,
  NumberField,
  TextField,
  useGetList,
  useList,
} from "react-admin";

export const UserList = () => {
  // const { data, isLoading, error } = useGetList("users", {
  //   pagination: { page: 1, perPage: 100 },
  // });
  // const listContext = useList({
  //   data,
  //   isLoading,
  //   perPage: 10,
  //   sort: { field: "id", order: "ASC" },
  // });

  // if (error) {
  //   return <p>ERROR</p>;
  // }

  return (
    <List>
      {/* <ListContextProvider value={listContext}> */}
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="address.street" />
        <NumberField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
      {/* </ListContextProvider> */}
    </List>
  );
};
