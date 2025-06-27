//this function is converting the object reactElement into an <a> tag named container which then perfectly stores all the other things like innerHTML, sets attribute, targets blank..to make the link open i a new tab. 


function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    domElement.setAttribute("href", reactElement.props.href);

    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement);

*/    
 
const domElement = document.createElement(reactElement.type);

domElement.innerHTML = reactElement.children;

for (const prop in reactElement.props) {
    if(prop === 'children') continue; //skipped the chidren Because "children" is not a valid DOM attribute — we render it as innerHTML content, not as an attribute.
    domElement.setAttribute(prop, reactElement.props[prop]);
}
container.appendChild(domElement);

}


const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

// this is like the blueprint and all the other functions being called in the script file are a prototype of this and at the end wo reactElement a tag mein convert hoke div mainContainer mein hee a rha hai. 
customRender(reactElement, mainContainer);