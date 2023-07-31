console.info('Order store loaded!');


document.addEventListener('alpine:init', () => {
    Alpine.store('Order', {
     prices :[
        {
            Normal_FA : 10,
            Peak_FA : 13
        },
        {
            Normal_FC : 5,
            Peak_FC : 8
        },
        {
            Normal_SA : 4,
            Peak_SA : 6
        },
        {
            Normal_SC : 2,
            Peak_SC : 3
        },
        {
            Infant : 0
        }
     ]
    })
})