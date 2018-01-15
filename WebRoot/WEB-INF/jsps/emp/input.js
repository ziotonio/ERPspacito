/**
 * this file is called in input.jsp
 * @returns
 */
$(function() {
		var checked1 = $("#all").attr("checked")=="checked";
		$("#all").click(function() {
			$("[name=roles]:checkbox").attr("checked", checked1);
		});
		$("#reverse").click(function() {
			$("[name=roles]:checkbox").each(function () {
                $(this).attr("checked", !$(this).attr("checked"));
            });

		});
});
