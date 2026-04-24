/**
 * Button component.
 *
 * Props:
 *   children    - button label
 *   onClick     - click handler
 *   variant     - "contained" | "outlined" | "accent"  (default: "contained")
 *   size        - "sm" | "md" | "lg"  (default: "md")
 *   hasShadow   - boolean (default: false)
 *   disabled    - boolean (default: false)
 *   ariaLabel   - string (optional, for icon-only buttons)
 */
import React from "react";
import { Button as MuiButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const SIZE_MAP = {
  sm: { padding: "0.25rem 0.75rem", fontSize: "0.8rem" },
  md: { padding: "0.5rem 1rem", fontSize: "1rem" },
  lg: { padding: "0.75rem 1.5rem", fontSize: "1.1rem" },
};

const Button = ({
  children,
  hasShadow = false,
  onClick,
  variant = "contained",
  size = "md",
  disabled = false,
  ariaLabel,
}) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const sizeStyle = SIZE_MAP[size] || SIZE_MAP.md;

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: hasShadow ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
    },
    hover: {
      scale: 1.03,
      boxShadow: hasShadow ? "0px 4px 8px rgba(0,0,0,0.15)" : "none",
    },
    tap: { scale: 0.97, boxShadow: "none" },
  };

  const textVariants = {
    initial: { y: 0 },
    hover: { y: -1 },
    tap: { y: 1 },
  };

  const rippleVariants = {
    initial: { opacity: 0.8, scale: 0 },
    animate: {
      opacity: 0,
      scale: 5,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const common = {
    ...sizeStyle,
    borderRadius: "0.5rem",
    transition: "background-color 0.3s",
    textTransform: "none",
    whiteSpace: "nowrap",
    position: "relative",
    overflow: "hidden",
  };

  const styleMap = {
    contained: {
      ...common,
      border: "none",
      backgroundColor: "var(--coffee-dark)",
      color: "var(--text-light)",
      "&:hover": { backgroundColor: "var(--coffee-medium)" },
    },
    outlined: {
      ...common,
      border: "1px solid var(--coffee-cream)",
      backgroundColor: "transparent",
      color: "var(--text-light)",
      "&:hover": { backgroundColor: "rgba(230,210,181,0.1)" },
    },
    accent: {
      ...common,
      border: "none",
      backgroundColor: "var(--coffee-medium)",
      color: "var(--text-light)",
      "&:hover": { backgroundColor: "var(--coffee-dark)" },
    },
  };

  const MotionButton = motion(MuiButton);

  const handleClick = (e) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 800);
    if (onClick) onClick(e);
  };

  return (
    <MotionButton
      onClick={handleClick}
      variant={variant === "accent" ? "contained" : variant}
      disabled={disabled}
      disableElevation={!hasShadow}
      aria-label={ariaLabel}
      sx={styleMap[variant] || styleMap.contained}
      component={motion.button}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.span
        variants={textVariants}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        {children}
      </motion.span>
      <AnimatePresence>
        {isPressed && (
          <motion.span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.3)",
              zIndex: 0,
            }}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </MotionButton>
  );
};

export default Button;
