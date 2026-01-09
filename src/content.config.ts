import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    peptides: z.array(z.string()),
    dose: z.string(),
    duration: z.string(),
    administration: z.string(),
    source: z.string(),
    vendor: z.string().optional(),
    bodyWeight: z.string().optional(),
    ageRange: z.string().optional(),
    gender: z.string().optional(),
    date: z.string(),
    purpose: z.string(),
    outcome: z.enum(['Positive', 'Neutral', 'Negative']),
    wouldRepeat: z.boolean(),
  }),
})

export const collections = { reports }
