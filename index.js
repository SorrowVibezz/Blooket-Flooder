alert("made by Glizzy Flizzy Dlizzy Blizzy✔#0777")
var pin = prompt(""), // put the game pin
    name = prompt(""), // put what name you want
    amount = prompt(""); // put how many bots you want to join the game
for (var i = 0; i < amount; i++) {
    fetch("https://api.blooket.com/api/firebase/join", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: pin,
            name: `${name}-${i}`
        })
    });
}
