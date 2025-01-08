import {databases} from "@/backend/config";
import {ID} from "appwrite";


const db = {};

const collections = [
    {
        dbId: process.env.NEXT_PUBLIC_DATABASE_ID,
        id: process.env.NEXT_PUBLIC_COLLECTION_ID_ARTICLES,
        name: "articles"
    },
    {
        dbId: process.env.NEXT_PUBLIC_DATABASE_ID,
        id: process.env.NEXT_PUBLIC_COLLECTION_ID_COURSES,
        name: "courses"
    },
    {
        dbId: process.env.NEXT_PUBLIC_DATABASE_ID,
        id: process.env.NEXT_PUBLIC_COLLECTION_ID_LESSONS,
        name: "lessons"
    },
];


collections.forEach((col) => {
   db[col.name] = {
       create: (payload, permissions, id = ID.unique()) =>
           databases.createDocument(
               col.dbId,
               col.id,
               id,
               payload,
               permissions
           ),
       update: (id, payload, permissions) =>
           databases.updateDocument(
               col.dbId,
               col.id,
               id,
               payload,
               permissions
           ),
       delete: (id) => databases.deleteDocument(col.dbId, col.id, id),
       list: (queries = []) => databases.listDocuments(col.dbId, col.id, queries),
       get: (id) => databases.getDocument(col.dbId, col.id, id)
   }
});

export default db;