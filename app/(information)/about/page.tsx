import Employees from "@/components/information/employees";

export default async function AboutPage() {

    return (
        <section>
            <div className="w-full bg-white">
                <div className="w-4/5 justify-center items-center m-auto">
                    {/* @ts-expect-error Server Component */}
                    <Employees />
                </div>
            </div>
        </section>
    );
}
