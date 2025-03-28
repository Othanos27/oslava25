import Layout from "@/components/layout";
import { CountdownSection } from "@/components/CountdownSection";
import { VideoSection } from "@/components/VideoSection";
import { InfoSection } from "@/components/InfoSection";

export default function Home() {
  return (
    <Layout>
      <VideoSection />
      <CountdownSection />
      <InfoSection />
      CO BUDE NIZ?
      <p style={{ margin: "2rem" }}>
        krome instrukci bych se pokusil pridat nejakej formular na potvrzeni ucasti, nevim jak se mi povede ale :D
      </p>
    </Layout>
  )       
}
