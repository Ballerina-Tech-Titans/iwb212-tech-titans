document.addEventListener('DOMContentLoaded', function() {
    // Open popup
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popupModal = document.getElementById('popupModal');
    const closePopupBtn = document.getElementById('closePopupBtn');

    if (openPopupBtn && popupModal && closePopupBtn) {
        openPopupBtn.addEventListener('click', function() {
            popupModal.style.display = 'block';
        });

        // Close popup when clicking the close button
        closePopupBtn.addEventListener('click', function() {
            popupModal.style.display = 'none';
        });

        // Close popup when clicking outside the modal
        window.addEventListener('click', function(event) {
            if (event.target === popupModal) {
                popupModal.style.display = 'none';
            }
        });
    } else {
        console.error('One or more elements not found in the DOM');
    }
});