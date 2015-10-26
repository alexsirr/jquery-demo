/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$("#change-content").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    $(data).text($("#newContent").val());
});

$("#add-at-end").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        $(data[item]).text($(data[item]).text() + " " + $("#newContent").val());
    })
    
});

$("#add-at-start").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        $(data[item]).text($("#newContent").val() + " " + $(data[item]).text());
    })
});

$("#insert-before").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        $(data[item]).before($("#newContent").val());
    });
});

$("#move-after").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    $($("#newContent").val()).after(data);
    
});

$("#surround-class").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        var div = $("<div class='" + $("#newContent").val() +"'></div>");
        $(data[item]).wrap(div);
    });
});

$("#hide-text").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        var val = $(data[item]).text();
        if (val.length > 12) {
            var div = $("<div class='hidden'></div>");
            $(data[item]).wrap(div);
        }
    });
});

$("#remove-word").on("click", function() {
    checkSelector();
    var data = $($("#selector").val());
    data.map(function(item) {
        var val = $(data[item]).text();
        if (val.indexOf($("#newContent").val()) != -1) {
            $(data[item]).remove();
        }
    });
});

var checkSelector = function() {
    if ($("#selector").val() == "") 
        alert("You must include a selector!");
}
