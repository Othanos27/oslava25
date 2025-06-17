"use client";

import { styled } from "@mui/material";

export function FormSection() {
  return (
    <FormWrapper>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdMUh87L4FWfexQvFHLPVcukr3NUtufhHEwGUuwqpuawGPB8A/viewform?embedded=true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      >
        Načítání…
      </iframe>
    </FormWrapper>
  );
}

const FormWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingTop: "69%",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "55%",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "45%",
  },
}));
