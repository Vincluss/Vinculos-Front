// components/CurriculumGenerator.js
import { useState, useEffect } from "react";
import Docxtemplater from "docxtemplater";

const CurriculumGenerator = ({ onClose, onDownload }) => {
  const [userResponses, setUserResponses] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    generateCurriculumDocx();
  }, []);

  const generateCurriculumDocx = async () => {
    // Implement curriculum generation logic based on user responses
    const curriculumData = [
      { question: "Name", answer: "John Doe" },
      { question: "Experience", answer: "5 years" },
      // Add more data as needed
    ];

    const templateContent = `
      <h2>Curriculum Generated:</h2>
      <ul>
          {{#responses}}
              <li><strong>{{question}}</strong>: {{answer}}</li>
          {{/responses}}
      </ul>
    `;

    const doc = new Docxtemplater();
    doc.loadZip(new JSZip(templateContent));

    // Set data in the template
    doc.setData({ responses: curriculumData });

    // Render the document
    doc.render();

    // Generate a Blob from the document
    const blob = doc.getZip().generate({ type: "blob" });

    // Save the curriculum file on the server
    const response = await fetch("/api/saveCurriculum", {
      method: "POST",
      body: blob,
    });

    if (response.ok) {
      // Set download link if the server successfully saves the file
      setDownloadLink("/curriculum/generated_curriculum.docx");
      onDownload("/curriculum/generated_curriculum.docx");
    } else {
      console.error("Failed to save curriculum on the server");
    }
  };

  return (
    <div>
      <h2>Curriculum Generator</h2>
      <p>Generating curriculum...</p>

      {downloadLink && (
        <>
          <p>Curriculum generated successfully!</p>
          <a href={downloadLink} download>
            Download Curriculum
          </a>
          <button onClick={onClose}>Close</button>
        </>
      )}
    </div>
  );
};

export default CurriculumGenerator;
