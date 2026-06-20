// Tour Package အချက်အလက်များ
const tours = [
    { id: 1, name: 'Bagan Temple Tour', price: '$150', duration: '3 Days' },
    { id: 2, name: 'Inle Lake Boat Tour', price: '$80', duration: '2 Days' },
    { id: 3, name: 'Ngapali Beach Getaway', price: '$200', duration: '4 Days' }
];

// HTML ထဲက tour-list နေရာကို လှမ်းယူခြင်း
const tourListContainer = document.getElementById('tour-list');

// Data တွေကို HTML ပေါ်မှာ ပေါ်လာအောင် ဖန်တီးပေးခြင်း
tours.forEach(tour => {
    const tourCard = document.createElement('div');
    tourCard.className = 'tour-card';
    
    tourCard.innerHTML = `
        <h3>${tour.name}</h3>
        <p>Duration: ${tour.duration}</p>
        <p class="price">${tour.price}</p>
        <button>Book Now</button>
    `;
    
    tourListContainer.appendChild(tourCard);
});