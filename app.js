// where the netlify website will be
const deployedURL = 'https://projecttwoga.herokuapp.com'
// developmental purposes will use local host
const URL = deployedURL ? deployedURL : "http://localhost:3000"

///////// DISPLAY ALL /////////

const getAll = async () => {
    // fetch data from the database and return a promise
    const response = await fetch(`${URL}/fitness`);
    const data = await response.json()
    console.log(data);
}

getAll()





// let $hello = $('.hello')

// $hello.hover (function () {
//     $hello.css('color', "black");
//     $hello.css('transition', "all 3s ease-in-out")
// },
//     function () {
//     $hello.css('color', "white");
//     $hello.css('transition', "all 3s ease-in-out");
// })

