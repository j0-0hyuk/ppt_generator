import React from "react";
import PptxGenJS from "pptxgenjs";
import { slidesConfig } from "./slidesConfig";
import { introductionTemplate } from "./templates/introductionTemplate";
import { problemTemplate } from "./templates/problemTemplate";
import { solutionTemplate } from "./templates/solutionTemplate";
import { marketTemplate } from "./templates/marketTemplate";
import { mockData } from "./mockData";

const templates = {
  introduction: introductionTemplate,
  problem: problemTemplate,
  solution: solutionTemplate,
  market: marketTemplate, // ✅ Market 템플릿 추가
};

const App = () => {
  const handleGeneratePPT = () => {
    let pptx = new PptxGenJS();
    pptx.defineSlideMaster({
      title: "MASTER_SLIDE",
      objects: [{ text: " ", options: { FontFace: "Noto Sans" } }],
    });

    slidesConfig.forEach((slideConfig) => {
      let slide = pptx.addSlide("MASTER_SLIDE");
      const templateFunc = templates[slideConfig.template];
      const slideData = mockData[slideConfig.key];

      if (templateFunc) {
        templateFunc(slide, slideData, pptx); // ✅ pptx 인스턴스 전달
      } else {
        console.error(`❌ Error: ${slideConfig.key} 템플릿을 찾을 수 없음!`);
      }
    });

    pptx.writeFile({ fileName: "Market_Analysis_Presentation.pptx" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>PPT 생성기</h1>
      <button
        onClick={handleGeneratePPT}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        PPT 만들기
      </button>
    </div>
  );
};

export default App;
