// Add functionality to the "Learn More" button
window.onload = function() {
    var learnMoreButton = document.getElementById('learn-more-button');
    var additionalInfo = document.getElementById('additional-info');

    if (learnMoreButton && additionalInfo) {
        learnMoreButton.addEventListener('click', function() {
            // Toggle the visibility of additional information
            additionalInfo.style.display = (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') ? 'block' : 'none';
        });
    }
};
