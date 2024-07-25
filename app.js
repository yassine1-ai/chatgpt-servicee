async function fetchChatGPTResponse(prompt, apiKey) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 150
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}
