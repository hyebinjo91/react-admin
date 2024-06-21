import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "react-admin";
const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });
const CustomApp = dynamic(() => import("@/components/CustomApp"), {
  ssr: false,
});
const MockApiTest = dynamic(() => import("@/components/MockApiTest"), {
  ssr: false,
});

// const Home: NextPage = () => <AdminApp />;
const Home: NextPage = () => <CustomApp />;
// const Home: NextPage = () => <MockApiTest />;

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const dataProvider = jsonServerProvider(
//     "https://jsonplaceholder.typicode.com"
//   );
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ["userList"],
//     queryFn: async () => {
//       const data = await dataProvider.getList("users", {
//         pagination: { page: 1, perPage: 5 },
//         sort: { field: "name", order: "ASC" },
//         filter: { author_id: 12 },
//       });
//       console.log(data);
//       return data;
//     },
//   });

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };
