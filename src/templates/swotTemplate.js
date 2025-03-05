import PptxGenJS from "pptxgenjs";

export const swotTemplate = (slide, data) => {
  slide.background = { color: "F8F9FA" };

  slide.addShape("rect", {
    // ✅ "rect" 문자열 사용
    x: 0.3,
    y: 0.2,
    w: 3,
    h: 0.5,
    fill: { color: "0056b3" },
  });

  slide.addText("SWOT Analysis", {
    x: 0.4,
    y: 0.3,
    fontSize: 20,
    bold: true,
    color: "FFFFFF",
  });

  const swotCategories = [
    { key: "strengths", x: 0.5, y: 1, title: "Strengths" },
    { key: "weaknesses", x: 7, y: 1, title: "Weaknesses" },
    { key: "opportunities", x: 0.5, y: 3.2, title: "Opportunities" },
    { key: "threats", x: 7, y: 3.2, title: "Threats" },
  ];

  swotCategories.forEach((section) => {
    const content = data?.swotAnalysis?.[section.key] || [];

    slide.addText(section.title, {
      x: section.x,
      y: section.y,
      fontSize: 16,
      bold: true,
      color: "000000",
    });

    (content || []).forEach((point, i) => {
      slide.addText(`• ${point}`, {
        x: section.x,
        y: section.y + 0.4 + i * 0.4,
        fontSize: 14,
        color: "000000",
        w: 2.5,
      });
    });
  });
};
