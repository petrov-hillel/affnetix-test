

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
        const arrow = header.querySelector(".accordion-arrow")
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            // console.log(header)

            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.classList.remove('active')

            } else {
                // Close all accordion contents
                const allContents = document.querySelectorAll('.accordion-content');
                const allArrow = document.querySelectorAll('.accordion-arrow');
                allContents.forEach(function (content) {
                    content.style.display = 'none';

                });
                allArrow.forEach(function (arrow) {
                    arrow.classList.remove('active')
                });

                // Open the clicked accordion content
                content.style.display = 'block';
                arrow.classList.add('active')
            }
        });
    });

    document.querySelector(".site-menu-btn").addEventListener('click', function() {
        const menu = document.querySelector('.site-menu');
        const chevron = document.querySelector('.chevron');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            chevron.classList.add('active');
        } else {
            menu.classList.add('hidden');
            chevron.classList.remove('active');
        }
    });
});
