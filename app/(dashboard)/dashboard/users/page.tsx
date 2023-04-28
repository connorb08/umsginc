import { db } from "@/db/firestore";
import { DBUser } from "@/db/models/user";

interface data {
    count: number;
    users: DBUser[];
}

const users = new Promise<data>(async (resolve, reject) => {

    const users: DBUser[] = [];
    
    try {
       
        const res = await db.users.get();
        for await (const user of res.docs) {
            users.push(user.data());
        }
        resolve({count: res.size, users})

    } catch (error) {
        reject(error);
    }
});

export default async function Users() {

    const data = await users;

    return(<p>Users: {data.count}</p>)
}