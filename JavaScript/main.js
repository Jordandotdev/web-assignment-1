// Tickets page

document.addEventListener('alpine:init', () => {
    Alpine.data('tickets', () => ({
        date: null,
        open: false,
        selectedTimeSlots: [],
        ticketTypes: [
            {
                name: 'Sri Lankan Adult',
                peak: 6,
                offPeak: 4,
                count: 0,
                total: 0
            },
            {
                name: 'Sri Lankan Child',
                peak: 3,
                offPeak: 2,
                count: 0,
                total: 0
            },
            {
                name: 'Foreign Adult',
                peak: 13,
                offPeak: 10,
                count: 0,
                total: 0
            },
            {
                name: 'Foreign Child',
                peak: 8,
                offPeak: 5,
                count: 0,
                total: 0
            },
            {
                name: 'Infant',
                peak: 0,
                offPeak: 0,
                count: 0,
                total: 0
            },
        ],
        openTimes: [

            {
                title: '7AM to 8AM',
                isPeak: false
            },
            {
                title: '8AM to 9AM',
                isPeak: false
            },
            {
                title: '9AM to 10AM',
                isPeak: false
            },
            {
                title: '10AM to 11AM (Peak)',
                isPeak: true
            },
            {
                title: '11AM to 12PM (Peak)',
                isPeak: true
            },
            {
                title: '12PM to 1PM (Peak)',
                isPeak: true
            },
            {
                title: '1PM to 2PM',
                isPeak: false
            },
            {
                title: '2PM to 3PM',
                isPeak: false
            },
            {
                title: '3PM to 4PM (Peak)',
                isPeak: true
            },
            {
                title: '4PM to 5PM (Peak)',
                isPeak: true
            },
            {
                title: '5PM to 6PM (Peak)',
                isPeak: true
            },
        ],

        selectTimeSlot(index) {

        if (this.selectedTimeSlots.includes(index)) {
            this.selectedTimeSlots = this.selectedTimeSlots.filter(item => item !== index);
        } else {
            let lastElement = this.selectedTimeSlots[this.selectedTimeSlots.length - 1];

                if (!this.selectedTimeSlots.length || index - 1 == lastElement) {

                    this.selectedTimeSlots.push(index);

                } else {
                    alert('You can only select consecutive time slots');
                }
        }

        this.selectedTimeSlots = this.selectedTimeSlots.sort();


        console.log(this.selectedTimeSlots);
        },
  
        calculate(ticketType) {
            
        let total = 0;

        this.selectedTimeSlots.forEach((timeSlotIndex) => {

            // calculate the total
            total += parseInt(ticketType.count * (this.openTimes[timeSlotIndex].isPeak ? ticketType.peak : ticketType.offPeak));
        });

        ticketType.total = total;

        },

        calculateGrandTotal(ticketTypes) {
        grandTotal = 0;

        for (const ticketType of ticketTypes) {
            grandTotal += ticketType.total;
        }

        return grandTotal;
        },

        gotoCheckout(){

                if(this.date == null || this.selectedTimeSlots == null || this.ticketTypes == null){
                    alert('Please Fill the given Criteria');
            }else{
                // store the data in the local storage
                localStorage.setItem('SavedDate', JSON.stringify(this.date));
                localStorage.setItem('SavedTimeslot', JSON.stringify(this.selectedTimeSlots));
                localStorage.setItem('SavedTicketTypes', JSON.stringify(this.ticketTypes));
                localStorage.setItem('SavedTotal',grandTotal);

                window.location.href = 'details.html';
            }
        },

        init() {
            console.log("Tickets page loaded");
        }

    }));
})

// Details Page

document.addEventListener('alpine:init', () => {
    Alpine.data('details', () => ({
        selectedDate : null,
        selectedTimeSlots : [],

        ticketTypes : [],
        openTimes: [

            {
                title: '7AM to 8AM',
                isPeak: false
            },
            {
                title: '8AM to 9AM',
                isPeak: false
            },
            {
                title: '9AM to 10AM',
                isPeak: false
            },
            {
                title: '10AM to 11AM (Peak)',
                isPeak: true
            },
            {
                title: '11AM to 12PM (Peak)',
                isPeak: true
            },
            {
                title: '12PM to 1PM (Peak)',
                isPeak: true
            },
            {
                title: '1PM to 2PM',
                isPeak: false
            },
            {
                title: '2PM to 3PM',
                isPeak: false
            },
            {
                title: '3PM to 4PM (Peak)',
                isPeak: true
            },
            {
                title: '4PM to 5PM (Peak)',
                isPeak: true
            },
            {
                title: '5PM to 6PM (Peak)',
                isPeak: true
            },
        ],
        guest: {
            fullName: '',
            mobile: '',
            email: '',
            confirmEmail: '',
            gender: ''
        },

        init() {
            console.log("Detials page loaded");

            this.selectedDate = JSON.parse(localStorage.getItem('SavedDate'));
            this.selectedTimeSlots = JSON.parse(localStorage.getItem('SavedTimeslot'));
            this.ticketTypes = JSON.parse(localStorage.getItem('SavedTicketTypes'));
            this.grandTotal = JSON.parse(localStorage.getItem('SavedTotal'));

            const input = document.querySelector("#mobile");
            window.intlTelInput(input, {
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });

            window.addEventListener('storage', (event) => {
                if (event.key === null) {
                    window.location.href = 'tickets.html';
                    alert('Error with saved data, Please re-enter');
                }
                });
        },

        gotoPayment() {
            localStorage.setItem('SavedGuest', JSON.stringify(this.guest))

            window.location.href = 'Payment.html'
        }
    }))
})

