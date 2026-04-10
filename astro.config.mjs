// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://openo11y.dev',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'openo11y.dev',
			tagline: 'The practitioner\'s guide to observing systems',
			logo: {
				src: './src/assets/logo_o11y_black.png',
			},
			favicon: '/favicon_o11y.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/adrielp/openo11y.dev' },
			],
			editLink: {
				baseUrl: 'https://github.com/adrielp/openo11y.dev/edit/main/',
			},
			customCss: [
				'katex/dist/katex.min.css',
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Technical Systems',
					items: [
						{ slug: 'technical-systems' },
					],
				},
				{
					label: 'Human Systems',
					items: [
						{ slug: 'human-systems' },
						{ slug: 'human-systems/measurement-ethics' },
						{
							label: 'Delivery Metrics',
							collapsed: true,
							items: [
								{ slug: 'human-systems/delivery-metrics' },
								{ slug: 'human-systems/delivery-metrics/dora' },
								{ slug: 'human-systems/delivery-metrics/engineering-metrics' },
								{ slug: 'human-systems/delivery-metrics/devex-platform' },
							],
						},
						{ slug: 'human-systems/satisfaction' },
						{ slug: 'human-systems/engineering-practices', badge: { text: 'Legacy', variant: 'caution' } },
					],
				},
				{
					label: 'AI Systems',
					items: [
						{ slug: 'ai-systems' },
					],
				},
				{
					label: 'Practice',
					items: [
						{ slug: 'practice' },
					],
				},
				{ slug: 'resources' },
				{ slug: 'contributing' },
			],
		}),
	],
});
