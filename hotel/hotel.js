const hotels = [
  { name: "Hotel A", price: 1200, location: "City A", floors: 5, roomsPerFloor: 10, link: './hotelA.html'},
  { name: "Hotel B", price: 1400, location: "City B", floors: 6, roomsPerFloor: 12, link: './hotelB.html' },
  { name: "Hotel C", price: 1500, location: "City C", floors: 4, roomsPerFloor: 8, link: './hotelC.html' },
];

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const selectPlace = document.getElementById("select-place");

  function displayHotels(selectedPlace) {
    hotels.forEach((hotel) => {
      if (!selectedPlace || hotel.location === selectedPlace) {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");
        hotelCard.innerHTML = `
          <h2>${hotel.name}</h2>
          <p>Цена: ${hotel.price}₽ за 1 ночь/1 человек</p>
          <p>Город: ${hotel.location}</p>
          <a href=${hotel.link}>Забронировать</a>
        `;
        main.appendChild(hotelCard);
      }
    });
  }
  selectPlace.addEventListener("change", (event) => {
    const selectedPlace = event.target.value;
    displayHotels(selectedPlace);
  });

  displayHotels();

});
