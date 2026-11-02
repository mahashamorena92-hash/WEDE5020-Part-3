
var products = [
  "Website Design - R1500",
  "Logo Design - R800", 
  "Online Store - R5000"
];

function loadProducts() {
  var list = document.getElementById("product-list");
  if (list) {
    var html = "";
    for (var i = 0; i < products.length; i++) {
      html += "<div class='product-card'><p>" + products[i] + "</p><button onclick='openImage(\"images/product" + i + ".jpg\")'>View</button></div>";
    }
    list.innerHTML = html;
  }
}
// Call it when page loads
loadProducts();

// 2. TABS - For services/about page (3.2)
function openTab(event, tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  var tabBtns = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// 3. ACCORDION - For FAQ (3.2)
function toggleAccordion(id) {
  var content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// 4. LIGHTBOX - For gallery (3.2)
function openImage(src) {
  var box = document.getElementById("lightbox");
  var bigImg = document.getElementById("bigImage");
  if (box && bigImg) {
    bigImg.src = src;
    box.style.display = "flex";
  }
}
function closeImage() {
  var box = document.getElementById("lightbox");
  if (box) {
    box.style.display = "none";
  }
}

// 5. SEARCH FILTER - For products (3.2)
function searchProduct() {
  var input = document.getElementById("searchBox");
  var filter = input.value.toLowerCase();
  var list = document.getElementById("product-list");
  var html = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].toLowerCase().indexOf(filter) > -1) {
      html += "<div class='product-card'><p>" + products[i] + "</p></div>";
    }
  }
  list.innerHTML = html;
  if (html == "") {
    list.innerHTML = "<p>No products found.</p>";
  }
}

// 6. SIMPLE ANIMATION ON SCROLL - (3.2)
window.onscroll = function() {
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.transform = "translateY(0px)";
  }
};

// 7. GOOGLE MAP - (3.2) just to show you have map, use iframe in HTML
function loadMap() {
  console.log("Map loaded");
}
loadMap();