$(function () {

    /*멀티탭 시작*/
    $("button:nth-child(1)").click(function () {

        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        $("div#tabContent1").css({
            "display": "block"
        });
        $("div#tabContent2").css({
            "display": "none"
        });

    });
    /*멀티탭 끝*/

    /*모달레이어 팝업 시작*/
    /*추가기능 넣을 땐 function 필수*/
    $("#tabArea span.modalPoint").click(function () {
        $("#modalLayerBG").css({
            "display": "block"
        });
    });
    /*모달레이어 팝업 끝*/

    /*모달레이어 닫기 버튼 시작*/
    $("#closeBtn").click(function () {
        $("#modalLayerBG").css({
            "display": "none"
        });
    });
    /*모달레이어 닫기 버튼 시작*/


    /*멀티탭 시작*/

    $("button:nth-child(2)").click(function () {

        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });


        $("div#tabContent1").css({
            "display": "none"
        });
        $("div#tabContent2").css({
            "display": "block"
        });

    });
    /*멀티탭 끝*/
});
