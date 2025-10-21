import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { string } from 'astro:schema';

export const collections = {
	translations: defineCollection({
		// Load Markdown files in the src/content/translations directory.
		loader: glob({ base: './src/content/translations', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			type: z.string(),
			title_heb: z.string().optional(),
			description: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.array(z.string()),
			img_alt: z.string().optional(),
			video: z.string().optional(),
			websiteX: z.string().optional(),
			version: z.string().optional(),
			creatorName: z.string().optional(),
			youtube_video: z.array(z.string()).optional(),
			ko_fi: z.string().optional(),
			youtube: z.string().optional(),
			website: z.string().optional(),
			translatePack: z.string().optional(),
			downloadFile: z.string().optional(),
			translateMap: z.string().optional(),
			translateDataPack: z.string().optional(),
			PlayerAmount: z.string().optional(),
		}),
	}),

	betaGames: defineCollection({
		// Load Markdown files in the src/content/betaGames directory.
		loader: glob({ base: './src/content/betaGames', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			title_heb: z.string().optional(),
			description: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			video: z.string().optional(),
			info_img: z.string().optional(),
			game_link: z.string().optional(),
		}),
	}),
};