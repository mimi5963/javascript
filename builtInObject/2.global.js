//전역 객체 value 내장
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
//globalThis는 브라우저에서도 사용가능
// 전역 객체를 가리키는게 hlobalThis

eval('const num=2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

//URL (URI 하위개념 - 어떤 리소스 나타내는 유일한 주소같은것 )
//아스크 문자로만 구성되어야함
//한글이나 특수문자는 이스케이프 처리 해야 함
//이걸 자동으로 변환해주는게 URI
//uri는 identifier -> 특정 리소스 식별하는 통합 지원 식별자
//url은 lovator로 리소스가 어디있는지 알려줌 둘의 차이는 식별과 주소정도?
const URL ='https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);


//전체 URL이 아니라 드림것은 Component 사용
const part = '드림코등.com';
encodeURIComponent(part);