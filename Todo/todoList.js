/**
 * 
 */
$(function () {
	$('.todoArray').empty();
	i=0;
	$('.todoArray').eq(-1).append('<tr><td><input type="hidden" class="todo_id" value="" /><input class="kanryoFlag" type="checkbox" onclick="kanryouFlagChange('+i+')" /></td><td><label class="todo_title"></label></td><td><label class="todo_content"></label></td><td><label class="startTime"></label></td><td><label class="endTime"></label></td><td><input type="checkbox" class="endDate" /></td></tr>'); 
	todoListShow();
});

function todoListShow(){
	for (i = 0; i < localStorage.length; i++){
		//IDの取得
		ID = localStorage.key(i);
//		alert('ID='+ID);
		//localStorageデータの取得
		data = JSON.parse(localStorage.getItem(ID));
		//データの取得
		todo_title = data['title'];
		todo_content = data['content'];
		startTime = data['startTime'];
		endTime = data['endTime'];
		endDate = data['endDate'];
		kanryoFlag = data['kanryoFlag'];
		//データの挿入
		$('.todoArray tr .todo_id').eq(-1).val(ID);
		if(kanryoFlag == false){
			$('.todoArray tr .kanryoFlag').eq(-1).prop('checked',false);
		}else if(kanryoFlag == true){
			$('.todoArray tr .kanryoFlag').eq(-1).prop('checked',true);
		}
		$('.todoArray tr .todo_title').eq(-1).text(todo_title);
		$('.todoArray tr .todo_content').eq(-1).text(todo_content);
		$('.todoArray tr .startTime').eq(-1).text(startTime);
		$('.todoArray tr .endTime').eq(-1).text(endTime);
		if(endDate == false){
			$('.todoArray tr .endDate').eq(-1).prop('checked',false);
		}else if(endDate == true){
			$('.todoArray tr .endDate').eq(-1).prop('checked',true);
		}
		//行の挿入
		$('.todoArray').eq(-1).append('<tr><td><input type="hidden" class="todo_id" value="" /><input class="kanryoFlag" type="checkbox" onclick="kanryouFlagChange('+i+')" /></td><td><label class="todo_title"></label></td><td><label class="todo_content"></label></td><td><label class="startTime"></label></td><td><label class="endTime"></label></td><td><input type="checkbox" class="endDate" /></td></tr>'); 
	}
}

function kanryouFlagChange(i){
	todo_id = $('.todoArray tr .todo_id').eq(i).val();
	kanryoFlag = $('.todoArray tr .kanryoFlag').eq(i).prop('checked');
	todo_title = $('.todoArray tr .todo_title').eq(i).text();
	todo_content = $('.todoArray tr .todo_content').eq(i).text();
	startTime = $('.todoArray tr .startTime').eq(i).text();
	endTime = $('.todoArray tr .endTime').eq(i).text();
	endDate = $('.todoArray tr .endDate').eq(i).prop('checked');
	
	data = {'title':todo_title,'content':todo_content,'startTime':startTime,'endTime':endTime,'endDate':endDate,'kanryoFlag':kanryoFlag};
	localStorage.setItem(todo_id,JSON.stringify(data));
}