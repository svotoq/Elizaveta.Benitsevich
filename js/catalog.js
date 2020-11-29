window.onload = function () {
    loadAlphabet();
    loadSellLiders();
}

aAlphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "К", "Л", "М", "Н",
    "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ш", "Щ", "3", "Ю", "Я"];

function loadAlphabet() {
    var alphabetNode = document.querySelector("#alphabet");
    var radioName = "alphabet";
    for (var i = 0; i < aAlphabet.length; i++) {
        //Radio form
        var formRadioButton = document.createElement("div");
        formRadioButton.classList.add("form_radio_btn");

        //RadioInput
        var radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = "radio" + i;
        radioInput.name = radioName;
        radioInput.value = i;

        //Radio lable
        var radioLable = document.createElement("label");
        radioLable.setAttribute("for", "radio" + i);
        radioLable.innerHTML = aAlphabet[i];

        //display on page
        formRadioButton.appendChild(radioInput);
        formRadioButton.appendChild(radioLable);
        alphabetNode.appendChild(formRadioButton);
    }
}

aSellLiders = [{
    image: "images/catalog/Neposeda.png",
    title: "Непоседа",
    price: "5,52 р."
}, {
    image: "images/catalog/Academicians.png",
    title: "Маленькие академики",
    price: "3,02 р."
}, {
    image: "images/catalog/Artists.png",
    title: "Маленькие хужодники",
    price: "2,89 р."
}, {
    image: "images/catalog/Dreamers.png",
    title: "Фантазеры",
    price: "3,87 р."
}, {
    image: "images/catalog/Kingdom.png",
    title: "3/9 Царство",
    price: "2,76 р."
}, {
    image: "images/catalog/Stickers.png",
    title: "Забавные наклейки",
    price: "4,72 р."
}, {
    image: "images/catalog/Zhevzhik.png",
    title: "Жевжик",
    price: "1,53 р."
}, {
    image: "images/catalog/Mother_Sun.png",
    title: "Мамино солнышко",
    price: "2,30 р."
}, {
    image: "images/catalog/Bear.png",
    title: "Мишуткины прописки",
    price: "2,20 р."
}, {
    image: "images/catalog/Playing_with_mother.png",
    title: "Играю с мамой",
    price: "2,20 р."
}, {
    image: "images/catalog/Magic_glowworm.png",
    title: "Волшебный Светлячок",
    price: "2,20 р."
}, {
    image: "images/catalog/Backpack.png",
    title: "Рюкзачок",
    price: "2,43 р."
}]

function loadSellLiders() {
    var sellLidersNode = document.querySelector("#sell-liders");
    var sellLidersRow = getSellLidersRow();
    for (var i = 0; i < aSellLiders.length; i++) {
        var sellLider = getSellLider(aSellLiders[i].image, aSellLiders[i].title, aSellLiders[i].price);
        sellLidersRow.appendChild(sellLider);
        if(aSellLiders[i].title = "3/9 Царство"){
            setNavigationEvent(sellLider);
        }
        if ((i + 1) % 4 === 0) {
            sellLidersNode.appendChild(sellLidersRow);
            sellLidersRow = getSellLidersRow();
        }
    }
}

function getSellLidersRow() {
    var sellLidersRow = document.createElement("div");
    sellLidersRow.classList.add("sell-liders-row");

    return sellLidersRow;
}

function getSellLider(image, title, price) {
    var sellLider = document.createElement("div");
    sellLider.classList.add("sell-lider");

    var imageNode = document.createElement("img");
    imageNode.setAttribute("src", image);

    var titleNode = document.createElement("div");
    titleNode.classList.add("title");
    titleNode.innerHTML = title;

    var priceNode = document.createElement("div");
    priceNode.classList.add("price");
    priceNode.innerHTML = price;

    sellLider.appendChild(imageNode);
    sellLider.appendChild(titleNode);
    sellLider.appendChild(priceNode);
    sellLider.appendChild(getButton());

    return sellLider;
}

function getButton() {
    var hoverBackgroundNode = document.createElement("div");
    hoverBackgroundNode.classList.add("hover-background");

    var hoverNode = document.createElement("div");
    hoverNode.classList.add("hover");

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.classList.add("btn", "btn-danger");
    buttonNode.innerHTML = "Подписка";

    hoverBackgroundNode.appendChild(hoverNode);
    hoverBackgroundNode.appendChild(buttonNode);

    return hoverBackgroundNode;
}

function setNavigationEvent(sellLider) {
    var buttonNode = sellLider.querySelector("button");
    buttonNode.setAttribute("onclick", "window.location.href='subscription.html'");
}