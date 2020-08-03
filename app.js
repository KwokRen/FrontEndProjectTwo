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
        const $dateDiv = $('<div>').attr({'id': exercise._id, 'class': 'dateDiv'}).text(`Day: ${exercise.day}`).on('click', displayExercise).on('click', editExercise);
        $('.datesForExercise').append($dateDiv);
    })
    const $editButton = $('<button>').attr({'class': "waves-effect waves-light btn modal-trigger editButton", 'data-target': "modal1"}).text('Edit').on('click', (event) => {
        $('#edit-modal').modal();
    });
    $('.datesForExercise').append($editButton);
}

$("#submit-edit").on('click', (event) => {
    $('.modal').modal('hide');
})



// populating values to the edit div 
const editExercise = async () => {
    const response = await fetch(`${URL}/fitness/${event.target.id}`);
    const data = await response.json()
    console.log(data)
    const routineIndexOne = data.exercises[0].routine
        $('#routine-editOne').val(routineIndexOne)
    const routineIndexTwo = data.exercises[1].routine
        $('#routine-editTwo').val(routineIndexTwo)
    const routineIndexThree = data.exercises[2].routine
        $('#routine-editThree').val(routineIndexThree)
    const difficultyIndexOne = data.exercises[0].difficulty
        $('#difficulty-editOne').val(difficultyIndexOne)
    const difficultyIndexTwo = data.exercises[1].difficulty
        $('#difficulty-editTwo').val(difficultyIndexTwo)
    const difficultyIndexThree = data.exercises[2].difficulty
        $('#difficulty-editThree').val(difficultyIndexThree)
    const setsIndexOne = data.exercises[0].sets
        $('#sets-editOne').val(setsIndexOne)
    const setsIndexTwo = data.exercises[1].sets
        $('#sets-editTwo').val(setsIndexTwo)
    const setsIndexThree = data.exercises[2].sets
        $('#sets-editThree').val(setsIndexThree)
    const repsIndexOne = data.exercises[0].reps
        $('#reps-editOne').val(repsIndexOne)
    const repsIndexTwo = data.exercises[1].reps
        $('#reps-editTwo').val(repsIndexTwo)
    const repsIndexThree = data.exercises[2].reps
        $('#reps-editThree').val(repsIndexThree)
    const directionsIndexOne = data.exercises[0].directionVideo
        $('#directions-editOne').val(directionsIndexOne)
    const directionsIndexTwo = data.exercises[1].directionVideo
        $('#directions-editTwo').val(directionsIndexTwo)
    const directionsIndexThree = data.exercises[2].directionVideo
        $('#directions-editThree').val(directionsIndexThree)
}

// seperated clicking on dates for both of the links
const getAllFood = async () => {
    const response = await fetch(`${URL}/fitness/food`);
    const data = await response.json()
    console.log(data);
    data.forEach((food) => {
        const $dateDivTwo = $('<div>').attr({'id': food._id, 'class': 'dateDivTwo'}).text(`Day: ${food.dayNumber}`).on('click', displayFood).on('click', editFood);
        $('.datesForFood').append($dateDivTwo);
    })
    const $editFoodButton = $('<button>').attr({'class': "waves-effect waves-light btn modal-trigger editButton"}).text('Edit').on('click', (event) => {
        $('#editFood-modal').modal();
    })
    $('.datesForFood').append($editFoodButton);
}

$("#submit-foodEdit").on('click', (event) => {
    $('.modal').modal('hide');
    $()
})

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

// Places the previous values food onto the modal to edit

const editFood = async () => {
    const response = await fetch(`${URL}/fitness/food/${event.target.id}`);
    const data = await response.json()
        $('#breakfastOne-edit').val('')
        $('#breakfastTwo-edit').val('')
        $('#breakfastThree-edit').val('')
        $('#lunchOne-edit').val('')
        $('#lunchTwo-edit').val('')
        $('#lunchThree-edit').val('')
        $('#dinnerOne-edit').val('')
        $('#dinnerTwo-edit').val('')
        $('#dinnerThree-edit').val('')
    data.breakfast.forEach((element, index) => {
        if (index === 0){ 
            $('#breakfastOne-edit').val(element)
        } else if (index === 1) {
            $('#breakfastTwo-edit').val(element)
        } else {
            $('#breakfastThree-edit').val(element)
        }
    })
    data.lunch.forEach((element, index) => {
        if (index === 0){
            $('#lunchOne-edit').val(element)
        } else if (index === 1) {
            $('#lunchTwo-edit').val(element)
        } else {
            $('#lunchThree-edit').val(element)
        }
    })
    data.dinner.forEach((element, index) => {
        if (index === 0){
            $('#dinnerOne-edit').val(element)
        } else if (index === 1) {
            $('#dinnerTwo-edit').val(element)
        } else {
            $('#dinnerThree-edit').val(element)
        }
    })
}


//////// DISPLAYS ONE DAYS WORTH OF EXERCISES /////////

const displayExercise = async () => {
    const response = await fetch(`${URL}/fitness/${event.target.id}`);
    const data = await response.json()
    console.log(data);
    $('#showOneExercise').empty()
    data.exercises.forEach((exercise) => {
        const $exerciseDiv = $('<div>').attr({'id': exercise._id, 'class': 'exerciseDiv'});
        const $routineHeading = $('<h4>').text(`${exercise.routine}`).attr('class', 'routineHeadings');
        const $difficulty = $('<h6>').text(`${exercise.difficulty}`).attr('class', 'difficulty');
        const $sets = $('<h6>').text(`${exercise.sets}`).attr('class', 'sets');
        const $reps = $('<h6>').text(`${exercise.reps}`).attr('class', 'reps');
        const $directionButton = $('<button>').text(`Directions`).attr('class','directionButton');
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

