{
    const themeButton = document.querySelector(".js-themeButton");

    const toggleTheme = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        themeButton.classList.toggle("themeButton--background");
        body.classList.toggle("body--background");
        themeName.innerText = body.classList.contains("body--background") ? "no " : "picture in the ";
    };

    const init = () => {
        themeButton.addEventListener("click", toggleTheme);

        welcome();
    }
    init();

}
