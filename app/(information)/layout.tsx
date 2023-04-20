import Footer from "@/components/Footer";

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
}
