import { styled } from "@mui/material";

export function Link({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const Wrapper = styled("span")(({ theme }) => ({
    fontWeight: 800,
    color: theme.palette.secondary.main,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.link.main,
    },
  }));

  return (
    <Wrapper>
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Wrapper>
  );
}
