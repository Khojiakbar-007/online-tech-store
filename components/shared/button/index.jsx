import Link from "next/link";
// import { styled } from "@mui/material/styles";
import { Button, IconButton } from "@mui/material";

function CustomButton({
  type = "button" /* "icon-button" - II */,
  variant = "text",
  href = "",
  extraStyles = {},
  children,
}) {
  return (
    <Link href={href}>
      {type === "button" ? (
        <Button
          sx={{ color: "black", textTransform: "capitalize", ...extraStyles }}
          variant={variant}
          component="span"
        >
          {children}
        </Button>
      ) : (
        <IconButton
          sx={{ color: "black", textTransform: "capitalize", ...extraStyles }}
          variant={variant}
          component="span"
        >
          {children}
        </IconButton>
      )}
    </Link>
  );
}

export default CustomButton;
