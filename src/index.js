import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "theme-ui";

import { theme } from "./theme";

import { MatterStepThree } from "./MatterStepThree";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MatterStepThree />
    </ThemeProvider>
  </StrictMode>
);
