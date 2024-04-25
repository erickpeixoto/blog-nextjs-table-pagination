import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <>
      <form className="flex gap-2">
        <Input type="text" placeholder="Search" className="search" />
        <Button type="submit" className="btn">
          Go
        </Button>
      </form>
    </>
  );
}
