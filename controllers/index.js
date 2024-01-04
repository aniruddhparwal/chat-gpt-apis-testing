const OpenAI = require('openai');
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

exports.getOpenAIResponse = async (req, res) => {
  // const assistant = await openai.beta.assistants.create({
  //   name: "Visit AI",
  //   instructions: "You are a personal indian nutritionist.",
  //   model: "gpt-4-1106-preview"
  // });
  const assistant = {
        "id": "asst_QhMYvQAEExyDGu0QEDYqlzQd",
        "object": "assistant",
        "created_at": 1704388383,
        "name": "Visit AI",
        "description": null,
        "model": "gpt-4-1106-preview",
        "instructions": "You are a personal indian nutritionist.",
        "tools": [],
        "file_ids": [],
        "metadata": {}
    }

    const myAssistant = await openai.beta.assistants.retrieve(
      assistant.id
    );
  // const thread = await openai.beta.threads.create();
  // const thread = {
  //   "id": "thread_U1iAxTHm9HBSBjZKZaFFP8zp",
  //   "object": "thread",
  //   "created_at": 1704133519,
  //   "metadata": {}
  // }
  // const message = await openai.beta.threads.messages.create(
  //   thread.id,
  //   {
  //     role: "user",
  //     content: "Hii"
  //   }
  // );

  // const messages = await openai.beta.threads.messages.list(
  //   thread.id
  // );

  // const run = await openai.beta.threads.runs.create(
  //   thread.id,
  //   { 
  //     assistant_id: "asst_herYS0drviMcyRlyR0rTv45o",
  //     instructions: "Please address."
  //   }
  // );
  // res.json({assistant: assistant, thread: thread, message: message})
  // res.json({message: messages})
  // res.json({assistant: assistant})
  res.json({assistant: myAssistant})
}

module.exports = exports;