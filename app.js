let $hello = $('.hello')

$hello.hover (function () {
    $hello.css('color', "rgb(149, 217, 238)");
    $hello.css('transition', "all 1s ease-in-out")
},
    function () {
    $hello.css('color', "white");
    $hello.css('transition', "all 1s ease-in-out");
})


