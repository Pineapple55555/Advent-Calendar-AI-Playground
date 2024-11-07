async function sendMessage() {
    let rng = Math.floor(Math.random() * 3)
    let inputMessage
    if (rng == 0){
      inputMessage = "give me a good joke in the style of a christmas cracker"; // Hardcoded message
    }
    else if (rng == 1){
      inputMessage = "give me a short christmas fact - the kind of thing you'd find in a cracker";
    }
    else{
      inputMessage = "give me two-option christmas quiz question; cracker style. Put the answer underneath";
    }
    responseText = "Thinking...";
    const response = await getChatGPTResponse(inputMessage);
    responseText = response ? response : "Error getting response";
  }
  
  async function getChatGPTResponse(message) {
    const apiKey = "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"; // Replace with your API key
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
        console.log(data.choices[0].message.content)
        return data.choices[0].message.content; // Return only the message content
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
  