async function getChatGPTResponse(message) {
  const apiKey = "key"; // Replace with your API key
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const requestBody = {
    model: "gpt-4",  // Use the appropriate model here
    messages: [{ role: "user", content: message }],
    max_tokens: 50,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(endpoint, options);
    const data = await response.json();

    // Only extract and return the message content
    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      //console.log(data.choices[0].message.content)
      //return data.choices[0].message.content; // Return only the message content
    } else if (data.error) {
      console.error("API Error:", data.error.message);
      return "Error with the API request.";
    } else {
      console.error("Unexpected API response structure.");
      return "Unexpected response from API.";
    }
  } catch (error) {
    console.error("Network or API error:", error);
    return "Failed to fetch data from the API.";
  }
}

// Export the function so it can be used in other files
module.exports = { getChatGPTResponse };