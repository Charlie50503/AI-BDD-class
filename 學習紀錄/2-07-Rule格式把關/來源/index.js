const fs = require("fs");
const path = require("path");

const raw = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const data = JSON.parse(raw);

const workshop = data.content.find(
  item => item.type === "text-workshop"
);

const transcript = workshop.data.paragraphs
  .map(paragraph => paragraph.text)
  .join("\n\n");

fs.writeFileSync(path.join(__dirname, "transcript.txt"), transcript, "utf8");

console.log(transcript);