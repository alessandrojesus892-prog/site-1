function scrollToPlans() {
    document.getElementById("planos").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll(".btn-assinar").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Obrigado por escolher um plano! Você será direcionado para o pagamento.");
    });
});