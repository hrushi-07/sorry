import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from '../types';

// Ensure API key is present; in a real app, handle missing key gracefully.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateApologyLetter = async (
  recipientName: string = "my friend"
): Promise<GeneratedContent> => {
  if (!apiKey) {
    // Fallback if no API key is provided in the environment
    return {
      title: "To My Dearest Friend",
      body: "I struggle to find the words to express how sorry I am. Please know that our friendship means the world to me, and I hope we can move past this. I value you deeply."
    };
  }

  try {
    const prompt = `Write a short, sincere, and touching apology poem or letter for a friend named ${recipientName}. 
    It should be about 50-70 words. It should express deep regret and hope for forgiveness.
    Return the result in JSON format with 'title' and 'body' fields.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            body: { type: Type.STRING },
          },
          required: ["title", "body"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedContent;

  } catch (error) {
    console.error("Gemini generation error:", error);
    return {
      title: "From the Heart",
      body: "I am truly sorry. Words cannot express how much I regret hurting you. I hope you can find it in your heart to forgive me."
    };
  }
};