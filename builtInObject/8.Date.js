new Date();
//현재시간
new Date("jun 5, 2022");
new Date("'2022-12-");

Date.now() //UTC 1970년 1월1일 자정 시간과의 차이를 밀리초 단위로 리턴
Date.parse() //밀리초단위로 표현

const now = new Date();
now.setDate //등등으로 시간 원하는 대로 설정
now.getDate()// 설정한 시간 받아오기 0:1일, 0:일요일

now.toDateString
now.toTimeString()
//등등 찾아가면서 합시다 
