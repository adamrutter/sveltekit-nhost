# SvelteKit/Nhost example app

Demonstrates proof of concept of SvelteKit SSR working with Nhost authentication.

## Install

- Clone repo
- `npm i`
- Create Nhost project on [console.nhost.io](https://console.nhost.io)
- Add a user in `Nhost Console > Auth`
- Add a JWT key in `Nhost Console > Settings > Hasura > JWT Key`
- Add a `.env` file containing:

  - `VITE_USER_EMAIL`: your created user's email address
  - `VITE_USER_PASSWORD`: your created user's password
  - `VITE_NHOST_URL`: your backend URL from `Nhost Console > Dashboard`
  - `VITE_GRAPHQL_URL`: your GraphQL URL from `Nhost Console > Dashboard`
  - `VITE_HASURA_ADMIN_SECRET`: your Hasura admin secret from `Nhost Console > Hasura`
  - `VITE_JWT_KEY`: your JWT key you saved in `Nhost Console > Settings > Hasura > JWT Key`

- `npm run dev`
