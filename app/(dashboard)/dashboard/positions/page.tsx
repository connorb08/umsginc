import { DBPosition } from "@/db/models/position";

export const dynamic = 'force-dynamic'

const getPositions = new Promise<DBPosition[]>(async (resolve, reject) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/positions`);// as Promise<DBPosition[]>;
        const data = await res.json() as DBPosition[];
        resolve(data);
    } catch (error) {
        reject(error);
    }
});

export default async function Positions() {
    const data = await getPositions;

    return (
        <>
            <div className="flex items-center justify-center w-full h-full">
                <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Holder
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Division
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((position, index) => {
                            return(
                            <tr 
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {position.title}
                            </th>
                            <td className="px-6 py-4">{position.holder}</td>
                            <td className="px-6 py-4">{position.division}</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href={`/dashboard/positions/patch?pid=${position.position_id}`}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>);
                        })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
