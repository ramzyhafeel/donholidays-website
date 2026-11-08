/**
 * Server entry used only at build time to prerender every public route into
 * static HTML (see src/scripts/prerender.mjs). Not shipped to the browser.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { allRoutes, getSeoForPath } from "./data/seo";
import { site } from "./data/site";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}

export { allRoutes, getSeoForPath, site };
