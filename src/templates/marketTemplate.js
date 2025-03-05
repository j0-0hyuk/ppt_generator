export const marketTemplate = (slide, data = {}, pptx) => {
  const marketGrowthGraph = data?.marketGrowthGraph || {};
  const marketContents = Array.isArray(marketGrowthGraph.contents)
    ? marketGrowthGraph.contents
    : [];
  const marketResearch = Array.isArray(marketGrowthGraph.marketResearch)
    ? marketGrowthGraph.marketResearch
    : [];

  // ✅ 배경색 설정 (다른 슬라이드와 통일)
  slide.background = { color: "cccccc" };

  // ✅ 제목 추가
  slide.addText(marketGrowthGraph.target || "시장 성장 분석", {
    x: 0.5,
    y: 0.5,
    fontSize: 28,
    bold: true,
    color: "000000",
    w: 9,
    align: "left",
  });

  // ✅ 차트 추가 (데이터가 있을 때만)
  slide.addChart(pptx.ChartType.bar, marketContents, {
    x: 1.2,
    y: 1,
    w: 7,
    h: 3,
    chartColors: ["007bff"],
  });

  // ✅ 시장 조사 결과 추가 (데이터가 있을 때만)
  if (marketResearch.length > 0) {
    slide.addText(marketResearch.map((item, idx) => `• ${item}`).join("\n"), {
      x: 1.2,
      y: 4.7,
      fontSize: 12,
      color: "000000",
      w: 9,
      align: "left",
      lineSpacing: 18,
    });
  }
};
