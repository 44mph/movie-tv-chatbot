// Load user data and greet the user
window.onload = function () {
    const username = sessionStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcome-message');
    const greetingMessage = document.getElementById('greeting-message');

    if (username) {
        // Display welcome message in the header
        welcomeMessage.textContent = `Welcome, ${username}!`;
        
        // Display chatbot's purpose in the chatbox
        greetingMessage.textContent = `Hi ${username}, I’m here to help you find your next favorite movie or TV show! 
        Ask me for recommendations or streaming availability, and I’ll do my best to assist you.`;
    } else {
        // Redirect to login if no username is found
        window.location.href = "index.html";
    }
};

const chatHistory = {};

// Load chat history for the logged-in user
function loadChatHistory(username) {
    const chatbox = document.getElementById('chatbox');
    chatHistory[username] = chatHistory[username] || []; // Initialize history if none exists
    chatHistory[username].forEach(message => {
        addMessage(message.text, message.className);
    });
}

function sendMessage() {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const username = sessionStorage.getItem('username');

    // User message
    const userMessage = userInput.value;
    if (userMessage.trim() === "") {
        alert("Please type a message before sending.");
        return;
    }
    addMessage(userMessage, "user-message");

    // Store message in history
    if (!chatHistory[username]) chatHistory[username] = [];
    chatHistory[username].push({ text: userMessage, className: "user-message" });

    // Clear input field
    userInput.value = "";

    // Bot response (mocked for now)
    setTimeout(() => {
        const botMessage = generateResponse(userMessage);
        addMessage(botMessage, "bot-message");

        // Store bot message in history
        chatHistory[username].push({ text: botMessage, className: "bot-message" });
    }, 1000);
}

function addMessage(message, className) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}

function generateResponse(userMessage) {
    if (userMessage.toLowerCase().includes("recommend")) {
        return "I recommend 'Inception' (2010). A sci-fi thriller!";
    } else if (userMessage.toLowerCase().includes("where")) {
        return "'Inception' is available on Netflix.";
    } else {
        return "I'm here to help! Ask me about movies or TV shows.";
    }
}

function provideFeedback(feedbackType) {
    const message = feedbackType === "like" 
        ? "Thank you for your positive feedback!" 
        : "Sorry to hear that. We'll try to improve.";
    addMessage(message, "bot-message");
}






