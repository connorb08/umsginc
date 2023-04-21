import Employees from "@/components/information/employees";

export default async function ResourcesPage() {

    const EV = await Employees();
    const EmployeeViewer = () => {return EV}
    
    return (
        <section className="w-1/2">
            <div className="w-4/5 justify-center items-center m-auto bg-black dark:bg-gray-900 bg-cover">
                <EmployeeViewer />
            </div>
        </section>
    );
}
