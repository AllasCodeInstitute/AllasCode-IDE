#!/usr/bin/env node

const apiKey = process.env['API-KEY'] || process.env.API_KEY || process.env.OPENROUTER_API_KEY;

if (!apiKey) {
	console.error('Missing API key. Set one of: API-KEY, API_KEY, OPENROUTER_API_KEY');
	process.exit(1);
}

const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
const prompt = process.env.OPENROUTER_PROMPT || 'Responda apenas com: conexão ok';

const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${apiKey}`,
		'Content-Type': 'application/json',
		'HTTP-Referer': 'https://localhost',
		'X-Title': 'AllasCode-IDE OpenRouter Validation'
	},
	body: JSON.stringify({
		model,
		messages: [
			{ role: 'user', content: prompt }
		]
	})
});

const payload = await response.json();

if (!response.ok) {
	console.error('OpenRouter request failed:', JSON.stringify(payload, null, 2));
	process.exit(1);
}

const content = payload?.choices?.[0]?.message?.content;
if (!content) {
	console.error('No response content returned by OpenRouter:', JSON.stringify(payload, null, 2));
	process.exit(1);
}

console.log('OpenRouter response:');
console.log(content);
