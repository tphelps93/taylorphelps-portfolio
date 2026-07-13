export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const themes: Record<Theme, Record<string, string>> = {
  [Theme.Light]: {
    "--bg-color": "#F5F1EAEB",
    "--text-color": "#040F0F",
    "--hover-color": "#D98324",
    "--active-color": "#D98324",
    "--header-bg-color": "#4682B4",
    "--header-logo-outline-color": "#F5F1EAEB",
  },
  [Theme.Dark]: {
    "--bg-color": "#040F0F",
    "--text-color": "#F5F1EAEB",
    "--hover-color": "#D98324",
    "--active-color": "#D98324",
    "--header-bg-color": "#2E3532",
    "--header-logo-outline-color": "#040F0F",
  },
};
