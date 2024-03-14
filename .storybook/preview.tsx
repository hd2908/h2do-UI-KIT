import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyles from "../stories/assets/global/GlobalStyles";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
