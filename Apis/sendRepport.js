import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import "dotenv/config"

const reportPath = String.raw`C:\Users\user.lahcini\Desktop\plywright\playwright-report\index.html`;

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendHTML() {
    if (!fs.existsSync(reportPath)) {
        console.error("Report file not found:", reportPath);
        return;
    }

    if (!TOKEN) {
        console.error("Missing TELEGRAM_BOT_TOKEN environment variable.");
        return;
    }

    const url = `https://api.telegram.org/bot${TOKEN}/sendDocument`;
    const form = new FormData();

    form.append("chat_id", CHAT_ID);
    form.append("document", fs.createReadStream(reportPath), {
        filename: "playwright-report.html",
        contentType: "text/html"
    });

    try {
        const response = await axios.post(url, form, {
            headers: form.getHeaders()
        });

        console.log("File sent successfully:", response.data);
    } catch (error) {
        console.error(
            "Failed to send file:",
            error.response?.data || error.message
        );
    }
}

await sendHTML();