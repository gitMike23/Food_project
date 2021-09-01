window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    //Tabs

    function hideTabContent() {
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');

        });

        tabs.forEach(tab => tab.classList.remove('tabheader__item_active'));
    }


    function showTabContent(i = 0) {
        tabs[i].classList.add('tabheader__item_active');
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

    } 


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach(( item, num ) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(num);
                }  
            })
        }
    });

    hideTabContent();
    showTabContent();



    //Timer

    const deadline = '2021-09-11';

    function getTimeRemaining(endtime) {
        
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor ((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        }
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline);
    
});