// Smooth scroll to sections on button click
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Set progress bars animation after page load
window.onload = function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        bar.style.width = bar.classList[1] === 'html' ? '90%' : 
                          bar.classList[1] === 'css' ? '80%' : 
                          bar.classList[1] === 'js' ? '70%' : '60%';
    });
};
