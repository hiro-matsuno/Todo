/**
 * 
 */
$(function () {
	thisDate = nowDateThis();
	thisDateHM = nowDateHour();
	$('#now_date').text(thisDate);
	$('#inputYMDHM').val(thisDateHM);
	$('#todo_title').val("");
	$('#todo_content').val("");
	$('#start_time').val("09:00");
	$('#end_time').val("18:00");
	$('#end_date').prop('checked',false);
});

//現在日付の取得
function nowDateThis(){
//	日付取得
	nowDate = new Date();
	nowYear = nowDate.getFullYear();
	nowMonth = nowDate.getMonth() + 1;
	nowDate = nowDate.getDate();
	nowYMD = nowYear + "年" + nowMonth + "月" + nowDate + "日";
	return nowYMD;
}

//現在の日付時間の取得
function nowDateHour(){
//	日付取得
	nowDate = new Date();
	nowYear = nowDate.getFullYear();
	nowMonth = nowDate.getMonth() + 1;
	if(nowMonth >= "1" && nowMonth <= "9"){
		nowMonth = "0" + nowMonth;
	}
	nowDate = nowDate.getDate();
	if(nowDate >= "1" && nowDate <= "9"){
		nowDate = "0" + nowDate;
	}
//	時間取得
	nowHM = new Date();
	nowHour = nowHM.getHours();
	if(nowHour >= '0' && nowHour <= '9'){
		nowHour = "0" + nowHour;
	}
	nowTime = nowHM.getMinutes();
	if(nowTime >= "0" && nowTime <= "9"){
		nowTime = "0" + nowTime;
	}
	nowYMD = nowYear + nowMonth + nowDate + nowHour + nowTime;
	return nowYMD;
}

//データの初期化
function data_clear(){
	$('#todo_title').val("");
	$('#todo_content').val("");
	$('#start_time').val("09:00");
	$('#end_time').val("18:00");
	$('#end_date').prop('checked',false);
}

//データ登録
function input_data(){
	id = $('#inputYMDHM').val();
	title = $('#todo_title').val();
	content = $('#todo_content').val();
	startTime = $('#start_time').val();
	endTime = $('#end_time').val();
	endDate = $('#end_date').prop("checked");
	data = {'title':title,'content':content,'startTime':startTime,'endTime':endTime,'endDate':endDate};
	localStorage.setItem(id,JSON.stringify(data));
}