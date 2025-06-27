import { initialMessage } from '@/lib/data'

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-lite-001",
      messages: [initialMessage, ...messages.map((m: any) => ({
        role: m.role,
        content: m.content
      }))]
    })
  });

  if (!response.ok) {
    const error = await response.text();
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  const data = await response.json();
  return Response.json(data);
}
