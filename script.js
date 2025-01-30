// Chatbot functionality
function sendMessage() {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("userInput");

    // User message
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        alert("Please type a message before sending.");
        return;
    }
    addMessage(userMessage, "user-message");

    // Clear input field
    userInput.value = "";

    // Bot response (mocked for now)
    setTimeout(() => {
        const botMessage = generateResponse(userMessage);
        addMessage(botMessage, "bot-message");
    }, 1000);
}

function addMessage(message, className) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", className);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}

// Generate responses for user queries
function generateResponse(userMessage) {
    // Simulated API responses
    if (userMessage.toLowerCase().includes("recommend")) {
        return simulateMovieRecommendation();
    } else if (userMessage.toLowerCase().includes("where")) {
        return simulateAvailabilityCheck();
    } else if (userMessage.toLowerCase().includes("feedback")) {
        return "Thank you for your feedback! It will help improve recommendations.";
    } else {
        return "I'm here to help! Ask me about movies or TV shows.";
    }
}

// Simulated movie recommendation
function simulateMovieRecommendation() {
    const movies = [
        { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
        { title: "The Matrix", year: 1999, genre: "Action", rating: 8.7 },
        { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 }
    ];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    return `I recommend '${randomMovie.title}' (${randomMovie.year}). It's a ${randomMovie.genre} with a rating of ${randomMovie.rating}/10.`;
}

// Simulated availability check
function simulateAvailabilityCheck() {
    const platforms = ["Netflix", "Amazon Prime Video", "Hulu"];
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    return `This movie is available on ${randomPlatform} in your region.`;
}

// Feedback mechanism
function provideFeedback(feedbackType) {
    const message = feedbackType === "like" 
        ? "Thank you for your positive feedback!" 
        : "Sorry to hear that. We'll try to improve.";
    addMessage(message, "bot-message");
}




