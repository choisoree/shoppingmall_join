$(function (){

//            $("#joinBtn").click(function ({

     $("button#joinBtn").click(function () {

        var chkYN = $("#chkAgree").prop("checked");
        // YN = Yes or No

        var msg = "";
        if (chkYN == true) {
            alert("회원가입이 완료되었습니다. 감사합니다")
        } else {
            msg = "체크사항은 필수입니다";
        }
        $("#res").text(msg);

    });

     var token = 0;
    //1. 전체 동의 박스 체크=>  하위 체크박스 체크
    $("#wholechk").click(function () {
        var chkYN = $(this).prop("checked");
        if(chkYN){
            $(".subchkbox").prop("checked","ture");
        }else {
            document.getElementById("chk1").checked = false;
            document.getElementById("chk2").checked = false;
            document.getElementById("chk3").checked = false;
            document.getElementById("chk4").checked = false;
        }

    });

    //2.하위 체크박스 체크 => 전체동의 체크여부 결정 */
    $(".subchkbox").click(function(){
        var chk1 = $("#chk1").prop("checked");
        var chk2 = $("#chk2").prop("checked");
        var chk3 = $("#chk3").prop("checked");
        var chk4 = $("#chk4").prop("checked");

        if (chk1 && chk2 && chk3 && chk4) {
            $("#wholechk").prop("checked", "true");
        } else {
            document.getElementById("wholechk").checked = false;
        }


    });
});
