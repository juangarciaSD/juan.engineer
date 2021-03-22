const themes = {
    dark: {
      text: "#ffffff",
      "highlight-color": "#127796",
      "widget-background": "#000000",
      background: "#181a1b",
      border: "#3854FC"
    },
    light: {
      text: "#000000",
      "highlight-color": "#127796",
      "widget-background": "#ffffff",
      background: "#ffffff",
      border: "#3854FC"
    },
  };
  
  export function SetTheme(theme_name: "light" | "dark") {
    const theme = themes[theme_name];
    for (const key in theme)
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    localStorage.setItem("theme-name", theme_name);
  }
  
  export function ToggleTheme() {
    const current_theme = localStorage.getItem("theme-name") || "light";
    SetTheme(current_theme == "light" ? "dark" : "light");
    return;
  }