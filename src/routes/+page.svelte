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

    $: orderBy === "Location" ?
        usersToShow = $UsersStore.sort((a, b) => a.office?.localeCompare(b.office)) :
        usersToShow = $UsersStore.sort((a, b) => a.name?.localeCompare(b.name));

    $: usersToShow = $UsersStore.filter(x => filteredCities.includes(x.office));
    
    $: if (queryFilter.length > 2) {
        usersToShow = $UsersStore.filter(x => x.name.toLowerCase().includes(queryFilter.toLowerCase()));
    } else {
        usersToShow = $UsersStore;
    }

    onMount(() => {
        UsersStore.set(data.users);
        usersToShow = $UsersStore;
    });
</script>


<div class={"container mx-auto flex flex-col p-2"}>
    <div class={"w-full rounded-lg mb-5 flex flex-col p-4 f bg-base-300 open-sans"}>
        <div class={"text-lg text-center lobster"}>
            Search and filter
        </div>
        <div class={"flex lg:gap-x-2 lg:flex-row lg:flex-wrap flex-col gap-y-2"}>
            <div class={"form-control lg:w-full"}>
                <input bind:value={queryFilter} id={"free-search-input"} class={"placeholder:text-center input input-bordered focus:input-primary muted-placeholder"} placeholder={"Enter a search term.."} />
            </div>
            <div class={"lg:w-1/3 flex flex-col md bg-base-100 p-2 rounded-lg"}>
                <div class={"font-bold lg:mb-2 mx-auto"}>
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
            <div class={"lg:grow flex flex-col bg-base-100 p-2 rounded-lg"}>
                <div class={"font-bold lg:mb-2 mx-auto"}>
                    Filter Offices
                </div>
                <div class={"grid lg:grid-cols-5 grid-cols-3 auto-rows-min auto-cols-min grid-flow-row gap-y-2"}>
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
    </div>
    <div class={"gap-5 grid 2xl:grid-cols-5 px-2 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row"}>
        <!-- Using user.name as the key isn't ideal, but it will suffice here. It should be a reliably unique value-->
        {#each usersToShow as user (user.name)}
            <UserCard userInfo={user} />
        {/each}
    </div>
</div>

