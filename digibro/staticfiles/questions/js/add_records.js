const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Hide all content sections
        contents.forEach(content => content.style.display = 'none');

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show the content related to the clicked tab
        const contentId = tab.getAttribute('data-tab');
        document.getElementById(contentId).style.display = 'block';
    });
});