import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Radikal", "sans-serif"],
  bodyFontFamily: ["BrandonText", "sans-serif"],
  // googleFonts: [
  //   {
  //     name: 'Radikal',
  //     styles: [
  //       '400',
  //       '400i',
  //       '700',
  //       '700i',
  //     ],
  //   },
  //   {
  //     name: 'BrandonText',
  //     styles: [
  //       '400',
  //       '400i',
  //       '700',
  //       '700i',
  //     ],
  //   },
  // ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
