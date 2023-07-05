<script lang="ts">
    import "$styles/tw.css";
    import "$styles/base.scss";
	import Header from "$components/Header.svelte";
</script>

<div class={"flex flex-col"}>
    <Header />
    <slot />
</div>
