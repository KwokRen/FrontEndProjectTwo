# OnTrack (Kwok Ren's CRUD Website for GA Project Two)

#### Project Snapshots

[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596636649/Screen_Shot_2020-08-05_at_9.41.47_AM_nijhdi.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596636649/Screen_Shot_2020-08-05_at_9.41.47_AM_nijhdi.png)
[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596637297/Screen_Shot_2020-08-05_at_10.19.09_AM_cgqo8k.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596637297/Screen_Shot_2020-08-05_at_10.19.09_AM_cgqo8k.png)
[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596636647/Screen_Shot_2020-08-05_at_9.42.40_AM_c3qvzu.png" width="800" height= "400">](https://res.cloudinary.com/dpggcudix/image/upload/v1596636647/Screen_Shot_2020-08-05_at_9.42.40_AM_c3qvzu.png)

#### Website Link

[<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1596637877/Screen_Shot_2020-08-05_at_10.31.04_AM_z4ikzo.png" width="200" height= "80">](https://kwokrengaproject2.netlify.app/)

#### Description

Finding it hard to follow through on plans for a exercise regimen? Never fear, OnTrack is here to keep you on track! OnTrack is a free website application that you can use to keep track of your routines and meals for the day. 

Users can navigate to the exercise tracker, and create up to three routines per day. In addition to the routines, you can describe the difficulty, the amount of sets and reps you plan to do and even add a link to an instructional video! While you create your exercise, you can also implement your meals for the day (which will be shown in the food tracker below the exercise tracker). The best part is, you can create multiple plans for different days. Cross off any exercises you finish and you can edit or delete any entries anytime!

The website is made with HTML, CSS, and JavaScript in the frontend. I also used the BootStrap library and icons from FontAwesome. In the backend, I used express to create APIs. With Heroku, MongoDB Atlas, and Netlify, I was able to create a full CRUD (create, read, update, and delete) application. I intend of updating it as I learn more developer languages and skills both in the frontend and backend.


#### Technologies

*Frontend*

<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" width="50" height="50">
<img src ="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" width="50" height="50">
<img src ="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" width="50" height="50">
<img src ="https://www.netlify.com/img/press/logos/logomark.png" width="50" height="50">

*Backend*

<img src ="https://expressjs.com/images/express-facebook-share.png" width="100" height="50">
<img src ="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="50" height="50">
<img src ="https://cdn.worldvectorlogo.com/logos/mongodb.svg" width="50" height="50">
<img src ="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png" width="50" height="50">

#### Features

- Users can create new day entries
- Users can select which dates to appear on the tracker
- Users can cross off routines they have done
- Users can edit and delete their date
- Users can add their meals and cross off foods they've already eaten
- Users can edit their food choices
- Accessible over all media devices
- Hovering over things have different effects

#### Future Implementation (Frontend)

- Login (Username and Password)
- Calories Tracker
- Tips and Tricks for healthier lifestyles
- Quote of the Day
- Introduction / How to use section
- Testimonies / Reviews Section
- Making it more mobile friendly
- Better Hamburger Menu (Fixed Position)
- Better format for the website
- More scrolling effects and animations
- Adding as many routines as possible
- Removing null from unanswered fields
- Making fields required
- Refactor Code
- Keeping the website simple, clean and neat
- Resources section on the bottom


#### Inspiration Designs

Here is one website that I drew inspiration from. 

Link To Site  | One Thing I'd Like To Incorporate | Initial Research On That Item
| ------------- | ------------- | ------------- |
| [https://explorance.com/](https://explorance.com/)| The banner was big, and I loved how there was an image on it and it was faded. I took inspiration and did something very similar in putting the image behind the color of the background that was gradient.| CSS allows your background image to have more than one parameter. There is a color section I was more familiar with, but I didn't know that you could add a URL to an image source to put in the background. Make the color section have a opacity less than one and the image will show!|
---

## [Read about how I created my backend](https://github.com/KwokRen/BackEndProjectTwo/blob/master/planning_directory/README.md)

# The Frontend 

#### Navigation Bar

The navigation bar is located at the top of the page. The Navigation bar would consist of the icon for OnTrack, navigational links to the exercise tracker, food tracker and the contact sections of the page. When minimized (or viewed on a screen below 600px) the hamburger menu will appear in place of the links to the exercise tracker, food tracker and contact. When you click on the hamburger menu, another section will open up and will consists of links to the exercise tracker, food tracker and contact sections of the page. The icon would be part of the left side of the navigation bar (made from wix.com), while the links would be more towards the right side of the navigation bar. I would need to display flex the container that consist of these divs to make it so that one would be on the left side, while the other ones would be on the right side. I added some hover effects to each link when you hover over them. The hover effect would invert the colors of the text and the background and add an underline. 

#### Hamburger Menu

The Hamburger Menu consists of the unicode '\2630', which gives it the hamburger appearance. My goal was to make a menu pop up when the hamburger was clicked on. Clicking on it will open a new div. That div would contain the same links as the links that disappeared on the navigation bar, except this time, it would be a seperate div that would be underneath the navigation bar. I gave that div some hover effects such as changing background colors. I made sure that the a element tag was surrounding the div containing the words so that the bar would give direct you instead of just the words. The clicking of the hamburger icon would toggle on and off a class that would make the icon change between an X and the hamburger icon.


#### Banner 

The banner was a simple div that was big enough to capture the size of your screen. The banner would have a background image, but layered on top of it would be a background color with a opacity less than one. With the background color having a opacity less than one, this allowed the background image to appear in a faded manner. Along with the background, the banner also consists of some details about how you can use the website. I plan on making a section in the future specifically for introductions and instructions but for now, this is how people know what to do.

#### Exercise Tracker 

The exercise tracker is made using a CSS grid template (above 600px). The exercise tracker uses CSS Flexbox when the screen size is less than 600px. The left side (when screen size is above 600px) is what the user interacts with to create, update and delete. Users can click the create button to open up a modal to fill out information. The middle section of that div will be another div that holds the different days created. The div has a overflow scroll property from CSS, which means that there can be many divs made in there and you just have to scroll through it. Under that div is a edit button, which opens up another modal where you can edit a selected date (with values already inputted) or delete it altogether. This section when the screen is below 600px will go towards the bottom of the exercise tracker section (because of flex-direction column reverse). The other part of the grid will display information that we fetch from the backend depending on what day you create. Displayed as a flexbox, three exercises will be displayed along with their difficulty, sets, reps, and direction in a button.

#### Food Tracker

The food tracker is made using a CSS grid template (above 600px). The food tracker uses CSS Flexbox when the screen size is less than 600px. The left side of the div is similar to the exercise tracker where it also has days listed and an edit button at the bottom. It does not have a create button, and if you want to create day for food, you would have to create it with the exercise routine. In the future, I think it would be wiser to seperate them. The dates div also has an overflow scroll property. On the other part of the grid, contains another grid broken down into three sections, Breakfast, Lunch and Dinner. Inside of these divs will contain information based on which day you clicked. When viewed on a screen size below 600px, the left side div will be placed on the top due to flexbox. 

#### Modals

The modal was created from the BootStrap library. Modals will be activated when a button is clicked. I used three seperate modals in the application. One of them was for the create function, and would open up when the create button was clicked. This modal would display fields that users can enter to create a new day. The second modal would be part of the edit exercise modal, where you can edit the current day's exercises. This modal pops up when you click the edit button in the exercise tracker section. The values of the day you want to edit are already inputted. You can also choose to delete the day here. The final modal will be part of the edit food button. When you click to edit in the food tracker section, you can fill out fields to edit the food on the day you selected. Like editing exercise routines, the values will already be inputted but you cannot delete from here. I hope to make a seperate route in a newer version later on where you can delete from this edit food modal.

#### Footer

The footer consists of copyright and a logo that links to my personal website portfolio. I positioned both of them towards the center, and gave the logo a drop-shadow when hovered over.