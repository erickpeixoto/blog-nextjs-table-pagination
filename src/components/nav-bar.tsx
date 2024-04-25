import { Search } from "@/components/search";

export async function NavBar() {
  return (
    <div className="flex justify-between p-5 border">
      <div className="strong text-slate-800 font-semibold text-2xl text-center       ">
        Pagination List
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
