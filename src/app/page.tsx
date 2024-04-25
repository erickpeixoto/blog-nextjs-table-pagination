import { getUsers } from "@/actions/user";
import { List } from "@/components/users/list";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="w-full px-10">
      <List users={users} />
    </div>
  );
}
