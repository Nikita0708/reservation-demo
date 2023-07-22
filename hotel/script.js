const hotels = [
  { name: "Hotel A", price: 1200, location: "City A", floors: 5, roomsPerFloor: 10 },
  { name: "Hotel B", price: 1400, location: "City B", floors: 6, roomsPerFloor: 12 },
  { name: "Hotel C", price: 1500, location: "City C", floors: 4, roomsPerFloor: 8 },
];

function openModal(hotelName, floors, roomsPerFloor) {
  const modal = document.createElement("div");
  const modalId = "modal-" + hotelName.toLowerCase().replace(/\s/g, ""); 
  modal.id = modalId;
  modal.classList.add("modal");
  modal.innerHTML = `
    <h2>${hotelName}</h2>
    <label for="select-floor">Выберите этаж:</label>
    <select id="select-floor">
      ${generateOptions(floors)}
    </select>
    <label for="select-room">Номер:</label>
    <select id="select-room">
      ${generateOptions(roomsPerFloor)}
    </select>
    <label for="select-quantity">Кол-во человек:</label>
    <select id="select-quantity">
      ${generateOptions(10)}
    </select>
    <button onclick="bookHotel('${hotelName}', ${floors}, ${roomsPerFloor}, '${modalId}')">Забронировать</button>
  `;
  document.body.appendChild(modal);
}

function generateOptions(max) {
  let options = "";
  for (let i = 1; i <= max; i++) {
    options += `<option value="${i}">${i}</option>`;
  }
  return options;
}

function bookHotel(hotelName, modalId) {
  const selectedFloor = document.getElementById("select-floor").value;
  const selectedRoom = document.getElementById("select-room").value;
  const selectedQuantity = document.getElementById("select-quantity").value;

  const selectedHotel = hotels.find((hotel) => hotel.name === hotelName);
  if (!selectedHotel) {
    console.error("Отель не найден!");
    return;
  }

  const totalPrice = selectedHotel.price * selectedQuantity;
  alert(`Вы забронировали ${hotelName}, Этаж: ${selectedFloor}, Номер: ${selectedRoom}, Кол-во человек: ${selectedQuantity}, Цена: ${totalPrice}₽. Хорошего отдыха!`);
  closeModal(modalId);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.remove();
  }
}

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
          <button onclick="openModal('${hotel.name}', ${hotel.floors}, ${hotel.roomsPerFloor})">Забронировать</button>
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
