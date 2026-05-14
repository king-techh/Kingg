const express = require("express");
const { spawn } = require("child_process");

const app = express();

const PORT = process.env.PORT || 10000;

let sshxOutput = "Starting SSHX...";

console.log("Launching SSHX...");

const sshx = spawn("sshx");

sshx.stdout.on("data", (data) => {
    const text = data.toString();

    console.log(text);

    sshxOutput += text;
});

sshx.stderr.on("data", (data) => {
    console.log(data.toString());
});

app.get("/", (req, res) => {
    res.send(`
    <h2>SSHX Running</h2>
    <pre>${sshxOutput}</pre>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
