"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { User } from "@/lib/schemas/user";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ConfirmDialog } from "@/components/confirm-dialog";
import { Trash2, Edit2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ColumnsProps {
  handleDelete: (id: string | undefined) => void;
}

export function Columns({ handleDelete }: ColumnsProps) {
  const columns: ColumnDef<User>[] = [
    {
      header: "Profile",
      accessorKey: "avatar",
      cell: ({ row }) => {
        const user = row.original;

        return (
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(user.created_at ?? 0))}
          </>
        );
      },
    },
    {
      header: "actions",
      cell: ({ row }) => {
        const user = row.original;
        const [isModalOpen, setModalOpen] = useState(false);
        const [id, setId] = useState<string | undefined>("");
        const onDelete = () => {
          setModalOpen(false);
          handleDelete(id);
        };
        return (
          <div className="flex gap-x-2 justify-center">
            <Link href={`/user/${user.id}`}>
              <Button variant="outline">
                <Edit2Icon size={16} />
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                setId(user.id);
                setModalOpen(true);
              }}
            >
              <Trash2 size={16} />
            </Button>
            {isModalOpen && (
              <ConfirmDialog
                open={isModalOpen}
                title="Delete User"
                description={`Are you sure you want to delete ${user.name}?`}
                onConfirm={onDelete}
                onDismiss={() => setModalOpen(false)}
              />
            )}
          </div>
        );
      },
    },
  ];

  return columns;
}
