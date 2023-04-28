import Header from "@/components/Dashboard/header";
import Sidebar from "@/components/Dashboard/sidebar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            <Header />
            <Sidebar />
            <main className="absolute flex top-16 left-64 w-[calc(100vw-16rem)]">
                {children}
            </main>
        </div>
    );
}
