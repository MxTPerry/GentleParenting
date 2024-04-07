// GentleParentingApp class
class GentleParentingApp {
    constructor() {
        this.gentleSuggestions = {};
        this.generateSuggestions();
    }

    generateSuggestions() {
        // Suggestions for dealing with misbehavior
        this.gentleSuggestions["misbehavior"] = {
            1: "Tell them what they did is wrong and why.",
            2: "Tell them what they did is wrong and why.",
            3: "Take a deep breath, watch your words, decide on a reasonable punishment, and talk to your child later.",
            4: "Take a deep breath, watch your words, decide on a reasonable punishment, and talk to your child later.",
            5: "Take five minutes to yourself to calm down. Then, calmly speak to someone for advice. Wait until you have calmed down before responding and finding out why they did what they did."
        };

        // Suggestions for handling tantrums
        this.gentleSuggestions["tantrums"] = {
            1: "Offer comfort and reassurance.",
            2: "Offer comfort and reassurance.",
            3: "Stay calm, provide comfort and reassurance, and set clear limits.",
            4: "Stay calm, provide comfort and reassurance, and set clear limits.",
            5: "Stay calm, provide comfort and reassurance, and set clear limits."
        };

        // Suggestions for dealing with acts of violence
        this.gentleSuggestions["acts of violence"] = {
            1: "Immediately intervene and remove the child from the situation.",
            2: "Immediately intervene and remove the child from the situation.",
            3: "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger.",
            4: "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger.",
            5: "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger."
        };

        // Suggestions for rewarding positive behavior
        this.gentleSuggestions["rewards"] = {
            1: "Offer verbal praise and acknowledgment of the behavior.",
            2: "Offer verbal praise and acknowledgment of the behavior.",
            3: "Offer verbal praise, acknowledgment of the behavior, and a small reward.",
            4: "Offer verbal praise, acknowledgment of the behavior, and a small reward.",
            5: "Offer verbal praise, acknowledgment of the behavior, and a small reward."
        };
    }

    getSuggestionsForPrompt(theme, severity) {
        return this.gentleSuggestions[theme][severity];
    }
}

// Instantiate GentleParentingApp
const app = new GentleParentingApp();

// Create UI elements
const container = document.createElement("div");
container.classList.add("container");

const heading = document.createElement("h1");
heading.textContent = "Gentle Parenting App";

const themeLabel = document.createElement("label");
themeLabel.textContent = "Theme of Child's Infraction:";
themeLabel.setAttribute("for", "theme");

const themeSelect = document.createElement("select");
themeSelect.setAttribute("id", "theme");
themeSelect.innerHTML = `
    <option value="misbehavior">Misbehavior</option>
    <option value="tantrums">Tantrums</option>
    <option value="acts of violence">Acts of Violence</option>
    <option value="rewards">Rewards</option>
`;

const severityLabel = document.createElement("label");
severityLabel.textContent = "Severity Level:";
severityLabel.setAttribute("for", "severity");

const severityInput = document.createElement("input");
severityInput.setAttribute("type", "range");
severityInput.setAttribute("id", "severity");
severityInput.setAttribute("min", "1");
severityInput.setAttribute("max", "5");
severityInput.setAttribute("value", "1");

const submitButton = document.createElement("button");
submitButton.setAttribute("id", "submitButton");
submitButton.textContent = "Get Suggestion";

const responseDiv = document.createElement("div");
responseDiv.setAttribute("id", "response");

// Append elements to the container
container.appendChild(heading);
container.appendChild(themeLabel);
container.appendChild(themeSelect);
container.appendChild(severityLabel);
container.appendChild(severityInput);
container.appendChild(submitButton);
container.appendChild(responseDiv);

// Append container to the body
document.body.appendChild(container);

// Add event listener to submit button
document.getElementById("submitButton").addEventListener("click", function() {
    const theme = document.getElementById("theme").value;
    const severity = document.getElementById("severity").value;

    // Get suggestions based on the chosen theme and severity
    const suggestion = app.getSuggestionsForPrompt(theme, severity);

    // Display the suggestion
    document.getElementById("response").innerHTML = "Response to child's infraction:<br>- " + suggestion;
});

