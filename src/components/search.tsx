"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch, UserSearchSchema } from "@/lib/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSearchParams, useRouter } from "next/navigation";

export function Search() {
  const { register, handleSubmit, reset } = useForm<UserSearch>({
    resolver: zodResolver(UserSearchSchema),
  });
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = (data: UserSearch) => {
    if (data.param) {
      params.set("search", data.param);
    } else {
      params.delete("search");
    }
    replace(`/search?${params.toString()}`);
    reset();
  };

  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit(handleSearch)}>
        <Input
          type="text"
          placeholder={params.get("search") || "Search"}
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
