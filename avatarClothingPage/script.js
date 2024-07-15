document.addEventListener('DOMContentLoaded', () => {
    const clothingItems = document.querySelectorAll('.clothing-item');
    const outfit = document.getElementById('outfit');
    const submitButton = document.getElementById('submit');

    clothingItems.forEach(item => {
        item.addEventListener('click', () => {
            outfit.style.display = "block";
            const outfitSrc = item.getAttribute('data-outfit');
            outfit.src = outfitSrc;
        });
    });

    submitButton.addEventListener('click', () => {
        alert('Avatar clothing submitted!');
    });
});