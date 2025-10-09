const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(bookingForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Booking submitted:', data);
        
        const confirmationMessage = document.getElementById('confirmationMessage');
        if (confirmationMessage) {
            confirmationMessage.classList.add('show');
        }
        
        bookingForm.reset();
    });
}

function closeConfirmation() {
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
        confirmationMessage.classList.remove('show');
    }
}

const today = new Date().toISOString().split('T')[0];
const departureDateInput = document.getElementById('departureDate');
const returnDateInput = document.getElementById('returnDate');

if (departureDateInput) {
    departureDateInput.setAttribute('min', today);
}

if (returnDateInput) {
    returnDateInput.setAttribute('min', today);
}

if (departureDateInput && returnDateInput) {
    departureDateInput.addEventListener('change', () => {
        returnDateInput.setAttribute('min', departureDateInput.value);
        if (returnDateInput.value && returnDateInput.value < departureDateInput.value) {
            returnDateInput.value = '';
        }
    });
}

const destinationSelect = document.getElementById('destination');
const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');
const totalPriceField = document.getElementById('totalPrice');

function calculateTotalPrice() {
    if (!destinationSelect || !adultsInput || !totalPriceField) return;
    
    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    const basePrice = parseInt(selectedOption.getAttribute('data-price')) || 0;
    const adults = parseInt(adultsInput.value) || 0;
    const children = parseInt(childrenInput?.value || 0);
    
    const childPrice = basePrice * 0.7;
    const totalPrice = (basePrice * adults) + (childPrice * children);
    
    totalPriceField.value = totalPrice > 0 ? `$${totalPrice.toLocaleString()}` : '$0';
}

if (destinationSelect) {
    destinationSelect.addEventListener('change', calculateTotalPrice);
}

if (adultsInput) {
    adultsInput.addEventListener('input', calculateTotalPrice);
}

if (childrenInput) {
    childrenInput.addEventListener('input', calculateTotalPrice);
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        e.target.reset();
    });
}

const scrollElements = document.querySelectorAll('.destination-card, .feature-item, .gallery-item');

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
};

const hideScrollElement = (element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
};

scrollElements.forEach((el) => {
    hideScrollElement(el);
    el.style.transition = 'all 0.6s ease';
});

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
