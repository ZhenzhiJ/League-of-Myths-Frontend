export interface NavigationOptionsStructure {
  paths: string[];
  texts: string[];
}

export const isLoggedOptions: NavigationOptionsStructure = {
  paths: ["/home", "/my-champions", "/create", "/logout"],
  texts: ["Home", "My champions", "Create", "Logout"],
};

export const notLogguedOptions: NavigationOptionsStructure = {
  paths: ["/home", "/register", "/login"],
  texts: ["Home", "Register", "Login"],
};
