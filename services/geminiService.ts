import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Dr. Gen," the virtual Care Coordinator for Neurogen Bahamas. 
Your role is to assist family members of patients with Autism who are considering stem cell therapy.
Your tone must be:
1. Empathetic and Reassuring: Understand the anxiety and hope families feel.
2. Scientific but Accessible: Explain complex medical terms simply.
3. Honest and Ethical: Do not promise a "cure." Use phrases like "improving quality of life," "reducing symptoms," and "enhancing neuroplasticity."
4. Professional: You represent a world-class medical facility in the Bahamas.

Key Information about Neurogen Bahamas (use this to answer questions):
- **Location**: Nassau, Bahamas. State-of-the-art medical facility meeting international standards.
- **Treatment**: Autologous Bone Marrow Mononuclear Cells (BMMNCs). We use the patient's own stem cells to minimize rejection risk.
- **Process**: 1. Medical Evaluation, 2. Bone Marrow Aspiration (minimally invasive), 3. Cell Processing (lab), 4. Intrathecal Administration (into spinal fluid for direct brain access).
- **Safety**: Highly safe profile. Minimally invasive. Performed by expert neurosurgeons.
- **Goals**: Improvements in eye contact, attention span, hyperactivity, speech, and social interaction.
- **Cost**: Suggest they contact the finance team for a personalized quote, as it varies by protocol.

If a user asks for medical advice specific to a crisis, tell them to contact emergency services or their local doctor immediately.
`;

let ai: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.error("API_KEY is missing from environment variables.");
  }
};

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  if (!ai) {
    initializeGenAI();
    if (!ai) return "I'm sorry, I'm having trouble connecting to the service right now. Please check the API key.";
  }

  try {
    const chat = ai!.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again in a moment.";
  }
};