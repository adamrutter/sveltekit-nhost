import axios from 'axios';

export const queryDisplayName = async (userId) => {
	const { data } = await axios({
		url: import.meta.env.VITE_GRAPHQL_URL,
		method: 'post',
		headers: {
			'x-hasura-admin-secret': import.meta.env.VITE_HASURA_ADMIN_SECRET
		},
		data: {
			query: `
				query {
					users_by_pk (id: "${userId}") {
						display_name
					} 
				}
			`
		}
	});

	return data.data.users_by_pk.display_name;
};
