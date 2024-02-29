import Image from "next/image";
import Table from "./components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] items-center justify-center bg-white m-auto">
      <Table/>
    </main>
  );
}
