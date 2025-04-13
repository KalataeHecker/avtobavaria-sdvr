async function searchCar() {
  const code = document.getElementById("codeInput").value.trim().toUpperCase();
  const res = await fetch('data.json');
  const data = await res.json();
  const car = data[code];

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (car) {
    let table = "<table><tr><th>Марка</th><th>Модел</th><th>Година</th><th>Конски сили</th><th>Скоростна кутия</th><th>Задвижване</th></tr>";
    table += `<tr>
                <td>${car["марка"]}</td>
                <td>${car["модел"]}</td>
                <td>${car["година"]}</td>
                <td>${car["конски сили"]}</td>
                <td>${car["скоростна кутия"]}</td>
                <td>${car["задвижване"]}</td>
              </tr></table>`;
    resultDiv.innerHTML = table;
  } else {
    resultDiv.innerHTML = "<p>Няма намерени данни за този код.</p>";
  }
}
