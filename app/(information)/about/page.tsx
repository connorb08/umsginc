import Employees from "@/components/information/employees";

export default async function AboutPage() {

    const EV = await Employees();
    const EmployeeViewer = () => {return EV}

    return (
        <section>
            <div className="w-full bg-white">
                <div className="w-4/5 justify-center items-center m-auto">
                    <EmployeeViewer />
                </div>
            </div>
        </section>
    );
}
