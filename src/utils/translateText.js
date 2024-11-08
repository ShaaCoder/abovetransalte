export async function translateText(text, targetLanguage) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    console.error('OpenAI API key is missing');
    return '';
  }

  try {
    const prompt = `Translate the following text to ${targetLanguage}: "${text}"`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',  // Or 'gpt-4' based on your subscription
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100,  // Adjust tokens if necessary
        temperature: 0.3, // Lower temperature for translation consistency
      }),
    });

    const result = await response.json();

    // Log the token usage
    // if (result.usage) {
    //   console.log('Tokens used:', result.usage.total_tokens);
    // }

    if (result.choices && result.choices.length > 0) {
      return result.choices[0].message.content.trim();
    } else {
      console.error('Translation response is empty');
      return '';
    }

  } catch (error) {
    console.error('Translation error:', error);
    return '';
  }
}
