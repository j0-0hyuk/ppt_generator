export const callAIAPI = async (inputs) => {
  try {
    const response = await fetch("https://your-ai-api.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs }),
    });

    if (!response.ok) {
      throw new Error("AI 응답 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("AI API 호출 오류:", error);
    return null;
  }
};
