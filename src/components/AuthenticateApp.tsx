import { Admin, CustomRoutes, Authenticated } from "react-admin";
import { Route } from "react-router-dom";
import authProvider from "@/providers/authProvider";

const AuthenticateApp = () => {
  return (
    <Admin authProvider={authProvider}>
      <CustomRoutes>
        <Route
          path="/foo"
          element={
            <Authenticated>
              <div>/foo</div>
            </Authenticated>
          }
        />
        <Route
          path="/bar"
          element={
            <Authenticated requireAuth>
              <div>/bar</div>
            </Authenticated>
          }
        />
      </CustomRoutes>
    </Admin>
  );
};

export default AuthenticateApp;
