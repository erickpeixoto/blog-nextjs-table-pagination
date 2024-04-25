export default async function Home() {
  const data = await fetch("https://662a34a567df268010a2f99a.mockapi.io/api/v1/users");
  const users = await data.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      here
      
    </main>
  );
}
