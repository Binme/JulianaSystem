// function popupDelete(){
// 	$("button.btn-danger").on("click",function(){
// 		$(".popup-delete").fadeIn();
// 		var src = $(this).data("src");
// 		var del = $(this).data("del");
// 		$(".popup-delete .btn-default.yes > a").attr("href",src);
// 		$(".popup-delete-title > h5 > strong").text(del);
// 		$(".popup-delete-content .btn-default").off("click");
// 		$(".popup-delete-content .btn-default.no").on("click",function(){
// 			$(".popup-delete").fadeOut();
// 		});
// 	});
// 	$(".popup-delete  span").on("click",function(){
// 		$(".popup-delete").fadeOut();
// 	});
// }
// window.onload = function(){
// 	popupDelete();
// }