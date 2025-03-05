import PptxGenJS from "pptxgenjs";

export const visionTemplate = (slide, data) => {
  slide.background = { color: "0056b3" };

  slide.addShape("rect", {
    // ✅ "rect" 문자열 사용
    x: 0.5,
    y: 0.6,
    w: 1.5,
    h: 0.5,
    fill: { color: "FFFFFF" },
  });

  slide.addText("Vision", {
    x: 0.75,
    y: 0.7,
    fontSize: 14,
    bold: true,
    color: "000000",
  });

  slide.addText(data?.vision || "No vision provided", {
    x: 1,
    y: 1.8,
    fontSize: 28,
    bold: true,
    color: "FFFFFF",
    w: 8,
    align: "left",
  });
};
