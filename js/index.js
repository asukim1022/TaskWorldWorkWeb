$(".userProfileOpenBtn").click(function () {
    popupOptionToggle(this, true, $(".menuLeft_userPanel"), $(".menuLeft_userPanel_bg"));
    $("body").css({
        "overflow": "hidden"
    });
});

$(".menuLeft_userPanel_bg, .menuLeft_userPanel_closeBtn").click(function () {
    popupOptionToggle(this, false, $(".menuLeft_userPanel"), $(".menuLeft_userPanel_bg"));
});

$(".menuTop_add ul li:nth-child(1)").click(function () {
    newProjectPopup(true);
    console.log("클릭");
    // $(".acutSectionDiv").load("popup.html");
});

$(".newWorkSpaceOpenBtn").click(function () {
    popupOptionToggle(this, true, $(".popupTeam_box"), $(".popupTeam_bg"));
});

$(".popupTeam_bg").click(function () {
    popupOptionToggle(this, false, $(".popupTeam_box"), $(".popupTeam_bg"));
});

$(".helpBtn").click(function () {
    popupOptionToggle(this, true, $(".popupHelp_box"), $(".popupHelp_bg"));
});
$(".popupHelp_bg").click(function () {
    popupOptionToggle(this, false, $(".popupHelp_box"), $(".popupHelp_bg"));
});

$(".chatBtn").click(function () {
    popupOptionToggle(this, true, $(".popupChat_box"), $(".popupChat_bg"));
});

$(".popupChat_bg").click(function () {
    popupOptionToggle(this, false, $(".popupChat_box"), $(".popupChat_bg"));
});


function popupOptionToggle(e, chk, popupBox, popupBg) {
    var popupBox;
    var popupBg;
    if (chk == true) {
        optionMenu(e, true, $(popupBox), $(popupBg), 50, 0);
    } else {
        optionMenu(e, false, $(popupBox), $(popupBg), 50, 0);
    }
}


$(".searchBox_bg").click(function () {
    $(".menuTop_search").css({
        "display": "none"
    });
});

$(".searchBtn").click(function () {
    $(".menuTop_search").css({
        "display": "block"
    });
    $("body").css({
        "overflow": "hidden"
    });
});

$(".newAddMenu").click(function () {
    $(".newAddMenu img").css({
        "transform": "rotate(90deg)"
    });
    $(".menuTop_add").css({
        "display": "block"
    });
    $("body").css({
        "overflow": "hidden"
    });
});

$(".menuTop_add div").click(function () {
    $(".newAddMenu img").css({
        "transform": "rotate(45deg)"
    });
    $(".menuTop_add").css({
        "display": "none"
    });
});


//프로젝트 추가 옵션메뉴
function projectAddOptionMenuFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".projectAddOptionMenu"), $(".projectAddOptionMenu_wrapClose"), 35, 0);
    } else {
        optionMenu(e, false, $(".projectAddOptionMenu"), $(".projectAddOptionMenu_wrapClose"), 35, 0);
    }
}


//$(".menuLeft_userPanel_closeBtn").click(function () {
//    $(".menuLeft_userPanel").css({
//        "top": "100%"
//    });
//});

$(".menuLeft_hidden_useImg").click(function () {
    $(".menuLeft_userPanel").css({
        "top": "0px"
    });
});

$(".menuLeft_hidden div p").click(function () {
    $(".menuLeft_teamPanel").css({
        "top": "0px"
    });
});

$(".menuLeft_teamPanel_closeBtn").click(function () {
    $(".menuLeft_teamPanel").css({
        "top": "100%"
    });
});

$(".hiddenMenu").click(function () {
    $(".menuLeft_hidden").css({
        "left": "0px"
    });
    $(".menuLeft_hidden_bg").css({
        "display": "block"
    });
});

$(".menuLeft_hidden_bg").click(function () {
    $(".menuLeft_hidden").css({
        "left": "-244px"
    });
    $(".menuLeft_hidden_bg").css({
        "display": "none"
    });
});



function optionMenu_topNewFun(chk) {
    if (chk == true) {
        $(".topAdd_NewPopup").css({
            "display": "block"
        });
        $(".topAdd_NewPopup_wrapClose").css({
            "display": "block"
        });

        $(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1) img").css({
            "transform": "rotate(45deg)"
        });
    } else {
        $(".topAdd_NewPopup").css({
            "display": "none"
        });
        $(".topAdd_NewPopup_wrapClose").css({
            "display": "none"
        });
        $(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1) img").css({
            "transform": "rotate(90deg)"
        });
    }
}

$(document).ready(function () {
    $('.chkListChkbox').each(function () {
        var li = $(this).parent().parent("li").children("p");
        //this.checked = true; //checked 처리
        if (this.checked) { //checked 처리된 항목의 값
            //alert(this.value);
            console.log("true");
            $(li).css({
                "text-decoration": "line-through"
            });
        } else {
            console.log("false");
            $(li).css({
                "text-decoration": "blink"
            });
        }
    });
    $(".newAddMenu img").css({
        "transform": "rotate(45deg)"
    });

    $(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1) img").css({
        "transform": "rotate(45deg)"
    });

    //    $("body").css({
    //        "overflow": "hidden"
    //    });
});

var rpanel_index = 1;
/* 2017-07-05 (추가) */
var pelClickChk = true; //아이템 체크여부

//이미지팝업 li교체
var speed = 100;

$(".imagePopup_leftBtn").click(function () {
    var now = $(this).parent().next("ul.gallery").children(":visible"),
        last = $(this).parent().next("ul.gallery").children(":last"),
        prev = now.prev();
    prev = prev.index() == -1 ? last : prev;
    now.fadeOut(speed, function () {
        prev.fadeIn(speed);
    });
});

$(".imagePopup_rightBtn").click(function () {
    var now = $(this).parent().next("ul.gallery").children(':visible'),
        first = $(this).parent().next("ul.gallery").children(':first'),
        next = now.next();
    next = next.index() == -1 ? first : next;
    now.fadeOut(speed, function () {
        next.fadeIn(speed);
    });
});


$(".work_childLi").click(function () {
    /* 2017-07-05 (if문 추가) */
    if (pelClickChk == false) {

    } else {
        var c = $(".work_childLi").index(this);
        var tw = $(window).width();
        var pw = 700;
        var rw = tw - 700;
        var offsetX = $(this).offset().left;
        var offset_l = $(this).offset().left - $(window).scrollLeft();

        if (rw > offset_l) {
            if (-55 > offset_l) {
                console.log("왼쪽으로 숨겨진것 (스크롤)");
                $('body').stop().animate({
                    scrollLeft: offsetX - 55
                });
            } else {
                console.log("정지");
            }
        } else {
            console.log("오른쪽으로 숨겨진것 (스크롤)");
            $('body').stop().animate({
                scrollLeft: (offsetX + 300 - 55) - rw
            });
        }
    }
});


$(document).ready(function () {
    //오른쪽 패널(설정) 스위치 (공개 프로젝트)
    rightPanelToggle_publicProject($(".projectMain_panelPublicToggle"));
    //오른쪽 패널(설정) 스위치 (업무 커버 이미지)
    rightPanelToggle_coverProject($(".projectMain_panelCoverToggle"));
    //속성탭으로 초기화
    rightPanelToolbarFun("attribute");
});


$(".work_childLi").click(function (e) {
    /* 2017-07-05 (if문 추가) */
    if (pelClickChk == false) {

    } else {
        rightPanelFun_AllProject(true);
        //설정창 패널
        rightPanelFun_work();
        rightPanelToolbarFun("attribute");
    }
});



/*//////////////////////// 오른쪽 패널(전체프로젝트) ////////////////////////*/
//오른쪽 패널 열기
$(".projectMain_panel_open").click(function () {
    rightPanelFun_AllProject(true);
    //설정창 패널
    rightPanelFun_setting();
});

//오른쪽 패널 닫기
$(".projectMain_panelClose").click(function () {
    console.log("t");
    $("#idTaskDiv_002").css({
        "width": "300px"
    });
    rightPanelFun_AllProject(false);
});


//오른쪽 패널(설정) 스위치 (공개 프로젝트)
$(".projectMain_panelPublicToggle").click(function () {
    rightPanelToggle_publicProject(this);
});
//오른쪽 패널(설정) 스위치 (업무 커버 이미지)
$(".projectMain_panelCoverToggle").click(function () {
    rightPanelToggle_coverProject(this);
});



