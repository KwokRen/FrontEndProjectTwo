# Project Overview

## Project Description

For Project Two of the General Assembly SEI course, we were assigned to create a website that shows our knowledge and understanding of CRUD and RESTful APIs. We have to create the backend using express and MongoDB. We create our frontend using HTML, CSS, and JavaScript. 

For this project, we will be building a fitness tracker website. The website's purpose is to allow users to keep track of their fitness progress by adding different exercise regimens, videos/instructions of how the exercises are conducted and their meals. Users will keep track by filling out a form and it will be stored into a day. This website application is mobile friendly and is easily navigated through the navigation bar at the top. 

## User Stories

- Users will be able to use the navigation bar to navigate to different sections of the website
- Users will be able to access an exercise tracker
- Users will be able to access a food tracker 
- Users will be able to input exercises of their choice and details about the routine such as difficulty, sets, reps, and directions (as a URL to a document or video that instructs them)
- Users can add up to the three exercises to a day
- Users can add several amounts of days (if they want to plan ahead)
- While filling out the form for exercises, users can also input what their meal is (up to three items per meal) for the day
- Users can edit/remove exercises and food they want to update or remove

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Friday July 31st (Day 1)| Project Description / Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Saturday August 1st (Day 2)| Deployed to Heroku and Netlify and connected with MongoDB Atlas / Finished `backend` | Complete
|Sunday August 2nd (Day 3)| Creating CRUD in the `frontend`, finished showing and editing | Complete
|Monday August 3rd (Day 4)| Core Application Structure (HTML, CSS, etc.)| Complete
|Monday August 3rd (Day 4)| Creating CRUD in the `frontend`, finished update and delete | Complete
|Tuesday August 4th (Day 5)| Media Queries / MVP | Complete
|Wednesday August 5th (Day 6)| Bug Fixes | Complete
|Thursday August 6th (Day 7)| Documentation | Complete
|Friday August 7th (Day 8)| Final Touches and Present | Complete

## Wireframes

The top will include a navigation bar which includes navigations to the exercise tracker and food tracker sections. Below it will have a banner of sort displaying information about the website. Following that will be the exercise tracker and then the food tracker. Lastly, there will be a footer which will include a link to my website portfolio. Mobile, Tablet and Desktop designs all look very similar in terms of blocks and color schemes. Even though the colors in the wireframes were not used, the design of the site remains all the same. 

- [Mobile](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.11_PM_eh4ib2.png)
- [Tablet](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.21_PM_ki4eij.png)
- [Desktop](https://res.cloudinary.com/dpggcudix/image/upload/v1596158534/Screen_Shot_2020-07-30_at_9.21.30_PM_ks8yw3.png)

## Time/Priority Matrix 

The priority definitely fell into the JavaScript portion of this project. Recieving the data from the express database was a challenge. I will be using most of my time figuring out how I can use jQuery and bring in the data for the purpose of a CRUD website (creating, reading, updating and deleting).  CSS and HTML are low priority and not considered to be a focus until functions are operational. Most of my HTML will be about implementing a modal from the Bootstrap library. 

- [Frontend](https://res.cloudinary.com/dpggcudix/image/upload/v1596160885/Screen_Shot_2020-07-30_at_9.53.33_PM_rxe9tb.png)

#### MVP 

- Using jQuery to put our values from the API and transferring it to the frontend
- Mobile first (Media Query)
- Creating Navigation Bar
- Create Banner
- Create Exercise Section
- Create Food Section
- Create Footer

#### PostMVP 

- Adding effects
- Keeping design clean and simple
- Clean up any bugs

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| jQuery from API | H | 10hr | 10hr | 10hr|
| Media Query | H | 5hr | 2hr | 2hr|
| Navigation Bar | H | 1H | 0hr | 0hr|
| Hero Banner | M | 1hr| 0hr | 0hr |
| Exercise Section | H | 2hr | 2hr | 2hr|
| Food Section | H | 2hrs| 1hr | 1hr |
| Footer | L | 0hr | 0hr | 0hr|
| Total | H | 21hrs| 15hrs | 15hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hover Effects | L | 3hr | 1hr | 1hr|
| Make Icon | L | 2hr | 0hr | 0hr|
| Total | H | 5hrs| 1hrs | 1hrs |

## Additional Libraries

- [Bootstrap Library](https://getbootstrap.com/) 
- [jQuery](https://jquery.com/)
- [Popper](https://www.npmjs.com/package/popper)
- [FontAwesome](https://fontawesome.com/)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
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
```

This code above represents what happens when you click on the submit button when fill out the create form. The button will open up a modal with fields you can fill out. What happens next is that the values will get placed in and it gets stored because of the .val() method. We use our model schema from the backend to understand how we should create a new entry. We then fetch the response from the URL, we use the method post because we are creating, and we need to convert our data from our newFitness function into JSON. This new entry gets pushed to the database and we want to clear out all the old information from the page and display the new information onto the page. 


## Issues and Resolutions

There were a lot of issues I encountered where I had to deal with promise pending. I didn't know at first, but I had to put make sure that if the function was async, it would return a promise so I would need to put the word await most of the time in front of the function that was operating inside the async function. Usually, this would solve the problem. 

Another problem I found was after I finished my MVP. When I was testing on google console, the everything was perfectly fine, so I decided to test it out on my phone. The results weren't the same because one of my divs that help days (the days associated with the food tracker) were missing. It was confusing so I decided to see if Safari on Desktop also picked it up, and it did. I used the safari web developer console to check whether the div was missing or not. It was still written on the HTML page, however it was just not appearing for a reason. I played around with it and the problem came up to be that the div was a flexbox, which baffled me because there was another div that was also a flexbox that was displaying properly. So instead of flexbox, I decided to change it to a grid and it appears now.