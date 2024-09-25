/*variables*/
const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const mothlyBtn = document.querySelector('#monthly');
const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');



/*Created Functions to pull the data in from the json file*/
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
function weeklyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}
function mothlyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


/*Called Functions*/
dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('opacity')
    dailyBtn.classList.add('bold')
    weeklyBtn.classList.add('opacity')
    weeklyBtn.classList.remove('bold')
    mothlyBtn.classList.add('opacity')
    mothlyBtn.classList.remove('bold')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('opacity')
    weeklyBtn.classList.add('bold')
    dailyBtn.classList.add('opacity')
    dailyBtn.classList.remove('bold')
    mothlyBtn.classList.add('opacity')
    mothlyBtn.classList.remove('bold')
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.remove('opacity')
    mothlyBtn.classList.add('bold')
    dailyBtn.classList.remove('bold')
    dailyBtn.classList.add('opacity')
    weeklyBtn.classList.add('opacity')
    weeklyBtn.classList.remove('bold')
    mothlyData()
})