import { waitlistSchema } from '@/form-schema';
import { prisma } from '@/prisma.client';

export async function POST(request: Request) {
  const data = await request.json();

  const waitlistData = waitlistSchema.safeParse(data);

  if (!waitlistData.success) {
    return new Response(JSON.stringify({ error: waitlistData.error.issues.map(issue => issue.message).join(', ') }), { status: 400 });
  }

  await prisma.waitlistSubmission.create({
    data: {
      email: waitlistData.data.email,
      first_name: waitlistData.data.first_name,
      last_name: waitlistData.data.last_name,
      phone_number: waitlistData.data.phone_number,
    },
  });

  return new Response(JSON.stringify({ message: 'Successfully joined the waitlist!' }), { status: 200 });
}
