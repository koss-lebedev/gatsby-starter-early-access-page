enum ScreenSize {
  XS = 375,
  SM = 450,
  MD = 768,
  LG = 1280,
  XL = 1600,
}

const mq = {
  xsmall: `@media (min-width: ${ScreenSize.XS / 16}em)`,
  small: `@media (min-width: ${ScreenSize.SM / 16}em)`,
  medium: `@media (min-width: ${ScreenSize.MD / 16}em)`,
  large: `@media (min-width: ${ScreenSize.LG / 16}em)`,
  xlarge: `@media (min-width: ${ScreenSize.XL / 16}em)`,
}

export default mq