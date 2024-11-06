export const sendMessageToAI = async (message) => {
    try {
        const api = await fetch(`https://api.hitori.us.kg/ai/openai?key=sell&query=${message}`)
        const ress = await api.json();
        return ress.result.data
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, there was an error processing your request.';
    }
};
