// ---------------- MOCK BACKEND ----------------

const trips = [
    { type: "Bus", price: 1000 },
    { type: "Train", price: 800 },
    { type: "Flight", price: 3000 }
];

// ---------------- SEARCH ----------------
function searchTrips() {

    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;

    let error = document.getElementById("error");

    // Dropdown validation
    if (!source || !destination) {
        error.innerText = "Please select both source and destination";
        return;
    }

    // Same check
    if (source === destination) {
        error.innerText = "Source and Destination cannot be same";
        return;
    }

    error.innerText = "";

    localStorage.setItem("searchData", JSON.stringify({ source, destination }));

    window.location.href = "results.html";
}

// ---------------- RESULTS PAGE ----------------

if (document.getElementById("list")) {

    let searchData = JSON.parse(localStorage.getItem("searchData"));

    if (!searchData) {
        document.body.innerHTML = "<h2>No Search Data</h2>";
    } else {

        document.getElementById("route").innerText =
            searchData.source + " -> " + searchData.destination;

        let list = document.getElementById("list");

        trips.forEach(t => {

            let div = document.createElement("div");
            div.className = "trip";

            div.innerHTML = `
                <p>${searchData.source} -> ${searchData.destination}</p>
                <p>${t.type} - Rs. ${t.price}</p>
                <button onclick="book(${t.price})">Book</button>
            `;

            list.appendChild(div);
        });
    }
}

// ---------------- BOOK ----------------

function book(price) {

    let searchData = JSON.parse(localStorage.getItem("searchData"));

    let booking = {
        route: searchData.source + " -> " + searchData.destination,
        price: price,
        status: "Pending"
    };

    localStorage.setItem("bookingData", JSON.stringify(booking));

    window.location.href = "booking.html";
}

// ---------------- BOOKING PAGE ----------------

if (document.getElementById("price")) {

    let bookingData = JSON.parse(localStorage.getItem("bookingData"));

    if (bookingData) {
        document.getElementById("route").innerText = bookingData.route;
        document.getElementById("price").innerText = "Price: Rs. " + bookingData.price;
    }
}

// ---------------- CONFIRM ----------------

function confirmBooking() {

    let bookingData = JSON.parse(localStorage.getItem("bookingData"));

    bookingData.status = "Confirmed";

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    document.getElementById("msg").innerText = "Booking Confirmed";

    setTimeout(() => {
        window.location.href = "itinerary.html";
    }, 1000);
}

// ---------------- CANCEL ----------------

function cancelBooking() {

    let bookingData = JSON.parse(localStorage.getItem("bookingData"));

    let refund = bookingData.price - (bookingData.price * 0.1);

    bookingData.status = "Cancelled";

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    document.getElementById("msg").innerText =
        "Booking Cancelled. Refund: Rs. " + refund;

    setTimeout(() => {
        window.location.href = "itinerary.html";
    }, 1000);
}

// ---------------- ITINERARY ----------------

if (document.getElementById("status")) {

    let bookingData = JSON.parse(localStorage.getItem("bookingData"));

    if (!bookingData) {
        document.body.innerHTML = "<h2>No Booking Data</h2>";
    } else {
        document.getElementById("route").innerText = bookingData.route;
        document.getElementById("price").innerText = "Price: Rs. " + bookingData.price;
        document.getElementById("status").innerText = "Status: " + bookingData.status;
    }
}