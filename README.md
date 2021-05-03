Press crtl + d and then click More... and paste this 
```js
javascript:alert("made by Glizzy Flizzy Dlizzy Blizzy✔#0777");var pin = prompt("Pin"), name = prompt("Name"), amount = prompt("Amount");for (var i = 0; i < amount; i++) {fetch("https://api.blooket.com/api/firebase/join", {method: "PUT",headers: {"Content-Type": "application/json;charset=UTF-8"},body: JSON.stringify({id: pin,name: `${name}-${i}`})});}
```
