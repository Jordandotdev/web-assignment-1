console.info('Customer store loaded!');


document.addEventListener("alpine:init", () => {
    Alpine.store("customer", {
      name: null,
      email: null,
      phone: [
        {
            Country : 'Sri Lanka',
            image : '#',
            code : '+94'
        },
        {
            Country : 'United Kingdom',
            image : '#',
            code : '+44'
        }
      ]
    });
  });
  