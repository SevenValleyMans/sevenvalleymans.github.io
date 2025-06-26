// sms-server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendLottoSMS = require("./sendLotto.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/send-sms", async (req, res) => {
  const { to, numbers, message } = req.body;   // ← message 추가!
  console.log("[문자 발송] to:", to, "| numbers:", numbers, "| message:", message); // 이 줄 추가
  if (!to || !numbers) {
    return res.json({ success: false, error: "필수 정보 누락" });
  }
  try {
    // message도 함께 전달!
    const result = await sendLottoSMS(to, numbers, message);
    res.json({ success: true, result });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(4000, () => {
  console.log("SMS 서버 작동 중: http://localhost:4000");
});
