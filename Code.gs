const OPENAI_API_KEY = PropertiesService.getScriptProperties().getProperty('OPENAI_API_KEY');

function callChatGPT(prompt, model = 'gpt-4o-mini') {
  const url = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model: model,
    messages: [
      { role: 'system', content: 'You are a professional translator. Respond only with the translation in the requested language, without any additional explanation or comments.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 200,
    temperature: 0.7
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    return json.choices[0].message.content.trim();
  } catch (e) {
    return `Error: ${e.message}`;
  }
}

function translateWithGPT(text, targetLanguage, additionalPrompt = "") {
  if (!text || !targetLanguage) {
    return 'Error: Both input text and target language must be provided.';
  }

  let prompt = `Translate the following text into ${targetLanguage}:\n\n"${text}"`;
   if (additionalPrompt) {
    prompt += `\n\nAdditional instructions: ${additionalPrompt}`;
  }

  const response = callChatGPT(prompt);
  Logger.log(response)
  // Remove quotes only from the beginning and end of the response
  return response.replace(/^"|"$/g, ''); // Removes only leading and trailing quotes
}
