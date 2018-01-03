/*
* java.util.StringTokenizer 구현
*/
function StringTokenizer(str, key) {
    this.original = str;
    this.sentence = str;
    this.parseKey = key;
    this.accessPoint = 0;
    this.tokens = this.sentence.split(this.parseKey);

    this.hasMoreTokens = function () {
        if (this.tokens.length > this.accessPoint) {
            return true;
        } else {
            return false;
        }
    }

    this.nextToken = function () {
        if (this.hasMoreTokens()) {
            this.accessPoint++;
            return this.tokens[this.accessPoint - 1];
        } else {
            return null;
        }
    }
}

/* inQuery("홍길동,홍길순,이순신")
-> '홍길동','홍길순','이순신'
*/

function inQuery(str) {
    var arr_str = str.split(',');
    var result = "";
    var comma = "";
    for (i = 0; i < arr_str.length; i++) {
        if (i == arr_str.length - 1)
            comma = "";
        else
            comma = ",";
        result += "'" + arr_str[i] + "'" + comma;
    }
    return result;
}

/*
* 숫자열을 3자리마다 "," 표 찍기
*/
function formatMoney(strNumber, mode) {
    var nLength = strNumber.length;
    var i = 0, j = 0;
    var strResult = '';
    if (mode == 'INSERT') {
        var j = 0;
        for (i = nLength - 1; i >= 0; i--) {
            j++;
            strResult = strNumber.substring(i, i + 1) + strResult;
            if (j % 3 == 0 && i > 0) {
                strResult = ',' + strResult;
            }
        }
    } else if (mode == 'DELETE') {
        for (i = nLength - 1; i >= 0; i--) {
            if (strNumber.substring(i, i + 1) != ',') {
                strResult = strNumber.substring(i, i + 1) + strResult;
            }
        }
    }
    return strResult;
}

