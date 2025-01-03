// Daftar warna untuk badge
const colors = [
  "text-bg-primary",
  "text-bg-secondary",
  "text-bg-danger",
  "text-bg-dark",
];

// Fungsi untuk memilih warna acak dari daftar colors
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Ambil semua elemen dengan class 'news__rows'
const newsRowsList = document.querySelectorAll(".news__rows");

const getItem = (badgeColor) => {
  return `
    <div class="col-12 news__item--row">
      <div class="d-flex gap-3">
        <div class="img-wrapper">
          <img
            src="https://fakeimg.pl/300x190/dcdcdc/"
            class="img-fluid w-100"
            alt=""
          />
        </div>
        <div>
          <span class="badge ${badgeColor} rounded-0 text-white text-uppercase px-3 mb-2">
            esnline-categories
          </span>
          <h5>
            Minim Menit Bermain, Suwon FC Resmi Lepas Pratama Arhan!
          </h5>
          <div class="my-2 d-flex gap-4 text-secondary">
            <span class="text-sm">
              <i class="bi bi-person"></i> Tom
            </span>
            <span class="text-sm">
              <i class="bi bi-pencil"></i> 02 January 2025
            </span>
          </div>
          <p class="text-secondary truncate-text-3 d-none d-lg-block">
            Pratama Arhan, bek kiri muda kebanggaan Indonesia, resmi dilepas oleh klub K.League 1, Suwon FC.
          </p>
        </div>
      </div>
    </div>
  `;
};
newsRowsList.forEach((newsRows) => {
  const itemsToAdd = parseInt(newsRows.getAttribute("data-items"));
  for (let i = 0; i < itemsToAdd; i++) {
    newsRows.innerHTML += getItem(getRandomColor());
    if (i < itemsToAdd - 1) {
      newsRows.innerHTML += `
        <div class="col-12 divider">
          <hr>
        </div>
      `;
    }
  }
});

const newsRowsLargeList = document.querySelectorAll(".news__large");

const getLargeItem = () => {
  return `
    <div class="col-12">
      <div class="">
        <img
          src="https://fakeimg.pl/770x360/dcdcdc/"
          class="img-fluid w-100"
          alt=""
        />
      </div>
      <div>
        <span
          class="badge badge text-bg-info rounded-0 text-white text-uppercase px-3 mt-3 mb-1"
          >football</span
        >
        <h4>
          Rampingkan Skuad, Chelsea Siap Cuci Gudang di Bursa
          Transfer Januari!
        </h4>
        <div class="my-2 d-flex gap-4 text-secondary">
          <span class="text-sm">
            <i class="bi bi-person"></i> Tom</span
          >
          <span class="text-sm">
            <i class="bi bi-pencil"></i> 02 January 2025
          </span>
        </div>
        <p class="text-secondary truncate-text-3">
          Dengan lebih dari 40 pemain di tim utama, Chelsea kini
          dikabarkan siap melakukan cuci gudang di bursa transfer
          mendatang. Meskipun punya kedalaman skuad, situasi ini
          menjadi pedang bermata dua, karena meskipun memperkaya
          opsi taktik, beban gaji yang tinggi menjadi tantangan
          besar bagi klub.
        </p>
      </div>
    </div>
  `;
};

newsRowsLargeList.forEach((newsRowsLarge) => {
  newsRowsLarge.innerHTML = getLargeItem();
});

const newsRowsCardList = document.querySelectorAll(".news__cards");
const getCardItem = (itemsClass) => {
  return `
    <div class="${itemsClass ?? "col-6 col-lg-4"}">
      <div class="mb-2">
        <img
          src="https://fakeimg.pl/370x240/dcdcdc/"
          class="img-fluid w-100"
          alt=""
        />
      </div>
      <div>
        <p class="truncate-text-2 fw-bold mb-0">
          Rampingkan Skuad, Chelsea Siap Cuci Gudang di Bursa
          Transfer Januari!
        </p>
        <div class="my-2 d-flex gap-4 text-secondary">
          <span class="text-sm">
            <i class="bi bi-person"></i> Tom</span
          >
          <span class="text-sm">
            <i class="bi bi-pencil"></i> 02 January 2025
          </span>
        </div>
      </div>
    </div>
  `;
};

newsRowsCardList.forEach((newsCard) => {
  const itemsToAdd = parseInt(newsCard.getAttribute("data-items"));
  const itemsClass = newsCard.getAttribute("data-class");
  for (let i = 0; i < itemsToAdd; i++) {
    newsCard.innerHTML += getCardItem(itemsClass);
  }
});

// const newsItems = document.querySelectorAll(".news__item--row");
// newsItems.forEach((item) => {
//   const hrElement = document.createElement("hr");
//   const divider = document.createElement("div");
//   divider.classList.add("col-12", "divider"); // Mengganti col1 dengan divider
//   divider.appendChild(hrElement);
//   item.parentNode.insertBefore(divider, item.nextSibling);
// });
