const resumeLists = document.querySelectorAll('.resume-list');

// navbar actions and all section actions along with cube rotation when is clicked


// resume section when clicking tab-list 
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');
    });
});