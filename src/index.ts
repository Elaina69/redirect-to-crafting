import * as upl from "pengu-upl"

upl.observer.subscribeToElementCreation(`a[href="/loot"]`, (element: any) => {
    console.log("found")
    element.click()
})