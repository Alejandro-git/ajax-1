console.log('我是main.js')

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1;
        }
    }
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {

            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
};

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            // .getElementsByTagName 获取的是一个伪数组，所以取他的第一个
            console.log(text.trim())
            // .trim 去除空格
        }
    }
    request.send()
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        // 创建 div 标签
        div.innerHTML = request.response
        // 填写 div 内容
        document.body.appendChild(div)
        // 插入 body 里面
    }
    request.onerror = () => { }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        // console.log(request.response)

        const script = document.createElement('script')
        // 创建 script 标签
        script.innerHTML = request.response
        // 填写 script 内容
        document.body.appendChild(script)
        // 插入到 body 里面

    }
    request.onerror = () => { }
    request.send()
}
// getCSS.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'style.css')
//     request.onload = () => {
//         console.log('request.response')
//         console.log(request.response)
//         console.log('成功')

//         const style = document.createElement('style')
//         // 创建 style 标签
//         style.innerHTML = request.response
//         // 填写 style 内容
//         document.head.appendChild(style)
//         // 插入到 head 里面

//     }
//     request.onerror = () => {
//         console.log('失败')
//     }
//     request.send()
//     // 四部步骤：
//     // 1、创建 HttpRequest 对象（全称XMLHttpRequest）
//     // 2、调用对象的 open 方法
//     // 3、监听对象的onreadystatechange 事件
//     // ---在事件处理函数里使用 JOSN.parse
//     // 4、调用对象的 send 方法 （发送请求；学习方法MDN）
// }

// 使用 onreadystatechange 来实现


getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css'); // readyState = 1
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if(request.status >= 200 && request.status < 300){
                console.log("下载完成") ;
                const style = document.createElement('style')
                // 创建 style 标签
                style.innerHTML = request.response
                // 填写 style 内容
                document.head.appendChild(style)
                // 插入到 head 里面
            }else{
                alert('加载 CSS 失败')
            }
           
        }
    };
    request.send();// readyState = 2
}