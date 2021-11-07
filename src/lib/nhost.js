import { createClient } from 'nhost-js-sdk';
import { session } from '$app/stores';
import cookies from 'js-cookie';

const config = {
	baseURL: import.meta.env.VITE_NHOST_URL
};

const { auth, storage } = createClient(config);

auth.onTokenChanged(() => {
	/* this will fire when nhost sdk re-verifies on page load, so calling 
	session.set() ensures session info is correct (in case jwt expired before 
	verification on server etc) */
	session.set({ user: auth.user().display_name });

	// ensure jwt cookie sent to server is in sync with nhost jwt
	cookies.set('token', auth.getJWTToken());
});

export { auth, storage };
