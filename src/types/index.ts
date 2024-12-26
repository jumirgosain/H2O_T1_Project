type ChildrenType = {
  name: string;
  path: string;
};
export type MenuListType = {
  menuTitle: "Dashboard" | "Management" | "Report" | "Other"; // Add more menuTitle here as well as in menuTitleList located at src/utilities/constant.ts
  name: string;
  path?: string;
  menuType: "mainMenu" | "dropdownMenu";
  Children?: ChildrenType[];
}[];
