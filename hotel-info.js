const rooms = document.querySelectorAll('.floor-img-wrap');
const roomDescriptions = document.querySelectorAll('.room-desription');
const chooseRoom = document.querySelector('.choose-text');

function descriptionAppear() {
  rooms.forEach((room, index) => {
    room.addEventListener('click', (e) => {
      roomDescriptions.forEach((description) => {
        description.style.display = 'none';
      });

      rooms.forEach((room) => {
        room.classList.remove('first-floor__active');
      });
      room.classList.add('first-floor__active');
      roomDescriptions[index].style.display = 'block';
      chooseRoom.style.display = 'none';
    });
  });
}

descriptionAppear();

const bookBtns = document.querySelectorAll('.book-btn');

function bookRoom() {
  bookBtns.forEach((bookBtn, index) => {
    bookBtn.addEventListener('click', (e) => {
      roomDescriptions.forEach((description, descIndex) => {
        if (index === descIndex) {
          description.style.display = 'block';

          chooseRoom.style.display = 'none';

          const roomInfo = description.textContent; 
          const bookedMessage = `Вы успешно забронировали ${roomInfo}!`;
          alert(bookedMessage);
        } else {
          description.style.display = 'none';
        }
      });
    });
  });
}
bookRoom();
