import { ChatGPTAPIBrowser } from "chatgpt";
import request from "request";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// https://www.npmjs.com/package/chatgpt
// https://beta.openai.com/account/org-settings

// TODO:
// 1. Try creating a password for an openai account (a new one) and use that in the repo's codepace secrets

// function callOpenAI(text) {
//   // Set the API endpoint and your API key
//   const endpoint = "https://api.openai.com/v1/images/generations";
//   const apiKey = process.env.OPENAI_API_KEY;

//   // Set the request options
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       model: "image-alpha-001",
//       prompt: text,
//       num_images: 1,
//       size: "256x256",
//       response_format: "url",
//     }),
//   };

//   // Make the request
//   request(endpoint, options, (error, response, body) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     // Print the API response
//     console.log(body);
//   });
// }

// callOpenAI("Generate an image of a cat");
// console.log(process.env.OPENAI_EMAIL);
const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSSWORD,
  email: process.env.GOOGLE_EMAIL,
  password: process.env.GOOGLE_PASSWORD,
  isGoogleLogin: true,
});
await api.initSession();

const result = await api.sendMessage("Hello World!");
console.log(result.response);
