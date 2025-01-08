import {Client, Databases} from 'appwrite';

const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

const databases = new Databases(client);

export {client, databases};
