// Define a class for the GentleParent+ app
class GentleParentApp {
    constructor() {
        this.resources = [];
        this.goals = [];
        this.communityPosts = [];
    }

    // Method to add resources
    addResource(resource) {
        this.resources.push(resource);
    }

    // Method to add goals
    addGoal(goal) {
        this.goals.push(goal);
    }

    // Method to add community posts
    addCommunityPost(post) {
        this.communityPosts.push(post);
    }

    // Method to display resources
    displayResources() {
        console.log("Gentle Parenting Resources:");
        this.resources.forEach(resource => console.log(resource));
    }

    // Method to display goals
    displayGoals() {
        console.log("Your Parenting Goals:");
        this.goals.forEach(goal => console.log(goal));
    }

    // Method to display community posts
    displayCommunityPosts() {
        console.log("Community Posts:");
        this.communityPosts.forEach(post => console.log(post));
    }

    // Method to interact with the chatbot
    chatWithBot() {
        console.log("Welcome to GentleParent+ Chatbot! How can I assist you today?");
        let userInput = prompt().toLowerCase();

        // Simple chatbot responses
        if (userInput.includes("resources")) {
            this.displayResources();
        } else if (userInput.includes("goals")) {
            this.displayGoals();
        } else if (userInput.includes("community")) {
            this.displayCommunityPosts();
        } else {
            console.log("I'm sorry, I didn't understand your request. Please try again.");
        }
    }
}
// Create an instance of the GentleParentApp
const app = new GentleParentApp();

// Add sample resources
app.addResource("Article: Gentle Discipline Techniques");
app.addResource("Video: Effective Communication with Kids");

// Add sample goals
app.addGoal("Reduce use of physical discipline by 50%");
app.addGoal("Improve communication with my child");

// Add sample community posts
app.addCommunityPost("Joined the GentleParent+ community! Excited to learn from others.");
app.addCommunityPost("Looking for advice on handling tantrums gently. Any tips?");

// Interact with the chatbot
app.chatWithBot();