import { Search } from "@/components/search";

export async function NavBar() {
  return (
    <div className="flex justify-between p-5 border mb-5">
      <div className="strong text-slate-800 font-semibold text-2xl text-center       ">
        Demo App List
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
