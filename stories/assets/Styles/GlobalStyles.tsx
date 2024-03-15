import { createGlobalStyle } from "styled-components";
import PretendardBold from "../fonts/Pretendard-Bold.subset.woff";
import PretendardBold2 from "../fonts/Pretendard-Bold.subset.woff2";
import PretendardRegular from "../fonts/Pretendard-Regular.subset.woff";
import PretendardRegular2 from "../fonts/Pretendard-Regular.subset.woff2";
import PretendardLight from "../fonts/Pretendard-Light.subset.woff";
import PretendardLight2 from "../fonts/Pretendard-Light.subset.woff2";
import Colors from "./Theme";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url(${PretendardBold2}) format('woff2'), url(${PretendardBold}) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url(${PretendardRegular2}) format('woff2'), url(${PretendardRegular}) format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url(${PretendardLight2}) format('woff2'), url(${PretendardLight}) format('woff');
  }
`;
export default GlobalStyles;
