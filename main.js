(function () {
    let currentDate = new Date();

    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let formattedDate = `${day}/${month}/${year}`;

    document.getElementById('header').innerText = formattedDate
})();