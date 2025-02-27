import React, { useState } from "react";
import PptxGenJS from "pptxgenjs";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { templates } from "./template";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTemplate, setselectedTemplate] = useState("default");
  const [error, setError] = useState("");

  const createPPT = () => {
    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 모두 입력해주세요!");
      return;
    }

    setError("");

    let pptx = new PptxGenJS();

    pptx = templates[selectedTemplate](pptx, title, content);

    pptx.writeFile({ fileName: `${title}.pptx` });

    setTitle("");
    setContent("");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          PPT 생성기
        </Typography>

        {/* 오류 메시지 */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="제목"
          variant="outlined"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="내용"
          variant="outlined"
          multiline
          rows={4}
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={createPPT}
          sx={{ mt: 2 }}
        >
          PPT 만들기
        </Button>
      </Box>
    </Container>
  );
}

export default App;
