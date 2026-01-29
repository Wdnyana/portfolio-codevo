import { z } from 'zod'

export const contactSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
	email: z.string().email({ message: 'Invalid email address' }),
	message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
	access_key: z.string(), // Untuk Web3Forms
})

export type ContactFormSchema = z.infer<typeof contactSchema>
