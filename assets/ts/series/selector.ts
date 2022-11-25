document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector("select[name='series-part']") as HTMLSelectElement;

    dropdown.addEventListener("change", () => {
        const nextValue = dropdown.value;
        dropdown.value = window.location.pathname;
        window.location.assign(nextValue);
    });
})