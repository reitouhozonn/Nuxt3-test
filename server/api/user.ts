import type { IncomingMessage, ServerResponse } from "http";

export type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    company: Company;
};
export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};
export type Geo = {
    lat: string;
    lng: string;
};
export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export default async (req: IncomingMessage, res: ServerResponse) => {
    const result: User[] = await $fetch('https://jsonplaceholder.typicode.com/users');
    return result
}
