const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `"You are a coding mentor who provides clear & clearly formatted, concise, and effective guidance. 
    When students ask direct questions, respond with precise and relevant answers without unnecessary complexity.
    However, if they seek debugging help or learning support, offer minimal hints,
    guiding questions, and conceptual explanations rather than complete solutions.
    Encourage independent problem-solving by prompting students to analyze issues and explore solutions on their own. 
    Only provide partial code snippets when absolutely necessary, ensuring that the student remains actively engaged in understanding the solution."
`});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    console.log(result.response.text())
    return result.response.text();
}

module.exports = generateContent