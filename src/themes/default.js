// Common styles for both themes
const commonStyles = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  breakpoints: {
    xs: "screen and (max-width: 470px)",
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export const lightTheme = {
  ...commonStyles,
  colors: {
    primary1: "#334E68", // Converted HSL to HEX for consistency
    primary2: "#262626",
    primary3: "#333333", // Used HEX value instead of RGB for consistency
    background1: "#EDF1F7",
    accent1: "#FAC05E", // Converted HSL to HEX for consistency
    button: "#3B82F6", // Converted HSL to HEX for consistency
    background2: "#E2E8F0", // Converted HSL to HEX for consistency
    boxShadow: "0px 14px 15px #727272",
  },
};

export const darkTheme = {
  ...commonStyles,
  colors: {
    primary1: "#F0F4F8", // Converted HSL to HEX for consistency
    primary2: "rgba(255, 255, 255, 0.5)",
    primary3: "rgba(255, 255, 255, 0.75)",
    background1: "#0F1624",
    accent1: "#FAC05E", // Reused from light theme for consistency
    button: "#3B82F6", // Reused from light theme for consistency
    background2: "#1C2331", // Converted HSL to HEX for consistency
    boxShadow: "0px 14px 15px #999999",
  },
};
