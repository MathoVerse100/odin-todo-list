export const htmlTags = [
    'html', 'head', 'title', 'base', 'link', 'meta', 'style',
    'script', 'noscript', 'template', 'slot', 'canvas',
    'body', 'article', 'section', 'nav', 'aside', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'header', 'footer', 'address', 'main',
    'p', 'hr', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd',
    'figure', 'figcaption', 'div', 'a', 'em', 'strong', 'small', 's', 'cite',
    'q', 'dfn', 'abbr', 'data', 'time', 'code', 'var', 'samp', 'kbd', 'sub', 'sup',
    'i', 'b', 'u', 'mark', 'ruby', 'rb', 'rt', 'rtc', 'rp', 'bdi', 'bdo', 'span',
    'br', 'wbr',
    'ins', 'del',
    'img', 'iframe', 'embed', 'object', 'param', 'video', 'audio', 'source', 'track', 'map',
    'area', 'table', 'caption', 'colgroup', 'col', 'tbody', 'thead', 'tfoot', 'tr',
    'td', 'th', 'form', 'label', 'input', 'button', 'select', 'datalist', 'optgroup',
    'option', 'textarea', 'output', 'progress', 'meter', 'fieldset', 'legend',
    'details', 'summary', 'dialog', 'script', 'noscript', 'template', 'slot'
  ];
  
export function createNewElement({nameTag='div', 
    classList=[], 
    idName='', 
    textContent='', 
    attributes={}} = {}) {
    
    let newElement;

    if (htmlTags.includes(nameTag.toLowerCase())) {
        newElement = document.createElement(nameTag);
    } else {
        return undefined;
    };

    if (classList.length > 0) {
        newElement.classList.add(...classList);
    };

    if (idName) {
        newElement.id = idName;
    };

    if (textContent) {
        newElement.textContent = textContent;
    };

    if (typeof attributes === 'object' && attributes !== null) {
        for (let attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) {
                newElement.setAttribute(attribute, attributes[attribute]);
            };
        };
    };

    return newElement;
};