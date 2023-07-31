console.info('Location store loaded!');

document.addEventListener('alpine:init', () => {
    Alpine.store('location', {
        name : 'Hikkaduwa Turte Hatchery',
        address : 'No. 21, Beach Road, Hikkaduwa',
        phone : '+94 11 236 6356',
        // image : 'https://media.timeout.com/images/101852201/750/422/image.jpg',
        timeSlots: [ //When type is 0 = normal/ 1 = peak
            {
                start: '07:00',
                end: '08:00',
                type : 0
            },
            {
                start: '08:00',
                end: '09:00',
                type : 0
            },
            {
                start: '09:00',
                end: '10:00',
                type : 0
            },
            {
                start: '10:00',
                end: '11:00',
                type : 1
            },
            {
                start: '11:00',
                end: '12:00',
                type : 1
            },
            {
                start: '12:00',
                end: '13:00',
                type : 1
            },
            {
                start: '13:00',
                end: '14:00',
                type : 0
            },
            {
                start: '14:00',
                end: '15:00',
                type : 0
            },
            {
                start: '15:00',
                end: '16:00',
                type : 1
            },
            {
                start: '16:00',
                end: '17:00',
                type : 1
            },
            {
                start: '17:00',
                end: '18:00',
                type : 1
            }
        ]
    })
})