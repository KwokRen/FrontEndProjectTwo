let $hello = $('.hello')

$hello.hover (function () {
    $hello.css('color', "blue");
},
    function () {
    $hello.css('color', "white");
})