/*//////////////////////// 왼쪽 패널 ////////////////////////*/
//왼쪽 전체보기 패널 열기
$(".menuLeft_projectBtn").hover(function () {
    leftPanelFun(true);
});

$(".menuLeft_projectBtn").click(function () {
    console.log("click");
});

//왼쪽 전체보기 패널 닫기 (패널을 제외한곳)
$(".leftDiv_Wrap div, .leftDiv_left div").hover(function () {
    leftPanelFun(false);
});


//왼쪽 패널 프로젝트 그룹 토글
$(".projectMain_leftPanelBox div").click(function () {
    var projectUl = $(this).parent().children("ul");
    var $img = $(this).children("img");

    if (projectUl.css("display") == "none") {
        $(projectUl).css({
            "display": "block"
        });
        $($img).attr("src", "images/fold.png");
        $(this).css({
            "background-color": "#fff"
        });
    } else {
        $(projectUl).css({
            "display": "none"
        });
        $($img).attr("src", "images/unfold.png");
        $(this).css({
            "background-color": "#f3f4f5"
        });
    }
});

//왼쪽 패널 프로젝트 그룹 마우스오버
$('.projectGroup_Name')
    .hover(function () {
        $(this).css({
            "background-color": "#d4d6db"
        });
    }, function () {
        $(this).css({
            "background-color": "#f3f4f5"
        });
    });


//왼쪽 패널 프로젝트 그룹 마우스오버
$('.projectGrouping_Name')
    .hover(function () {
        $(this).css({
            "background-color": "#d4d6db"
        });
    }, function () {
        $(this).css({
            "background-color": "#f3f4f5"
        });
    });


/*//////////////////////// 새프로젝트 추가 팝업 ////////////////////////*/
//새프로젝트 추가팝업(열기)
$(".newProject").click(function () {
    newProjectPopup(true);
});
//새프로젝트 추가팝업(닫기)
$(".newProjectPopup_closeBtn").click(function () {
    newProjectPopup(false);
});

//새프로젝트 추가팝업 (공개범위 설정 라디오박스)
//비공개
$(".newProjectPopup_notOpen").click(function () {
    $(".newProjectPopup_notOpenRadio").prop("checked", true);
    $(".newProjectPopup_openRadio").prop("checked", false);
    $(".publicImg").attr("src", "images/unpublic.png");
});
//공개
$(".newProjectPopup_open").click(function () {
    $(".newProjectPopup_notOpenRadio").prop("checked", false);
    $(".newProjectPopup_openRadio").prop("checked", true);
    $(".publicImg").attr("src", "images/public.png");
});

$(".newProjectOpenBtn").click(function () {
    optionMenu_topNewFun(false);
    newProjectPopup(true);
});



$(document).ready(function () {
    /*
    //optionMenu_topNewFun(false);
    optionMenu_alarmFun(this, false);
    optionMenu_DateFun(this, false);
    workspace_optionMenuFun(this, false);
    userProfileOptionMenuFun(false);
    newProjectPopup(false);
    leftPanelFun(false);
    optionMenu_workListSetFun(this, false);
    optionMenu_workListSetMoveFun(this, false);
    workListSetMove_boxTogleFun(false);
    optionMenu_rightPanelSetFun(this, false);
    optionMenu_memberPfileFun(this, false);
    optionMenu_memberAddListFun(this, false);
    optionMenu_msgFun(this, false);
    optionMenu_msgTabFun(this, false);
    imagePopupFun(false);
    commentDeletePopupFun(false);
    workAssignPopupFun(false);
    projectGrouoPopupFun(false);
    newMsgPopupTabFun
    teamsInvitePopupFun(false);
    newMsgPopupPopupFun(false);
    bottomPanelFun(false);
    bottomPanel_optionMenuFun(this, false);
    memberAddPopupTabFun(false);
    patient
    */
});

/*//////////////////////// 상단메뉴 ////////////////////////*/
/*(메세지팝업)*/
//메세지팝업 버튼 (팝업열기)
$(".menuTop_msgBtn").click(function () {
    optionMenu_msgTabFun(true);
    optionMenu_msgFun(this, true);
});


//메세지팝업 영역외클릭 닫기
$(".menuTop_msgPopup_wrapClose").click(function () {
    optionMenu_msgFun(this, false);
});


$(".menuTop_msgPopupWrap_titleBox div").click(function () {
    optionMenu_msgTabFun(false);
});

$(".menuTop_msgPopup_box2_header img").click(function () {
    optionMenu_msgTabFun(true);
});


/*(알림팝업)*/
//알림팝업 버튼 (팝업열기)
$(".menuTop_alarmBtn").click(function () {
    optionMenu_alarmTabFun(true);
    optionMenu_alarmFun(this, true);
});


//알림팝업 영역외클릭 닫기
$(".menuTop_alarmPopup_wrapClose").click(function () {
    optionMenu_alarmFun(this, false);
});

//알림팝업 설정버튼
$(".menuTop_alarmPopupWrap_titleBox div").click(function () {
    optionMenu_alarmTabFun(false);
});

//알림팝업 설정닫기버튼
$(".menuTop_alarmPopup_box2_header img").click(function () {
    optionMenu_alarmTabFun(true);
});




//새 워크스페이스 만들기 (옵션메뉴)
$(".newWorkSpaceOpenBtn").click(function () {
    workspace_optionMenuFun(this, true);
});

//새 워크스페이스 만들기 (옵션메뉴)
$(".workspace_optionMenu_wrapClose").click(function () {
    workspace_optionMenuFun(this, false);
});


/*//////////////////////// 멤버추가리스트 팝업 - staff ////////////////////////*/
//멤버추가버튼 (팝업열기)
$(".addMemberBtn").click(function () {
    memberAddPopupTabFun(true);
    optionMenu_memberAddListFun(this, true);
});

//멤버추가리스트 닫기버튼 - staff
$(".memberListPopupDelete").click(function () {
    optionMenu_memberAddListFun(this, false);
});

//멤버추가리스트 영역외클릭 닫기 - staff
$(".memberAddPopup_wrapClose").click(function () {
    optionMenu_memberAddListFun(this, false);
});



/*//////////////////////// 멤버추가리스트 팝업 - user ////////////////////////*/
//멤버추가버튼 (팝업열기)
$(".addMemberBtn_user").click(function () {
    memberAddPopupTabFun(true);
    optionMenu_memberAddListFun_user(this, true);
});

//멤버추가리스트 영역외클릭 닫기 - user
$(".memberAddPopup_wrapClose_user").click(function () {
    optionMenu_memberAddListFun_user(this, false);
});

//멤버추가리스트 닫기버튼 - user
$(".memberListPopupDelete_user").click(function () {
    optionMenu_memberAddListFun_user(this, false);
});


/*//////////////////////// 멤버추가리스트 팝업 - newProject ////////////////////////*/
//멤버추가버튼 (팝업열기)
$(".addMemberBtn_newProject").click(function () {
    memberAddPopupTabFun(true);
    optionMenu_memberAddListFun_newProject(this, true);
});

//멤버추가리스트 영역외클릭 닫기 - newProject
$(".memberAddPopup_wrapClose_newProject").click(function () {
    optionMenu_memberAddListFun_newProject(this, false);
});

//멤버추가리스트 닫기버튼 - newProject
$(".memberListPopupDelete_newProject").click(function () {
    optionMenu_memberAddListFun_newProject(this, false);
});


//멤머초대하기 클릭시
$(".memberAddPopup_bottom_content div").click(function () {
    memberAddPopupTabFun(false);
});

$(".memberAddPopupBackBtn").click(function () {
    memberAddPopupTabFun(true);
});



/*//////////////////////// 멤버프로필리스트 팝업 ////////////////////////*/
//멤버프로필리스트버튼 (팝업열기)
$(".memberPfileBtn").click(function () {
    optionMenu_memberPfileFun(this, true);
});


//멤버프로필리스트 영역외클릭 닫기
$(".memberProfilePopup_wrapClose").click(function () {
    optionMenu_memberPfileFun(this, false);
});





/*//////////////////////// 업무리스트 ////////////////////////*/



