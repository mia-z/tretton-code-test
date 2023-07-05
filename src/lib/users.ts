import { writable } from "svelte/store";

const store = () => {
    const { subscribe, set, update } = writable<Array<User>>([]);

    return {
        subscribe,
        set,
        update
    };
}

const UsersStore = store();

export {
    UsersStore
};