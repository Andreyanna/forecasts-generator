const forecastButton = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast > h1');
const currentForecastChance = document.querySelector('.current-forecast > p');

const container = document.querySelector('.container');

const chanceText = 'Вероятность:';
const chancePercent = '%';
/* const forecastsContainer = document.querySelector('.forecasts'); никак не влияет вроде */

function getRandomRange(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};


forecastButton.addEventListener('click', function() {
    const forecastNumber = getRandomRange(1, 6);
    let forecastText = '';
    if (forecastNumber == 1) {
        forecastText = 'Сегодня у тебя всё получится!'
    } else if (forecastNumber == 2) {
        forecastText = 'Тебя ждет внезапное свидание!'
    } else if (forecastNumber == 3) {
        forecastText = 'Звонок от мамы! Приготовь все последние новости!'
    } else if (forecastNumber == 4) {
        forecastText = 'Впереди большие успехи в изучении JS!'
    } else if (forecastNumber == 5) {
        forecastText = 'Цветы от тайного поклонника!'
    } else if (forecastNumber == 6) {
        forecastText = 'Сегодняшний ужин будет ооочень вкусным!'
    }
    currentForecastTitle.textContent = forecastText;
    const chanceNum = getRandomRange(0, 100);
    currentForecastChance.textContent = `${chanceText} ${chanceNum}` + chancePercent;

    if (currentForecastTitle.textContent !== '') /* я думала это сработает от дублирования предсказания в список по порвому же клику. но нет - никак это if не влияет */ {
        const forecastTemplate = document.querySelector('#forecast-item');

        function addForecastByTemplate(text, chance) {
            const myForecast = forecastTemplate.content.cloneNode(true);
            myForecast.querySelector('h3').textContent = text;
            myForecast.querySelector('p').textContent = chance;
            return myForecast;
        };
        const previousForecast = addForecastByTemplate(currentForecastTitle.textContent, currentForecastChance.textContent);
        container.append(previousForecast);
    };

});

/* ну и мешанина! подозреваю, что currentForecastTitle.textContent - это длинно, и нужно было облачить в дополнительную переменную? */

/* и не получилось избавиться от дублирования главного предсказания в список внизу. Дублируется сразу с первого же нажатия, а не со второго. Не сообразила, как исправить... */