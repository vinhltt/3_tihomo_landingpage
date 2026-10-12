import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\.md$/, ''),
  }),
  schema: z.object({
    locale: z.enum(['vi', 'en']),
    slug: z.enum([
      'managing-income-and-expenses-across-multiple-accounts',
      'statement-reconciliation-checklist',
      'recurring-payments-and-budgeting',
    ]),
    title: z.string(),
    description: z.string().min(50).max(165),
    updated: z.coerce.date(),
    order: z.number().int(),
    sources: z
      .array(z.object({ title: z.string(), publisher: z.string(), url: z.string().url() }))
      .min(1),
    // Link back to the homepage section this guide relates to, with its status caveat.
    tihomo: z.object({ anchor: z.enum(['problem', 'platform', 'direction']), note: z.string() }),
  }),
});

export const collections = { blog };
