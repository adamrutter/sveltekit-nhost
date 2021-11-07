<script>
	import { auth } from '$lib/nhost';
	import { session } from '$app/stores';
	import cookies from 'js-cookie';

	const login = async () => {
		const credentials = await auth.login({
			email: import.meta.env.VITE_USER_EMAIL,
			password: import.meta.env.VITE_USER_PASSWORD
		});

		session.set({ user: credentials.user.display_name });
		cookies.set('token', auth.getJWTToken());
	};

	const logout = async () => {
		await auth.logout();
		session.set({});
		cookies.remove('token');
	};
</script>

<div style="margin: 0 auto; max-width: 30rem;">
	<div style="display: flex; justify-content: space-between;">
		<div style="display: flex; gap: 1rem">
			<a href="/">home</a>
			<a href="/profile">profile</a>
		</div>
		<div>
			{#if !$session.user}
				<button on:click={login}>login</button>
			{:else}
				<button on:click={logout}>logout</button>
			{/if}
		</div>
	</div>
	<slot />
</div>
