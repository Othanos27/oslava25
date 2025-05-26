"use client";

import { styled } from "@mui/material";
import { Link } from "./common";

export function MoreInfoSection() {
  return (
    <Wrapper>
      <Title id="moreInfo">Podrobnější informace</Title>
      <p>
        Oslava bude venkovní - bude probíhat na louce, kolem velkého ohniště a v
        otevřené jídelně. Nebude tam elektřina ani tekoucí pitná voda (zajistíme
        ale kanystry). Jako záchod slouží krásná kadibudka. Spát se bude ve
        vlastních stanech (nebo klidně pod hvězdami).
      </p>
      <br />
      <p>
        Počasí máme objednané pěkné, ale i tak radši buďte připraveni na
        všechno. V noci může být chladno, tak si vezměte i teplé oblečení.
      </p>
      <br />
      <p>
        Na místě budeme mít bečku s pivem, nějaké nealko, vodu, něco málo k
        jídlu a welcome drink. Pokud nechcete mít hlad, radši si vemte i něco
        svého. Pokud máte nějaké oblíbené pití, vezměte ho s sebou, tvrdej je ve
        vaší vlastní režii.
      </p>
      <br />
      <i style={{fontSize: "12px"}}>TODO: doplnit odkazy, asi bude odkaz na slozky na google disku</i>
      <Links>
        ODKAZY:
        <Link href="#">Instrukce k cestě</Link>
        <Link href="#">Jak to na místě vypadá</Link>
      </Links>
      <br />
      <p>
        Těšíme se na vás a doufáme, že si to společně užijeme! Pokud máte
        jakékoliv otázky, tak se jednomu z nás ozvěte.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  paddingInline: "5vw",
  width: "100%",
  marginBottom: "2rem",
});

const Title = styled("div")({
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: "1rem",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

const Links = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "3rem",
  alignItems: "center",
});
