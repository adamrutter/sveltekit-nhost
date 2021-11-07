<script context="module">
	import { session } from '$app/stores';
</script>

<h1>SvelteKit/Nhost example app</h1>
{#if $session.user}
	<div>logged in as {$session.user}</div>
{:else}
	<div>you are not logged in</div>
{/if}
