<script lang="ts">
	import UserCard from "$components/UserCard.svelte";
	import { onMount } from "svelte";
    import type { PageServerData } from "./$types";
    import { UsersStore } from "$lib/users";
    import { cities } from "../constants";

    export let data: PageServerData;

    let usersToShow: User[] = [];

    let orderBy: "Location" | "Name" = "Name"

    let filteredCities: TrettonCity[] = ["Helsingborg", "Borlänge", "Ljubljana", "Lund", "Stockholm"]

    let queryFilter: string = "";

    $: {
        orderBy === "Location" ?
            usersToShow = $UsersStore.sort((a, b) => a.office?.localeCompare(b.office)) :
            usersToShow = $UsersStore.sort((a, b) => a.name?.localeCompare(b.name));
    }

    $: {
        usersToShow = $UsersStore.filter(x => filteredCities.includes(x.office))
    }

    onMount(() => {
        UsersStore.set(data.users);
        usersToShow = $UsersStore;
    });
</script>


<div class={"container mx-auto flex flex-col p-2"}>
    <div class={"w-full rounded-lg mb-5 p-4 flex flex-col gap-y-2 bg-base-300 open-sans"}>
        <div class={"text-lg text-center lobster"}>
            Search and filter
        </div>
        <div class={"form-control"}>
            <input id={"free-search-input"} class={"input input-bordered input-primary muted-placeholder"} placeholder={"Enter a search term.."} />
        </div>
        <div class={"flex flex-col bg-base-100 p-2 rounded-lg"}>
            <div class={"bold mx-auto"}>
                Sort by
            </div>
            <div class={"grid grid-cols-2 grid-rows-2 grid-flow-row"}>
                <div class={"col-span-1 text-center"}>
                    Name
                </div>
                <div class={"col-span-1 text-center"}>
                    Location
                </div>
                <div class={"col-span-1 form-control"}>
                    <input type="radio" bind:group={orderBy} value={"Name"} name={"sort-radio"} class={"radio mx-auto checked:radio-primary input-xs"} />
                </div>
                <div class={"col-span-1 form-control"}>
                    <input type="radio" bind:group={orderBy} value={"Location"} name={"sort-radio"} class={"radio mx-auto checked:radio-primary input-xs"} />
                </div>
            </div>
        </div>
        <div class={"flex flex-col bg-base-100 p-2 rounded-lg"}>
            <div class={"bold mx-auto"}>
                Filter Offices
            </div>
            <div class={"grid grid-cols-3 auto-rows-min auto-cols-min grid-flow-row gap-y-2"}>
                {#each cities as city}
                    <div class={"flex flex-col form-control"}>
                        <label class={"text-center mb-1"} for={"checkbox-" + city}>
                            {city}
                        </label>
                        <input type="checkbox" bind:group={filteredCities} value={city} id={"checkbox-" + city} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class={"gap-5 grid 2xl:grid-cols-5 px-2 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row"}>
        <!-- Using user.name as the key isn't ideal, but it will suffice here. It should be a reliably unique value-->
        {#each usersToShow as user (user.name)}
            <UserCard userInfo={user} />
        {/each}
    </div>
</div>

