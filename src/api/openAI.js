import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPEN_API_KEY })
const openai = new OpenAIApi(config)

const responseGenerate = async(inputPromptMsg)
