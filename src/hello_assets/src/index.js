import { hello } from "../../declarations/hello";

window.addEventListener("load", async () => {
    document.getElementById("value").innerText = "loading.."
    const currentAmount = await hello.checkBalace();
    document.getElementById("value").innerText = currentAmount;
});

let btn = document.getElementById("submit-btn");
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputAmount = parseFloat(document.getElementById("input-amount").value);
    let widthDrawl = parseFloat(document.getElementById("withdrawal-amount").value);
    btn.setAttribute("disabled", true);
    btn.innerText = "loading..."
    if (document.getElementById("input-amount").value.length != 0) {
        await hello.topUp(inputAmount);
    }

    if (document.getElementById("withdrawal-amount").value.length != 0) {
        await hello.withDraw(widthDrawl);
    }
    btn.innerText = "Finalise Transaction"
    btn.removeAttribute("disabled",false);
    document.getElementById("input-amount").value ="";
    document.getElementById("withdrawal-amount").value =""
    document.getElementById("value").innerText = "loading.."
    const currentAmount = await hello.checkBalace();
    document.getElementById("value").innerText = currentAmount;
});

