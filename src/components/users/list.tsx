"use client";

import { User } from "@/lib/schemas/user";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/users/columns";

export function List({ users }: { users: User[] }) {
  return <DataTable columns={columns} data={users} />;
}
