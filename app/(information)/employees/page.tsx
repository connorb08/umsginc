import Employees from "@/components/information/employees";

export default async function ResourcesPage() {
    
    return (
        <section className="w-1/2">
            <div className="w-4/5 justify-center items-center m-auto bg-black dark:bg-gray-900 bg-cover">
                {/* @ts-ignore */}
                <Employees />
            </div>
        </section>
    );
}
