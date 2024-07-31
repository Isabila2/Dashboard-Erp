import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      {/* Menu Home */}
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      {/* Menu Atividade */}
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      {/* SubMenu Atividade */}
      <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task 2</Menu.Item>
        <Menu.Item key="task-3">Task 3</Menu.Item>
        <Menu.Item key="task-4">Task 4</Menu.Item>

        <Menu.SubMenu key="subtasks1" title="Subtasks">
          <Menu.Item key="subtask-1">SubTask 1</Menu.Item>
          <Menu.Item key="subtask-2">SubTask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      {/* Menu Progresso */}
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      {/* Menu Payment */}
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      {/* Menu Setting */}
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};
export default MenuList;
