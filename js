document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownBtn.textContent = this.textContent;
            dropdownContent.classList.remove('show');
        });
    });
});
