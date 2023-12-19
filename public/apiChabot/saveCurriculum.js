// pages/api/saveCurriculum.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const curriculumPath = path.join(
      process.cwd(),
      "public",
      "curriculum",
      "generated_curriculum.docx"
    );
    const buffer = await new Promise((resolve) => {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk));
      req.on("end", () => resolve(Buffer.concat(chunks)));
    });

    fs.writeFileSync(curriculumPath, buffer);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving curriculum:", error);
    res.status(500).json({ success: false });
  }
}
  