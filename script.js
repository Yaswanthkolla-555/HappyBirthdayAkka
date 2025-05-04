document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');
    const card = document.querySelector('.card');
    let isCardRotated = false;

    // Add click event to card
    card.addEventListener('click', function(e) {
        e.stopPropagation();
        isCardRotated = !isCardRotated;
        this.style.transform = isCardRotated ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    // Add click event to document to rotate back when clicking outside
    document.addEventListener('click', function(e) {
        if (!card.contains(e.target) && isCardRotated) {
            isCardRotated = false;
            card.style.transform = 'rotateY(180deg)';
        }
    });

    // Get all images with popup-image class
    const images = document.querySelectorAll('.popup-image');

    // Add click event to each image
    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.style.display = 'flex';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden';
        });
    });

    // Add click event to GIF to make it disappear
    const gifImage = document.querySelector('.inside img');
    gifImage.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.display = 'none';
        }, 500); // Match this with the transition duration
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 
