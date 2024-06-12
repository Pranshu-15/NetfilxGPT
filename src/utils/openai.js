import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: "sk-proj-KbMcOZ5psLyu1IIEbasUT3BlbkFJu5qLjvzdhpb1N22zHXdq",
  dangerouslyAllowBrowser: true,
});

export default openai;