/*
* java.lang.String.endsWith() 구현
*/
function endsWith(str, checker) {
    if (str != null && checker != null && str.length > checker.length) {
        if (str.substr(str.length - checker.length).toUpperCase() == checker.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
* java.lang.String.startsWith() 구현
*/
function startsWith(str, checker) {
    if (str != null && checker != null && str.length > checker.length) {
        if (str.toUpperCase().substr(0, checker.toUpperCase().length) == checker.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
* 쿠키 값추가
*/
function addCookie(name, value, url, expiredays) {
    var todayDate = new Date();
    if (Number(expiredays) > 0) {
        todayDate.setDate(eval(todayDate.getDate() + expiredays));
    } else if (Number(expiredays) == 0) {
        todayDate = null;
    } else {
        todayDate.setDate(todayDate.getDate() + 30);
    }
    document.cookie = name + "=" + escape(value) +
        (todayDate != null ? "; expires=" + todayDate.toGMTString() : "") +
        (url != null ? "; path=" + url : " ");
}

/*
* 쿠키 값 얻기
*/
function getCookie(name) {
    var Found = false;
    var start, end;
    var i = 0;
    while (i <= document.cookie.length) {
        start = i;
        end = start + name.length;
        if (document.cookie.substring(start, end) == name) {
            Found = true;
            break;
        }
        i++;
    }

    if (Found == true) {
        start = end + 1;
        end = document.cookie.indexOf(";", start);
        if (end < start) {
            end = document.cookie.length;
        }
        return document.cookie.substring(start, end);
    } else {
        return "";
    }
}

/*
* flash Tag 작성
*/
function flashTagWrite(url, width, height) {
    var str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"';
    str += ' width=' + width + ' height=' + height + '>';
    str += '<param name="movie" value="' + url + '" />';
    str += '<param name="quality" value="high" />';
    str += '<param name="wmode" value="transparent">';
    str += '<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="620" height="58">';
    str += '</embed></object>';
    document.write(str);
}
function flashWrite(flashStr) {
    document.write(flashStr);
}
function flashInnerWrite(target, flashStr) {
    document.getElementById(target).innerHTML = flashStr;
}

/*
* 정규식으로 문자열중 주민등록 번호 패턴 검사
*/
function textInRegistCode(str) {
    var format = "[0-9]{6}(-|.|)[1|2|3|4]{1}[0-9]{6}";
    if (str.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* 문자열에 한글문자가 하나라도 있는지 검사
*/
function strInKrChar(value) {
    for (nindex = 0; nindex < value.length; nindex++) {
        str2 = value.charAt(nindex);
        if ((str2 >= 'ㄱ' && str2 <= '힣')) {
            return true;
        }
    }
    return false;
    /*
    var format = "[ㄱ-힣]";
    if (value.search(format) != -1) {
    return true; 
    }
    return false;
    */
}

/*
* 정규식으로 문자열이 영문 대소 문자와 숫자로만 구성됬는지 패턴검사
*/
function strInNumNEn(value) {
    if (value == null || value.length < 1) return true;
    var temp = value;
    while (temp.indexOf("\\") > -1) {
        temp = temp.substr(temp.indexOf("\\") + 1);
    }
    temp = temp.replace("[", "");
    temp = temp.replace("]", "");
    var format = "[^\._A-Za-z0-9]{1,}";

    if (temp.search(format) != -1) {
        return true;
    } else {
        return false;
    }
}


/*
* 정규식으로 문자열이 숫자로만 구성됬는지 패턴검사
*/

function strInNum(value) {
    var format = "^[0-9]";

    if (value.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* 정규식으로 문자열이 이메일로 유효한지 패턴검사
*/
function isEmail(value) {
    var format = "^([-.0-9a-zA-Z]+)@([-.0-9a-zA-Z]+).([a-zA-Z]+)$";
    if (value.search(format) != -1) {
        return true;
    }
    return false;

    // var format = /^[-!#$%&\'*+\\./0-9=?A-Z^_a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_a-z{|}~]+$/
    // return format.test(value);
}

/*
* 정규식으로 문자열이 이메일로 유효한지 패턴검사
*/
function checkEmail(email) {
    var exclude = /[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check = /@[\w\-]+\./;
    var checkend = /\.[a-zA-Z]{2,3}$/;

    if (((email.search(exclude) != -1) || (email.search(check)) == -1) || (email.search(checkend) == -1)) {
        return false;
    } else {
        return true;
    }
}

/*
* 정규식으로 문자열이 일반전화번호로 유효한지 패턴검사
*/
function isPhoneNumber(value) {
    var format = "^[0-9]\{2,3\}-[0-9]\{3,4\}-[0-9]\{4\}$";

    if (value.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* 정규식으로 문자열이 헨드폰번호로 유효한지 패턴검사
*/
function isMobileNumber(value) {
    var format = "^[0-9]\{3\}-[0-9]\{3,4\}-[0-9]\{4\}$";
    if (value.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* 정규식으로 문자열에 HTML Tag가 있는지 패턴검사
*/
function strInTag(value) {
    value = value.replace("<", "<");
    value = value.replace(">", ">");
    //var format = "<[^>|[0-9a-zA-Z]]*>";
    var format = "<*[0-9a-zA-Z]*>";
    if (value.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* 정규식으로 문자열에 HTML SCRIPT TAG가 있는지 패턴검사
*/
function strInScriptTag(name) {
    var target = null;
    if (document.getElementById(name) != null) {
        target = document.getElementById(name);
    } else if (eval("document." + name) != null) {
        target = eval("document." + name);
    } else if (document.all[name] != null) {
        target = document.all[name];
    }
    if (target == null) return false;
    value = target.value.replace("<", "<");
    value = target.value.replace(">", ">");
    var format = "<*[[Ss][Cc][Rr][Ii][Pp][Tt]]*>";
    if (target.value.search(format) != -1) {
        return true;
    }
    return false;
}

/*
* Event가 발생한 Html 객체의 window 새로 위치 얻기
*/
function getRealOffsetTop(o) {
    return o ? o.offsetTop + getRealOffsetTop(o.offsetParent) : 0;
}

/*
* Event가 발생한 Html 객체의 window 가로 위치 얻기
*/
function getRealOffsetLeft(o) {
    return o ? o.offsetLeft + getRealOffsetLeft(o.offsetParent) : 0;
}


/*
* 게시판 첨부파일 사용시 선택한 파일 확장명 검사
*/

function attachInvalidCheck(name) {
    var target = null;
    if (document.getElementById(name) != null) {
        target = document.getElementById(name);
    } else if (eval("document." + name) != null) {
        target = eval("document." + name);
    } else if (document.all[name] != null) {
        target = document.all[name];
    }
    if (target != null) {
        if (target.value != null && target.value.length > 0) {
            var invalid = new Array("ZIP", "HWP", "TXT", "TEXT", "PDF", "DOC", "RTF", "PPT", "XLS", "AVI", "WMV", "WAV", "WMA", "ASF", "MPG", "MPEG", "JPG", "JPEG", "GIF", "BMP", "PNG", "SWF");
            var isValid = false;
            for (var k = 0; k < invalid.length; k++) {
                if (target != null && endsWith(target.value, invalid[k])) {
                    isValid = true;
                }
            }
            return isValid;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

/*
* 배열 목록에서 랜덤하게 순서 정렬
*/
function ArraySort(arr) {
    return arr.sort(
        function () {
            return Math.random() * 3 - 2;
        }
    );
}

/*
* XMLHttpRequest 가 사용 가능한지 확인
*/
function initRequest(url) {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

/*
* XMLHttpRequest 가 사용 가능한지 확인
*/
function isXMLHttpRequest() {
    if (window.XMLHttpRequest && navigator.appName.indexOf("Internet Explorer") < 0) {
        return true;
    } else if (window.ActiveXObject) {
        return false;
    }
    return false;
}

/*
* XMLHttpRequest를 인스턴스 객체에서 참조할 경우 사용
*/
function getDefaultXMLHttpRequest(strUrl) {
    var req = initRequest(strUrl);
    if (req == null) {
        alert("AJAX 사용 가능한 웹브라우저가 아닙니다.");
        return null;
    } else {
        req.onreadystatechange = function () {
            // 본래 이곳에서 XML 파싱등의 처리를 해야 하나 마지막 라인 return req 를 통해 사용하는 인스턴스 객체에서 사용토록 처리한다.
        };
        if (isXMLHttpRequest()) {
            req.overrideMimeType('text/xml');
        }
        req.open("GET", strUrl, true);
        req.send(null);
        return req;
    }
}

/**
* 한자리 숫자 앞에 0을 더해준다.
* @param no 한자리 숫자
* @return
*/
function addZero(no) {
    var tempNo = Number(no);
    tempNo = (tempNo > 9 ? tempNo : "0" + tempNo);
    return tempNo;
}

/**
* 문자열의 공백 제거
* @param str 문자열
* @return
*/
function trim(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    return str;
}

/**
* 마우스 클릭된 곳의 좌표를 반환합니다.
* @param e
* @return
*/
function getMousePosition(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
    }
    return [posx, posy + 20];
}

/* 닷넷프레임워크 버전확인 */
function checkNetFramework() {
    var clrversion = navigator.userAgent;
    var Framework1 = clrversion.indexOf('CLR 1.1') > 0;
    var Framework2 = clrversion.indexOf('CLR 2.0') > 0;
    var Frmaework3 = clrversion.indexOf('CLR 3.0') > 0;
    var Framework35 = clrversion.indexOf('CLR 3.5') > 0;
    var Framework4 = clrversion.indexOf('CLR 4.0') > 0;
    if (!Framework2 && !Framework3 && !Framework35 && !Framework4) {
        alert("설치되어있는 닷넷프레임워크가 없습니다. 확인을 누르면 .NetFramework 를 다운받습니다.")
        location.href = "http://10.245.40.97/dynaSightClientInstall/dotnetfx/dotnetfx.exe";
    }
    else if (Framework1 && !Framework2 && !Framework3 && !Framework35 && !Framework4) {
        alert("설치되어있는 닷넷프레임워크 버전이 낮습니다.. 확인을 누르면 .NetFramework 를 다운받습니다.")
        location.href = "http://10.245.40.97/dynaSightClientInstall/dotnetfx/dotnetfx.exe";
    }
}
