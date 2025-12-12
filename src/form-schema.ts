import { z } from 'zod';

export const waitlistSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  phone_number: z.string().min(1, 'Phone number is required'),
  email: z.email('Invalid email address'),
});
export type WaitlistSchema = z.infer<typeof waitlistSchema>;
