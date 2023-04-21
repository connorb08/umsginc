import { db } from "@/db/firestore";
import { PassThrough } from "stream";

// const people = [
//     {
//         name: "Connor Bray",
//         email: "connor.bray@maine.edu",
//         position: "President",
//         imageUrl:
//             "https://lh3.googleusercontent.com/a/AEdFTp4tUc9UezM9sn94SRwf1t_inefwZfKlt39F5gxQ1A=s96-c",
//     },
//     {
//         name: "Michael Delorge",
//         email: "michael.delorge@maine.edu",
//         position: "Vice President",
//         imageUrl:
//             "https://media.licdn.com/dms/image/C5603AQF3zBl5yXuJbQ/profile-displayphoto-shrink_800_800/0/1649991379824?e=1687392000&v=beta&t=JhBSr7sLVel9KpOqMJfFJ7HJ_tXX_bmGYS8JVxG9t3E",
//     },
// ];

type people = {
	email: string;
	name: string;
	imageUrl: string;
	title: string;
}

export default async function EmployeeViewer() {
    
	const positions = await db.positions.get();
	const people: people[] = [];

	for (const position of positions.docs){

		const data = position.data();

		if (data.holder === "" || data.holder === undefined) {
			people.push({
				email: "",
				name: "No One Assigned",
				imageUrl: "",
				title: data.title,
			})
            continue;
		}
		
		const holder = await db.users.doc(data.holder).get();

		if (holder.exists) {
			const holder_email = holder.get('email');
			const holder_name = holder.get('name');
			const image = holder.get('metadata.avatar');
			people.push({
				email: holder_email,
				name: holder_name,
				imageUrl: image,
				title: data.title,
			})
        } else {
            people.push({
				email: data.holder,
				name: "Account not set up",
				imageUrl: "",
				title: data.title
			})
        }

	}

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
                <li
                    key={person.email}
                    className="flex justify-between gap-x-6 py-5"
                >
                    <div className="flex gap-x-4">
                        <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={(person.imageUrl) ? person.imageUrl : "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"}
                            alt=""
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                {person.name}
                            </p>
                            <a
                                href={`/employee/${person.email}`}
                                className="mt-1 truncate text-xs leading-5 text-gray-500"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                            {person.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            {person.email}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
