/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "190px";
    document.getElementById("main").style.marginLeft = "190px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* Dark mode */



/* buttons */

var modal = document.querySelector("#helpPopup");
var openModal = document.querySelector(".helpButton");
var closeModal = document.querySelector(".closePopup");

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});


var x = document.getElementById("myDialog");

function showDialog() {
    x.show();
}

function closeDialog() {
    x.close();
}





/* random colors */

var colors = [
    '#FFD500', '#005BBB'
];

// snap
const sections = [...document.querySelectorAll("section")];

let options = {
    rootMargin: "0px",
    threshold: 0.75
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        const { target } = entry;

        if (entry.intersectionRatio >= 0.75) {
            target.classList.add("is-visible");
        } else {
            target.classList.remove("is-visible");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
    const sectionChildren = [...section.querySelector("[data-content]").children];

    sectionChildren.forEach((el, index) => {
        el.style.setProperty("--delay", `${index * 250}ms`);
    });

    observer.observe(section);
});


/* scaling */
