$(document).ready(function () {
    $(".thumbnail img").on("mouseover", function () {
        $("img.main-image").attr("src", $(this).attr("src"));
    });
});

//step 1.bind an event to mouse
$(document).ready(function () {
    $("body").on("mouseover", ".thumbnail", function () {
        //step 2.when we mouseover a thumbnail, we will want to set the main image src to the thumbnail we moused over
        var theDivWeMousedOver = $(this);
        var theMainImage = $("img.main-image");
        var theImageWeMousedOver = theDivWeMousedOver.children("img");
        var theSRCOfTheImageWeMousedOver = theImageWeMousedOver.attr("src");
        console.log(theSRCOfTheImageWeMousedOver);

        //sets the src of the mail image to the src of the image we moused over
        theMainImage.attr("src", theSRCOfTheImageWeMousedOver);

    });


});