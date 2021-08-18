
    // assignment 3: connect to backend API by AJAX
    // 發出對http://localhost:3000/getData?number=10的請求，得到相對應的response

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            document.getElementById("ajax").innerHTML = ajax.responseText;
        }
    }
    ajax.open("GET", "http://localhost:3000/getData?number=10");
    ajax.send();

    /* Write a simple user interface to let users enter a number and get a result from the
     server. (For a simple example, a text input and a button.) */

    let ajax2 = new XMLHttpRequest();
    let ajax2_text = document.getElementById("ajax2");
    const submitBtn = document.querySelector("[data-action='submit']");
    const input = document.querySelector("#number");

    submitBtn.addEventListener("click", () => {
        sum();
        input.value = "";
    });

    function sum() {
        const number_input = input.value;
        ajax2.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                ajax2_text.innerHTML = ajax2.responseText;
            }
        }
        ajax2.open("GET", `http://localhost:3000/getData?number=${number_input}`);
        ajax2.send();
    }
