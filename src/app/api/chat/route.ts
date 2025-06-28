import { initialMessage } from '@/lib/data'
import OpenAI from 'openai'

interface Message {
  role: string,
  content: string
}

const client = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-4o",
      messages: [initialMessage, ...messages.map((m: Message) => ({
        role: m.role,
        content: m.content
      }))],
    });

    return Response.json(response);
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
}