//새업무 취소 버튼
$(".newWork_cancelBtn").click(function () {
    var newWorkBox = $(this).parent().parent(".projectWork_Header_newWorkBox");
    var wrap = $(this).parent().parent().parent().parent().children(".projectWork_Div");
    var img = $(this).parent().parent().parent().children(".projectWork_Header_Name").children(".projectWork_NameHeader_AddBtn").children("img");

    console.log("test123");
    Work_NewAdd(this, false, newWorkBox, wrap, img);
});


//업무리스트 설정버튼
$(".projectWork_NameHeader_SetBtn").click(function () {
    optionMenu_workListSetFun(this, true);
});

//업무리스트 설정옵션메뉴 영역외클릭 닫기
$(".workMainPop_setMenu_wrapClose").click(function () {
    optionMenu_workListSetFun(this, false);
});

//업무리스트 - 옵션메뉴(이동버튼)
$(".optionMenu_moveBtn").click(function () {
    workListSetMove_boxTogleFun(true);
    optionMenu_workListSetMoveFun(this, true);
});


//업무리스트 - 옵션메뉴(이동버튼) 영역외클릭 닫기
$(".workMainPop_setMenu_move_wrapClose").click(function () {
    optionMenu_workListSetMoveFun(this, false);
});


//업무리스트 - 옵션메뉴(이동버튼) 닫기버튼
$(".setMenu_move_closeBtn").click(function () {
    optionMenu_workListSetMoveFun(this, false);
});


//업무리스트 - 옵션메뉴(이동버튼) 리스트
$(".moveBox1_con div").click(function () {
    workListSetMove_boxTogleFun(false);
});

//업무리스트 - 옵션메뉴(이동버튼) 리스트 뒤로가기
$(".setMenu_move_backBtn").click(function () {
    workListSetMove_boxTogleFun(true);
});

//오른쪽 패널(상세패널 - 설정)(옵션메뉴) 버튼
$(".rightPanelSetBtn").click(function () {
    //optionMenu_rightPanelSetFun(this, true);
    rightPanel_PopupFun(true);
});

//오른쪽 패널(상세패널 - 설정)(옵션메뉴) 영역외클릭 닫기
$(".rightPanel_setMenu_wrapClose").click(function () {
    //optionMenu_rightPanelSetFun(this, false);
    rightPanel_PopupFun(false);
});




//이미지 팝업버튼
$(".imagePopupBtn").click(function () {
    /* 2017-07-05 (if문 추가) */
    if (pelClickChk == false) { //드래그중일떄
        imagePopupFun(false); //닫기
    } else {
        imagePopupFun(true); //열기
    }
});


//이미지 팝업 닫기버튼
$(".imagePopup_closeBtn").click(function () {
    imagePopupFun(false);
});


//업무리스트 클릭시
$(".projectWorkDiv_Box").click(function () {
    rightPanelFun(true);
    rightPanelFun_work();
});

//오른쪽 패널 닫기버튼
//$(".projectMain_panelClose").click(function () {
//	console.log("t");
//	$("#idTaskDiv_002").css({
//		"width": "300px"
//	});
//	rightPanelFun(false);
//});


//속성탭 버튼
$(".attributeBtn").click(function () {
    rightPanelToolbarFun("attribute");
});

//코멘트탭 버튼
$(".commentBtn").click(function () {
    rightPanelToolbarFun("comment");
});

//파일/링크 버튼
$(".fileBtn").click(function () {
    rightPanelToolbarFun("file");
});



/*//////////////////////// 업무메인의 상단/왼쪽메뉴 ////////////////////////*/
//상단 설정버튼
$(".setBtn_rightP").click(function () {
    $("#taskRightPanel").html("");
    $("#taskRightPanel").load("/Task/_partialTaskPanelRight", {
        projectID: 1000,
        taskID: 1,
        taskItemID: 1
    });
    rightPanelFun(true);
    rightPanelFun_setting();

    rpanel_index = 1;
    console.log("gg");
});

//업무메인에서 상단 프로젝트 채팅버튼
$(".rightPanelChatBtn").click(function () {
    $("#projectRightPanel").html("");
    $("#projectRightPanel").load("/Projects/_partialProjectPanelRight", {
        pb: {
            id: 1000,
            title: "test",
            status: "계획됨",
            progressRate: 5,
            endDate: "2017-06-05",
            memo: "testMemo"
        }
    });
    rightPanelFun(true);
    rightPanelFun_chat();

    rpanel_index = 3;
});


$(".rightPanelChatBtn_task").click(function () {
    $("#taskRightPanel").html("");
    $("#taskRightPanel").load("/Task/_partialTaskPanelRight", {
        projectID: 1000,
        taskID: 1,
        taskItemID: 1
    });

    rightPanelFun(true);
    rightPanelFun_chat();
    console.log("ttt");
    rpanel_index = 3;
});


//bottom의 프로젝트 채팅 버튼
$(".bottomPanelOpen").click(function () {
    bottomPanelFun(true);
});

//bottom의 프로젝트 채팅 닫기 버튼
$(".bp_closeBtn").click(function () {
    bottomPanelFun(false);
});


/*

*/
//멤버리스트 프로필버튼 (오른쪽패널오픈)
$(".rightPanelFun_memberProfileBtn").click(function () {
    //newProjectPopup(false);
    optionMenu_memberPfileFun(this, false);

    $("#projectRightPanel").html("");
    $("#projectRightPanel").load("/Projects/_partialProjectPanelRight", {
        pb: {
            id: 1000,
            title: "test",
            status: "계획됨",
            progressRate: 5,
            endDate: "2017-06-05",
            memo: "testMemo"
        }
    });

    rightPanelFun_AllProject(true);
    //rightPanelFun(true);
    rightPanelFun_memberProfile();
});


//업무배정하기 버튼
$(".workAssignPopup_openBtn").click(function () {
    optionPopup_resetFun();
    workAssignPopupFun(true);
});

//업무배정하기 닫기 버튼
$(".workAssignPopupCloseBtn").click(function () {
    workAssignPopupFun(false);
});

$(".newWorkAssignOpenBtn").click(function () {
    optionPopup_resetFun();
    workAssignPopupFun(true);
});


$(".memberProfile_bottomPanelOpen").click(function () {
    optionPopup_resetFun();
    bottomPanelFun(true);
});

//상단에 더하기 아이콘 클릭(열기)
$(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1)").click(function () {
    optionMenu_topNewFun(true);
});

//상단에 더하기 아이콘 클릭(닫기)
$(".topAdd_NewPopup_wrapClose").click(function () {
    optionMenu_topNewFun(false);
});

//Bottom패널 옵션메뉴 버튼
$(".bp_setBtn").click(function () {
    bottomPanel_optionMenuFun(this, true);
});

//Bottom패널 옵션메뉴 팝업제외영역(닫기)
$(".bottomPanel_optionMenu_wrapClose").click(function () {
    bottomPanel_optionMenuFun(this, false);
});

//새프로젝트 그룹만들기(열기)
$(".projectGroup_popupOpen").click(function () {
    projectGroup_optionMenuFun(true);
});

//새프로젝트 그룹만들기(닫기)
$(".projectGroup_optionMenu_wrapClose").click(function () {
    projectGroup_optionMenuFun(false);
});


//프로젝트 그룹 만들기 팝업(열기)
$(".projectGroup_optionMenu").click(function () {
    projectGroup_optionMenuFun(false); //옵션메뉴 닫기
    projectGrouoPopupFun(true);
});
$(".projectGrouoPopup_CloseBtn").click(function () {
    projectGrouoPopupFun(false);
});


//날짜 옵션메뉴
$(".dateOpenBtn").click(function () {
    console.log("test");
    optionMenu_DateFun(this, true);
});
$(".optionMenu_date_wrapClose").click(function () {
    optionMenu_DateFun(this, false);
});
$(".dateCloseBtn").click(function () {
    optionMenu_DateFun(this, false);
});


//팀원 초대하기 팝업 (열기)
$(".teamsInvitePopupOpenBtn").click(function () {
    optionPopup_resetFun();
    teamsInvitePopupFun(true);
});
//팀원 초대하기 팝업 (닫기)
$(".newWorkAssignCloseBtn").click(function () {
    teamsInvitePopupFun(false);
});


//이메일로 코멘트 작성 팝업 (열기)
$(".emailCommentPopupOpenBtn").click(function () {
    optionPopup_resetFun();
    emailCommentPopupFun(true);
});
//이메일로 코멘트 작성 팝업 (닫기)
$(".emailCommentPopupCloseBtn").click(function () {
    emailCommentPopupFun(false);
});


