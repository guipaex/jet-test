import MobileTable from "./components/MobileTable";
import Table from "./components/Table";
import db from "./utils/database.json";

export default function Home() {
  const heads = ['Car', 'Next Reservation', 'Status', 'Rating', 'Actions']
  return (
    <main className="flex min-h-screen max-w-[1440px] items-center justify-center bg-white m-auto">
      <Table data={db} heads={heads}/>
      <MobileTable data={db} heads={heads}/>
    </main>
  );
}
