import { db } from "@/db/firestore";
import { DBUser } from "@/db/models/user";
import { DBPosition } from "@/db/models/position";

const default_positions: DBPosition[] = [];
const default_users: DBUser[] = [];

default_users.push({
    uid: "101287001618030796472",
    email: "umsg@maine.edu",
    position_id: -1,
    position: "admin",
});

default_positions.push({
    position_id: -1,
    title: "admin",
});

default_positions.push({
    position_id: 0,
    title: "none",
});

const createDefaultPositions = async () => {
    var error: Error | null = null;

    for await (const position of default_positions) {
        db.positions
            .doc(String(position.position_id))
            .create(position)
            .catch((e: Error) => {
                error = e;
            });
    }

    if (error) {
        throw error;
    } else {
        return;
    }
};

const createDefaultUsers = async () => {
    var error: Error | null = null;

    for await (const user of default_users) {
        await db.users
            .doc(String(user.uid))
            .create(user)
            .catch((e: Error) => {
                error = e;
            });
    }

    if (error) {
        throw error;
    } else {
        return;
    }
};

export const setup = async () => {
    try {
        await createDefaultPositions();
        await createDefaultUsers();
    } catch (error) {
        throw error;
    }
};

export default setup;
