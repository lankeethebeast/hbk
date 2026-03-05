document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
            nav.style.padding = '1rem 0';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
            nav.style.padding = '1.5rem 0';
            nav.style.boxShadow = 'none';
        }
    });

    // --- Booking Form Logic ---
    const bookingForm = document.getElementById('bookingForm');
    const typeCards = document.querySelectorAll('.type-card');
    const propertyTypeInput = document.getElementById('propertyType');
    const roomsGroup = document.getElementById('roomsGroup');
    const roomsSelect = document.getElementById('rooms');
    const roomsLabel = document.getElementById('roomsLabel');

    if (typeCards) {
        // Populate rooms select (1-20)
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            roomsSelect.appendChild(option);
        }

        typeCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove active from all
                typeCards.forEach(c => c.classList.remove('active'));
                
                // Add to clicked
                card.classList.add('active');
                const type = card.dataset.type;
                propertyTypeInput.value = type;

                // Dynamic UI based on type
                roomsGroup.style.display = 'block';
                
                if (type === 'Apartment') {
                    roomsLabel.textContent = 'Number of Rooms';
                } else if (type === 'Construction Site') {
                    roomsLabel.textContent = 'Site Area (Blocks/Spaces)';
                } else if (type === 'Event Hall') {
                    roomsLabel.textContent = 'Estimated Size (Zones/Spaces)';
                } else if (type === 'Office Space') {
                    roomsLabel.textContent = 'Number of Workstations/Rooms';
                }
            });
        });
    }

    // --- Form Submissions ---
    const applyForm = document.getElementById('applyForm');
    const successModal = document.getElementById('successModal');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here we would typically send data to a backend
        // For this demo, we show the success modal
        if (successModal) {
            successModal.style.display = 'flex';
        }
    };

    if (bookingForm) bookingForm.addEventListener('submit', handleFormSubmit);
    if (applyForm) applyForm.addEventListener('submit', handleFormSubmit);

    // --- Animations on Scroll ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .step, h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
