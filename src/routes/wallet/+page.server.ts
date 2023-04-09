import {getDirectusClient} from "$lib/utils/directus";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: any) => {
		const data = await request.formData();

		const directus = await getDirectusClient();

		await directus.items('signups').createOne({
			email: data.get('email') ?? ''
		});

		return { success: true };
	}
};
