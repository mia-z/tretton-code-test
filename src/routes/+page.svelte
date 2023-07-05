<script lang="ts">
	import UserCard from "$components/UserCard.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;    
</script>

<div class={"container mx-auto gap-5 grid grid-cols-5 grid-flow-row"}>
    {#each data.users as user}
        <UserCard class={""} userInfo={user} />
    {/each}
</div>

