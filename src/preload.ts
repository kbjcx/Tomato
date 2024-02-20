import * as process from "process";

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string | undefined) => {
        const element = document.getElementById(selector)
        if (element && typeof text === "string") {
            element.innerText = text
        }
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})