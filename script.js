// script.js

// API'den siparişleri al ve listele
function getOrders() {
  fetch("API_URL_BURAYA_GELECEK", {
    method: "GET",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Siparişleri listele
      const orderList = document.getElementById("orderList");
      orderList.innerHTML = ""; // Önceki verileri temizle

      data.forEach((order) => {
        const li = document.createElement("li");
        li.textContent = `Sipariş ID: ${order.id}, Müşteri: ${order.customer}`;

        li.addEventListener("click", function () {
          showOrderDetails(order); // Sipariş detaylarını göster
        });

        orderList.appendChild(li);
      });
    })
    .catch((error) => console.error("Hata:", error));
}

// Seçilen siparişin detaylarını göster
function showOrderDetails(order) {
  const orderDetails = document.getElementById("orderDetails");
  orderDetails.innerHTML = `<strong>Sipariş Detayları:</strong><br>
      ID: ${order.id}<br>
      Müşteri: ${order.customer}<br>
      Ürün: ${order.product}<br>
      Fiyat: ${order.price}`;

  orderDetails.style.display = "block"; // Detayları göster
}

// Sayfa yüklendiğinde siparişleri al ve listele
document.addEventListener("DOMContentLoaded", function () {
  getOrders();
});
