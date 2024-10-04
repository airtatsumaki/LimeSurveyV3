function fixToBottomInOrder(qid, itemsToFix) {
    var thisQuestion = $("#question" + qid);
    $.each(itemsToFix, function (index, answer) {
        if ($(thisQuestion).hasClass("list-radio")) {
            $(".answer-item[id$=X" + qid + answer + "]", thisQuestion).appendTo(
                $(
                    ".answer-item[id$=X" + qid + answer + "]",
                    thisQuestion
                ).parent()
            );
        }
    });
}
