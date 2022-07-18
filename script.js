function createNav(arrayIcons, options) {
    addLibraries();

    function addLibraries() {
        let CSSlibraries;

        if(options.isHtmlOnly == true) {
            CSSlibraries = Object.values({
                "FontAwesome": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            });
        } else {
            CSSlibraries = Object.values({
                "myCSS": "https://cdn.jsdelivr.net/gh/Laaouatni/color-navbar-js-library/style.min.css",
                "FontAwesome": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            });
        }

        CSSlibraries.forEach((library) => {
            let linkTag = document.createElement("link");

            linkTag.rel = "stylesheet";
            linkTag.type = "text/css";
            linkTag.href = library;

            document.querySelector("head").appendChild(linkTag);
        });
    };

    let bodyElement = document.querySelector("body");
    let navContainer = setNavElement();

    let iconStyleArray = Object.values({
        outlined: "fa-regular",
        filled: "fa-solid"
    });
    
    function setNavElement() {
        let element;  

        if(options.navElement) {
            createNavWithOptions(options);

            function createNavWithOptions(options) {
                checkIfNavExist();

                let firstLetter = options.navElement.charAt(0);
                
                let isID = firstLetter == "#";
                let isClass = firstLetter == ".";
                
                if(isID) {
                    element.id = options.navElement.replace("#", "");
                } else if(isClass) {
                    element.classList.add(options.navElement.replace(".", ""));
                } else {
                    element.id = options.navElement; 
                }

                bodyElement.appendChild(element);

                function checkIfNavExist() {
                    if(!document.querySelector("nav")) {
                        element = document.createElement("nav");
                    } else {
                        element = document.querySelector("nav");
                    }
                }
            }
        } else {
            element = document.querySelector("nav");

            if(!element) { 
                createNormalNav();
                
                function createNormalNav() {
                    element = document.createElement("nav");
                    bodyElement.appendChild(element);
                }
            }
        }

        return element;
    }
    
    let parentClass = "icon-div";
    
    arrayIcons.forEach((thisData) => {
        let newIconContainer;
        let thisIconName = thisData.iconName;
    
        createDivContainer(parentClass);
        createNewIcon(thisIconName);
        appendChildToNavbar(navContainer);
    
    
        function createDivContainer(className) {
            newIconContainer = document.createElement("div");
            newIconContainer.classList.add(className);
        }
    
        function createNewIcon(iconName) {
            let newIcon = document.createElement("i");
    
            let classesToAdd = [`${iconName}`, `${iconStyleArray[0]}`, `icon`];
            classesToAdd.forEach((thisClass) => {
                newIcon.classList.add(`${thisClass}`);
            });
    
            newIconContainer.appendChild(newIcon);
        }
    
        function appendChildToNavbar(navName) {
            navName.appendChild(newIconContainer);
        }
    });
    
    let allIconsDiv = document.querySelectorAll(`.${parentClass}`);
    
    allIconsDiv.forEach((thisIconDiv, index) => {
        let thisIcon = thisIconDiv.querySelector(".icon");
    
        addDataAttribute(thisIconDiv);
        thisIconDiv.addEventListener("click", styleIcon);
    
        function styleIcon() {
            changeBgColor();
            makeIconSolid(thisIcon);
    
            function changeBgColor() {
                let thisIconColor = arrayIcons[index].color;
                
    
                bodyElement.style.setProperty("--bg", `${thisIconColor}`);
            }
    
            function makeIconSolid(iconName) {
                resetAllIcons();
                addClassesToThisIcon();
        
                function resetAllIcons() {
                    allIconsDiv.forEach((thisDiv) => {
                        let thisSolidIcon = thisDiv.querySelector(".icon");
        
                        makeIconOutlined(thisSolidIcon);
                        thisDiv.classList.remove("active");
                        
                        function makeIconOutlined(iconName) {
                            iconName.classList.remove(`${iconStyleArray[1]}`);
                            iconName.classList.add(`${iconStyleArray[0]}`);
                        }
                    });
                }
    
                function addClassesToThisIcon() {
                    thisIconDiv.classList.add("active");
                    iconName.classList.add(`${iconStyleArray[1]}`);
                }
            }
        }
    
        function addDataAttribute(iconName) {
            let thisTitle = arrayIcons[index].text;
            iconName.setAttribute("data-text", `${thisTitle}`);
        }
    });

}    

