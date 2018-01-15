/**
 * this file is called in input.jsp
 * @returns
 */
$(function() {
	var checked1 = $("#all").attr("checked")=="checked";
	$("#all").click(function() {
		$("[name=roles]:checkbox").attr("checked", checked1);
	});
	document.writeln("<script type='text/javascript' src='reverseFun.js'></script>");
});

