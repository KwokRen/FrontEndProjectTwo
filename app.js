// where the heroku website will be
// const deployedURL = 'https://projecttwoga.herokuapp.com'
const deployedURL = null
// developmental purposes will use local host
const URL = deployedURL ? deployedURL : "http://localhost:3000"
let updated_Exercise = ''
let updated_Food = ''
///////// DISPLAY ALL /////////

const getAll = async () => {
    // fetch data from the database and return a promise
    const response = await fetch(`${URL}/fitness`);
    const data = await response.json()
        data.forEach((exercise) => {
        const $dateDiv = $('<div>')
        .attr({'id': exercise._id, 'class': 'dateDiv'})
        .text(`Day  ${exercise.day}`)
        .on('click', () => {
            displayExercise(exercise._id)
        })
        .on('click', editExercise)
        .on('click', () => {
            updated_Exercise = exercise._id
        });
        $('.datesForExercise').append($dateDiv);
    })
        $('.editButton').on('click', (event) => {
        $('#edit-modal').modal();
    });
} 

$('#createSubmit').on('click', async (event) => {
    const newFitness = [{
        day: $('#day-create').val(),
        exercises: [
            {
                routine: $('#routine-createOne').val(),
                difficulty: $('#difficulty-createOne').val(),
                sets: $('#sets-createOne').val(),
                reps: $('#reps-createOne').val(),
                directionVideo: $('#directions-createOne').val()
            },
            {
                routine: $('#routine-createTwo').val(),
                difficulty: $('#difficulty-createTwo').val(),
                sets: $('#sets-createTwo').val(),
                reps: $('#reps-createTwo').val(),
                directionVideo: $('#directions-createTwo').val()
            },
            {
                routine: $('#routine-createThree').val(),
                difficulty: $('#difficulty-createThree').val(),
                sets: $('#sets-createThree').val(),
                reps: $('#reps-createThree').val(),
                directionVideo: $('#directions-createThree').val()
            }
        ]
    },
    {
        dayNumber: $('#day-create').val(),
        breakfast: [$('#breakfastOne-create').val(), $('#breakfastTwo-create').val(), $('#breakfastThree-create').val()],
        lunch: [$('#lunchOne-create').val(), $('#lunchTwo-create').val(), $('#lunchThree-create').val()],
        dinner: [$('#dinnerOne-create').val(),$('#dinnerTwo-create').val(),$('#dinnerThree-create').val()]
    }]
    const response = await fetch(`${URL}/fitness`, {
        method: "post",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newFitness)
    })
    const data = await response.json()
    // console.log(data);
    $('.modal').modal('hide');
    $('#showOneExercise').empty()
    $('.breakfastContainer').empty()
    $('.lunchContainer').empty()
    $('.dinnerContainer').empty()
    $('.datesForExercise').empty()
    $('.datesForFood').empty()
    getAll()
    getAllFood()
    displayExercise(data[0]._id);
    displayFood(data[0].food[0]._id);
})

//////// DISPLAYS ONE DAYS WORTH OF EXERCISES /////////

