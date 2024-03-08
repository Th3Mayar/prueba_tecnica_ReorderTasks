function initialize() {
    const botones = document.querySelectorAll("button");
    botones.forEach(button => {
        button.addEventListener('click', function () {
            const currentDiv = button.parentNode;
            const nextDiv = currentDiv.nextElementSibling;
            const previousDiv = currentDiv.previousElementSibling;

            if (button.classList.contains("downButton") && nextDiv) {
                const currentText = currentDiv.querySelector("span").innerText;
                const nextText = nextDiv.querySelector("span").innerText;
                
                currentDiv.querySelector("span").innerText = nextText;
                nextDiv.querySelector("span").innerText = currentText;
            } else if (button.classList.contains("upButton") && previousDiv) {
                const currentText = currentDiv.querySelector("span").innerText;
                const previousText = previousDiv.querySelector("span").innerText;

                currentDiv.querySelector("span").innerText = previousText;
                previousDiv.querySelector("span").innerText = currentText;
            }
        });
    });
}

document.body.innerHTML = `
  <div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
  </div>
  <div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button>
  </div>
  <div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
  </div>`;

initialize();