import { db } from "@/db/firestore";

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
				name: "No one assigned",
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
				name: data.holder_name || "Name not available",
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
