const API_URL = 'http://localhost:5000';

export const checkHealth = async () => {
    try {
        const response = await fetch(`${API_URL}/health`);
        return await response.json();
    } catch (error) {
        console.error("Core Server Connection Failed:", error);
        return { status: "Offline" };
    }
};
