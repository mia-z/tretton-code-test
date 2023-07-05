import { derived, writable } from "svelte/store";

const UsersStore = () => {
    const { subscribe, set, update } = writable<Array<User>>([]);

    return {
        subscribe,
        set,
        update
    };
}

const UsersFromQuery = (query: string) => derived(UsersStore(), ($values) => {
    return $values.filter(x => x.name.includes(query) || x.area.includes(query) || x.office.includes(query));
});

const UsersByCountry = (city: TrettonCountry) => derived(UsersStore(), ($values) => {
    return $values.filter(x => x.office.toLowerCase() === city.toLowerCase());
});

export {
    UsersStore,
    UsersFromQuery,
    UsersByCountry
};