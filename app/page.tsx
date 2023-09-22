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
