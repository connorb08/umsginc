import { db, UpdateData } from "@/db/firestore";
import { DBPosition } from "./position";
import { firestore } from "../init";


export type UserMetadata = {
    bio: string;
    avatar: string;
}

export interface DBUser {
    email: string;
    name: string;
    position_id: string;
    is_admin: boolean;
    phone_number: string;
    metadata: UserMetadata;
}

export class User implements DBUser {
    
    public email: string;
    public name: string;
    public position_id: string;
    public is_admin: boolean;
    public phone_number: string;
    public metadata: UserMetadata = {bio: "", avatar: ""};

    constructor(email: string, optional?: { name?: string, position_id?: string, position?: string, is_admin?: boolean, phone_number?: string, bio?: string, avatar?: string}) {
        this.email = email;
        this.name = optional?.name ? optional.name : "Unavailable",
        this.position_id = optional?.position_id ? optional.position_id : "0";
        this.is_admin = optional?.is_admin ? optional.is_admin : false;
        this.phone_number = optional?.phone_number ? optional.phone_number : "";
        this.metadata = {
            bio: optional?.bio ? optional.bio : "",
            avatar: optional?.avatar ? optional.avatar : ""
        };
    }

    public getUser = async () => {
        const userSnapshot = await db.users.doc(this.email).get();
        this.email = userSnapshot.get("email");
        this.position_id = userSnapshot.get("position_id");
        this.is_admin = userSnapshot.get("is_admin");
        this.phone_number = userSnapshot.get("phone_number");
        this.metadata = userSnapshot.get("metadata");
        return this;
    };

    public setPosition = async (position_id: string) => {

        const position_ref = db.positions.doc(position_id);
        const exists = (await position_ref.get()).exists;
        
        if (exists) {
            const updates: UpdateData<DBPosition> = {
                holder: this.email
            };
            const res = await position_ref.update(updates);
            return res;
        } else {
            throw("Invalid position");
        }
    };

    public toJSON = () => {
        return {
            email: this.email,
            name: this.name,
            position_id: this.position_id,
            is_admin: this.is_admin,
            phone_number: this.phone_number,
            metadata: this.metadata
        };
    };

    public to_dict = (): DBUser => {
        return {
            email: this.email,
            name: this.name,
            position_id: this.position_id,
            is_admin: this.is_admin,
            phone_number: this.phone_number,
            metadata: this.metadata
        };
    };

    public createDatabaseRecord = async () => {
        if (!(await this.exists())) {
            const res = await db.users.doc(this.email).create(this.to_dict());
        }
    }

    public exists = async () => {
        const user_exists = (await db.users.doc(this.email).get()).exists;
        return user_exists;
    }

    private convertTemp = async () => { // do this in a batch

        const user_temp_ref = db.users.doc(`temp-${this.email}`);
        const user_new_ref = db.users.doc(this.email);

        if (!(await user_temp_ref.get()).exists) {
            return false;
        }

        try {
            const res = await firestore.runTransaction(async (t) => {
                return await t.get(user_temp_ref).then((user_snapshot) => {

                    const data = user_snapshot.data();
                    
                    // Update position if it is assigned to user
                    // const position_id = (data?.position_id) ? data.position_id : "0";
                    // const position_ref = db.positions.doc(data?.position_id || "");
                    
                    // if (position_id !== "0") {
                    //     const position_ref = db.positions.doc(position_id)
                    //     t = t.update(position_ref, {position_id: position_id})
                    // }
                    t.set(user_new_ref, {...data});
                    t.delete(user_snapshot.ref);
                    return Promise.resolve(true);
                }).catch((error) => {
                    return Promise.reject("transaction error");
                })
            })
            return res;

        } catch(error) {console.log(error); return false;}

    }

}
