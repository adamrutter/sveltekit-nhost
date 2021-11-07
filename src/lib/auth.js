import { queryDisplayName } from '$lib/queries';
import jwt from 'jsonwebtoken';

export const verifyUser = async (token) => {
	try {
		const decoded = jwt.verify(token, import.meta.env.VITE_JWT_KEY);

		const userId = decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'];
		const displayName = await queryDisplayName(userId);

		return displayName;
	} catch (err) {
		// console.log(err);
		return false;
	}
};
