import { Multirow } from "@components/sections";
import { Layout, Page } from "@layout";

export default function Contact() {
  const sections = [
    {
      imageUrl: "",
      content: [],
      header: "Contact crider's institute of welding technology",
      links: [{ href: "", display: "" }],
    },
  ];
  return (
    <Layout pageTitle="CIWT Business Information" noHero showVideo={false}>
      <Multirow sideBySide sections={[]}></Multirow>
    </Layout>
  );
}
