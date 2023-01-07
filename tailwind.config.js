module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B224E",
        dropdown: "#173578",
        buttonBg: "#549DC7",
        homeBg: "rgba(84, 137, 199, 0.1)",
        textPrimary: "#172A51",
        textSecondary: "#202020",
        testimonialBg: "rgba(84, 137, 199, 0.3)",
        love: "#FE3F84",
        experience: "#F5A71F",
        footerBg: "#5489C7",
        blurcolor: "#919191D9",
        social: "#1759A7",
        blueCard1: "#476481",
        blueCard2: "#3498DB",
        greenCard1: "#4D6C34",
        greenCard2: "#3CA55C",
        redCard1: "#BC5049",
        redCard2: "#DD8478",
        contact: "#65AEE0",
        aboutCard: "#E6F1FF"
      },
      fontFamily: {
        roboto: "Roboto"
      },
      boxShadow: {
        cards: "0px 4px 30px 3px rgba(0, 0, 0, 0.15)"
      },
      dropShadow: {
        animation: "0px 0px 15px #65AEE0"
      },
      height: {
        "440": "440px"
      },
      width: {
        "450": "450px"
      },
      borderRadius: {
        "2xl": "20px",
        xl: "10px"
      },
      fontSize: {
        "40": "38px"
      },
      inset: {
        132: "132px"
      }
    }
  },
  plugins: []
};
