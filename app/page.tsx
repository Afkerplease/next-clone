import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { NavMenu } from "@/components/NavMenu";

export default function Home() {
  return (
    <main className=" bg-black h-[100vh] ">
      <h1 className="  text-center text-yellow-300 ">Hello world</h1>
      <Button className="    ">Click</Button>
      <NavMenu />
    </main>
  );
}
