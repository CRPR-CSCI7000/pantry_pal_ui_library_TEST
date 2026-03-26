/**
 * SnackbarProvider — reads from Redux `snackbarState` and renders an MUI Snackbar.
 *
 * Requires store shape:
 *   snackbarState: { open: boolean, message: string, severity: string }
 *
 * Dispatch `{ type: 'REMOVE_SNACKBAR' }` to dismiss.
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";

const SnackbarProvider = () => {
  const dispatch = useDispatch();
  const {
    open,
    message,
    severity,
    autoHideDuration = 6000,
  } = useSelector((state) => state.snackbarState);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    dispatch({ type: "REMOVE_SNACKBAR", payload: {} });
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarProvider;