//새메세지 팝업(열기)
$(".newMsgPopupOpenBtn").click(function () {
    optionPopup_resetFun();
    newMsgPopupPopupFun(true);
});

//새메세지 팝업(닫기)
$(".newMsgPopupCloseBtn").click(function () {
    newMsgPopupPopupFun(false);
});
//새프로젝트 탭 (전체보기)
$(".newMsgPopup_allBtn").click(function () {
    newMsgPopupTabFun(0);
});
//새프로젝트 탭 (채널)
$(".newMsgPopup_chanelBtn").click(function () {
    newMsgPopupTabFun(1);
});
//새프로젝트 탭 (메세지)
$(".newMsgPopup_msgBtn").click(function () {
    newMsgPopupTabFun(2);
});


//사용자 정보 옵션메뉴(열기)
//$(".userProfileOpenBtn").click(function () {
//    userProfileOptionMenuFun(true);
//    userProfileOptionMenuPageFun(true);
//});

//사용자 정보 옵션메뉴 - 영역외(닫기)
$(".userProfileOptionMenu_wrapClose").click(function () {
    userProfileOptionMenuFun(false);
});


//바닥채팅 패널에서 수정하기 버튼 클릭
$(".bottomPanel_editBtn").click(function () {
    var textarea = $(this).parent().parent().children("textarea");
    var input = $(this).parent().parent().children("input");
    textarea.focus();
    input.css({
        "display": "block"
    });
    input.focus();
});



//코멘트 삭제 팝업(열기)
$(".commentDeletePopupOpenBtn").click(function () {
    commentDeletePopupFun(true);
});

//코멘트 삭제 팝업(닫기)
$(".commentDeletePopupCloseBtn").click(function () {
    commentDeletePopupFun(false);
});


/*==== 프로젝트에서 프로젝트 상태 함수 ====*/
function ProjectStatus(e, status) {
    if (status == "계획됨") {
        $(e).css({
            "background-color": "#ffb024"
        });
        $(e).html("계획됨");
    } else if (status == "진행중") {
        $(e).css({
            "background-color": "#62c276"
        });
        $(e).html("진행중");
    } else if (status == "완료됨") {
        $(e).css({
            "background-color": "#27b6ba"
        });
        $(e).html("완료됨");
    } else if (status == "보류") {
        $(e).css({
            "background-color": "#e6e8ec"
        });
        $(e).html("보류");
    } else if (status == "취소") {
        $(e).css({
            "background-color": "#e6e8ec"
        });
        $(e).html("취소");
    } else if (status == "상태없음") {
        $(e).css({
            "background-color": "#e6e8ec"
        });
        $(e).html("상태없음");
    }
}



/*==== 오른쪽 패널 스위치 (공개 프로젝트 / 텍스트바꾸기) ====*/
function rightPanelToggle_publicProject(e) {
    var text = $(e).parent().parent().children("span");
    if ($(".projectMain_panelPublicToggle").is(":checked") == true) {
        $(text).text("워크스페이스의 모든 팀원이 이 프로젝트를 볼 수 있습니다.");
    } else {
        $(text).text("오직 추가된 팀원만 이 프로젝트를 볼 수 있습니다.");
    }
}

/*==== 오른쪽 패널 스위치 (업무 커버 이미지 / 텍스트바꾸기) ====*/
function rightPanelToggle_coverProject(e) {
    var text = $(e).parent().parent().children("span");
    if ($(".projectMain_panelCoverToggle").is(":checked") == true) {
        $(text).text("업무에 첨부 이미지 미리보기를 사용합니다.");
    } else {
        $(text).text("업무에 첨부 이미지 미리보기를 끕니다.");
    }
}

/*==== 왼쪽 패널 (열기,닫기) ====*/
function leftPanelFun(checked) {
    if (checked == true) {
        $(".projectMain_leftPanelDiv").css({
            "left": "0px"
        });
        $(".leftDiv_Wrap").css({
            "display": "block"
        });
        $(".leftDiv_left").css({
            "display": "block"
        });
    } else {
        $(".projectMain_leftPanelDiv").css({
            "left": "-355px"
        });
        $(".leftDiv_Wrap").css({
            "display": "none"
        });
        $(".leftDiv_left").css({
            "display": "none"
        });
    }
}

//왼쪽패널에서 전체보기 텍스트클릭
$(".projectMain_leftPanel_AllProject").click(function () {
    leftPanelFun(false);
});


/*==== 오른쪽 패널 (열기/닫기) -> 전체프로젝트일때 ====*/
function rightPanelFun_AllProject(check) {
    if (check == true) {
        $(".rightPanel").css({
            //"display": "block",	/* 2017-07-05 */
            "right": "0px"
        });
        //$(".rightPanel").css({"display" : "block"}).stop().animate({ "right" : "0px" },100);



        /* 2017-07-05 (길이줄이기 (기본사이즈)) */
        $("#idTaskDiv_002").css({
            "width": "920px"
        });
        console.log("open");


        $(window).on('resize', function () {});

        //		//Native javascript solution
        //		window.onresize = function () {
        //			if (window.innerWidth > 700) {
        //				console.log("11");
        //			} else {
        //				console.log("22");
        //			}
        //		}

        console.log("ttt: " + window.innerWidth);
        if (window.innerWidth > 700) { /* 2017-07-14 */
            $(".projectMain_GroupDiv").css({
                "padding-right": "600px"
            });
        }

    } else {
        $(".rightPanel").css({
            //"display": "none",	/* 2017-07-05 */
            "right": "-760px"
        });
        //$(".rightPanel").css({"display" : "none"}).stop().animate({ "right" : "-760px" },100);

        $(".projectMain_GroupDiv").css({
            "padding-right": "0px"
        });

        /* 2017-07-05 (길이 늘리기) */
        $("#idTaskDiv_002").css({
            "width": "300px"
        });

        /* 2017-07-05 (배경색 초기화) */
        $(".work_colorWrap").css({
            "background-color": "#fff"
        });
        console.log("close");
    }
}

/*==== 오른쪽 패널 토글 ====*/
function rightPanelFun(check) {
    if (check == true) {
        //		$(".rightPanel").css({
        //			//"display": "block",	/* 2017-07-05 */
        //			"right": "0px"
        //		});

        $(".rightPanel").css({
            "display": "block"
        }).stop().animate({
            "right": "0px"
        }, 100);
        console.log("open");

    } else {
        //		$(".rightPanel").css({
        //			//"display": "none",	/* 2017-07-05 */
        //			"right": "-660px"
        //		});

        $(".rightPanel").css({
            "display": "none"
        }).stop().animate({
            "right": "-660px"
        }, 100);
        console.log("close");
    }
}



/*==== 새프로젝트 추가팝업 ====*/
function newProjectPopup(checked) {
    if (checked == true) {
        $(".projectMain_newProjectPopup").css({
            "display": "block"
        });
        $(".projectMain_newProjectPopup_wrapClose").css({
            "display": "block"
        });

    } else {
        $(".projectMain_newProjectPopup").css({
            "display": "none"
        });
        $(".projectMain_newProjectPopup_wrapClose").css({
            "display": "none"
        });
    }
}

$(".projectGrouping_Popup_closeBtn").click(function () {
    projectGrouping_Popup(false);
});

$(".projectGrouping_Popup_openBtn").click(function () {
    projectGrouping_Popup(true);
});


/*==== 프로젝트 그룹 팝업 ====*/
function projectGrouping_Popup(checked) {
    if (checked == true) {
        $(".projectGrouping_Popup").css({
            "display": "block"
        });
        $(".projectGrouping_Popup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".projectGrouping_Popup").css({
            "display": "none"
        });
        $(".projectGrouping_Popup_wrapClose").css({
            "display": "none"
        });
    }
}

var projectGroupingInput;

//옵션열기 (이미지버튼)
$(".projectGrouping_optionMenu_openBtn").click(function () {
    projectGrouping_optionMenuFun(this, true);
    projectGroupingInput = $(this).parent().children("input");
});

$(".projectGrouping_optionMenu_closeBtn").click(function () {
    projectGrouping_optionMenuFun(this, false);
});

$(".groupingName_editBtn").click(function () {
    projectGroupingInput.focus();
});


