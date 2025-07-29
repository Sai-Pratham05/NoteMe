import { Logout } from "@/components/logout";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-4 text-lg">This is your dashboard page.</p>
      <Logout />
    </div>
  );
}