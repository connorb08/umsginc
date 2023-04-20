import { db } from "@/db/firestore";
import { DBUser } from "@/db/models/user";
import { DBPosition, DivisionVP, DOC, DOT, President, VP } from "@/db/models/position";

const default_positions: DBPosition[] = [];
const default_users: DBUser[] = [];

default_users.push({
    uid: "101287001618030796472",
    email: "umsg@maine.edu",
    position_id: 0,
    position: "none",
    is_admin: true,
});

default_positions.push(new President(
    "president",
    [
        "task1", "task2"
    ]
));

default_positions.push(new VP(
    "vice_president",
    [
        "task1", "task2"
    ]
));

default_positions.push(new DivisionVP(
    "vice_president_fa",
    "Vice President for Financial Affairs",
    "Division of Financial Affairs",
    [
        "task1", "task2"
    ], true
));

default_positions.push(new DivisionVP(
    "vice_president_so",
    "Vice President for Student Organizations",
    "Division of Student Organizations",
    [
        "task1", "task2"
    ], true
));

default_positions.push(new DivisionVP(
    "vice_president_se",
    "Vice President for Student Entertainment",
    "Division of Student Entertainment",
    [
        "task1", "task2"
    ], true
));

default_positions.push(new DivisionVP(
    "vice_president_sl",
    "Vice President for Student Leadership",
    "Division of Student Leadership",
    [
        "task1", "task2"
    ], true
));

default_positions.push(new DOC(
    "director_of_communications",
    [
        "task1", "task2"
    ]
));

default_positions.push(new DOT(
    "director_of_technology",
    [
        "Shall be directly responsible for the maintenance of all physical technologies of Student Government, Inc.", 
        "Shall be directly responsible for maintaining all of the Student Government, Inc. computer hardware and software.",
        "Eligibility of the Director of Technology. The Director of Technology must be an undergraduate student at the University of Maine and must have a cumulative GPA of 2.5. The candidate must display a high degree of skill with hardware and software. Candidates with majors related to Computer Sciences are preferred.",
        "Shall assist all executive members of Student Government, Inc. with their respective duties pertaining to Student Government, Inc. technology.",
        "Shall update and maintain the Student Government, Inc. website.",
        "Shall be responsible for the purchase of technology and software when and if requested.",
        "Shall, if requested by the President of Student Government, Inc., direct and manage the taping of any Student Government, Inc. activity, including but not limited to meetings of the General Student Senate.",
        "Shall perform any troubleshooting and online work related to Student Government, Inc. projects.",
        "Shall be responsible for office computer maintenance and anti-virus software updates.",
        "Shall assist the Vice President of Student Entertainment with all-digital, media, and related technology."
    ]
));

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
