"use client";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/users/columns";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/actions/user";
import { useSearchParams } from "next/navigation";

export function List() {
  const params = useSearchParams();
  const search = params.get("search");

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(search as string),
    staleTime: 1000,
    enabled: !search,
  });

  return <DataTable columns={columns} data={data} />;
}
