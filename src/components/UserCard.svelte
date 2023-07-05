<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub, faTwitter, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
    import Img from "@zerodevx/svelte-img";
	import { fade } from "svelte/transition";

    export let userInfo: User;

    const src = [
        { format: "jpg", src: userInfo.imageWallOfLeetUrl ?? "/placeholder.jpeg" },
    ];
</script>

<!--Component which handles displaying of user data - utilizes $$props.class to handle any additional classes from params-->
<div transition:fade class={`flex flex-col xl:h-96 md:h-80 h-64 rounded-lg shadow-lg scale-100 hover:scale-105 hover:transition-all transition-all duration-500 hover:duration-200 ${$$props.class} overflow-hidden relative select-none`}>
    <Img {src} class={"z-10 absolute lg:h-auto xl:w-auto w-full h-full rounded-lg"} alt={`Image of ${userInfo.name}`}/>
    <div class={"z-20 lg:text-base text-xs text-primary-content mt-auto mx-2 mb-2 rounded-lg bg-base-100 border-primary-focus border-2 lg:h-20 h-16 p-2 shadow-lg flex flex-row"}>
        <div class={"flex flex-col w-3/4"}>
            <div class={"mt-auto text-primary-content font-bold wix-madefor-text"}>
                {userInfo.name}
            </div>
            <div class={"text-xs lg:text-sm opacity-70 mb-auto text-primary-content open-sans"}>
                {userInfo.office ?? userInfo.orgUnit}
            </div>
        </div>
        <div class={"ml-auto shrink flex flex-row lg:flex-col lg:justify-around my-auto space-x-2 lg:space-x-0 lg:space-y-2 mr-2"}>
            {#if userInfo.github}
                <a target={"_blank"} referrerpolicy={"no-referrer"} href={"https://github.com" + userInfo.github} class={"group"}>
                    <Fa class={"text-xl transition-all group-hover:text-[whitesmoke] group-active:text-primary-content"} icon={faGithub} />
                </a>
            {/if}
            {#if userInfo.twitter}
                <a target={"_blank"} referrerpolicy={"no-referrer"} href={"https://twitter.com/" + userInfo.twitter} class={"group"}>
                    <Fa class={"text-2xl transition-all group-hover:text-blue-400 group-active:text-primary-content"} icon={faTwitter} />
                </a>
            {/if}
            {#if userInfo.stackoverflow}
                <a target={"_blank"} referrerpolicy={"no-referrer"} href={"https://stackoverflow.com" + userInfo.stackoverflow} class={"group"}>
                    <Fa class={"text-2xl transition-all group-hover:text-orange-400 group-active:text-primary-content"} icon={faStackOverflow} />
                </a>
            {/if}
            {#if userInfo.linkedIn}
                <a target={"_blank"} referrerpolicy={"no-referrer"} href={"https://linkedin.com" + userInfo.linkedIn} class={"group"}>
                    <Fa class={"text-2xl transition-all group-hover:text-blue-700 group-active:text-primary-content"} icon={faLinkedin} />
                </a>
            {/if}
        </div>
    </div>
</div>