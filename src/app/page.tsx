import { List } from "@/components/users/list";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-cache",
  });
  const users = await data.json();

  return (
    <div className="w-full px-10">
      <List users={users} />
    </div>
  );
}
