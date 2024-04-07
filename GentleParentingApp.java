import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class GentleParentingApp {

    private Map<String, Map<Integer, String>> gentleSuggestions = new HashMap<>();

    public GentleParentingApp() {
        generateSuggestions();
    }

    private void generateSuggestions() {
        // Suggestions for dealing with misbehavior
        Map<Integer, String> misbehaviorSuggestions = new HashMap<>();
        misbehaviorSuggestions.put(1, "Tell them what they did is wrong and why.");
        misbehaviorSuggestions.put(2, "Tell them what they did is wrong and why.");
        misbehaviorSuggestions.put(3, "Take a deep breath, watch your words, decide on a reasonable punishment, and talk to your child later.");
        misbehaviorSuggestions.put(4, "Take a deep breath, watch your words, decide on a reasonable punishment, and talk to your child later.");
        misbehaviorSuggestions.put(5, "Take five minutes to yourself to calm down. Then, calmly speak to someone for advice. Wait until you have calmed down before responding and finding out why they did what they did.");
        gentleSuggestions.put("misbehavior", misbehaviorSuggestions);

        // Suggestions for handling tantrums
        Map<Integer, String> tantrumSuggestions = new HashMap<>();
        tantrumSuggestions.put(1, "Offer comfort and reassurance.");
        tantrumSuggestions.put(2, "Offer comfort and reassurance.");
        tantrumSuggestions.put(3, "Stay calm, provide comfort and reassurance, and set clear limits.");
        tantrumSuggestions.put(4, "Stay calm, provide comfort and reassurance, and set clear limits.");
        tantrumSuggestions.put(5, "Stay calm, provide comfort and reassurance, and set clear limits.");
        gentleSuggestions.put("tantrums", tantrumSuggestions);

        // Suggestions for dealing with acts of violence
        Map<Integer, String> violenceSuggestions = new HashMap<>();
        violenceSuggestions.put(1, "Immediately intervene and remove the child from the situation.");
        violenceSuggestions.put(2, "Immediately intervene and remove the child from the situation.");
        violenceSuggestions.put(3, "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger.");
        violenceSuggestions.put(4, "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger.");
        violenceSuggestions.put(5, "Stay calm, express disapproval of the behavior, and provide alternatives to express frustration or anger.");
        gentleSuggestions.put("acts of violence", violenceSuggestions);

        // Suggestions for rewarding positive behavior
        Map<Integer, String> rewardsSuggestions = new HashMap<>();
        rewardsSuggestions.put(1, "Offer verbal praise and acknowledgment of the behavior.");
        rewardsSuggestions.put(2, "Offer verbal praise and acknowledgment of the behavior.");
        rewardsSuggestions.put(3, "Offer verbal praise, acknowledgment of the behavior, and a small reward.");
        rewardsSuggestions.put(4, "Offer verbal praise, acknowledgment of the behavior, and a small reward.");
        rewardsSuggestions.put(5, "Offer verbal praise, acknowledgment of the behavior, and a small reward.");
        gentleSuggestions.put("rewards", rewardsSuggestions);
    }

    public String getSuggestionsForPrompt(String theme, int severity) {
        return gentleSuggestions.get(theme).get(severity);
    }

    public static void main(String[] args) {
        GentleParentingApp app = new GentleParentingApp();
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user for the theme of the child's infraction
        System.out.println("Choose the theme of the child's infraction:");
        System.out.println("1. Misbehavior");
        System.out.println("2. Tantrums");
        System.out.println("3. Acts of violence");
        System.out.println("4. Rewards");
        System.out.print("Enter the number corresponding to the theme: ");
        int themeNumber = scanner.nextInt();
        String theme = "";
        switch (themeNumber) {
            case 1:
                theme = "misbehavior";
                break;
            case 2:
                theme = "tantrums";
                break;
            case 3:
                theme = "acts of violence";
                break;
            case 4:
                theme = "rewards";
                break;
            default:
                System.out.println("Invalid input. Exiting...");
                System.exit(1);
        }
        
        // Prompt the user for the severity level
        System.out.print("Enter the severity level (1-5): ");
        int severity = scanner.nextInt();
        if (severity < 1 || severity > 5) {
            System.out.println("Invalid severity level. Exiting...");
            System.exit(1);
        }

        // Get suggestions based on the chosen theme and severity
        String suggestion = app.getSuggestionsForPrompt(theme, severity);
        System.out.println("\nResponse to child's infraction:");
        System.out.println("- " + suggestion);
        
        scanner.close();
    }
}
