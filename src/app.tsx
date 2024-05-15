import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NavigationProgress } from "@mantine/nprogress";
import "@mantine/nprogress/styles.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { theme } from "./configs/custom-theme/theme";
import { router } from "./configs/routes";

ReactDOM.createRoot(document.getElementById("root-app") as HTMLElement).render(
  <StrictMode>
    <MantineProvider theme={theme} classNamesPrefix="p4g">
      <NavigationProgress />
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
