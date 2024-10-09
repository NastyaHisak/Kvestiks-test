/* Меню */
const button = document.getElementById('burger-btn');
const menu = document.getElementById('menu-list-popup');

button.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('show');
    }
});
/* Меню */


const reviewData = [
    {
        "date": "14 февраля 2024",
        "name": "Константин",
        "info": "12 игроков 36-50 лет",
        "stars": 5,
        "title": "День святого Валентина",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Константин",
        "info": "12 игроков 36-50 лет",
        "stars": 5,
        "title": "День святого Валентина",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Константин",
        "info": "12 игроков 36-50 лет",
        "stars": 5,
        "title": "День святого Валентина",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    },
    {
        "date": "14 февраля 2024",
        "name": "Светлана",
        "info": "2 игрока 36 лет",
        "stars": 5,
        "title": "День Рождения",
        "text": "Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков."
    }
];
function createCard(review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-card';

    reviewElement.innerHTML = `
        <div class="reviews-info">
            <div class="review-date">${review.date}</div>
            <div class="review-person">${review.name} (${review.info})</div>
            <div class="review-stars">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L7.67871 3.68945L11.7063 4.1459L8.71622 6.88255L9.52671 10.8541L6 8.856L2.47329 10.8541L3.28378 6.88255L0.293661 4.1459L4.32129 3.68945L6 0Z" fill="#FF9D29"/>
</svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L7.67871 3.68945L11.7063 4.1459L8.71622 6.88255L9.52671 10.8541L6 8.856L2.47329 10.8541L3.28378 6.88255L0.293661 4.1459L4.32129 3.68945L6 0Z" fill="#FF9D29"/>
</svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L7.67871 3.68945L11.7063 4.1459L8.71622 6.88255L9.52671 10.8541L6 8.856L2.47329 10.8541L3.28378 6.88255L0.293661 4.1459L4.32129 3.68945L6 0Z" fill="#FF9D29"/>
</svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L7.67871 3.68945L11.7063 4.1459L8.71622 6.88255L9.52671 10.8541L6 8.856L2.47329 10.8541L3.28378 6.88255L0.293661 4.1459L4.32129 3.68945L6 0Z" fill="#FF9D29"/>
</svg>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L7.67871 3.68945L11.7063 4.1459L8.71622 6.88255L9.52671 10.8541L6 8.856L2.47329 10.8541L3.28378 6.88255L0.293661 4.1459L4.32129 3.68945L6 0Z" fill="#FF9D29"/>
</svg>
        </div>
        </div>
        <div class="review-title">${review.title}</div>
        <div class="review-text">${review.text}</div>
    `;

    return reviewElement;
}

const reviewContainer = document.getElementById('card-container');
reviewData.forEach(review => {
    const reviewElement = createCard(review);
    reviewContainer.appendChild(reviewElement);
});


