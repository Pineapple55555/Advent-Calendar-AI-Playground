  async function sendMessage() {
    let rng = Math.floor(Math.random() * 3)
    let inputMessage
    console.log(rng)
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
    const apiKey = null; // Ask Ben for the API key (s5703131)
    const endpoint = "https://api.openai.com/v1/chat/completions";
  
    // Define the request body for ChatGPT
    const requestBody = {
      model: "gpt-4",  // or another model if preferred
      messages: [{ role: "user", content: message }],
      max_tokens: 50
    };
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    };
  
    try {
      const response = await fetch(endpoint, options);
      const data = await response.json();
      console.log("API Response:", data); // Log full response to check structure
  
      // Check if choices exist in the response
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
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
  