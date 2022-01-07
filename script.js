function navHighlight() {
    var scrollTop = $(document).scrollTop();

    $("section").each(function () {
        var xPos = $(this).position();
        var sectionPos = xPos.top;
        var sectionHeight = $(this).height();
        var overall = scrollTop + sectionHeight;

        if ((scrollTop + 20) >= sectionPos && scrollTop < overall) {
            $(this).addClass("SectionActive");
            $(this).prevAll().removeClass("SectionActive");
        }

        else if (scrollTop <= overall) {
            $(this).removeClass("SectionActive");
        }

        var xIndex = $(".SectionActive").index();
        var accIndex = xIndex + 1;

        $("nav li:nth-child(" + accIndex + ")").addClass("navActivePage").siblings().removeClass("navActivePage");
    });
}


$(document).scroll(function () {
    navHighlight();
});