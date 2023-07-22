const hotels = [
  { name: "Hotel A", price: 1000, location: "City A", floors: 2, roomsPerFloor: 4, link: './hotelA.html'},
  { name: "Hotel B", price: 1000, location: "City B", floors: 2, roomsPerFloor: 4, link: './hotelB.html' },
  { name: "Hotel C", price: 1000, location: "City C", floors: 2, roomsPerFloor: 4, link: './hotelC.html' },
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
          <p>Цена: от ${hotel.price}₽ за 1 ночь/1 человек</p>
          <p>Этажей: ${hotel.floors}</p>
          <p>Номеров на этаже: ${hotel.roomsPerFloor}</p>
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
