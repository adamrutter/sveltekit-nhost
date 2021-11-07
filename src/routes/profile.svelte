<script context="module">
	export const load = async ({ session }) => {
		if (!session.user) return { status: 300, redirect: '/' };
		return {};
	};
</script>

<script>
	import { session } from '$app/stores';
</script>

<div style="margin-top: 1em;">
	<h1>Profile</h1>
	<p>this is a private profile page</p>
	<p>only{' '}<b>{$session.user}</b> should be able to view this</p>
</div>
