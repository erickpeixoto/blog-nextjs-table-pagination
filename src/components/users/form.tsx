"use client";

import { User, UserSchema } from "@/lib/schemas/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { handleErrors } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveUser } from "@/actions/user";
import { useRouter } from "next/navigation";

export function UserForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: (newUser: User) => saveUser(newUser),
    onSuccess(data) {
      queryClient.setQueryData<Partial<User>[]>(["users"], (currentUsers) => {
        return [...(currentUsers ?? []), data];
      });
      reset();
      router.push("/");
      toast.success("User created successfully");
    },
  });
  const { isPending, mutate: send } = mutation;

  return (
    <form
      onSubmit={handleSubmit((data) => send(data))}
      className="flex flex-col max-w-md m-auto gap-y-3 "
    >
      <Label className="text-xl">Create User</Label>
      {handleErrors(errors)}
      <Input
        type="text"
        placeholder="Name"
        className="input"
        {...register("name")}
      />

      <Input
        type="email"
        placeholder="Email"
        className="input"
        {...register("email")}
      />

      <Input
        type="text"
        placeholder="Avatar"
        className="input"
        {...register("avatar")}
      />

      <Button
        type="submit"
        variant="secondary"
        disabled={isPending}
        className="hover:bg-indigo-500 transition-all hover:text-white"
      >
        {isPending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
