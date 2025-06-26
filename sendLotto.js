// sendLotto.js
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCSCIME1LJF3HIH1", "97ALJCC312TKX4YM0AL5YWVIMT5IFMOQ");

// *** cheerMsg 추가! ***
async function sendLottoSMS(to, numbers, cheerMsg = '') {
  // 추천번호와 메시지 합침 (메시지가 있을 때만 줄바꿈해서 추가)
  const text = `[로또1081] 추천번호: ${numbers}` + (cheerMsg ? `\n${cheerMsg}` : '');
console.log("최종 문자 text:", text); // 이 줄 추가

  return await messageService.send({
    to: to,
    from: "01062581675", // 인증된 발신번호
    text: text,
  });
}

module.exports = sendLottoSMS;
