import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          This is your dashboard page.
        </p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium">Total Notes</h3>
            <p className="mt-2 text-3xl font-bold text-primary">24</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium">Categories</h3>
            <p className="mt-2 text-3xl font-bold text-primary">8</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium">Recent Activity</h3>
            <p className="mt-2 text-3xl font-bold text-primary">12</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
