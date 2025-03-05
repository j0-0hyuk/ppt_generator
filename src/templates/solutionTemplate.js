export const solutionTemplate = (slide, data = {}, pptx) => {
  const solutionTitle = data?.solutionTitle || "솔루션 제공";
  const solutions = Array.isArray(data?.solutions) ? data.solutions : [];

  // 🚀 배경색 설정 (회색으로 변경)
  slide.background = { color: "cccccc" };

  // 🚀 제목 추가 (Solution Title)
  slide.addText(solutionTitle, {
    x: 0.5,
    y: 0.5,
    fontSize: 28,
    bold: true,
    color: "000000", // 검정색으로 변경
    w: 9,
    align: "left",
  });

  // 🚀 솔루션 리스트 추가 (최대 3개)
  solutions.slice(0, 3).forEach((solution, index) => {
    const yPos = 1.5 + index * 1.8;

    // ✅ 둥근 직사각형 추가 (솔루션 제목)
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.5,
      y: yPos,
      w: 3.8,
      h: 0.6,
      fill: { color: "007bff" },
      roundRadius: 50,
    });

    slide.addText(solution.title, {
      x: 0.7,
      y: yPos + 0.33,
      fontSize: 12,
      bold: true,
      color: "FFFFFF",
      w: 3.5,
      align: "center",
    });

    // ✅ ▶ 아이콘 추가 (삼각형 모양)
    slide.addShape(pptx.ShapeType.triangle, {
      x: 4.4,
      y: yPos + 0.15,
      w: 0.4,
      h: 0.4,
      fill: { color: "007bff" },
      rotate: 90,
    });

    // ✅ 내용 박스 추가 (하얀 배경)
    slide.addShape(pptx.ShapeType.rect, {
      x: 5,
      y: yPos - 0.5,
      w: 4.5,
      h: 1.5, // ✅ 박스 크기 조정
      fill: { color: "FFFFFF" },
      line: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, angle: 45, offset: 3, color: "777777" },
    });

    // ✅ **불릿 포인트 적용 (각 항목별 개별 불릿)**
    solution.contents.forEach((item, idx) => {
      slide.addText(`• ${item}`, {
        x: 5.2,
        y: yPos + idx * 0.3, // ✅ 개별 항목 위치 조정
        fontSize: 10,
        color: "000000",
        w: 4.2,
        align: "left",
      });
    });
  });
};
