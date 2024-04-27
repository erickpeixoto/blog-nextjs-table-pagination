import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleErrors(errors: Record<string, any>, key?: string) {
  if (!Object.keys(errors).length) return null;

  if (key) {
    return (
      <div className="p-3 bg-red-300 text-white border-2 border-red-400 rounded">
        {errors[key]?.message}
      </div>
    );
  }

  return (
    <div className="p-3 bg-red-300 text-white border-2 border-red-400 rounded">
      {Object.values(errors).map((error) => (
        <p key={error.message}>{error.message}</p>
      ))}
    </div>
  );
}
