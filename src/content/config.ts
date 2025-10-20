import { defineCollection, z } from 'astro:content';

const players = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string().describe('Имя игрока или ведущего'),
		character: z.string().describe('Имя персонажа'),
		role: z.enum(['player', 'dm']).default('player').describe('Роль в кампании'),
		class: z.string().describe('Класс персонажа'),
		level: z.number().int().min(0).max(20).default(1),
		race: z.string().describe('Раса персонажа'),
		background: z.string().optional(),
		alignment: z.string().optional(),
		avatar: z.string().optional().describe('Путь до изображения персонажа или игрока'),
		tags: z.array(z.string()).default([])
	})
});

const sessions = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		session: z.number().int().min(1).describe('Номер игровой сессии'),
		date: z.coerce.date(),
		location: z.string().optional(),
		players: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
		summary: z.string().optional().describe('Краткое описание для списка'),
		published: z.boolean().default(true)
	})
});

const company = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		order: z.number().int().min(0).default(0),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([])
	})
});

const diary = defineCollection({
	type: 'content',
	schema: z.object({
		author: z.string().default('Ласм'),
		title: z.string(),
		date: z.coerce.date(),
		location: z.string().optional(),
		tags: z.array(z.string()).default([]),
		mood: z.string().optional(),
		summary: z.string().optional()
	})
});

export const collections = { players, sessions, company, diary };
