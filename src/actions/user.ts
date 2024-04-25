"use server";

import { User } from "@/lib/schemas/user";

export async function getUsers(): Promise<User[]> {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-cache",
  });
  return users.json();
}
