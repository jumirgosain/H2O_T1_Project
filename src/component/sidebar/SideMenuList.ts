import * as routeUrl from "../../routes/RouteUrl";
import { MenuListType } from "../../types";

export const MenuList: MenuListType = [
  {
    menuTitle: "Dashboard",
    name: routeUrl?.Map?.name,
    path: routeUrl?.Map?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Dashboard",
    name: routeUrl?.Insight?.name,
    path: routeUrl?.Insight?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Management",
    name: "Water",
    menuType: "dropdownMenu",
    Children: [
      {
        name: routeUrl?.Field?.name,
        path: routeUrl?.Field?.url,
      },
      {
        name: routeUrl?.MeasurementPoint?.name,
        path: routeUrl?.MeasurementPoint?.url,
      },
      {
        name: routeUrl?.District?.name,
        path: routeUrl?.District?.url,
      },
    ],
  },
  {
    menuTitle: "Management",
    name: routeUrl?.Billings?.name,
    path: routeUrl?.Billings?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Management",
    name: routeUrl?.Crops?.name,
    path: routeUrl?.Crops?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Management",
    name: routeUrl?.Customers?.name,
    path: routeUrl?.Customers?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Management",
    name: routeUrl?.Allocations?.name,
    path: routeUrl?.Allocations?.url,
    menuType: "mainMenu",
  },

  {
    menuTitle: "Report",
    name: routeUrl?.CustomReport?.name,
    path: routeUrl?.CustomReport?.url,
    menuType: "mainMenu",
  },

  {
    menuTitle: "Report",
    name: routeUrl?.DailyReport?.name,
    path: routeUrl?.DailyReport?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Other",
    name: "Settings",
    path: routeUrl?.Settings?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Other",
    name: "Profile",
    path: routeUrl?.Profile?.url,
    menuType: "mainMenu",
  },
  {
    menuTitle: "Other",
    name: "Help",
    path: routeUrl?.Help?.url,
    menuType: "mainMenu",
  },
];
