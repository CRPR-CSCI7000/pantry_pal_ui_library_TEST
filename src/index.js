/**
 * @CRPR-CSCI7000/ui-library
 *
 * Public API — all components exported from here.
 * Consumers should import from '@CRPR-CSCI7000/ui-library', never from deep paths.
 */

// Components
export { default as Button } from "./components/Button/Button";
export { default as Card } from "./components/Card/Card";
export { default as CardHeader } from "./components/CardHeader/CardHeader";
export { default as DetailLine } from "./components/DetailLine/DetailLine";
export { default as Modal } from "./components/Modal/Modal";
export { default as Navbar } from "./components/Navbar/Navbar";
export { default as ProductGrid } from "./components/ProductGrid/ProductGrid";
export { default as SnackbarProvider } from "./components/Snackbar/SnackbarProvider";

// Styles (CSS variables)
export { COLORS } from "./styles/colors";

// Utils
export { consoleColor, logApiCall, basicAPI } from "./utils/utilsThisApp";
