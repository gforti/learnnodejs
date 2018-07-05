(() => {

    let month = window.document.querySelector('#month')
    let monthVal = window.labApi.getRandomSelectValue(month)
    let year = window.document.querySelector('#year')
    let yearVal = window.labApi.getRandomSelectValue(year)
    let yes = window.document.querySelector('#yes')
    let no = window.document.querySelector('#no')

    test().then(() => {
        return window.labApi.scriptCompleted()
    })

    async function test() {
        await window.labApi.selectValue(monthVal, month)
        await window.labApi.selectValue(yearVal, year)
        let days = window.document.querySelectorAll('.day')
        let day = window.labApi.randNode(days)
        await window.labApi.triggerElementEvent(day, 'click')

        let bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        let colors = bgcolor.match(/\d+/g).map(Number)
        let [red, green] = colors
        let isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (green === 0 || isTransparent) {
            window.labApi.insertMessage('Day should be green', false)
        } else {
            window.labApi.insertMessage('correct Color green');
        }

        await window.labApi.triggerElementEvent(day, 'blur')
        await window.labApi.triggerElementEvent(day, 'click')

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        red = colors[0]
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (red === 0 || isTransparent) {
            window.labApi.insertMessage('Day should be red', false)
        } else {
            window.labApi.insertMessage('correct Color red');
        }
        await window.labApi.triggerElementEvent(day, 'blur')
        await window.labApi.triggerElementEvent(day, 'click')

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (!isTransparent) {
            window.labApi.insertMessage('Day should be transparent', false)
        } else {
            window.labApi.insertMessage('correct Color transparent');
        }


        await window.labApi.triggerElementEvent(no, 'click')
        day = window.labApi.randNode(days)
        await window.labApi.mouseToElementPosition(day)

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        red = colors[0]
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (red === 0 || isTransparent) {
            window.labApi.insertMessage('Day should be red', false)
        } else {
            window.labApi.insertMessage('correct Color red');
        }

        day = window.labApi.randNode(days)
        await window.labApi.triggerElementEvent(day, 'click')

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (!isTransparent) {
            window.labApi.insertMessage('Day should be transparent', false)
        } else {
            window.labApi.insertMessage('correct Color transparent');
        }

        await window.labApi.triggerElementEvent(yes, 'click')
        day = window.labApi.randNode(days)
        await window.labApi.mouseToElementPosition(day)

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])
        green = colors[1]

        if (green === 0 || isTransparent) {
            window.labApi.insertMessage('Day should be green', false)
        } else {
            window.labApi.insertMessage('correct Color green');
        }


        day = window.labApi.randNode(days)
        await window.labApi.triggerElementEvent(day, 'click')

        bgcolor = window.getComputedStyle(day, null).getPropertyValue('background-color')
        colors = bgcolor.match(/\d+/g).map(Number)
        red = colors[0]
        isTransparent = colors.every((currentValue, index, items) => currentValue === items[0])

        if (red === 0 || isTransparent) {
            window.labApi.insertMessage('Day should be red', false)
        } else {
            window.labApi.insertMessage('correct Color red');
        }


    }



})()

