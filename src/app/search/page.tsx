import { getUsers } from "@/actions/user";
import { NavBar } from "@/components/nav-bar";
import { List } from "@/components/users/list";
import { unstable_noStore as noStore } from 'next/cache';

import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  noStore();
  const queryClient = new QueryClient({});
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(searchParams.search as string),
    staleTime: 1000,
    
  });
  return (
    <div className="w-full px-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NavBar />
        <List />
      </HydrationBoundary>
    </div>
  );
}
