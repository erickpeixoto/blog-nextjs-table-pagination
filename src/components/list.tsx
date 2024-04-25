import { User } from "@/lib/schemas/user";

export function List( { users }: { users: User[] }) {

  return (
    JSON.stringify(users)
  )
}