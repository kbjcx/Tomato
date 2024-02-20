import {app, BrowserWindow} from "electron"
import path from "node:path"
import * as process from "process";

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences: {
            preload: path.join(__dirname, "source/preload.js")
        }
    })

    mainWindow.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit()
        }
    })
})