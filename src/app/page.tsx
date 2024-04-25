import { List } from "@/components/list";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users = await data.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List users={users} />
    </main>
  );
}