/*==== 업무메인의 업무리스트의 새업무 추가 ====*/
function Work_NewAdd(e, checked, newWorkBox, wrap, img) {

    if (checked == true) {
        $(newWorkBox).css({
            "display": "block"
        });
        $(img).css({
            "transform": "rotate(45deg)"
        })
        $(wrap).css({
            "padding-top": "139px"
        });
    } else {
        $(newWorkBox).css({
            "display": "none"
        });
        $(img).css({
            "transform": "rotate(90deg)"
        });
        $(wrap).css({
            "padding-top": "43px"
        });
    }
}


/*==== 오른쪽 패널의 설정 ====*/
function rightPanelFun_setting() {
    $(".rightPanelWrap_Box2").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box1").css({
        "display": "block"
    });
    $(".rightPanelWrap_Box3").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box4").css({
        "display": "none"
    });
}


/*==== 오른쪽 패널의 업무 ====*/
function rightPanelFun_work() {
    $(".rightPanelWrap_Box1").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box2").css({
        "display": "block"
    });
    $(".rightPanelWrap_Box3").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box4").css({
        "display": "none"
    });
}


/*==== 오른쪽 패널의 채팅 ====*/
function rightPanelFun_chat() {
    $(".rightPanelWrap_Box1").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box3").css({
        "display": "block"
    });
    $(".rightPanelWrap_Box2").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box4").css({
        "display": "none"
    });
}


/*==== 오른쪽 패널의 멤버프로필 ====*/
function rightPanelFun_memberProfile() {
    $(".rightPanelWrap_Box1").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box4").css({
        "display": "block"
    });
    $(".rightPanelWrap_Box2").css({
        "display": "none"
    });
    $(".rightPanelWrap_Box3").css({
        "display": "none"
    });
}




/*==== 오른쪽 패널의 툴바탭 ====*/
//(attribute , comment , file)
/* 2017-07-05 */
function rightPanelToolbarFun(tabName) {
    if (tabName == "attribute") {
        $(".rightPanel_attributeBox").css({
            "display": "block"
        });
        $(".attributeBtn div").css({
            "background-color": "#27b6ba",
            "width": "100%"
        });

        $(".rightPanel_commentBox").css({
            "display": "none"
        });
        $(".commentBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });

        $(".rightPanel_fileBox").css({
            "display": "none"
        });
        $(".fileBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });
    } else if (tabName == "comment") {
        $(".rightPanel_attributeBox").css({
            "display": "none"
        });
        $(".attributeBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });

        $(".rightPanel_commentBox").css({
            "display": "block"
        });
        $(".commentBtn div").css({
            "background-color": "#27b6ba",
            "width": "100%"
        });

        $(".rightPanel_fileBox").css({
            "display": "none"
        });
        $(".fileBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });
    } else if (tabName == "file") {
        $(".rightPanel_attributeBox").css({
            "display": "none"
        });
        $(".attributeBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });

        $(".rightPanel_commentBox").css({
            "display": "none"
        });
        $(".commentBtn div").css({
            "background-color": "#ffffff",
            "width": "0px"
        });

        $(".rightPanel_fileBox").css({
            "display": "block"
        });
        $(".fileBtn div").css({
            "background-color": "#27b6ba",
            "width": "100%"
        });
    }
}



//업무리스트 설정(옵션메뉴)
function optionMenu_workListSetFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".workMainPop_setMenu"), $(".workMainPop_setMenu_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".workMainPop_setMenu"), $(".workMainPop_setMenu_wrapClose"), 40, 0);
    }
}

//업무리스트 설정에서 이동(옵션메뉴)
function optionMenu_workListSetMoveFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".workMainPop_setMenu_move"), $(".workMainPop_setMenu_move_wrapClose"), 40, 150);
    } else {
        optionMenu(e, false, $(".workMainPop_setMenu_move"), $(".workMainPop_setMenu_move_wrapClose"), 40, 150);
    }
}

//업무리스트 설정에서 이동(옵션메뉴) 위치변경
function workListSetMove_boxTogleFun(cheked) {
    if (cheked == true) {
        $(".move_box1").css({
            "display": "block"
        });
        $(".move_box2").css({
            "display": "none"
        });
    } else {
        $(".move_box2").css({
            "display": "block"
        });
        $(".move_box1").css({
            "display": "none"
        });
    }
}


//오른쪽 패널(상세패널 - 설정)(옵션메뉴)
function optionMenu_rightPanelSetFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".rightPanel_setMenu"), $(".rightPanel_setMenu_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".rightPanel_setMenu"), $(".rightPanel_setMenu_wrapClose"), 40, 0);
    }
}


//오른쪽 패널(상세패널 - 설정)(옵션메뉴)
function projectGrouping_optionMenuFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".projectGrouping_optionMenu"), $(".projectGrouping_optionMenu_wrapClose"), 25, 0);
    } else {
        optionMenu(e, false, $(".projectGrouping_optionMenu"), $(".projectGrouping_optionMenu_wrapClose"), 25, 0);
    }
}


//멤버프로필 (옵션메뉴)
function optionMenu_memberPfileFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".memberProfilePopup"), $(".memberProfilePopup_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".memberProfilePopup"), $(".memberProfilePopup_wrapClose"), 40, 0);
    }
}

//멤버추가리스트 (옵션메뉴) - staff
function optionMenu_memberAddListFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".memberAddPopup"), $(".memberAddPopup_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".memberAddPopup"), $(".memberAddPopup_wrapClose"), 40, 0);
    }
}

//멤버추가리스트 (옵션메뉴) - user
function optionMenu_memberAddListFun_user(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".memberAddPopup_user"), $(".memberAddPopup_wrapClose_user"), 40, 0);
    } else {
        optionMenu(e, false, $(".memberAddPopup_user"), $(".memberAddPopup_wrapClose_user"), 40, 0);
    }
}

//멤버추가리스트 (옵션메뉴) - newProject
function optionMenu_memberAddListFun_newProject(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".memberAddPopup_newProject"), $(".memberAddPopup_wrapClose_newProject"), 40, 0);
    } else {
        optionMenu(e, false, $(".memberAddPopup_newProject"), $(".memberAddPopup_wrapClose_newProject"), 40, 0);
    }
}


//태그옵션메뉴
function optionMenu_tagFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".optionMenu_tag"), $(".optionMenu_tag_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".optionMenu_tag"), $(".optionMenu_tag_wrapClose"), 40, 0);
    }
}



//작업시간록 옵션메뉴
function optionMenu_recordTimeFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".optionMenu_recordTime"), $(".optionMenu_recordTime_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".optionMenu_recordTime"), $(".optionMenu_recordTime_wrapClose"), 40, 0);
    }
}



//작업시간옵션메뉴
function optionMenu_workingHoursFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".optionMenu_workingHours"), $(".optionMenu_workingHours_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".optionMenu_workingHours"), $(".optionMenu_workingHours_wrapClose"), 40, 0);
    }
}



//상단메뉴 - 메세지(옵션메뉴)
function optionMenu_msgFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".menuTop_msgPopupWrap_div"), $(".menuTop_msgPopup_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".menuTop_msgPopupWrap_div"), $(".menuTop_msgPopup_wrapClose"), 40, 0);
    }
}



//상단메뉴 - 알림(옵션메뉴) - 설정/리스트
function optionMenu_msgTabFun(chk) {
    if (chk == true) {
        $(".menuTop_msgPopup_box2").css({
            "display": "none"
        });
        $(".menuTop_msgPopup_box1").css({
            "display": "block"
        });
    } else {
        $(".menuTop_msgPopup_box2").css({
            "display": "block"
        });
        $(".menuTop_msgPopup_box1").css({
            "display": "none"
        });
    }
}

//상단메뉴 - 알림(옵션메뉴)
function optionMenu_alarmFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".menuTop_alarmPopupWrap_div"), $(".menuTop_alarmPopup_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".menuTop_alarmPopupWrap_div"), $(".menuTop_alarmPopup_wrapClose"), 40, 0);
    }
}


/*

 */

//상단메뉴 - 알림(옵션메뉴) - 설정/리스트
function optionMenu_alarmTabFun(chk) {
    if (chk == true) {
        $(".menuTop_alarmPopup_box2").css({
            "display": "none"
        });
        $(".menuTop_alarmPopup_box1").css({
            "display": "block"
        });
    } else {
        $(".menuTop_alarmPopup_box2").css({
            "display": "block"
        });
        $(".menuTop_alarmPopup_box1").css({
            "display": "none"
        });
    }
}

