"use client";

import { styled } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  marginInline: "5vw",
  [theme.breakpoints.down("sm")]: {
    marginInline: "0",
  },
}));
