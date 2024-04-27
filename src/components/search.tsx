"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch, UserSearchSchema } from "@/lib/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function Search() {
  const { register, handleSubmit } = useForm<UserSearch>({
    resolver: zodResolver(UserSearchSchema),
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (data: UserSearch) => {
    const params = new URLSearchParams(searchParams);
    if (data.param) {
      params.set("search", data.param);
    } else {
      params.delete("search");
    }
    replace(`search/${pathname}?${params.toString()}`);
  };

  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit(handleSearch)}>
        <Input
          type="text"
          placeholder="Search"
          className="search"
          {...register("param")}
        />
        <Button type="submit" className="btn">
          Go
        </Button>
      </form>
    </>
  );
}
