const { COLOR } = require("./color")

module.exports = {
  name: "smooth-theme",
  displayName: "smooth-theme",
  theme: {
    foreground: {
      default: COLOR.BLACK,
    },
    background: {
      default: COLOR.WHITE,
      success: COLOR.PURPLE,
      notice: COLOR.GRAY,
      warning: COLOR.GRAY,
      danger: COLOR.RED,
      surprise: COLOR.BLUE,
      info: COLOR.PURPLE,
    },
    styles: {
      dialogHeader: {
        background: {
          default: COLOR.PURPLE,
        },
        foreground: {
          default: COLOR.WHITE,
        },
        highlight: {
          md: COLOR.LIGHT_GRAY,
        },
      },
      transparentOverlay: {
        background: {
          default: `${COLOR.WHITE}80`,
        },
        foreground: {
          default: COLOR.BLACK,
        },
      },
      paneHeader: {
        background: {
          default: COLOR.WHITE,
          success: COLOR.PURPLE
        },
      },
    },
  },
};