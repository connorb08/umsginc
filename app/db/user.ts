import { db, UpdateData } from "./firestore";

export interface DBUser {
    uid: string;
    email: string;
    position_id: number;
    position: string;
}

export class User implements DBUser {
    public uid: string;
    public email: string;
    public position_id: number;
    public position: string = "none";

    constructor(uid: string, email?: string, position_id?: number) {
        this.uid = uid;
        this.email = email || "";
        this.position_id = position_id || 0;
    }

    public getUser = async () => {
        const user_snapshot = await db.users.doc(this.uid).get();
        this.email = user_snapshot.get("email");
        this.position = user_snapshot.get("position");
        this.position_id = user_snapshot.get("position_id");

        return this;
    };

    public setPosition = async (position_id: number) => {
        const user_ref = db.users.doc(this.uid);
        const exists = (await user_ref.get()).exists;

        if (exists) {
            const updates: UpdateData<User> = {
                position_id: position_id,
            };
        }
    };

    public to_dict = (): DBUser => {
        return {
            uid: this.uid,
            email: this.email,
            position_id: this.position_id,
            position: this.position,
        };
    };
}
