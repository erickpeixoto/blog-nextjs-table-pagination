"use client";

import { User, UserSchema } from "@/lib/schemas/user";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { handleErrors } from "@/lib/utils";

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });

  const processSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(processSubmit)}
      className="flex flex-col max-w-md m-auto gap-y-3 "
    >
      <Label>Fill the form to create a new user</Label>
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

      <Button
        type="submit"
        variant="secondary"
        className="hover:bg-indigo-500 transition-all hover:text-white"
      >
        Send
      </Button>
    </form>
  );
}
