export const problemTemplate = (slide, data = {}, pptx) => {
  const problemTitle = data?.problemTitle || "문제 정의";
  const problems = Array.isArray(data?.problems) ? data.problems : [];

  // 🚀 배경색 설정
  slide.background = { color: "007bff" };

  slide.addImage({
    path: "https://thumbs.dreamstime.com/b/problem-character-means-difficulty-dispute-meaning-trouble-34210352.jpg",
    x: 4.375,
    y: 0,
    w: 5.625,
    h: 5.625,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 5.625,
    fill: { color: "000000", transparency: 50 }, // ✅ 투명도 적용 (검은색 반투명)
  });

  // 🚀 제목 추가
  slide.addText(problemTitle, {
    x: 0.5,
    y: 1,
    fontSize: 30,
    bold: true,
    color: "FFFFFF",
    w: 9,
    align: "left",
  });

  // 🚀 문제 리스트 추가
  if (problems.length > 0) {
    problems.forEach((problem, index) => {
      const yPos = 1 + index * 1.8;

      // ✅ 둥근 직사각형 배경 추가 (pptx에서 ShapeType 가져오기)
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.5,
        y: yPos + 0.83,
        w: 4.6,
        h: 0.3,
        fill: { color: "FFFFFF", transparency: 0 },
        roundRadius: 50,
      });

      // ✅ 문제 제목
      slide.addText(problem.title, {
        x: 0.5,
        y: yPos + 1,
        fontSize: 15,
        bold: true,
        color: "000000",
        w: 8.8,
        align: "left",
      });

      // ✅ 문제 설명
      slide.addText(problem.contents.join("\n"), {
        x: 0.5,
        y: yPos + 1.6,
        fontSize: 10,
        color: "FFFFFF",
        w: 8.4,
        align: "left",
        lineSpacing: 18,
      });
    });
  } else {
    slide.addText("등록된 문제가 없습니다.", {
      x: 0.5,
      y: 2,
      fontSize: 18,
      color: "FFFFFF",
      w: 9,
      align: "left",
    });
  }
};
