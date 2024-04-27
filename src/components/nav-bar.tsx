import { Search } from "@/components/search";
import Link from "next/link";
import { Button } from "./ui/button";

export async function NavBar() {
  return (
    <div className="flex justify-between p-5 border mb-5">
      <div className="strong text-slate-800 font-semibold text-2xl text-center       ">
        <Link href="/">App List</Link>
      </div>
      <div className="flex gap-x-2">
        <Link href="/user/new">
          <Button variant={"outline"}>New</Button>
        </Link>
        <Search />
      </div>
    </div>
  );
}
