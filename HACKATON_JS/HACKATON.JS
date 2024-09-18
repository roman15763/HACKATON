document.getElementById("click-btn").addEventListener("click", function() {
    // Отримуємо посилання на елементи
    const click_tekst = document.getElementById("click_tekst");
    const pointsElement = document.getElementById("points");
    
    // Отримуємо поточне значення балів та збільшуємо його на 1
    let currentPoints = parseInt(pointsElement.textContent, 10);
    currentPoints += 1;
    pointsElement.textContent = currentPoints;

    // Змінюємо колір тексту на червоний
    click_tekst.style.color = "red";
    pointsElement.style.color = "red";
    
    // Через 5 секунд повертаємо початковий колір
    setTimeout(function() {
        click_tekst.style.color = "#00ff00";
        pointsElement.style.color = "#00ff00";
    }, 10000); // 5000 мілісекунд = 5 секунд
});
