import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import { presetUno, presetIcons, presetWebFonts, presetAttributify } from 'unocss'

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte], mode: 'svelte-scoped',
			presets: [
				presetUno(),
				presetIcons({
					extraProperties: {
						'display': 'inline-block',
						'vertical-align': 'middle',
					},
				}),
				presetWebFonts({
					provider: 'google', // default provider
					fonts: {
						// these will extend the default theme
						sans: 'Inter',
					},
				})
			],
		}), sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
