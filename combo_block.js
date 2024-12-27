document.addEventListener('DOMContentLoaded', () => {

    const comboBlocks = document.querySelectorAll('.dish_combo .combo_block');

    const comdos = [
        ['soup.png', 'main.png', 'salad.png', 'drink.png'],
        ['soup.png', 'main.png', 'drink.png'],
        ['soup.png', 'salad.png', 'drink.png'],
        ['main.png', 'salad.png', 'drink.png'],
        ['main.png', 'drink.png'],
        ['desert.png']
    ]

    function addNewIcons(block, images) {

        const createPText = (path) => {
            if (path.indexOf("soup") > -1) return "Суп";
            else if (path.indexOf("main") > -1) return "Главное блюдо";
            else if (path.indexOf("salad") > -1) return "Салат/Стартер";
            else if (path.indexOf("drink") > -1) return "Напиток";
            else if (path.indexOf("desert") > -1) return "Десерт";
            else return "Alt";
        }

        // Удаляем существующие иконки
        block.innerHTML = '';

        // Добавляем новые иконки
        images.forEach(image => {

            const div = document.createElement('div');

            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Icon';
            img.style.width = '60px'
            div.appendChild(img);

            const p = document.createElement('p');
            p.textContent = createPText(image)
            div.appendChild(p);

            block.appendChild(div);
        });
    }

    comboBlocks.forEach((block, index) => {
        addNewIcons(block, comdos[index]);
    });
})