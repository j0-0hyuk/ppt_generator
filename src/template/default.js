export const defaultTemplate = (pptx, title, content) => {
  let slide = pptx.addSlide();

  const slideWidth = 10;
  const slideHeight = 5.625;

  const imageSize = 3;
  const centerX = (slideWidth - imageSize) / 2;
  const centerY = (slideHeight - imageSize) / 2;

  slide.addImage({
    path: "/신한은행.png",
    x: centerX,
    y: centerY,
    w: imageSize,
    h: imageSize,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: slideWidth,
    h: slideHeight,
    fill: { color: "FFFFFF", transparency: 50 },
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: slideWidth,
    h: 0.5,
    fill: { color: "#0046FF" },
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: slideHeight - 0.5,
    w: slideWidth,
    h: 0.5,
    fill: { color: "#0046FF" },
  });

  slide.addText(title, {
    x: 1,
    y: 1.5,
    fontSize: 32,
    bold: true,
    color: "000000",
  });

  slide.addText(content, {
    x: 1,
    y: 2.5,
    fontSize: 24,
    color: "000000",
  });

  return pptx;
};
