import React from "react";

import { Container, CssBaseline } from "@mui/material";
import AuthLayout from "./layout/AuthLayout";
import Quiz from "./pages/Quiz";
import Router from "./routes";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";

const App = () => {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
};

export default App;
