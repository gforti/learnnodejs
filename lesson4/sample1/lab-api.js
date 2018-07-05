(()=>{


    const DIV_ID = 'labResults-rnt7dvtto9'

    if ( !window.document.querySelector('#'+DIV_ID) ) {
        window.document.body.insertAdjacentHTML('afterbegin', '<input id="togglelabresults" type="checkbox" checked><label for="togglelabresults">Lab Results</label><div id="'+DIV_ID+'"></div>');
    }

    const LAB_RESULTS = window.document.querySelector('#'+DIV_ID)

    LAB_RESULTS.innerHTML = ''


    if (window.scriptexecutedLabAPI) {
        return true;
    }

    window.scriptexecutedLabAPI = true;

    window.labApi = {
        'typeInValue' : typeInValue,
        'uuid' : uuid,
        'insertMessage' : insertMessage,
        'scriptCompleted' : scriptCompleted,
        'triggerElementEvent' : triggerElementEvent,
        'selectValue' : selectValue,
        'getRandomSelectValue' : getRandomSelectValue,
        'randNode' : randNode,
        'mouseToElementPosition' : mouseToElementPosition,
    }

    window.document.body.insertAdjacentHTML('beforeend',`<img style="position: absolute; bottom:0px; right:0px" id="mouseCursor" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDc2Ni40MzggNzY2LjQzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzY2LjQzOCA3NjYuNDM4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQuMzM4LDMuOTg4bC0wLjMsMC4zYy0zLjgsMy44LTUsOS42LTMuMSwxNC42bDI2Mi4yLDY4Mi4xYzIsNS4yLDcsOC43LDEyLjYwMSw4LjhjNS42LDAuMTAxLDEwLjY5OS0zLjMsMTIuOC04LjM5OSAgIGw4My4zLTIwMC4ybDI1OS40LDI1OS40YzcuOCw3LjgsMjAuNSw3LjgsMjguMywwYzI3LjgtMjcuODAxLDczLjItNzMuMiwxMDEtMTAxYzcuOC03LjgwMSw3LjgtMjAuNSwwLTI4LjMwMWwtMjU5LjMtMjU5LjM5OSAgIGwyMDAuMS04My4zYzUuMi0yLjIsOC41LTcuMiw4LjQtMTIuOGwwLDBjLTAuMTAxLTUuNi0zLjYwMS0xMC42LTguODAxLTEyLjZsLTY4Mi0yNjIuM0MxMy44MzgtMS4wMTIsOC4xMzgsMC4xODgsNC4zMzgsMy45ODh6IiBmaWxsPSIjMDA2REYwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />`)


    function setCursorToEventImg() {
        let mouse = window.document.querySelector('#mouseCursor')
        let src = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDkxMC41IDkxMC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MTAuNSA5MTAuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yMTYuODEzLDIyOC41aDczLjVjMTMuOCwwLDI1LTExLjIsMjUtMjVzLTExLjItMjUtMjUtMjVoLTczLjVjLTEzLjgsMC0yNSwxMS4yLTI1LDI1UzIwMy4wMTMsMjI4LjUsMjE2LjgxMywyMjguNXoiIGZpbGw9IiNEODAwMjciLz4KCTxwYXRoIGQ9Ik00MjAuMzEzLDk4LjVWMjVjMC0xMy44LTExLjItMjUtMjUtMjVzLTI1LDExLjItMjUsMjV2NzMuNWMwLDEzLjgsMTEuMiwyNSwyNSwyNVM0MjAuMzEzLDExMi4zLDQyMC4zMTMsOTguNXoiIGZpbGw9IiNEODAwMjciLz4KCTxwYXRoIGQ9Ik01NzMuODEzLDIyOC41YzEzLjgsMCwyNS0xMS4yLDI1LTI1cy0xMS4yLTI1LTI1LTI1aC03My41Yy0xMy44LDAtMjUsMTEuMi0yNSwyNXMxMS4yLDI1LDI1LDI1SDU3My44MTN6IiBmaWxsPSIjRDgwMDI3Ii8+Cgk8cGF0aCBkPSJNNzA1LjIxMyw3NTUuNGMxMi4xLTIwLjMwMSwxOC41LTQzLjUsMTguNS02Ny4yVjUyOC45YzAtMTkuNS0xMi41LTM2LjgwMS0zMS4xMDEtNDIuODAxICAgYy01NS41LTE4LjEtMTY3LjUtNTQuMTk5LTE4NC42LTU3LjZjLTE5LjctMy45LTM4LjEwMS0wLjItNDcuOSw4LjRoLTAuMWMwLDAsMCwwLDAtMC4xMDFjLTAuNS00LjUtMjUuOS0yNTAuNS0yNS45LTI1MC43ICAgYy0yLjM5OS0yMS4zLTIwLjM5OS0zMS4zLTM4LjItMzAuN2MtMTkuMSwwLjctMzcsMTYuMi0zNi44OTksMzYuMWwtMC4yLDQwNC4zYzAsNC44LTMuNSw4LjgtOC4zLDkuNWMtMC4xMDEsMC0wLjEwMSwwLTAuMiwwICAgYy0wLjUsMC4xMDEtMSwwLjEwMS0xLjUsMC4xMDFjLTEzLjYtMC40LTQ0LjMtMC44MDEtNzQuMi00NC4xMDFjLTQtNS43LTcuNi0xMC44OTktMTAuODk5LTE1LjdjLTI4LjUtNDAuODk5LTgzLjktMTguMy03Ni4yLDI4LjIgICBjNy4yLDQzLjMsNTQuNiwxNDQuMiwxNDgsMjM4LjhoMzM1LjhMNzA1LjIxMyw3NTUuNHoiIGZpbGw9IiNEODAwMjciLz4KCTxwYXRoIGQ9Ik0zMzUuNzEzLDg5MC41YzAsMTEsOSwyMCwyMCwyMGgyOTUuNmMxMSwwLDIwLTksMjAtMjB2LTQ1LjhoLTMzNS42Vjg5MC41eiIgZmlsbD0iI0Q4MDAyNyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
        mouse.src = src
    }

     function resetCursorImg() {
        let mouse = window.document.querySelector('#mouseCursor')
        let src = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDc2Ni40MzggNzY2LjQzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzY2LjQzOCA3NjYuNDM4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQuMzM4LDMuOTg4bC0wLjMsMC4zYy0zLjgsMy44LTUsOS42LTMuMSwxNC42bDI2Mi4yLDY4Mi4xYzIsNS4yLDcsOC43LDEyLjYwMSw4LjhjNS42LDAuMTAxLDEwLjY5OS0zLjMsMTIuOC04LjM5OSAgIGw4My4zLTIwMC4ybDI1OS40LDI1OS40YzcuOCw3LjgsMjAuNSw3LjgsMjguMywwYzI3LjgtMjcuODAxLDczLjItNzMuMiwxMDEtMTAxYzcuOC03LjgwMSw3LjgtMjAuNSwwLTI4LjMwMWwtMjU5LjMtMjU5LjM5OSAgIGwyMDAuMS04My4zYzUuMi0yLjIsOC41LTcuMiw4LjQtMTIuOGwwLDBjLTAuMTAxLTUuNi0zLjYwMS0xMC42LTguODAxLTEyLjZsLTY4Mi0yNjIuM0MxMy44MzgtMS4wMTIsOC4xMzgsMC4xODgsNC4zMzgsMy45ODh6IiBmaWxsPSIjMDA2REYwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
        mouse.src = src
    }


    function scriptCompleted() {
        // chrome.runtime.sendMessage({type:'script_completed'})
        return true
    }

    function insertMessage(msg, pass = true) {
        let html = '<p class="'+ (!!pass ? 'pass' : 'fail') +'">' + msg + '</p>'
        LAB_RESULTS.insertAdjacentHTML('beforeend', html)
        LAB_RESULTS.scrollTop = LAB_RESULTS.scrollHeight;
    }

    function uuid() {
        return Math.random().toString(36).substring(2, 15)
    }

    function typeInValue(text, input) {


        let total = text.length
        let counter = 0
        let speed = 100

        return mouseToElementPosition(input).then(function() {
                return new Promise((resolve, reject) => {

                if (!input) {
                    insertMessage('test failed for '+ text, false )
                    resolve(text)
                }
                removeInput(resolve)

            })
        })

        function removeInput(resolve) {

            if (input.value.length) {
                input.value = input.value.substring(0, input.value.length - 1)
                window.setTimeout(removeInput.bind(this, resolve), speed)
            } else {
                setInput(resolve)
            }

        }

        function setInput(resolve) {
            if (counter <= total) {
                input.value += text.charAt(counter)
                counter++
                window.setTimeout(setInput.bind(this, resolve), speed)
            } else {
                resolve(text)
            }
        }

    }


    function getRandomSelectValue(input) {
        return input.options[~~(window.Math.random() *input.length)].value
    }

    function randNode(nodes) {
        return nodes[~~(window.Math.random() * nodes.length)]
    }

    function selectValue(val, input) {

        let total = input.length
        let speed = 200

        return mouseToElementPosition(input).then(function() {
                return new Promise((resolve, reject) => {

                if (!input) {
                    insertMessage('test failed for Select box', false )
                    resolve(val)
                }
                setOption(resolve)

            })
        })

        function setOption(resolve) {
            if ( input.options[input.selectedIndex].value.toString() === val ) {
                triggerElementEvent(input, 'change').then(()=>{
                    resolve(val)
                })
            } else {
                input.selectedIndex = (input.selectedIndex + 1) % input.length
                window.setTimeout(setOption.bind(this, resolve), speed)
            }

        }

    }


    function triggerElementEvent(elem, evt) {

        let ev = new Event(evt, {"bubbles": true, "cancelable": false})

        let away = ['blur'].indexOf(evt) > -1
        if ( !away ) {
            setCursorToEventImg()
        }

        return mouseToElementPosition(elem, away).then(function() {
                return new Promise((resolve, reject) => {

                elem.dispatchEvent(ev)
                resetCursorImg()
                resolve(elem)

            })
        })


    }


    function mouseToElementPosition(elem, away = false) {
        let pos = elem.getBoundingClientRect()
        let mouse = window.document.querySelector('#mouseCursor')
        let mpos = mouse.getBoundingClientRect()


        let info = {
            'mouse' : mouse,
            'from' : {
                'x' : parseInt(mpos.left, 10),
                'y' : parseInt(mpos.top, 10),
            },
            'to' : {
                'x' : parseInt(pos.left+(away ? pos.width+10 : pos.width/2), 10),
                'y' : parseInt(pos.top+(away ? pos.height+10 : pos.height/2), 10),
            },
            'tweenX': [],
            'tweenY': [],
        }

        let frameCount = 50; /* speed of mouse, default to 20*/
        let tweenAmountX = (info.to.x - info.from.x)/frameCount;
        let tweenAmountY = (info.to.y - info.from.y)/frameCount;

        for (let i=0; i<=frameCount; i++) {
            // calculate the points to animate
            info.tweenX.push(parseInt(info.from.x+(tweenAmountX*i),10))
            info.tweenY.push(parseInt(info.from.y+(tweenAmountY*i),10))
        }


        return new Promise((resolve, reject) => {

            move(info, resolve)

        })


        function move(info, resolve) {

            info.mouse.style.top = info.tweenY.shift() + 'px'
            info.mouse.style.left = info.tweenX.shift() + 'px'

            if ( info.tweenY.length ) {
                window.requestAnimationFrame(move.bind(this, info, resolve))
            } else {
                resolve()
            }


        }

    }





})()

