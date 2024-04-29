"use client";

import { DataTable } from "@/components/data-table";
import { Columns } from "@/components/users/columns";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers, deleteUser } from "@/actions/user";
import { User } from "@/lib/schemas/user";

export function List() {
  const params = useSearchParams();
  const search = params.get("search");

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(search as string),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: (id: string) => deleteUser(id),
    onSuccess(data) {
      toast.success("User deleted successfully");
      queryClient.setQueryData<Partial<User>[]>(["users"], (currentUsers) => {
        return currentUsers?.filter((user) => user.id !== data.id);
      });
    },
  });
  const handleDelete = (id: string | undefined) => {
    mutation.mutate(id!);
  };
  const columns = Columns({ handleDelete });

  return <DataTable columns={columns} data={users} />;
}
