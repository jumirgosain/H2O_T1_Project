import { menuTitleList } from "../../utilities/constant";
import { MenuList } from "./SideMenuList";
import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <div>
      {menuTitleList.map((menuTitle, index) => {
        return (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <span>{menuTitle}</span>
            {MenuList?.filter((menu) => menu.menuTitle === menuTitle).map(
              (item, index) => {
                return (
                  <div key={index}>
                    {item.menuType === "mainMenu" ? (
                      <div key={index}>
                        <NavLink to={item?.path || ""}>{item.name}</NavLink>
                      </div>
                    ) : (
                      <div>
                        <span>{item.name}</span>
                        {item?.Children?.map((child, index) => (
                          <div key={index}>
                            <NavLink to={child.path}>{child.name}</NavLink>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
