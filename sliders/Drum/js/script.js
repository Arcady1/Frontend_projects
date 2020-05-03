let numSlider, arrImg, img, line;

// кол-во картинок в слайдере
numSlider = 3;
arrImg = [];

// помещаем ссылки на картинки в массив и удаляем их из HTML
for (let i = 0; i < numSlider; i++) {
    img = document.getElementById("img" + (i + 1));
    arrImg[i] = img.src;
    img.remove();
}

// порядок, в котором хранятся картинки (барабан)
console.log(arrImg);

// получаем line из HTML файла и вставляем туда первую картинку
line = document.getElementById('line');
line.insertAdjacentHTML('beforeend', '<img id="img1" src="' + arrImg[0] + '" alt="#1">');

function swipe() {
    // понадобится при повторном нажатии на кнопку
    line.style.transition = 'all .5s ease-in-out';

    // добавляем еще одну картинку в line и сдвигаем его на 300px влево
    line.insertAdjacentHTML('beforeend', '<img id="img1" src="' + arrImg[1] + '" alt="#1">');
    line.style.left = -300 + 'px';

    // устанавливаем задержку, чтобы первая картинка пропадала за границами слайдера
    setTimeout(function () {
        line.children[0].remove();
        line.style.left = 0;
        line.style.transition = '0s';
    }, 500);

    // перемещаем первую картинку (первый элемент массива) в конец => автоматический сдиг индексов вслево
    arrImg.push(arrImg[0]);
    arrImg.splice(0, 1);

    console.log(arrImg);
}