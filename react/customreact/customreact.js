function customRender(reactElement, container){
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    // domEle.setAttribute('href',reactElement.props.herf)
    // domEle.setAttribute('target',reactElement.props.target)
    // container.appentChild(domEle)
    for (const prop in reactElement.props){
        if(prop === 'children')continue
        domEle.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domEle)
}


const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)   