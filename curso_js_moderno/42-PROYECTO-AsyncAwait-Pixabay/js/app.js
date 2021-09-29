const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");
const pagerDiv = document.querySelector("#paginacion");

const recordsPerPage = 40;
let totalPages;
let iterator;
let currentPage = 1;

window.onload = () => {
    form.addEventListener("submit", validateForm);
};

function validateForm(e) {
    e.preventDefault();

    const searchTerm = document.querySelector("#termino").value;

    if (searchTerm === "") {
        showAlert("Add a search term");
        return;
    }

    searchImages();
}

function showAlert(message) {
    const error = document.querySelector(".bg-red-100");

    if (!error) {
        const alert = document.createElement("p");

        alert.classList.add(
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center"
        );
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            </br>
            <span class="block sm:inline">${message}</span>
        `;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

async function searchImages() {
    const term = document.querySelector("#termino").value;
    const key = "19976026-863d3c337649ad58f736dc257";
    const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${recordsPerPage}&page=${currentPage}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        totalPages = calculatePages(result.totalHits);
        if (totalPages === 0) {
            showAlert("No images were found");
        }
        showImages(result.hits);
    } catch (error) {
        console.log(error);
    }
}

// Generator that it's going to record the quantity of elements in accordance with the pages
function* createPager(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function showImages(images) {
    cleanHTML(result);

    // Iterate through images and build the HTML
    images.forEach((image) => {
        const { previewURL, likes, views, largeImageURL } = image;

        result.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src=${previewURL} />

                    <div class="p-4">
                        <p class="font-bold">${likes}<span class="font-light"> likes</span></p>
                        <p class="font-bold">${views}<span class="font-light"> views</span></p>

                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                            See HD image
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    // clean the previous pager
    cleanHTML(pagerDiv);
    printPager();
}

function printPager() {
    iterator = createPager(totalPages);

    while (true) {
        const { value, done } = iterator.next();
        if (done) return;

        // Opposite case, generates a button for each element in the generator
        const button = document.createElement("a");
        button.href = "#";
        button.dataset.page = value;
        button.textContent = value;
        button.classList.add(
            "siguiente",
            "bg-yellow-400",
            "px-4",
            "py-1",
            "mr-2",
            "font--bold",
            "mb-4",
            "rounded"
        );

        button.onclick = () => {
            currentPage = value;
            searchImages();
        };

        pagerDiv.appendChild(button);
    }
}

function calculatePages(total) {
    return parseInt(Math.ceil(total / recordsPerPage));
}

function cleanHTML(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
