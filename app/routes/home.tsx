import type { Route } from "./+types/home";
import Topbar from "~/topbar/topbar";
import Section from "~/section/section";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Q Anfra" },
    { name: "description", content: "Welcome to Q Anfra" },
  ];
}

export default function Home() {
  return (
    <>
      <Topbar />
      <Section />
    </>
  );
}
