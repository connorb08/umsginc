import { db } from "@/db/firestore";
import { DBUser } from "@/db/models/user";
import { DivisionVP, DOC, DOT, Position, President, VP } from "@/db/models/position";

const default_positions: Position[] = [];
const default_users: DBUser[] = [];

// const createDefaultUsers = async () => {

//     new User("temp-connor.bray@maine.edu", {
//         email: "connor.bray@maine.edu",
//         position_id: "president",
//         is_admin: true,
//         phone_number: "2072726463",
//         bio: "bio"
//     }).createDatabaseRecord()

//     new User("temp-michael.delorge@maine.edu", {
//         email: "michael.delorge@maine.edu",
//         position_id: "vice_president",
//         // position: "Vice President"
//     }).createDatabaseRecord()

//     new User("temp-paige.allen@maine.edu", {
//         email: "paige.allen@maine.edu",
//         position_id: "vice_president_fa",
//         // position: "Vice President for Financial Affairs"
//     }).createDatabaseRecord()

//     new User("temp-bailey.lewis@maine.edu", {
//         email: "bailey.lewis@maine.edu",
//         position_id: "vice_president_so",
//         // position: "Vice President for Student Organizations"
//     }).createDatabaseRecord()

//     new User("temp-owen.hebda@maine.edu", {
//         email: "owen.hebda@maine.edu",
//         position_id: "vice_president_se",
//         // position: "Vice President for Student Entertainment"
//     }).createDatabaseRecord()

//     new User("temp-jacob.chaplin@maine.edu", {
//         email: "jacob.chaplin@maine.edu",
//         position_id: "vice_president_sl",
//         // position: "Vice President for Student Leadership"
//     }).createDatabaseRecord()

// }

// default_users.push({
//     uid: "101287001618030796472",
//     email: "umsg@maine.edu",
//     position_id: 0,
//     position: "none",
//     is_admin: true,
//     contact_info: {
//         email: "",
//         phone_number: ""
//     },
//     metadata: {
//         bio: ""
//     },
    
// });

default_positions.push(new President(
    [
        "task1", "task2"
    ]
));

default_positions.push(new VP(
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
            .create(position.to_dict())
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
    } catch (error) {
        throw error;
    }
};

export default setup;