/*
degree 
surface 



*/

//새 워크스페이스 만들기 (옵션메뉴)
function workspace_optionMenuFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".workspace_optionMenu"), $(".workspace_optionMenu_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".workspace_optionMenu"), $(".workspace_optionMenu_wrapClose"), 40, 0);
    }
}



//날짜 (옵션메뉴)
function optionMenu_DateFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".optionMenu_date"), $(".optionMenu_date_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".optionMenu_date"), $(".optionMenu_date_wrapClose"), 40, 0);
    }
}


//bottom패널
function bottomPanelFun(chk) {
    if (chk) {
        $(".bottomPanel").css({
            "display": "block"
        });

    } else {
        $(".bottomPanel").css({
            "display": "none"
        });

    }
}


//코멘트파일 마우스오버
$('.commentBox_fileBox')
    .hover(function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "block"
        });
    }, function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "none"
        });
    });

//코멘트텍스트 마우스오버
$('.commentBox_textBox')
    .hover(function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "block"
        });
    }, function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "none"
        });
    });

//코멘트링크 마우스오버
$('.commentBox_linkBox')
    .hover(function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "block"
        });
    }, function () {
        var ul = $(this).children("ul");
        ul.css({
            "display": "none"
        });
    });



//bottom패널의 옵션메뉴
function bottomPanel_optionMenuFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".bottomPanel_optionMenu"), $(".bottomPanel_optionMenu_wrapClose"), 40, 0);
    } else {
        optionMenu(e, false, $(".bottomPanel_optionMenu"), $(".bottomPanel_optionMenu_wrapClose"), 40, 0);
    }
}


//상단에 더하기 아이콘 관련 팝업
function optionMenu_topNewFun(chk) {
    if (chk == true) {
        $(".topAdd_NewPopup").css({
            "display": "block"
        });
        $(".topAdd_NewPopup_wrapClose").css({
            "display": "block"
        });

        $(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1) img").css({
            "transform": "rotate(45deg)"
        });
    } else {
        $(".topAdd_NewPopup").css({
            "display": "none"
        });
        $(".topAdd_NewPopup_wrapClose").css({
            "display": "none"
        });
        $(".projectMain_menuLeft div ul.menuLeft_top li:nth-child(1) img").css({
            "transform": "rotate(90deg)"
        });
    }
}


$(".projectAddOptionMenu_openBtn").click(function () {
    projectAddOptionMenuFun(this, true);
});

$(".projectAddOptionMenu_closeBtn").click(function () {
    projectAddOptionMenuFun(this, false);
});


//프로젝트 추가 옵션메뉴
function projectAddOptionMenuFun(e, chk) {
    if (chk == true) {
        optionMenu(e, true, $(".projectAddOptionMenu"), $(".projectAddOptionMenu_wrapClose"), 35, 0);
    } else {
        optionMenu(e, false, $(".projectAddOptionMenu"), $(".projectAddOptionMenu_wrapClose"), 35, 0);
    }
}



//멤머초대하기 탭
function memberAddPopupTabFun(chk) {
    if (chk == true) {
        $(".memberAddPopup_wrap_box1").css({
            "display": "block"
        });
        $(".memberAddPopup_wrap_box2").css({
            "display": "none"
        });
    } else {
        $(".memberAddPopup_wrap_box1").css({
            "display": "none"
        });
        $(".memberAddPopup_wrap_box2").css({
            "display": "block"
        });
    }
}



//사용자 정보 옵션메뉴
function userProfileOptionMenuFun(chk) {
    if (chk == true) {
        $(".userProfileOptionMenu").css({
            "display": "block"
        });
        $(".userProfileOptionMenu_wrapClose").css({
            "display": "block"
        });

    } else {
        $(".userProfileOptionMenu").css({
            "display": "none"
        });
        $(".userProfileOptionMenu_wrapClose").css({
            "display": "none"
        });

    }
}




//상단에 프로젝트 그룹 생성
function projectGroup_optionMenuFun(chk) {
    if (chk == true) {
        $(".projectGroup_optionMenu").css({
            "display": "block"
        });
        $(".projectGroup_optionMenu_wrapClose").css({
            "display": "block"
        });

    } else {
        $(".projectGroup_optionMenu").css({
            "display": "none"
        });
        $(".projectGroup_optionMenu_wrapClose").css({
            "display": "none"
        });

    }
}



//이미지팝업
function imagePopupFun(chk) {
    if (chk == true) {
        $(".imagePopup").css({
            "display": "block"
        });
    } else {
        $(".imagePopup").css({
            "display": "none"
        });
    }
}



//코멘트 삭제 팝업
function commentDeletePopupFun(chk) {
    if (chk == true) {
        $(".commentDeletePopup").css({
            "display": "block"
        });
        $(".commentDeletePopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".commentDeletePopup").css({
            "display": "none"
        });
        $(".commentDeletePopup_wrapClose").css({
            "display": "none"
        });
    }
}

$(".emailWorkPopupFun_openBtn").click(function () {
    optionMenu_workListSetFun(this, false);
    emailWorkPopupFun(true);
});

$(".emailWorkPopupFun_closeBtn").click(function () {
    emailWorkPopupFun(false);
});


//이메일로 업무 작성 팝업
function emailWorkPopupFun(chk) {
    if (chk == true) {
        $(".emailWorkPopup").css({
            "display": "block"
        });
        $(".emailWorkPopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".emailWorkPopup").css({
            "display": "none"
        });
        $(".emailWorkPopup_wrapClose").css({
            "display": "none"
        });
    }
}

$(".workListDeletePopup_openBtn").click(function () {
    optionMenu_workListSetFun(this, false);
    workListDeletePopupFun(true);
});

$(".workListDeletePopup_closeBtn").click(function () {
    workListDeletePopupFun(false);
});


$(".workItemDeletePopup_openBtn").click(function () {
    rightPanel_PopupFun(false);
    workItemDeletePopupFun(true);
});

$(".workItemDeletePopup_closeBtn").click(function () {
    workItemDeletePopupFun(false);
});


//리스트삭제 팝업
function workListDeletePopupFun(chk) {
    if (chk == true) {
        $(".workListDeletePopup").css({
            "display": "block"
        });
        $(".workListDeletePopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".workListDeletePopup").css({
            "display": "none"
        });
        $(".workListDeletePopup_wrapClose").css({
            "display": "none"
        });
    }
}



//업무 아이템 삭제 팝업
function workItemDeletePopupFun(chk) {
    if (chk == true) {
        $(".workItemDeletePopup").css({
            "display": "block"
        });
        $(".workItemDeletePopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".workItemDeletePopup").css({
            "display": "none"
        });
        $(".workItemDeletePopup_wrapClose").css({
            "display": "none"
        });
    }
}



$(".currentUserOptionMenu_openBtn").click(function () {
    currentUserOptionMenuPopupFun(true);
});

$(".currentUserOptionMenu_closeBtn").click(function () {
    currentUserOptionMenuPopupFun(false);
});


//현재프로젝트 사용자 옵션메뉴
function currentUserOptionMenuPopupFun(chk) {
    if (chk == true) {
        $(".currentUserOptionMenu").css({
            "display": "block"
        });
        $(".currentUserOptionMenu_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".currentUserOptionMenu").css({
            "display": "none"
        });
        $(".currentUserOptionMenu_wrapClose").css({
            "display": "none"
        });
    }
}

//업무배정팝업
function workAssignPopupFun(chk) {
    if (chk == true) {
        $(".workAssignPopup").css({
            "display": "block"
        });
        $(".workAssignPopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".workAssignPopup").css({
            "display": "none"
        });
        $(".workAssignPopup_wrapClose").css({
            "display": "none"
        });
    }
}

//프로젝트 그룹 만들기 팝업
function projectGrouoPopupFun(chk) {
    if (chk == true) {
        $(".projectGrouoPopup").css({
            "display": "block"
        });
        $(".projectGrouoPopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".projectGrouoPopup").css({
            "display": "none"
        });
        $(".projectGrouoPopup_wrapClose").css({
            "display": "none"
        });
    }
}



//팀원 초대하기 팝업
function teamsInvitePopupFun(chk) {
    if (chk == true) {
        $(".teamsInvitePopup").css({
            "display": "block"
        });
        $(".teamsInvitePopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".teamsInvitePopup").css({
            "display": "none"
        });
        $(".teamsInvitePopup_wrapClose").css({
            "display": "none"
        });
    }
}



