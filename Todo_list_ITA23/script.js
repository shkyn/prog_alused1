const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Lisa tegevus nuppule vajutades
document.getElementById("add-btn").addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Hetkese aja lisamine
        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleString('default', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Span ikooni kustutamine
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";

        // Aja font väiksem
        let timeSpan = document.createElement("small");
        timeSpan.style.marginLeft = "10px";
        timeSpan.style.fontSize = "0.8rem";
        timeSpan.style.color = "lightgray";
        timeSpan.textContent = ` (Lisatud: ${formattedTime})`;

        li.appendChild(timeSpan);
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";  // kustuta input kasti
    inputBox.focus();     // Return focus to input field
    saveData();           // salvestab uuendatud lisdi
}


// salvestab localstoragi'sse
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// võtab data localstoragist
function showTask() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Handle list item interactions (checking and deleting)
listContainer.addEventListener("click", (e) => {
    // Handle checking the entire <li> or the <small> (timestamp)
    if (e.target.tagName.toUpperCase() === "LI" || e.target.tagName.toUpperCase() === "SMALL") {
        // If clicked on <small>, mark the parent <li> too
        let liElement = e.target.tagName.toUpperCase() === "LI" ? e.target : e.target.closest("li");
        liElement.classList.toggle("checked");
        saveData();
    } 
    // Handle kustutamine
    else if (e.target.tagName.toUpperCase() === "SPAN" || e.target.tagName.toUpperCase() === "I") {
        e.target.closest("li").remove();
        saveData();
    }
});


// näita tegevusi listis
showTask();

document.getElementById("clear-all-btn").addEventListener("click", clearAllTasks);

function clearAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listContainer.innerHTML = "";  // kustuta listis olevad asjad
        saveData();  // salvesta localstoragi
    }
}