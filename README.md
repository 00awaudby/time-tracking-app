# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot



![Screenshot_25-9-2024_131553_00awaudby github io](https://github.com/user-attachments/assets/6329d28d-2517-42ff-8d4d-485c844fb78c)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://your-live-site-url.com](https://00awaudby.github.io/time-tracking-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to pull json data in using the fetch method and how we can use the data to manipulate the dom, i also learned how we can change the data in the dom with different inner html on different events.

```js
function dailyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}
```


### Continued development

I feel like i need more work on dynamically changing the html of projects and working on using json data aswell as learning api work.



### Useful resources

I looked through how others got this challege done and i also researched how to use json data and learned some of the things i needed to know through chatgpt.



## Author

- Website - [Ashley Waudby Portfolio]([https://www.your-site.com](https://00awaudby.github.io/Portfolio/))
- Frontend Mentor - [@00awaudby]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/00awaudby))
- Github - [00awaudby]([https://www.twitter.com/yourusername](https://github.com/00awaudby))
