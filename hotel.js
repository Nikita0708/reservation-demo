const hotels = [
  { name: "Hotel A", price: 1000, location: "City A", floors: 2, roomsPerFloor: 4, link: './hotelA.html', photo: './hotel.jpg'},
  { name: "Hotel A", price: 1000, location: "City A", floors: 2, roomsPerFloor: 4, link: './hotelA.html', photo: './hotel.jpg' },
  { name: "Hotel A", price: 1000, location: "City A", floors: 2, roomsPerFloor: 4, link: './hotelA.html', photo: './hotel.jpg' },
];

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  // const selectPlace = document.getElementById("select-place");ы

  function displayHotels() {
    hotels.forEach((hotel) => {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");
      hotelCard.innerHTML = `
          <h2>${hotel.name}</h2>
          <img src=${hotel.photo} class='hotel-img' alt='' />
          <p>Цена: от ${hotel.price}₽ за 1 ночь/1 человек</p>
          <p class='hotel-description'>Hotel A - новый отель, идеально подходящий для «Простых и Умных» путешественников . Центральное расположение , экспресс-регистрация, бесплатный свежий и горячий завтрак, беспроводной интернет, современные и элегантно оборудованные номера сделают ваше пребывание освежающе привлекательным и подготовят вас на прекрасный день.</p>
          <p>Номеров на этаже: ${hotel.roomsPerFloor}</p>
          <p>Город: ${hotel.location}</p>
          <a href=${hotel.link} class='show-hotel'>Показать сведенья об отеле</a>
        `;
        main.appendChild(hotelCard);
    });
  }
  // selectPlace.addEventListener("change", (event) => {
  //   const selectedPlace = event.target.value;
  //   displayHotels();
  // });

  displayHotels();

});
