import React from "react";
import PptxGenJS from "pptxgenjs";
import { slidesConfig } from "./slidesConfig";
import { introductionTemplate } from "./templates/introductionTemplate";
import { problemTemplate } from "./templates/problemTemplate";
import { solutionTemplate } from "./templates/solutionTemplate";
import { marketTemplate } from "./templates/marketTemplate";
import { tamSamSomTemplate } from "./templates/tamSamSomTemplate"; // ✅ 추가
import { mockData } from "./mockData";

const templates = {
  introductionTemplate,
  problemTemplate,
  solutionTemplate,
  marketTemplate,
  tamSamSomTemplate, // ✅ 추가
};

const App = () => {
  const handleGeneratePPT = () => {
    let pptx = new PptxGenJS();

    slidesConfig.forEach((slideConfig) => {
      let slide = pptx.addSlide();
      const templateFunc = templates[slideConfig.template];
      const slideData = mockData[slideConfig.key];

      if (templateFunc) {
        templateFunc(slide, slideData, pptx);
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
