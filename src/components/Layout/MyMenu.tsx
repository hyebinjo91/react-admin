// in src/MyMenu.js
import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="users" />
    <Menu.ResourceItem name="posts" />
    <Menu.Item to="/form" primaryText="form" leftIcon={<LabelIcon />} />
  </Menu>
);
