document.addEventListener("DOMContentLoaded", function () {
    const addNameBtn = document.getElementById("addNameBtn");
    const refreshQueueBtn = document.getElementById("refreshQueueBtn");
    const nameInput = document.getElementById("nameInput");

    // Load and render queue on page load
    renderQueue();

    // Add name to queue
    addNameBtn.addEventListener("click", addName);
    nameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") addName();
    });

    // Refresh queue
    refreshQueueBtn.addEventListener("click", refreshQueue);
});

// Function to get the queue data from localStorage
function getQueueData() {
    const queue = localStorage.getItem("queueData");
    return queue ? JSON.parse(queue) : [];
}

// Function to save the queue data to localStorage
function saveQueueData(queueData) {
    localStorage.setItem("queueData", JSON.stringify(queueData));
}

// Function to render the queue list
function renderQueue() {
    const queueData = getQueueData();
    const queueList = document.getElementById("queueList");
    queueList.innerHTML = ""; // Clear the existing list

    queueData.forEach((student, index) => {
        const li = document.createElement("li");
        li.classList.add("queue-item");

        const nameSpan = document.createElement("span");
        nameSpan.textContent = student.name;
        nameSpan.classList.add(student.gotHelp ? "green" : "red");

        // Create the buttons for updating the status
        const greenBtn = document.createElement("button");
        greenBtn.textContent = "Sain apua";
        greenBtn.classList.add("green-btn");
        greenBtn.addEventListener("click", function () {
            removeFromQueue(index);
        });

        const redBtn = document.createElement("button");
        redBtn.textContent = "En tarvitse enää apua";
        redBtn.classList.add("red-btn");
        redBtn.addEventListener("click", function () {
            removeFromQueue(index);
        });

        // Append elements to the list item
        li.appendChild(nameSpan);
        li.appendChild(greenBtn);
        li.appendChild(redBtn);

        // Append list item to the list
        queueList.appendChild(li);
    });
}

// Function to add a name to the queue
function addName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Ole hyvä ja syötä nimesi.");
        return;
    }

    const queueData = getQueueData();
    queueData.push({ name, gotHelp: false });

    saveQueueData(queueData);
    nameInput.value = "";
    renderQueue();
}

// Function to remove a name from the queue
function removeFromQueue(index) {
    const queueData = getQueueData();
    queueData.splice(index, 1);
    saveQueueData(queueData);
    renderQueue();
}

// Function to refresh (clear) the queue
function refreshQueue() {
    localStorage.removeItem("queueData");
    renderQueue();
}
