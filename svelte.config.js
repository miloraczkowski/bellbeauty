import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/lib/assets/variables';`
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
