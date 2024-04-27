import { Search } from "@/components/search";
import Link from "next/link";

export async function NavBar() {
  return (
    <div className="flex justify-between p-5 border mb-5">
      <div className="strong text-slate-800 font-semibold text-2xl text-center       ">
        <Link href="/" prefetch={false}>Demo App List</Link>
     </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
