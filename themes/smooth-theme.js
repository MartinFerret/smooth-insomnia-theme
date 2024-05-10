const { COLOR } = require("./color")

module.exports = {
  name: "smooth-theme",
  displayName: "smooth-theme",
  theme: {
    foreground: {
      default: COLOR.WHITE,
    },
    background: {
      default: COLOR.BLACK,
      success: COLOR.PURPLE,
      notice: COLOR.ORANGE,
      warning: COLOR.ORANGE,
      danger: COLOR.RED,
      surprise: COLOR.PURPLE,
      info: COLOR.PURPLE,
    },
    styles: {
      dialogHeader: {
        background: {
          default: COLOR.BLACK,
        },
        foreground: {
          default: COLOR.WHITE,
        },
        highlight: {
          md: COLOR.BLACK,
        },
      },
      transparentOverlay: {
        background: {
          default: `${COLOR.BLACK}80`,
        },
        foreground: {
          default: COLOR.WHITE,
        },
      },
      paneHeader: {
        background: {
          default: COLOR.BLACK,
          success: COLOR.PURPLE
        },
      },
    },
  },
};