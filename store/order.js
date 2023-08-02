console.info('Order store loaded!');


document.addEventListener('alpine:init', () => {
    Alpine.store('order', {

    test : "Hello",
    
    Peak_prices:[

        {
            Name : "Foriegn Adult",
            value : 13
        },
        {
            Name : "Foriegn Child",
            value : 8
        },
        {
            Name : "Local Adult",
            value : 6
        },
        {
            Name : "Local Child",
            value : 3
        },
        {
            Name : "Infant",
            value : 0
        }

        ],

    Normal_prices :[

        {
            Name : "Foriegn Adult",
            value : 10
        },
        {
            Name : "Foriegn Child",
            value : 5 
        },
        {
            Name : "Local Adult",
            value : 4
        },
        {
            Name : "Local Child",
            value : 2
        },
        {
            Name : "Infant",
            value : 0
        }

     ]
    })
})