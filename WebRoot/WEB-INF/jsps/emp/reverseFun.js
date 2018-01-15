/**
 * this function is called in input.js
 */
$(function reverseFun() {
	var reverse1 = $(this).attr("checked", !$(this).attr("checked"));
	$("#reverse").click(function() {
		$("[name=roles]:checkbox").each(function () {
            reverse1;
        });
	});
});
