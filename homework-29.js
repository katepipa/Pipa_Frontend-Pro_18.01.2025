function HtmlElement(tagName, attributes) {
  let _tagName = tagName || "";
  let _attributes = attributes || {};
  let _textContent = "";

  Object.defineProperty(this, "tagName", {
    get: function () {
      return _tagName;
    },

    set: function (value) {
      if (typeof value !== "string" || value.trim() === "") {
        console.warn("Enter valid HTML tag name, please");
      } else {
        _tagName = value.trim();
      }
    },
  });

  Object.defineProperty(this, "attributes", {
    get: function () {
      return _attributes;
    },

    set: function (attributesObj) {
      if (typeof attributesObj === "object" && !Array.isArray(attributesObj)) {
        _attributes = attributesObj;
      } else {
        console.warn("Attributes must be an object");
      }
    },
  });

  this.elementOutput = function (parentElement) {
    const element = document.createElement(this.tagName);

    for (let key in this.attributes) {
      element.setAttribute(key, this.attributes[key]);
    }

    if (parentElement instanceof Element) {
      parentElement.appendChild(element);
    }

    if (_textContent) {
      element.textContent = _textContent;
    }
    return element;
  };

  this.setAttribute = function (name, value) {
    if (typeof name === "string") {
      _attributes[name] = value;
    } else {
      console.warn("Attribute name must be a string");
    }
  };

  this.removeAttribute = function (name) {
    delete _attributes[name];
  };

  this.setTextContent = function (text) {
    _textContent = text;
  };
}

let mainBlock = document.querySelector(".main-block");
let img = new HtmlElement("img", {
  src: "./img/paris.jpg",
  alt: "The Eiffel Tower between the streets of Paris",
});

mainBlock.appendChild(img.elementOutput());

let button = new HtmlElement("button");
button.setAttribute("type", "button");
button.setTextContent("Click");

mainBlock.appendChild(button.elementOutput());
