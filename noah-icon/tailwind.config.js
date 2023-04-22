/**
 * @type {import("tailwindcss").Config;}
 */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      // Chris
      chris: "#F4D937",
      "chris-thin": "#FCEA7F",
      "chris-bg": "#F8F7F2",
      // Highlight
      "highlight-normal": "#DEDEDE",
      "highlight-dark": "#B0B0B0",
      "highlight-light": "#F0F0F0",
      "action-primary": "#F4F1DD",
      "action-secondary": "#F5EDB7",
      "action-tertiary": "#F0EDDB",
      caution: "#DB3059",
      copy: "#FFFADA",
      link: "#347B9F",
      "link-thin": "#6EC2EE",
      white: "white",
      primary: "#4a410a",
      success: "#A6E8A0",
      finish: "#F5B2A3",
      "noah-bg": "#F4F2F8",
    },
    extend: {
      spacing: {
        4.5: "1.125rem",
        "1/3": "33.33333333%",
        modal: "46rem",
        filter: "30rem",
        member: "18rem",
        menu: "15rem",
        button: "9rem",
        card: "25rem",
        file: "20rem",
        search: "20rem",
      },
      backgroundColor: {
        modal: "#33333366",
        current: "currentColor",
      },
      backgroundImage: {
        noah: "linear-gradient(100deg, #be3d7d, #d9858f, #c5897f, #6e97b3)",
        "chris-sign-up":
          "linear-gradient(100deg, #F4D937, #FCEA7F, #F8E858, #D9BA24)",
      },
      textColor: {
        primary: "#4a410a",
        secondary: "#C4D4D9",
      },
      fontSize: {
        inherit: "inherit",
      },
      borderColor: {
        current: "currentColor",
        transparent: "transparent",
      },
      minWidth: {
        "1/3": "33.33333333%",
        modal: "46rem",
        filter: "30rem",
        member: "18rem",
        menu: "15rem",
        button: "9rem",
      },
      maxWidth: {
        filter: "30rem",
        search: "20rem",
        modal: "46rem",
      },
      animation: {
        "bouncing-loader": "bouncing-loader 0.6s infinite alternate",
        "bouncing-right": "bounce-right 1s infinite",
      },
      keyframes: {
        "bouncing-loader": {
          to: {
            opacity: "0.3",
            transform: "scale(0.5)",
          },
        },
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(10px)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss/plugin")(({ addVariant, addUtilities }) => {
      addVariant("last-2", "&:nth-last-child(2)");
      addUtilities({
        ".hidden-scrollbar": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none",
          },
          "& *::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none",
          },
          "& *": {
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
          },
        },
      });
    }),
  ],
};
