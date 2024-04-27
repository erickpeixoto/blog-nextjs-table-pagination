"use server";

import { User } from "@/lib/schemas/user";

export async function getUsers(search: string) {
  if (search) {
    return searchUsers(search);
  }

  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-cache",
  });
  return users.json();
}

export async function searchUsers(param: string) {
  const mock = [
    {
      created_at: "2024-04-25T11:22:32.563Z",
      name: "Desiree Ryan",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/703.jpg",
      email: "Noemie.Considine3@gmail.com",
      id: "1",
    },
    {
      created_at: "2024-04-24T18:54:34.984Z",
      name: "Stuart Legros",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
      email: "Hal.Bruen61@gmail.com",
      id: "2",
    },
  ];
  return Promise.resolve(mock);
}

export async function saveUser(user: User) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
}