// Payment Page

document.addEventListener('alpine:init', () => {
    Alpine.data('payment', () => ({
        selectedDate : null,
        selectedTimeSlots : [],
        ticketTypes : [],
        grandTotal : null,
        openTimes: [

            {
                title: '7AM to 8AM',
                isPeak: false
            },
            {
                title: '8AM to 9AM',
                isPeak: false
            },
            {
                title: '9AM to 10AM',
                isPeak: false
            },
            {
                title: '10AM to 11AM (Peak)',
                isPeak: true
            },
            {
                title: '11AM to 12PM (Peak)',
                isPeak: true
            },
            {
                title: '12PM to 1PM (Peak)',
                isPeak: true
            },
            {
                title: '1PM to 2PM',
                isPeak: false
            },
            {
                title: '2PM to 3PM',
                isPeak: false
            },
            {
                title: '3PM to 4PM (Peak)',
                isPeak: true
            },
            {
                title: '4PM to 5PM (Peak)',
                isPeak: true
            },
            {
                title: '5PM to 6PM (Peak)',
                isPeak: true
            },
        ],

        cardInfo: {
            cardNumber: '',
            expiryDate: '',
            CCV: '',
            cardName: ''
        },

        init() {
            console.log("Payment page loaded");

            this.selectedDate = JSON.parse(localStorage.getItem('SavedDate'));
            this.selectedTimeSlots = JSON.parse(localStorage.getItem('SavedTimeslot'));
            this.ticketTypes = JSON.parse(localStorage.getItem('SavedTicketTypes'));
            this.grandTotal = JSON.parse(localStorage.getItem('SavedTotal'));

            window.addEventListener('storage', (event) => {
            if (event.key === null) {
                window.location.href = 'tickets.html';
                alert('Error with saved data, Please re-enter');
            }
            });
        },

        gotoConfirm() {
            localStorage.setItem('SavedCardInfo', JSON.stringify(this.cardInfo))

            window.location.href = 'Confirmation.html'
        }
    }))
})

// Confirmation Page

document.addEventListener('alpine:init', () => {
    Alpine.data('confirmation', () => ({
        selectedDate : null,
        selectedTimeSlots : [],
        ticketTypes : [],
        grandTotal : null,
        guest : {},
        cardInfo : {},
        openTimes: [

            {
                title: '7AM to 8AM',
                isPeak: false
            },
            {
                title: '8AM to 9AM',
                isPeak: false
            },
            {
                title: '9AM to 10AM',
                isPeak: false
            },
            {
                title: '10AM to 11AM (Peak)',
                isPeak: true
            },
            {
                title: '11AM to 12PM (Peak)',
                isPeak: true
            },
            {
                title: '12PM to 1PM (Peak)',
                isPeak: true
            },
            {
                title: '1PM to 2PM',
                isPeak: false
            },
            {
                title: '2PM to 3PM',
                isPeak: false
            },
            {
                title: '3PM to 4PM (Peak)',
                isPeak: true
            },
            {
                title: '4PM to 5PM (Peak)',
                isPeak: true
            },
            {
                title: '5PM to 6PM (Peak)',
                isPeak: true
            },
        ],

        init() {
            console.log("Confirmation page loaded");

            this.selectedDate = JSON.parse(localStorage.getItem('SavedDate'));
            this.selectedTimeSlots = JSON.parse(localStorage.getItem('SavedTimeslot'));
            this.ticketTypes = JSON.parse(localStorage.getItem('SavedTicketTypes'));
            this.grandTotal = JSON.parse(localStorage.getItem('SavedTotal'));
            this.guest = JSON.parse(localStorage.getItem('SavedGuest'));
            this.cardInfo = JSON.parse(localStorage.getItem('SavedCardInfo'));

            window.addEventListener('storage', (event) => {
            if (event.key === null) {
                window.location.href = 'tickets.html';
                alert('Error with saved data, Please re-enter');
            }
            });
        },

        gotoHome() {
            window.location.href = 'index.html'
        }
    }))
})