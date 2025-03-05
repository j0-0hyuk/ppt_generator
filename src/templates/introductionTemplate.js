import PptxGenJS from "pptxgenjs";

export const introductionTemplate = (slide, data = {}) => {
  // ✅ PptxGenJS 인스턴스 생성
  let pptx = new PptxGenJS();

  // ✅ 배경색 적용
  slide.background = { color: "007bff" };

  // ✅ Intro 텍스트 (큰 제목)
  slide.addText(data?.intro || "No introduction provided", {
    x: 0.5,
    y: 1.5,
    fontSize: 30,
    bold: true,
    color: "FFFFFF",
    w: 9, // 슬라이드 너비에 맞춤
    align: "left",
  });

  // ✅ 둥근 직사각형 추가 (pptx.ShapeType.roundRect 사용)
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5,
    y: 1.8,
    w: 9,
    h: 0.1,
    fill: { color: "FFFFFF" },
    roundRadius: 10,
  });

  // ✅ 문서 이용 및 편집 관련 안내 텍스트
  const description = [
    "1. 생성된 문서 권리: 독스헌트AI는 고객님의 입력을 기반으로 문서를 생성하며, 생성된 문서의 모든 권리와 책임은 고객님께 있습니다.",
    "2. 템플릿 권리: 본 사업계획서 템플릿은 상업적 이용 외의 용도로 자유롭게 사용 가능합니다. 단, 템플릿의 재판매 및 저작권 침해는 금지됩니다.",
    "3. 보안 우선 정책: 독스헌트AI는 고객님의 보안을 철저히 보호하며, AI 학습 목적으로 사용되지 않습니다.",
    "4. 구글 문서 도구와의 연동: 생성된 문서는 구글 문서 도구와 연동되어 편리하게 사용할 수 있습니다.",
    "\n",
    "5. 검색 증강 생성(RAG) 기술을 활용하여 보다 신뢰할 수 있는 데이터와 문서를 제공합니다.",
    "독스헌트AI 문서 편집 안내",
    "1. 독스헌트AI의 모든 요소(텍스트, 도표, 도형, 차트 등)는 편리하게 수정 가능합니다.",
    "2. 모든 차트는 차트 클릭 > 연결된 차트를 통해 간편하게 수정할 수 있습니다.",
    "3. 문서 내 모든 폰트는 ‘Noto Sans Korean’입니다.  폰트 다운받기(클릭)",
    "\n",
    "문서 별도 저장 방법",
    "1. 구글 드라이브 저장 : 상단 메뉴에서 ‘파일 > 사본 만들기 > 프레젠테이션 전체 > 사본 만들기’",
    "2. PC에 저장 : 상단 메뉴에서 ‘파일 > 다운로드 > 원하는 형식 선택’",
  ];

  slide.addText(description.join("\n"), {
    x: 0.5,
    y: 4.0,
    fontSize: 8,
    color: "FFFFFF",
    w: 9,
    align: "left",
  });
};
