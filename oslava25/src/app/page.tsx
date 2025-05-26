import Layout from "@/components/layout";
import { CountdownSection } from "@/components/CountdownSection";
import { VideoSection } from "@/components/VideoSection";
import { InfoSection } from "@/components/InfoSection";
import { FormSection } from "@/components/FormSection";
import { MoreInfoSection } from "@/components/MoreInfoSection";

export default function Home() {
  return (
    <Layout>
      <VideoSection />
      <CountdownSection />
      <InfoSection />
      <FormSection />
      <MoreInfoSection />
      <VideoSection />
    </Layout>
  );
}
