document.addEventListener('DOMContentLoaded', function() {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('click', function() {
            // Change the background color randomly when a flower is clicked
            document.body.style.backgroundColor = getRandomColor();
        });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});