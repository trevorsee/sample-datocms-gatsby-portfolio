import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
  html {
    font-size: 14px;
  }
  body {
    font-stretch: normal;
    font-family: Graphik Web,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    font-feature-settings: "liga","kern";
    color: white;
    line-height: 1.25;
  }
  * {
    box-sizing: border-box;
  }
`
export default baseStyles