//이메일로 코멘트 작성 팝업
function emailCommentPopupFun(chk) {
    if (chk == true) {
        $(".emailCommentPopup").css({
            "display": "block"
        });
        $(".emailCommentPopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".emailCommentPopup").css({
            "display": "none"
        });
        $(".emailCommentPopup_wrapClose").css({
            "display": "none"
        });
    }
}


//rightPanel_setMenu
function rightPanel_PopupFun(chk) {
    if (chk == true) {
        $(".rightPanel_setMenu").css({
            "display": "block"
        });
        $(".rightPanel_setMenu_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".rightPanel_setMenu").css({
            "display": "none"
        });
        $(".rightPanel_setMenu_wrapClose").css({
            "display": "none"
        });
    }
}



//새메세지 팝업
function newMsgPopupPopupFun(chk) {
    newMsgPopupTabFun(0);
    if (chk == true) {
        $(".newMsgPopup").css({
            "display": "block"
        });
        $(".newMsgPopup_wrapClose").css({
            "display": "block"
        });
    } else {
        $(".newMsgPopup").css({
            "display": "none"
        });
        $(".newMsgPopup_wrapClose").css({
            "display": "none"
        });
    }
}


//새프로젝트 팝업 탭
function newMsgPopupTabFun(tab) {
    if (tab == 0) {
        $(".newMsgPopup_all").css({
            "display": "block"
        });
        $(".newMsgPopup_chanel").css({
            "display": "none"
        });
        $(".newMsgPopup_msg").css({
            "display": "none"
        });

        $(".newMsgPopup_allBtn p").css({
            "color": "#27b6ba"
        });
        $(".newMsgPopup_chanelBtn p").css({
            "color": "#464c59"
        });
        $(".newMsgPopup_msgBtn p").css({
            "color": "#464c59"
        });

        $(".newMsgPopup_allBtn span").css({
            "background-color": "#27b6ba"
        });
        $(".newMsgPopup_chanelBtn span").css({
            "background-color": "#e6e8ec"
        });
        $(".newMsgPopup_msgBtn span").css({
            "background-color": "#e6e8ec"
        });
    } else if (tab == 1) {
        $(".newMsgPopup_all").css({
            "display": "none"
        });
        $(".newMsgPopup_chanel").css({
            "display": "block"
        });
        $(".newMsgPopup_msg").css({
            "display": "none"
        });

        $(".newMsgPopup_allBtn p").css({
            "color": "#464c59"
        });
        $(".newMsgPopup_chanelBtn p").css({
            "color": "#27b6ba"
        });
        $(".newMsgPopup_msgBtn p").css({
            "color": "#464c59"
        });

        $(".newMsgPopup_allBtn span").css({
            "background-color": "#e6e8ec"
        });
        $(".newMsgPopup_chanelBtn span").css({
            "background-color": "#27b6ba"
        });
        $(".newMsgPopup_msgBtn span").css({
            "background-color": "#e6e8ec"
        });

    } else if (tab == 2) {
        $(".newMsgPopup_all").css({
            "display": "none"
        });
        $(".newMsgPopup_chanel").css({
            "display": "none"
        });
        $(".newMsgPopup_msg").css({
            "display": "block"
        });

        $(".newMsgPopup_allBtn p").css({
            "color": "#464c59"
        });
        $(".newMsgPopup_chanelBtn p").css({
            "color": "#464c59"
        });
        $(".newMsgPopup_msgBtn p").css({
            "color": "#27b6ba"
        });

        $(".newMsgPopup_allBtn span").css({
            "background-color": "#e6e8ec"
        });
        $(".newMsgPopup_chanelBtn span").css({
            "background-color": "#e6e8ec"
        });
        $(".newMsgPopup_msgBtn span").css({
            "background-color": "#27b6ba"
        });
    }
};



//옵션팝업 전부 없애기
function optionPopup_resetFun() {
    optionMenu_memberPfileFun(this, false); //프로필팝업 종료
    optionMenu_topNewFun(false);

    optionMenu_topNewFun(false);
    rightPanel_PopupFun(false);
    //rightPanel_PopupFun(this, false);
    optionMenu_memberPfileFun(this, false);
    optionMenu_memberAddListFun(this, false);
    optionMenu_msgFun(this, false);
    optionMenu_alarmFun(this, false);
    workspace_optionMenuFun(this, false);
    optionMenu_DateFun(this, false);
    projectGroup_optionMenuFun(false);
    emailCommentPopupFun(false);


}


/*//////////////////////// 옵션메뉴 ////////////////////////*/
function optionMenu(e, checked, popup, popupClose, topP, leftP) {
    if (checked == true) {
        var obj = $(e).offset();
        var top = obj.top + topP;
        var left = obj.left + leftP;

        var bodyWidth = $(window).width(); //document전체넓이
        var popupwidth = popup.width(); //팝업가로넓이
        var totalWidth = (popupwidth + left); //(현재좌표x축)+(document전체넓이 더한값)
        var thisWidth = $(e).width(); //해당버튼의 가로길이

        var bodyHeight = $(window).height();
        var popupHeight = popup.height(); //팝업가로넓이
        var totalHeight = (popupHeight + top); //(현재좌표x축)+(document전체넓이 더한값)
        var thisHeight = $(e).height(); //해당버튼의 가로길이

        console.log("////" + obj.left);

        //화면에 넘어가지 않을때
        if (totalWidth < bodyWidth) {
            left = obj.left + 10;
            popup.css({
                "display": "block",
                "top": top + "px",
                "left": left + "px"
            });
            console.log("화면에 넘어가지 않을때");
        } else {
            //화면에 넘어갈때
            left = obj.left - popupwidth + thisWidth;
            popup.css({
                "display": "block",
                "top": top + "px",
                "left": left + "px"
            });

            console.log("화면에 넘어갈때");
        }

        if (totalHeight < bodyHeight) {
            //console.log("넘어가지않음");
        } else {
            //화면에 넘어갈때   
            //console.log("넘어감");

            top = (obj.top - popupHeight + thisHeight) - 35;
            popup.css({
                "display": "block",
                "top": top + "px",
                "left": left + "px"
            });
        }

        popupClose.css({
            "display": "block"
        });
    } else {
        popup.css({
            "display": "none"
        });
        popupClose.css({
            "display": "none"
        });
    }
}



/*===== textarea 자동줄바꿈 =====*/
//textarea 자동줄바꿈 (keyup 할때마다 event) 
//html : <textarea onkeydown="resize(this)" onkeyup="resize(this)" placeholder="">
$(".resizeArea").on('keydown keyup', function () {
    $(this).height(1).height($(this).prop('scrollHeight') + 1);
});

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = (1 + obj.scrollHeight) + "px";
}

function workMainColor_Change(color) {
    $("#workMain_color").css({
        "background-color": color
    });
}
/*

*/
$(document).ready(function () {
    $('.memoTextarea').on('keyup', 'textarea', function (e) {
        $(this).css('height', 'auto');
        $(this).height(this.scrollHeight);
    });
    $('.memoTextarea').find('textarea').keyup();
});




//옵션팝업 컬러값
var aColorList = [
	"#e6e8ec",
	"#ffedc2",
	"#e1f3dd",
	"#cee2f0",
	"#ffffff"
];

$(".mainBGbtn").click(function () {
    var c = $(".mainBGbtn").index(this);

    //테두리값 흰색으로 초기화
    $(".mainBGbtn").css({
        "border": "2px solid #fff"
    });
    //해당값 테두리 활성화
    $(this).css({
        "border": "2px solid #27b6ba"
    });

    //컬러값 배열로 if문 실행
    jQuery.each(aColorList, function (index, value) {

        if (c != 4) {
            if (index == c) {
                $(".bodyDiv").css({
                    "background-color": value,
                    "background-image": "none" //이미지가 초기화
                });
            }
        }
    });
});

//더보기 컬러값
var aColorList_more = [
	"#ca8c1a",
	"#4b55b9",
	"#ad3c50",
	"#436695",
	"#506d49",
	"#2f767c",
	"#404143"
];

