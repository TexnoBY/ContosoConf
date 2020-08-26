﻿let currentInfoDiv = document.getElementById("instruction");

function showRoomInfo(roomId) {
    const infoDiv = document.getElementById(roomId + "-info");
    if (currentInfoDiv) {
        currentInfoDiv.style.display = "none";
    }
    infoDiv.style.display = "block";
    currentInfoDiv = infoDiv;
};

// TODO: Get the room elements in the svg element.
const rooms = document.querySelectorAll(".room");


// TODO: Add a click event listener for each room element.
//       Call the showRoomInfo function, passing the clicked element's id property.
for (let i = 0; i < rooms.length; i++) {
    rooms[i].addEventListener("click", function () {
        showRoomInfo(this.id);
    });
}
