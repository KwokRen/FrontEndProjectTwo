// where the heroku website will be
// const deployedURL = 'https://projecttwoga.herokuapp.com'
const deployedURL = null
// developmental purposes will use local host
const URL = deployedURL ? deployedURL : "http://localhost:3000"

///////// DISPLAY ALL /////////

const getAll = async () => {
    // fetch data from the database and return a promise
    const response = await fetch(`${URL}/fitness`);
    const data = await response.json()
    data.forEach((exercise) => {
        const $dateDiv = $('<div>').attr({'id': exercise._id, 'class': 'dateDiv'}).text(`Day: ${exercise.day}`).on('click', displayExercise);
        $('#datesForExercise').append($dateDiv);
    })
}

//////// DISPLAYS ONE DAYS WORTH OF EXERCISES /////////

const displayExercise = async () => {
    const response = await fetch(`${URL}/fitness/${event.target.id}`);
    const data = await response.json()
    console.log(data);
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
        $('#showOneExercise').append($exerciseDiv);']'
    })
}

getAll()





let $hello = $('.hello')

$hello.hover (function () {
    $hello.css('color', "black");
    $hello.css('transition', "all 3s ease-in-out")
},
    function () {
    $hello.css('color', "white");
    $hello.css('transition', "all 3s ease-in-out");
})

