import { z } from 'zod'

export const categorySchema = z.record(z.string(), z.array(z.string()))
