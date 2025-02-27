export const blueTemplate = (pptx, title, content) => {
  let slide = pptx.addSlide();
  slide.background = { fill: "007bff" }; // 파란색 배경

  slide.addText(title, {
    x: 1,
    y: 0.5,
    fontSize: 32,
    bold: true,
    color: "FFFFFF",
  });
  slide.addText(content, { x: 1, y: 1.5, fontSize: 24, color: "FFFFFF" });

  return pptx;
};
