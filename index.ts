import { generateText } from 'ai';
// Import the google module from the ai-sdk package

import { google } from '@ai-sdk/google';

//specify the model to use for the generaating texting and prompt
const { text } = await generateText({
  model: google('models/gemini-2.5-flash'),
  prompt: 'What is an AI agent?',
});

console.log(text);
