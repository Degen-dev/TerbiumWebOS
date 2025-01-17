const searchi = document.getElementById("searchq");
const search = document.getElementById("search");
const closeA = document.getElementById("alertx");
const alerty = document.getElementById("alert");
const style = document.getElementById("relsn");
const favi = document.getElementById("favi");
const logo = document.getElementById("logo");

class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function isUrl(val = '') {
    if (/^(https?:\/\/)?[^\s\/:\.]+(\.[^\s\.]+)*\.[^\s\d\.]{2,}(\/[^\s]+)?$/.test(val)) return true;
    return false;
};

function ser() { 
    event.preventDefault();
    let url = searchi.value.trim();
    window.parent.document.getElementById("searchbar").value = url;
    let safeSearch = localStorage.getItem("ss");
    if(safeSearch === null) {
        if (!isUrl(url)) url = `https://searx.priv.pw/search?q=${url}&safesearch=${safeSearch}`;
    }    
    window.open("sw" + "/" + xor.encode(url), "_self");
}

searchi.addEventListener("focus", () => {
    searchi.addEventListener("keydown", (e) => {
        if(e.keyCode == "9") {
            e.preventDefault();
            return;
        }
        if(e.keyCode == "13") {
            e.preventDefault();
            ser()
        }
    })
    if (search.classList.contains("rectDown")) {
        search.classList.remove("rectDown");
        search.classList.add("rectUp");
        return;
    } else {
        search.classList.add("rectUp");
        return;
    }
});

searchi.addEventListener("blur", () => {
    if (search.classList.contains("rectUp")) {
        search.classList.remove("rectUp");
        search.classList.add("rectDown");
        return;
    } else {
        search.classList.add("rectDown");
        return;
    }
});

if(closeA) {
    closeA.addEventListener("click", () => {
        alerty.style.display = "none";
    });
}