export const routesPrefixes = {
  accountList: "/account-list",
  movements: "/movements",
  transfer: "/transfer",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: "/create-account",
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
