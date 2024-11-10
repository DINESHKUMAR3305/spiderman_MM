function showPage(pageId) {
    // Hide all sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected section
    document.getElementById(pageId).classList.add('active');
}
