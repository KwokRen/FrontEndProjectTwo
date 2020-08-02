// where the heroku website will be
const deployedURL = 'https://projecttwoga.herokuapp.com'
// const deployedURL = null
// developmental purposes will use local host
const URL = deployedURL ? deployedURL : "http://localhost:3000"

///////// DISPLAY ALL /////////

const getAll = async () => {
    // fetch data from the database and return a promise
    const response = await fetch(`${URL}/fitness`);
    const data = await response.json()
    data.forEach((exercise) => {
        const $dateDiv = $('<div>').attr({'id': exercise._id, 'class': 'dateDiv'}).text(`Day: ${exercise.day}`).on('click', displayExercise);
        $('.datesForExercise').append($dateDiv);
    })
}
// seperated clicking on dates for both of the links
const getAllFood = async () => {
    const response = await fetch(`${URL}/fitness/food`);
    const data = await response.json()
    console.log(data);
    data.forEach((food) => {
    const $dateDivTwo = $('<div>').attr({'id': food._id, 'class': 'dateDivTwo'}).text(`Day: ${food.dayNumber}`).on('click', displayFood);
    $('.datesForFood').append($dateDivTwo);
    })
}
// displays the food
const displayFood = async () => {
    const response = await fetch(`${URL}/fitness/food/${event.target.id}`);
    const data = await response.json()
    console.log(data)
    $('.breakfastContainer').empty()
    const $breakfastContainer = $('.breakfastContainer')
    data.breakfast.forEach((breakfast) => {
        const $breakfastList = $('<li>').text(`${breakfast}`)
        $breakfastContainer.append($breakfastList)
    })
    $('.breakfast').append($breakfastContainer);
    $('.lunchContainer').empty()
    const $lunchContainer = $('.lunchContainer')
    data.lunch.forEach((lunch) => {
        const $lunchList = $('<li>').text(`${lunch}`)
        $lunchContainer.append($lunchList)
    })
    $('.lunch').append($lunchContainer);
    $('.dinnerContainer').empty()
    const $dinnerContainer = $('.dinnerContainer')
    data.dinner.forEach((dinner) => {
        const $dinnerList = $('<li>').text(`${dinner}`)
        $dinnerContainer.append($dinnerList)
    })
    $('.dinner').append($dinnerContainer);
}


//////// DISPLAYS ONE DAYS WORTH OF EXERCISES /////////

const displayExercise = async () => {
    const response = await fetch(`${URL}/fitness/${event.target.id}`);
    const data = await response.json()
    console.log(data);
    $('#showOneExercise').empty()
    data.exercises.forEach((exercise) => {
        const $exerciseDiv = $('<div>').attr({'id': exercise._id, 'class': 'exerciseDiv'});
        const $routineHeading = $('<h4>').text(`${exercise.routine}`);
        const $difficulty = $('<h6>').text(`${exercise.difficulty}`);
        const $sets = $('<h6>').text(`${exercise.sets}`);
        const $reps = $('<h6>').text(`${exercise.reps}`);
        const $directionButton = $('<button>').text(`Directions`);
        console.log(exercise.directionVideo);
        const $directions = $('<a>').attr({'href': exercise.directionVideo, 'target': '_blank'});
        $directions.append($directionButton);
        $exerciseDiv.append($routineHeading);
        $exerciseDiv.append($difficulty);
        $exerciseDiv.append($sets);
        $exerciseDiv.append($reps);
        $exerciseDiv.append($directions);
        $('#showOneExercise').append($exerciseDiv);
    })
}


getAll()

getAllFood()





// let $hello = $('.hello')

// $hello.hover (function () {
//     $hello.css('color', "black");
//     $hello.css('transition', "all 3s ease-in-out")
// },
//     function () {
//     $hello.css('color', "white");
//     $hello.css('transition', "all 3s ease-in-out");
// })