const displayExercise = async (exerciseID) => {
    const response = await fetch(`${URL}/fitness/${exerciseID}`);
    const data = await response.json()
    $('#showOneExercise').empty()
    data.exercises.forEach((exercise) => {
        const $exerciseDiv = $('<div>').attr({'id': exercise._id, 'class': 'exerciseDiv'});
        const $routineHeading = $('<h4>').text(`${exercise.routine}`).attr('class', 'routineHeadings').on('click', () => {
            $routineHeading.toggleClass('strikethrough');
        })
        const $difficulty = $('<h6>').text(`${exercise.difficulty}`).attr('class', 'difficulty');
        const $sets = $('<h6>').html(`<span class="setsWord">Sets:</span> ${exercise.sets}`).attr('class', 'sets');
        const $reps = $('<h6>').html(`<span class="repsWord">Reps:</span> ${exercise.reps}`).attr('class', 'reps');
        const $directionButton = $('<button>').text(`Directions`).attr('class','directionButton btn btn-primary');
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

// populating values to the edit div 
const editExercise = async () => {
    const response = await fetch(`${URL}/fitness/${event.target.id}`);
    const data = await response.json()
    $('#exercise_edit').trigger('reset');
    $('#routine-editOne').val(data.exercises[0].routine)
    $('#routine-editTwo').val(data.exercises[1].routine)
    $('#routine-editThree').val(data.exercises[2].routine)
    $('#difficulty-editOne').val(data.exercises[0].difficulty)
    $('#difficulty-editTwo').val(data.exercises[1].difficulty)
    $('#difficulty-editThree').val(data.exercises[2].difficulty)
    $('#sets-editOne').val(data.exercises[0].sets)
    $('#sets-editTwo').val(data.exercises[1].sets)
    $('#sets-editThree').val(data.exercises[2].sets)
    $('#reps-editOne').val(data.exercises[0].reps)
    $('#reps-editTwo').val(data.exercises[1].reps)
    $('#reps-editThree').val(data.exercises[2].reps)
    $('#directions-editOne').val(data.exercises[0].directionVideo)
    $('#directions-editTwo').val(data.exercises[1].directionVideo)
    $('#directions-editThree').val(data.exercises[2].directionVideo)
}

$("#exerciseEditSubmit").on('click', async (event) => {
    const updatedExercise = {
        exercises: [
            {
                routine: $('#routine-editOne').val(),
                difficulty: $('#difficulty-editOne').val(),
                sets: $('#sets-editOne').val(),
                reps: $('#reps-editOne').val(),
                directionVideo: $('#directions-editOne').val()
            },
            {
                routine: $('#routine-editTwo').val(),
                difficulty: $('#difficulty-editTwo').val(),
                sets: $('#sets-editTwo').val(),
                reps: $('#reps-editTwo').val(),
                directionVideo: $('#directions-editTwo').val()
            },
            {
                routine: $('#routine-editThree').val(),
                difficulty: $('#difficulty-editThree').val(),
                sets: $('#sets-editThree').val(),
                reps: $('#reps-editThree').val(),
                directionVideo: $('#directions-editThree').val()
            }
        ]
    }
    await fetch(`${URL}/fitness/${updated_Exercise}`, {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedExercise)
    })
    $('.modal').modal('hide');
    $('#showOneExercise').empty()
    displayExercise(updated_Exercise);
})

// seperated clicking on dates for both of the links
const getAllFood = async () => {
    const response = await fetch(`${URL}/fitness/food`);
    const data = await response.json()
    data.forEach((food) => {
        const $dateDivTwo = $('<div>').attr({'id': food._id, 'class': 'dateDivTwo'})
        .text(`Day  ${food.dayNumber}`)
        .on('click', () => {
            displayFood(food._id)
        })
        .on('click', editFood)
        .on('click', () => {
            updated_Food = food._id
        });
        $('.datesForFood').append($dateDivTwo);
    })  
    $('.editFoodButton').on('click', (event) => {
        $('#editFood-modal').modal();
    })
}

// displays the food
const displayFood = async (foodID) => {
    const response = await fetch(`${URL}/fitness/food/${foodID}`);
    const data = await response.json()
    $('.breakfastContainer').empty()
    const $breakfastContainer = $('.breakfastContainer')
    data.breakfast.forEach((breakfast) => {
        const $breakfastList = $('<li>').attr('class', 'breakfastList').text(`${breakfast}`).on('click', () => {
            $breakfastList.toggleClass('strikethrough')
        })
        $breakfastContainer.append($breakfastList)
    })
    $('.breakfast').append($breakfastContainer);
    $('.lunchContainer').empty()
    const $lunchContainer = $('.lunchContainer')
    data.lunch.forEach((lunch) => {
        const $lunchList = $('<li>').attr('class', 'lunchList').text(`${lunch}`).on('click', () => {
            $lunchList.toggleClass('strikethrough')
        })
        $lunchContainer.append($lunchList)
    })
    $('.lunch').append($lunchContainer);
    $('.dinnerContainer').empty()
    const $dinnerContainer = $('.dinnerContainer')
    data.dinner.forEach((dinner) => {
        const $dinnerList = $('<li>').attr('class', 'dinnerList').text(`${dinner}`).on('click', () => {
            $dinnerList.toggleClass('strikethrough')
        })
        $dinnerContainer.append($dinnerList)
    })
    $('.dinner').append($dinnerContainer);
}


// Places the previous values food onto the modal to edit

const editFood = async () => {
    const response = await fetch(`${URL}/fitness/food/${event.target.id}`);
    const data = await response.json()
        $('#edit_food').trigger('reset')
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

$("#foodEditSubmit").on('click', async (event) => {
    const updatedFood = {
        breakfast: [$('#breakfastOne-edit').val(), $('#breakfastTwo-edit').val(), $('#breakfastThree-edit').val()],
        lunch: [$('#lunchOne-edit').val(), $('#lunchTwo-edit').val(), $('#lunchThree-edit').val()],
        dinner: [$('#dinnerOne-edit').val(),$('#dinnerTwo-edit').val(),$('#dinnerThree-edit').val()]
    }
    await fetch(`${URL}/fitness/food/${updated_Food}`, {
                method: "put",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updatedFood)
            })
    $('.modal').modal('hide');
    $('.breakfastContainer').empty()
    $('.lunchContainer').empty()
    $('.dinnerContainer').empty()
    displayFood(updated_Food)
})

const destroy = async (event) => {
    const response = await fetch(`${URL}/fitness/${updated_Exercise}`, {
      method: "delete"
    })
    const data = await response.json()
}

$('#exerciseDelete').on('click', async () => {
    await destroy(),
    $('#edit-modal').modal('hide')
    $('#showOneExercise').empty()
    $('.breakfastContainer').empty()
    $('.lunchContainer').empty()
    $('.dinnerContainer').empty()
    $('.datesForExercise').empty()
    $('.datesForFood').empty()
    getAll()
    getAllFood()
})



getAll()

getAllFood()

///// CSS jQuery //////

// this click event listener will allow the hidden menu to display when the hamburger is clicked and will transform the hamburger icon to an X icon.
let $hamburger = $('.hamburger');

    $hamburger.on('click', function(e) {
    let $hamburgermenu = $('.hamburgermenu');
    $hamburgermenu.toggleClass('shown');
    $hamburger.toggleClass('hamburgercrossed')
    if ($hamburgermenu.hasClass('shown')) {
        $hamburgermenu.css('display','block');
    } else {
        $hamburgermenu.css('display','none');
        }
      }
    );  


// this event listener listens to the size of the window, and if it's above 600px, the hidden menu will automatically hide.
$(window).resize (function(e) {
  if ($(window).width() > 600) {
    $('.hamburgermenu').removeClass('shown');
    if ($('.hamburger').hasClass('hamburgercrossed')){
    $hamburger.toggleClass('hamburgercrossed');
    }
    $('.hamburgermenu').css('display','none');
  }
});
