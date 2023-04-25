import { db } from "@/db/firestore";
import { DBPosition } from "@/db/models/position";
import { DocumentSnapshot } from "@google-cloud/firestore";

interface data {
    count: number;
    positions: DBPosition[];
}

const getPositions = new Promise<data>(async (resolve, reject) => {

    const positions: DBPosition[] = [];
    
    try {
       
        const res = await db.positions.get();
        for await (const position of res.docs) {
            positions.push(position.data());
        }
        resolve({count: res.size, positions})

    } catch (error) {
        reject(error);
    }
});

export default async function Positions() {
    const data: data = await getPositions;

    return (
        <>
            <div className="flex items-center justify-center w-full h-full">
                {/* <p>Positions: {data.count}</p>
                <ul>
                    {data.positions.map((position, index) => {
                        return <li key={index}>{position.title}</li>;
                    })}
                </ul> */}

                <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    holder
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
                        {data.positions.map((position, index) => {
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
                                    href="#"
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
