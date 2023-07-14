window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15, lng: 0 },
    zoom: 1.5,
    styles: [
      {
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "administrative",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#1d0090",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffe500",
          },
          {
            weight: 8,
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#1d0090",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
  });

  var myIcon = new google.maps.MarkerImage(
    "static/media/finish.png",
    null,
    null,
    null,
    new google.maps.Size(160, 100)
  );

  const japan = [
    {
      label: "도쿄",
      name: "도쿄",
      star: 4,
      lat: 35.5020581,
      lng: 138.4504777,
      icon: myIcon,
    },
    {
      label: "오사카",
      name: "오사카",
      star: 4,
      lat: 34.6775704,
      lng: 135.403636,
      icon: myIcon,
    },
    {
      label: "삿포로",
      name: "삿포로",
      star: 4,
      lat: 42.9848631,
      lng: 140.9183286,
      icon: myIcon,
    },
    {
      label: "후쿠오카",
      name: "후쿠오카",
      star: 4,
      lat: 33.6495358,
      lng: 129.9343191,
      icon: myIcon,
    },
    {
      label: "아오모리",
      name: "아오모리",
      star: 3,
      lat: 40.8850702,
      lng: 139.9308109,
      icon: myIcon,
    },
    {
      label: "후쿠시마",
      name: "후쿠시마",
      star: 2,
      lat: 37.3821022,
      lng: 139.4447275,
      icon: myIcon,
    },
    {
      label: "교토",
      name: "교토",
      star: 5,
      lat: 35.0977501,
      lng: 135.3892183,
      icon: myIcon,
    },
    {
      label: "오키나와",
      name: "오키나와",
      star: 5,
      lat: 25.9417759,
      lng: 124.4914603,
      icon: myIcon,
    },
  ];

  var japanMarkers = []; // 일본 마커들을 저장하는 배열

  japan.forEach(({ name, star, lat, lng, icon }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: {
        text: name + " " + star + "점",
        fontSize: "25px",
        fontFamily: "PyeongChangPeace-Bold",
      },
      map,
      icon,
    });
    japanMarkers.push(marker); // 마커를 배열에 추가
  });

  const france = [
    {
      label: "파리",
      name: "파리",
      star: 4,
      lat: 48.8588255,
      lng: 2.2646345,
      icon: myIcon,
    },
    {
      label: "니스",
      name: "니스",
      star: 4,
      lat: 43.7031657,
      lng: 7.1704111,
      icon: myIcon,
    },
    {
      label: "마르세유",
      name: "마르세유",
      star: 4,
      lat: 43.280227,
      lng: 5.2158399,
      icon: myIcon,
    },
  ];

  var franceMarkers = []; // 프랑스 마커들을 저장하는 배열

  france.forEach(({ star, name, lat, lng, icon }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: {
        text: name + " " + star + "점",
        fontSize: "25px",
        fontFamily: "PyeongChangPeace-Bold",
      },
      map: map,
      icon: icon,
    });
    franceMarkers.push(marker); // 마커를 배열에 추가
  });

  map.addListener("zoom_changed", () => {
    var currentZoom = map.getZoom(); // 현재 줌 레벨 가져오기
    var minZoomToShowMarker = 5; // 마커가 보이게 하려는 최소 줌 레벨 설정

    japanMarkers.forEach((marker) => {
      if (currentZoom >= minZoomToShowMarker) {
        marker.setVisible(true); // 마커를 표시
      } else {
        marker.setVisible(false); // 마커를 숨김
      }
    });

    franceMarkers.forEach((marker) => {
      if (currentZoom >= minZoomToShowMarker) {
        marker.setVisible(true); // 마커를 표시
      } else {
        marker.setVisible(false); // 마커를 숨김
      }
    });
  });

  var infowindow = new google.maps.InfoWindow();
  // 마커 클릭 이벤트 핸들러 추가
  japanMarkers.forEach((marker) => {
    marker.addListener("click", function () {
      // 마커 클릭 시 모달 창 표시
      showModal(marker);
    });
  });

  franceMarkers.forEach((marker) => {
    marker.addListener("click", function () {
      // 마커 클릭 시 모달 창 표시
      showModal(marker);
    });
  });

  // 모달 창 표시 함수
  function showModal(marker) {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementsByClassName("modal-content");

    // 모달 창 표시
    modal.style.display = "block";

    //세부항목 모달 연결
    getSafetyModal();
    getPriceModal();
    getTransportModal();
    getEntertainmentModal();
    getFoodModal();

    // 모달 닫기 버튼 클릭 이벤트 핸들러 추가
    // var closeBtn = document.getElementById("close-btn");
    // closeBtn.addEventListener("click", function () {
    //   // 모달 창 닫기
    //   modal.style.display = "none";
    // });

    closeBtnEvent();
    backBtnEvent();
  }
};

