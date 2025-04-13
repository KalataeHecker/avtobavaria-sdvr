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
                <td>${car["brand"]}</td>
                <td>${car["model"]}</td>
                <td>${car["year"]}</td>
                <td>${car["horsepower"]}</td>
                <td>${car["transmission"]}</td>
                <td>${car["drivetrain"]}</td>
              </tr></table>`;
    resultDiv.innerHTML = table;
  } else {
    resultDiv.innerHTML = "<p>Няма намерени данни за този код.</p>";
  }

  // изчисти полето за въвеждане
  document.getElementById("codeInput").value = "";
}
