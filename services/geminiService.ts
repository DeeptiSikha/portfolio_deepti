
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Aura AI", a friendly and professional digital assistant for Bhaula Deeptisikha's portfolio website. 
Bhaula Deeptisikha is a Flutter Developer with 2 years of experience specializing in AI integrations.

About Bhaula Deeptisikha:
- Location: Surat, Gujarat, India.
- Skills: Flutter, Dart, Firebase, Gemini API, ML Kit, UI/UX.
- Passion: Building sleek mobile apps that leverage AI to solve human problems.
- Availability: Open to freelance and full-time roles.
- Tone: Helpful, minimalistic, slightly futuristic, and polite.

If a user asks about projects, mention Bhaula's apps: 
- ReadysetConnect (Networking)
- Pawland (Pet care marketplace)
- GPS Map Camera (Geotagging utility)
- Meditation Music (Wellness product app)
- Wireless File transfer (P2P utility)
- Unit conversion (Utility tool)

Do not provide personal contact info unless requested.
Keep answers concise and professional.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // We construct contents with history for context
    const chatContents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...chatContents, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently processing high volume. Please try again or email Bhaula Deeptisikha directly.";
  }
}
