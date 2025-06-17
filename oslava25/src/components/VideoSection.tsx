"use client";

import { styled } from "@mui/material";
import Image from "next/image";

export function VideoSection() {
  return (
    <VideoContainer>
      <Image
        alt="Foto z čtyřtisícovky najebané na Laškovskou louku"
        src="/fotopozvanka.jpg"
        fill
        // style={{ objectFit: "cover" }}
      />
    </VideoContainer>
  );
}

const VideoContainer = styled("div")(
  ({ theme }: { theme: import("@mui/material").Theme }) => ({
    width: "100%",
    height: "50.625vw", // 16:9 aspect ratio (height = width * 9 / 16)
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: "2rem",
    fontWeight: 700,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
    position: "relative",
  })
);
