export const tamSamSomTemplate = (slide, data = {}, pptx) => {
  console.log("📌 Debug: tamSamSom Template 실행됨, 데이터 확인", data);

  const { title, tam, sam, som } = data;

  // ✅ 배경색 설정
  slide.background = { color: "cccccc" };

  // ✅ 제목 추가
  slide.addText(title || "시장 분석 (TAM, SAM, SOM)", {
    x: 0.5,
    y: 0.5,
    fontSize: 22,
    bold: true,
    color: "000000",
    w: 9,
    align: "left",
  });

  // ✅ TAM, SAM, SOM 원형 추가
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 0.5,
    y: 1,
    w: 4,
    h: 4,
    fill: { color: "a3c9ff" }, // 연한 파란색 (TAM)
  });

  slide.addShape(pptx.ShapeType.ellipse, {
    x: 1,
    y: 2,
    w: 3,
    h: 3,
    fill: { color: "4f94f8" }, // 중간 파란색 (SAM)
  });

  slide.addShape(pptx.ShapeType.ellipse, {
    x: 2,
    y: 3,
    w: 1.5,
    h: 1.5,
    fill: { color: "0056b3" }, // 진한 파란색 (SOM)
  });

  // ✅ TAM, SAM, SOM 텍스트 추가
  slide.addText(`TAM\n${tam.marketSizeNum}${tam.marketSizeUnit}`, {
    x: 1.8,
    y: 3.5,
    fontSize: 14,
    bold: true,
    color: "000000",
    w: 2,
    align: "center",
  });

  slide.addText(`SAM\n${sam.marketSizeNum}${sam.marketSizeUnit}`, {
    x: 0.5,
    y: 1,
    fontSize: 14,
    bold: true,
    color: "000000",
    w: 2,
    align: "center",
  });

  slide.addText(`SOM\n${som.marketSizeNum}${som.marketSizeUnit}`, {
    x: 1,
    y: 2,
    fontSize: 14,
    bold: true,
    color: "FFFFFF",
    w: 2,
    align: "center",
  });

  // ✅ TAM, SAM, SOM 설명 추가
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.5,
    y: 1.5,
    w: 4,
    h: 1,
    fill: { color: "a3c9ff" },
  });
  slide.addText(tam.description, {
    x: 5.7,
    y: 1.8,
    fontSize: 10,
    color: "000000",
    w: 3.8,
    align: "left",
  });
  slide.addText(tam.marketSizeJustification, {
    x: 5.7,
    y: 2.3,
    fontSize: 10,
    color: "FFFFFF",
    w: 3.8,
    align: "left",
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 5.5,
    y: 3,
    w: 4,
    h: 1,
    fill: { color: "4f94f8" },
  });
  slide.addText(sam.description, {
    x: 5.7,
    y: 3.3,
    fontSize: 10,
    color: "000000",
    w: 3.8,
    align: "left",
  });
  slide.addText(sam.marketSizeJustification, {
    x: 5.7,
    y: 3.8,
    fontSize: 10,
    color: "FFFFFF",
    w: 3.8,
    align: "left",
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 5.5,
    y: 4.5,
    w: 4,
    h: 1,
    fill: { color: "0056b3" },
  });
  slide.addText(som.description, {
    x: 5.7,
    y: 4.8,
    fontSize: 10,
    color: "000000",
    w: 3.8,
    align: "left",
  });
  slide.addText(som.marketSizeJustification, {
    x: 5.7,
    y: 5.3,
    fontSize: 10,
    color: "FFFFFF",
    w: 3.8,
    align: "left",
  });
};
