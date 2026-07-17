export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const themes: Record<Theme, Record<string, string>> = {
  [Theme.Light]: {
    "--bg-color": "#F5F1EAEB",
    "--bg-gradient-1":
      "rgba(217, 131, 36, 0.55) 0%, rgba(70, 130, 180, 0.22) 40%, transparent 60%",
    "--bg-gradient-2": "rgba(255, 190, 100, 0.30) 0%, transparent 28%",
    "--bg-gradient-3": "rgba(149, 205, 255, 0.15) 0%, transparent 24%",
    "--text-color": "#040F0F",
    "--hover-color": "#C98B4A",
    "--active-color": "#D98324",
    "--header-bg-color": "#4682B429",
    "--header-logo-outline-color": "#F5F1EAEB",
    "--hero-contact-btn-bg-color": "#040F0F",
    "--hero-contact-btn-txt-color": "#F5F1EAEB",
    "--skills-panel-bg-color": "#F5FAFA",
  },
  [Theme.Dark]: {
    "--bg-color": "#040F0F",
    "--bg-gradient-1":
      "rgba(217, 131, 36, 0.35) 0%, rgba(70, 130, 180, 0.22) 40%, transparent 60%",
    "--bg-gradient-2": "rgba(255, 190, 100, 0.18) 0%, transparent 28%",
    "--bg-gradient-3": "rgba(149, 205, 255, 0.12) 0%, transparent 24%",
    "--text-color": "#F5F1EAEB",
    "--hover-color": "#C98B4A",
    "--active-color": "#D98324",
    "--header-bg-color": "#4682B429",
    "--header-logo-outline-color": "#040F0F",
    "--hero-contact-btn-bg-color": "#F5F1EAEB",
    "--hero-contact-btn-txt-color": "#040F0F",
    "--skills-panel-bg-color": "#0B0F14",
  },
};
