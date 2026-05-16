const { createStore } = Redux;
const initialState = 0;
const store = createStore(counterReducer);
const valueEl = document.getElementById("value");

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}

function render() {
    valueEl.innerText = store.getState();
}

store.subscribe(render);

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const resetBtn = document.querySelector(".reset");

plus.addEventListener("click", () => {
    store.dispatch({ type: "increment" });

    Toastify({
        text: "Increment qilindi",
        duration: 1500,
        gravity: "top",
        position: "right",
        backgroundColor: "green"
    }).showToast();
});

minus.addEventListener("click", () => {
    store.dispatch({ type: "decrement" });

    Toastify({
        text: "Decrement qilindi",
        duration: 1500,
        gravity: "top",
        position: "right",
        backgroundColor: "red"
    }).showToast();
});

resetBtn.addEventListener("click", () => {
    store.dispatch({ type: "reset" });

    Toastify({
        text: "Reset bo‘ldi",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "orange"
    }).showToast();
});

render();

Toastify({
    text: "Redux Counter ga xush kelibsiz ! 😇",
    duration: 4000,
    gravity: "top",
    position: "center",
    backgroundColor: "black"
}).showToast();

Toastify({
    text: "Assalomu Alaykum",
    duration: 4000,
    gravity: "top",
    position: "center",
    backgroundColor: "black"
}).showToast();