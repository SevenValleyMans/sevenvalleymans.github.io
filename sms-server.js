const express = require('express');
const axios = require('axios');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = 'NCS2NTN8D4MMPJDO';
const API_SECRET = 'BXXYXM6YQ1MY5APFETKCDWWVXJ415ZD7';

// 시그니처 생성 함수 (쿨SMS 공식 HMAC)
function makeSignature(method, url, timestamp, apiKey, apiSecret) {
  const space = ' ';
  const newLine = '\n';
  const message = [method, space, url, newLine, timestamp, newLine, apiKey].join('');
  const hmac = crypto.createHmac('sha256', apiSecret);
  return hmac.update(message).digest('base64');
}

app.post('/send-sms', async (req, res) => {
  const { to, numbers } = req.body;
  try {
    const method = 'POST';
    const url = '/messages/v4/send';
    const timestamp = Date.now().toString();
    const signature = makeSignature(method, url, timestamp, API_KEY, API_SECRET);

    const result = await axios.post(
      'https://api.coolsms.co.kr/messages/v4/send',
      {
        messages: [
          {
            to: to,
            from: '01062581675', // 반드시 인증된 발신번호!!
            text: `[로또1081] 추천번호: ${numbers}`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'x-timestamp': timestamp,
          'x-signature': signature, // 쿨SMS 공식 문서는 x-signature 권장!
        },
      }
    );
    res.json({ success: true, data: result.data });
  } catch (e) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ success: false, error: e.response?.data || e.message });
  }
});

app.listen(4000, () => {
  console.log('SMS 서버 실행중: http://localhost:4000');
});
