let count;

count = 1;

function swipeLeft() {
    let line;
    
    line = document.getElementById('line');
    
    if (count == 3) {
        line.style.left = 0 + 'px';
        count = 1;
    } else {
        line.style.left = (-1 * count * 300) + 'px';
        count++;
    }
}