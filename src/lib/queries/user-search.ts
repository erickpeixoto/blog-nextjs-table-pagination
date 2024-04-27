
import { searchUsers } from "@/actions/user"
import { QueryClient, useQuery } from "@tanstack/react-query"

export function useGetUsers(param: string) {

  const clientQuery = new QueryClient()
  const { data, error, isLoading } = useQuery({
    queryKey: ["users", param],
    queryFn: () => searchUsers(param) 
  });
  

  return { data, error, isLoading }
  
}