$(".mainBGbtn_more").click(function () {
    //해당index값 받아올수잇음
    var c = $(".mainBGbtn_more").index(this);

    //테두리 활성화를 초기화
    $(".mainBGbtn_more").css({
        "border": "2px solid #ffffff"
    });
    //초기화한후 해당아이템에 테두리 활성화
    $(this).css({
        "border": "2px solid #27b6ba"
    });

    //컬러값 (15부터 컬러)
    jQuery.each(aColorList_more, function (index, value) {
        console.log(index + " : " + value);
        if (c >= 15) {
            if (index == (c - 15)) {
                $(".bodyDiv").css({
                    "background-color": value,
                    "background-image": "none" //이미지가 초기화
                });
            }
        }
    });

    //이미지값 (0부터 14까지 이미지)
    for (var i = 0; i < 15; i++) {
        if (i < 15) {
            if (i == c) { //해당 index값이랑 같을때
                $(".bodyDiv").css({
                    "background-image": "url(/images/bg/bg_" + c + ".jpg)",
                    "background-size": "cover"
                });
            }
        }
    }
});

$(".userProfileOptionMenu_moreBtn").click(function () {
    userProfileOptionMenuPageFun(false);
});

$(".userProfileOptionMenu_backBtn").click(function () {
    userProfileOptionMenuPageFun(true);
});

function userProfileOptionMenuPageFun(chk) {
    if (chk == true) {
        $(".userProfileOptionMenu_con").css({
            "display": "block"
        });
        $(".userProfileOptionMenu_more").css({
            "display": "none"
        });
    } else {
        $(".userProfileOptionMenu_con").css({
            "display": "none"
        });
        $(".userProfileOptionMenu_more").css({
            "display": "block"
        });
    }
}


//$(".work_colorWrap").click(function () {
//    var c = $(".work_colorWrap").index(this);
//    console.log(c);
//    $(".work_colorWrap").each(function (index) {
//        if (c == index) {
//            $(".work_colorWrap").eq(index).css({ "background-color": "#27b6ba" });
//        } else {
//            $(".work_colorWrap").eq(index).css({ "background-color": "#ffffff" });
//        }
//	});
//});


$(".work_colorWrap").click(function () {
    if (pelClickChk == false) {} else {
        $(".work_colorWrap").css({
            "background-color": "#fff"
        });
        $(this).css({
            "background-color": "#27b6ba"
        });
        var index = $(".work_colorWrap").index(this);
    }
});


$(".rpColorBtn").click(function () {
    $(".rpColorBtn").css({
        "border": "2px solid #fff"
    });

    $(this).css({
        "border": "2px solid #3e434c"
    });
});



//function toast(text, bgColor = "gray", txtColor = "#fff") {
//	var container = $(".toastPopup");
//	var message = $(".toastPopup p");
//
//	$(container).css({
//		"background-color": bgColor,
//		"color": txtColor
//	})
//	message.text(text);
//	container.stop().fadeIn("slow", function () {
//		$(this).delay(1000).fadeOut("slow", function () {
//
//		});
//	});
//}




$(document).ready(function () {
    Login_ResetPage(true);
    loginChk();
});

function Login_ResetPage(chk) {
    if (chk == true) {
        $(".loginSec_login").css({
            "display": "block"
        });

        $(".loginSec_reset").css({
            "display": "none"
        });
    } else {
        $(".loginSec_login").css({
            "display": "none"
        });

        $(".loginSec_reset").css({
            "display": "block"
        });
    }
}

$(".loginSec_login button").click(function () {
    if ($(".loginEmailInput").val().length == 0 && $(".loginPWInput").val().length == 0) {
        console.log("글자수가 하나도 없음");
        $(".loginEmailInput").css({
            "border": "2px solid #d5493b"
        });
        $(".loginEmailInput_error").css({
            "display": "block"
        });
    } else {
        console.log("글자수가 있음");
        if ($(".loginEmailInput").val().length == 0) {
            var text = $(this);
            console.log("이메일이 비었음");
            $(".loginEmailInput").css({
                "border": "2px solid #d5493b"
            });
            $(".loginEmailInput_error").css({
                "display": "block"
            });
        }

        if ($(".loginPWInput").val().length == 0) {
            var text = $(this);
            console.log("비밀번호가 비었음");
            $(".loginPWInput").css({
                "border": "2px solid #d5493b"
            });
            $(".loginPWInput_error").css({
                "display": "block"
            });
        }
    }
});

$(".login_resetBtn").click(function () {
    Login_ResetPage(false);
});

$(".reset_loginBtn").click(function () {
    Login_ResetPage(true);
});

function loginChk() {
    $('.loginInput').on("focus blur", function () {
        if ($(this).is(':focus') != true) {
            $(this).css({
                "border": "2px solid #d4d6db"
            });
            console.log("아웃");
        }
        if ($(this).is(':focus')) {
            $(this).css({
                "border": "2px solid #27b6ba"
            });
            console.log("포커스");

            if ($(this).hasClass('loginEmailInput')) {
                $(".loginEmailInput_error").css({
                    "display": "none"
                });
            }

            if ($(this).hasClass('loginPWInput')) {
                $(".loginPWInput_error").css({
                    "display": "none"
                });
            }
        }

    });
}

$.event.special.inputchange = {
    setup: function () {
        var self = this,
            val;
        $.data(this, 'timer', window.setInterval(function () {
            val = self.value;
            if ($.data(self, 'cache') != val) {
                $.data(self, 'cache', val);
                $(self).trigger('inputchange');
            }
        }, 20));
    }
};

$('.resetEmailInput').on('inputchange', function () {
    console.log(this.value);
    if (this.value.length != 0) {
        console.log("글자수가 있음");
        $('.loginSec_reset button').attr('disabled', false);
    } else {
        $('.loginSec_reset button').attr('disabled', true);
    }
});






/*------------------------------ 전체개요 - 업무 ------------------------------------*/

//개요 오른쪽패널 닫기/열기
function SummaryRightPanelToggle(chk) {
    if (chk == true) {
        $(".smrySection_panel").css({
            "display": "block"
        });
        $(".smrySection_Div").css({
            "padding-right": "540px"
        });
        $(".smrySection_openPanel").css({
            "display": "none"
        });
    } else {
        $(".smrySection_panel").css({
            "display": "none"
        });
        $(".smrySection_Div").css({
            "padding-right": "0px"
        });
        $(".smrySection_openPanel").css({
            "display": "block"
        });
    }
}

function SummaryLeftPanelToggle(chk) {
    if (chk == true) {
        //왼쪽메뉴
        $(".SummarySection .smrySection_menu").css({
            "display": "block"
        });
        //왼쪽메뉴 버튼인 필터버튼 웹에서는 숨기기
        $(".smrySection_filter").css({
            "display": "none"
        });
        //content의 패딩값 왼쪽메뉴값만큼 벌어주기
        $(".SummarySection .smrySection_Div").css({
            "padding-left": "305px"
        });
    } else {
        //왼쪽메뉴
        $(".SummarySection .smrySection_menu").css({
            "display": "none"
        });
        //왼쪽메뉴 버튼인 필터버튼 모바일때만 보이게 하기
        $(".smrySection_filter").css({
            "display": "block"
        });
        //content의 패딩값 왼쪽메뉴값만큼 빼주기
        $(".SummarySection .smrySection_Div").css({
            "padding-left": "45px"
        });
    }
}

function responsive_summary(chk) {
    //웹
    if (chk == true) {
        //오른쪽메뉴
        SummaryRightPanelToggle(true);
        SummaryLeftPanelToggle(true);
        //모바일
    } else {
        //오른쪽메뉴
        SummaryRightPanelToggle(false);
        SummaryLeftPanelToggle(false);
    }
}



//개요 업무 왼쪽 메뉴에서 타이틀 토글 초기화하기
function smrySection_menuTitleBox_up() {
    var ul = $(".smrySection_menuTitleBox").parent(".smrySection_menuBox").children("ul");
    var img = $(".smrySection_menuTitleBox").children("img");

    $(ul).slideUp(0);
    $(img).attr("src", "images/unfold.png");
}

//개요 업무 리스트 컬러색상 바꾸기 - 나중에 아이디로 바꿔서 변경해줘야함
function SummaryWork_litItemColor(color) {
    $(".smrySection_conItemBox ul li").css({
        "border-left": "5px solid" + color
    });
}

//개요 업무 리스트 태그색상 바꾸기 - 나중에 아이디로 바꿔서 변경해줘야함
function SummaryWork_listTagColor(color) {
    $(".smrySection_conItemBox_bottom_text span").css({
        "background-color": color
    });
}
