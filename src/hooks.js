import { verifyUser } from '$lib/auth';
import * as cookie from 'cookie';

export const handle = async ({ request, resolve }) => {
	const { token } = cookie.parse(request.headers.cookie || '');
	const user = await verifyUser(token);

	if (user) request.locals.user = user;

	return await resolve(request);
};

export const getSession = async (request) => {
	const { user } = request.locals;
	return { user };
};
