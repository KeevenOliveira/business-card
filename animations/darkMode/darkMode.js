const html = document.querySelector("*")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorText2: getStyle(html, "--color-text2"),
    bgSquares: getStyle(html, "--bg-squares"),
}

const darkMode = {
    bg: "#333333",
    colorHeadings: "#3664FF",
    colorText: "#e2ebe8",
    colorText2: "#9c9c9c",
    bgSquares:"linear-gradient(to right, #1A2980 0%, #26D0CE 100%)"
                                    

}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})