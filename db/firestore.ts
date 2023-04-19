import { firestore } from "./init"
import { CollectionGroup, FirestoreDataConverter, QueryDocumentSnapshot } from "@google-cloud/firestore"

// Import types
import { DBUser } from "@/db/models/user"
import { DBPosition } from "@/db/models/position"

// Make the helper types for updates:
type PathImpl<T, K extends keyof T> =
  K extends string
  ? T[K] extends Record<string, any>
  ? T[K] extends ArrayLike<any>
  ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
  : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
  : K
  : never
type Path<T> = PathImpl<T, keyof T> | keyof T
type PathValue<T, P extends Path<T>> =
  P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
  ? Rest extends Path<T[K]>
  ? PathValue<T[K], Rest>
  : never
  : never
  : P extends keyof T
  ? T[P]
  : never
export type UpdateData<T extends object> = Partial<{
  [TKey in Path<T>]: PathValue<T, TKey>
}>

function converter<T>(): FirestoreDataConverter<T> {
    return {
        toFirestore: (data: T) => data as Partial<T>,
        fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T
    }
}

function _collection<T>(collectionPath: string) {
    return firestore.collection(collectionPath).withConverter(converter<T>())
}

export const db = {
    users: _collection<DBUser>('users'),
    positions: _collection<DBPosition>('positions')
}