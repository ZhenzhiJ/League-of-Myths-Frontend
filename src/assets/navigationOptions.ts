export interface NavigationOptionsStructure {
  paths: string[];
  texts: string[];
}

export const isLoggedOptions: NavigationOptionsStructure = {
  paths: ["/home", "/create", "/logout"],
  texts: ["Home", "Create", "Logout"],
};

export const notLogguedOptions: NavigationOptionsStructure = {
  paths: ["/home", "/register", "/login"],
  texts: ["Home", "Register", "Login"],
};