function closeBtnEvent() {
  $(".close-btn").click(function () {
    $("#modal").fadeOut();
    $("#safety-modal").fadeOut();
    $("#price-modal").fadeOut();
    $("#transport-modal").fadeOut();
    $("#entertainment-modal").fadeOut();
    $("#food-modal").fadeOut();
  });
}

function backBtnEvent() {
  $(".back-btn").click(function () {
    $("#safety-modal").hide();
    $("#price-modal").hide();
    $("#transport-modal").hide();
    $("#entertainment-modal").hide();
    $("#food-modal").hide();
    $("#modal").show();
  });
}

var safetyModal = document.getElementById("safety-modal");
safetyModal.style.display = "none";

var priceModal = document.getElementById("price-modal");
priceModal.style.display = "none";

var transportModal = document.getElementById("transport-modal");
transportModal.style.display = "none";

var entertainmenttModal = document.getElementById("entertainment-modal");
entertainmenttModal.style.display = "none";

var foodModal = document.getElementById("food-modal");
foodModal.style.display = "none";

function getSafetyModal() {
  var modal = document.getElementById("modal");

  var safetyDiv = document.getElementById("safety");
  var safetyRatingText = safetyDiv.firstElementChild;
  var ratingTextFirstSpan = safetyRatingText.firstElementChild;

  ratingTextFirstSpan.addEventListener("click", function () {
    modal.style.display = "none";
    safetyModal.style.display = "block";
  });
}

function getPriceModal() {
  var modal = document.getElementById("modal");

  var priceDiv = document.getElementById("price");
  var priceRatingText = priceDiv.firstElementChild;
  var ratingTextFirstSpan = priceRatingText.firstElementChild;

  ratingTextFirstSpan.addEventListener("click", function () {
    priceModal.style.display = "block";
    modal.style.display = "none";
  });
}

function getTransportModal() {
  var modal = document.getElementById("modal");

  var transportDiv = document.getElementById("transport");
  var transportRatingText = transportDiv.firstElementChild;
  var ratingTextFirstSpan = transportRatingText.firstElementChild;

  ratingTextFirstSpan.addEventListener("click", function () {
    modal.style.display = "none";
    transportModal.style.display = "block";
  });
}

function getEntertainmentModal() {
  var modal = document.getElementById("modal");

  var entertainmentDiv = document.getElementById("entertainment");
  var entertainmentRatingText = entertainmentDiv.firstElementChild;
  var ratingTextFirstSpan = entertainmentRatingText.firstElementChild;

  ratingTextFirstSpan.addEventListener("click", function () {
    modal.style.display = "none";
    entertainmenttModal.style.display = "block";
  });
}

function getFoodModal() {
  var modal = document.getElementById("modal");

  var foodDiv = document.getElementById("food");
  var foodRatingText = foodDiv.firstElementChild;
  var ratingTextFirstSpan = foodRatingText.firstElementChild;

  ratingTextFirstSpan.addEventListener("click", function () {
    modal.style.display = "none";
    foodModal.style.display = "block";
  });
}

// my-score-div 별점 표시 함수