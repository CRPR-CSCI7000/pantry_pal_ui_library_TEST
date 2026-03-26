# @CRPR-CSCI7000/ui-library

Shared React component library for PantryPal apps.

## Install

```bash
# From npm (once published)
npm install @CRPR-CSCI7000/ui-library

# From GitHub Packages
npm install @CRPR-CSCI7000/ui-library --registry https://npm.pkg.github.com
```

## Peer Dependencies

```bash
npm install react react-dom @mui/material @mui/icons-material \
  @emotion/react @emotion/styled framer-motion react-redux react-router-dom
```

## Usage

```jsx
// 1. Import CSS variables once in your app entry point
import "@CRPR-CSCI7000/ui-library/dist/colors.css";

// 2. Import components
import {
  Button,
  Card,
  CardHeader,
  ProductGrid,
  Navbar,
} from "@CRPR-CSCI7000/ui-library";
```

## Components

| Component          | Key Props                                                            |
| ------------------ | -------------------------------------------------------------------- |
| `Button`           | `variant` ("contained"\|"outlined"\|"accent"), `onClick`, `disabled` |
| `Card`             | `children` (auto-promotes `<CardHeader>`)                            |
| `CardHeader`       | `text`, `buttons: [{text, onClick, variant}]`                        |
| `DetailLine`       | `title`, `isCollapsed`, `onToggleCollapse`                           |
| `Modal`            | `modal_id`, `title`, `buttons`, `style`                              |
| `Navbar`           | `isLoggedIn`, `onLogout`, `links`, `brandName`                       |
| `ProductGrid`      | `data: [{id,name,expiry,image,quantity}]`, `onItemClick`, `onDelete` |
| `SnackbarProvider` | _(no props — reads from Redux)_                                      |

## Redux Contract

`Modal` and `SnackbarProvider` read from Redux. Your store must include:

```js
// modalState
{ [modal_id]: boolean }
// Toggle with:
dispatch({ type: 'TOGGLE_MODAL', payload: { modal_id } })

// snackbarState
{ open: boolean, message: string, severity: string }
// Dismiss with:
dispatch({ type: 'REMOVE_SNACKBAR', payload: {} })
```

## Building

```bash
npm run build   # outputs to dist/
npm run dev     # watch mode
```

## Versioning & Breaking Changes

This library follows semver. **Any prop rename, removal, or Redux contract change is a breaking change and requires a major version bump.**
