let index = {
    init: function (){
        // 해당 버튼이 클릭 될 시에 함수를 실행하겠다는 뜻. jquery
        $("#btn-save").on("click", ()=>{ // function(){} 이 아닌 ()=> 의 화살표 함수를 사용하는 이유는 this 를 바인딩 하기 위함이다.!!!
            this.save();
        });
    },

    save: function(){
        //alert("user의 save 함수 호출됨");
        let data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        };

        //console.log(data);

        //ajax 호출시 default가 비동기 호출
        // ajax 가 통신을 성공하고 서버가 json 을 리턴해주면 자동으로 자바 오브젝트로 변환해주네요.
        $.ajax({
            //회원가입 수행 요청 ==> 응답의 요청이 성공이면 done을 실행해주고 실패일 경우 fail 을 실행해준다
            type: "POST",
            url: "/blog/api/user",
            data: JSON.stringify(data), // JSON.stringyfy(data) --> json 파일  //그냥 위의 data --> 자바스크립트 object
            contentType: "application/json; charset=utf-8", // 위의 것은 html body 데이터 이기에 밑에 컨텐트 타입을 만들어주는것이다 (Body Data 가 어떤 타입인지 명시해주는것
            dataType:"json" // 요청을 서버로해서 응답이 왔을때 기본적으로 모든것이 버퍼로 오기에 String (문자열) 이다. 생긴 것은 json 이라면 ==> dataType에 json 임을 알려주면 javascript object 로 변경
        }).done(function(resp){
            alert("회원가입이 완료되었습니다.");
            //console.log(resp);
            location.href = "/blog";
        }).fail(function(error){
            alert(JSON.stringify(error));
        }); // ajax 통신을 이용해서 4개의 parameter를 json 으로 변경하여 insert 요청을 할 것
    }
}

index.init();