export const break_points_value = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

export const devices = {
  xs: `(min-width: ${break_points_value.xs})`,
  sm: `(min-width: ${break_points_value.sm})`,
  md: `(max-width: ${break_points_value.md})`,
  lg: `(min-width: ${break_points_value.lg})`,
  xl: `(min-width: ${break_points_value.xl})`,
  xxl: `(min-width: ${break_points_value.xxl})`,
}

export const media_break_points = {
  phone_only: '@media only screen and (max-width: 600px)',
  tablet_portrait_only: '@media only screen and (min-width: 600px) and (max-width: 1024px)',
  tablet_landscape_only: '@media only screen and (min-width: 1024px) and (max-width: 1224px)',
  tablet_landscape_up: '@media only screen and (min-width: 1024px)',
  tablet_landscape_down: '@media only screen and (max-width: 1224px)',
  laptop_only: '@media only screen and (min-width: 1225px) and (max-width:1800px)',
  desktop_up: '@media only screen and (min-width: 1440px)',

  xs: `@media only screen and (max-width: ${break_points_value.xs}px)`,
  sm: `@media only screen and (min-width: ${break_points_value.sm}px)`,
  sm_up_to_lg: `@media only screen and (min-width: ${break_points_value.sm}px) and (max-width: ${
    break_points_value.lg - 0.2
  }px)`,
  sm_up_to_xl_x: `@media only screen and (min-width: ${break_points_value.sm}px) and (max-width: ${1439}px)`,
  md: `@media only screen and (min-width: ${break_points_value.md}px)`,
  md_down: `@media screen and (max-width: ${break_points_value.md}px)`,
  lg: `@media only screen and (min-width: ${break_points_value.lg}px)`,
  xl: `@media only screen and (min-width: ${break_points_value.xl}px)`,
  xxl: `@media only screen and (min-width: ${break_points_value.xxl}px)`,
}
