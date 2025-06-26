const { SolapiMessageService } = require('solapi');
const messageService = new SolapiMessageService('NCSCIME1LJF3HIH1', '97ALJCC312TKX4YM0AL5YWVIMT5IFMOQ');

messageService.send({
  to: '01066204504',
  from: '01062581675',
  text: '로또 추천번호: 1, 2, 3, 4, 5, 45',
})
.then(res => console.log(res))
.catch(err => console.error(err));
