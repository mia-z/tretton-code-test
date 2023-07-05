import type { PageServerLoad } from "./$types";
import { client } from "$lib/server/client";

export const prerender = true;

export const load = (async () => {
    const res = await client.get<Array<User>>("https://api.1337co.de/v3/employees");

    return { users: res.data };
}) satisfies PageServerLoad;