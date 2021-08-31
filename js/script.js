window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

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
});