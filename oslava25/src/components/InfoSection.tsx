"use client";

import { Button, styled, type SxProps } from "@mui/material";
import { Link } from "./common";
import theme from "@/styles/theme";

export function InfoSection() {
  return (
    <InfoContainer>
      <InfoBox label="Kdy?">
        <p>
          Hlavní oslava bude v <strong>sobotu 30.8. od 15:00</strong>. Rádi vás
          ale uvidíme už na <strong>páteční before party</strong> cca v{" "}
          <strong>17:00</strong>. Konec pak bude v neděli podle toho, jak se
          vyspíte. Budeme ale rádi za každou pomoc s úklidem.
        </p>
        <Button
          sx={BUTTON_SX}
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Oťas+a+Filda+50+let&dates=20250829T150000Z/20250831T110000Z&details=Nenech+si+ujít+super+party+kámo!&location=Laškov,+Česko&sf=true&output=xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          Přidat událost do Google kalendáře
        </Button>
      </InfoBox>
      <Divider />
      <InfoBox label="Kde?">
        <p>
          Laškovská louka. Tu už určitě znáte z předchozích oslav. Pro jistotu
          tady máte mapku. Kdybyste ani tak nevěděli, jak se na oslavu dostat,
          mrkněte <Link href="#">sem</Link>.{" "}
          <i>(TODO: odkaz někam níž, budou tam instrukce)</i>
        </p>
        <Map />
      </InfoBox>
      <Divider />
      <InfoBox label="Co s sebou?">
        <ul style={{ listStyleType: "none", lineHeight: "1.25rem" }}>
          <li>Tvrdej, nealko a jídlo</li>
          <li>Něco na pivo (krygl nebo kelímek)</li>
          <li>Spacák a karimatku</li>
          <li>Stan, plachtu, hamaku, ...</li>
          <li>Partnera či partnerku</li>
        </ul>
      </InfoBox>
    </InfoContainer>
  );
}

const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "flex-start",
  textAlign: "center",
  gap: "1rem",
  marginBottom: "2rem",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "0.5rem",
  },
});

const Divider = styled("div")(({ theme }) => ({
  width: "7px",
  height: "210px",
  backgroundColor: theme.palette.secondary.main,
  alignSelf: "center",
  "@media (max-width: 768px)": {
    display: "none",
    // width: "270px",
    // height: "2px",
  },
}));

const InfoBox = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <InfoBoxWrapper>
      <LabelWrapper>{label}</LabelWrapper>
      <ValueWrapper>{children}</ValueWrapper>
    </InfoBoxWrapper>
  );
};

const InfoBoxWrapper = styled("div")({
  padding: "1rem",
  flexDirection: "column",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".5rem",
  "@media (max-width: 768px)": {
    gap: ".25rem",
  },
});

const LabelWrapper = styled("div")({
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: "1rem",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

const ValueWrapper = styled("div")({
  fontSize: "1rem",
  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
});

function Map() {
  return (
    <iframe
      style={{
        border: "none",
        borderRadius: "1rem",
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        aspectRatio: "3 / 2",
        marginTop: "1rem",
      }}
      src="https://mapy.cz/s/pecutaceta"
    >
      map is loading
    </iframe>
  );
}

const BUTTON_SX = {
  display: "block",
  margin: "1rem auto 0 auto",
  justifyContent: "center",
    textAlign: "center",
  marginTop: "1rem",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.default,
  padding: ".5rem",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: theme.palette.link.main,
    color: theme.palette.primary.main,
  },
  "@media (max-width: 768px)": {
    fontSize: ".75rem",
    padding: ".5rem",
    width: "100%",
    maxWidth: "300px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
} as const satisfies SxProps;
