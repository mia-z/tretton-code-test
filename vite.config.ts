import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		includeSource: ["src/**/*.{js,ts,svelte}"],
		globals: true,
		environment: "jsdom",
		setupFiles: ["src/setupTest.js"]
	}
});
