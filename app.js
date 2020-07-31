let $hello = $('.hello')

$hello.hover (function () {
    $hello.css('color', "blue");
},
    function () {
    $hello.css('color', "white");
})


// const $buttonglow = function(name, button, link) {
//     let $name = $(`.${name}`);
//     $name.hover(function() {
//     $(`.${button}`).css('background-color','#dbf5ff');
//     $(`.${link}`).css('color','black');
//     }, function () {
//     $(`.${button}`).css('background-color',"#19415C");
//     $(`.${link}`).css('color','white');
//     })
//   };