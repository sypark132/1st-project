//input text type과 button 실행하기

function myfunction() {
	var _name=document.button.name; //name의 value값 가져오기
		if (_name.value=="") {
			alert("이름을 입력해주세요.");
			_name.focus(); //자동으로 커서를 name칸에 두기
			return false; //다시 돌아가기
		}
	var _tel=document.button.tel; //tel의 value값 가져오기
		if(_tel.value=="") {
			alert("전화번호를 입력해주세요.");
			_tel.focus();
			return false;
		}
	var _opi=document.button.opinion; //opi의 value값 가져오기
		if(_opi.value=="") {
			alert("고민 내용을 입력해주세요.");
			_opi.focus();
			return false;
		}
		alert("감사합니다.\n"+_name.value+"님 정상적으로 신청되었습니다.");
		location.href="sypark_main.html"; //실행 후 다시 페이지 상단으로 이동하기
}