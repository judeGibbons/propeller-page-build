document.addEventListener("DOMContentLoaded",init,false);

function init() {
  addjsclass();
  createClosedElementsArray();
  //addListenerToMenuIcon();
  addListenerToWindow();
  //dropdownmenutriangle();
  //togglemenutriangle();
  if (document.getElementById('carousel')) {
    carousel();
  }
}

// if javascript is present, replaces class 'no-js' on body with class 'js'
// if this happens, mobile width menu displays permanently
function addjsclass() {
  document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/(\s)no-js/," js");
}



/*
//possibly add if(canvasdd.getContext) test
function dropdownmenutriangle() {
  var canvasdd = document.getElementById('dropdownmenutriangle')||null;
  if (canvasdd) {
    var cdd = canvasdd.getContext('2d');
    canvasdd.width  = 60;
    canvasdd.height = 26;
    cdd.fillStyle = '#fff';
    cdd.strokeStyle = '#ccc';
    cdd.lineWidth = 2;
    cdd.beginPath();
    cdd.moveTo(0, 26);
    cdd.lineTo(30, 0);
    cdd.lineTo(60, 26);
    cdd.fill();
    cdd.stroke();
  }
}

function togglemenutriangle() {
  var canvastg = document.getElementById('togglemenutriangle')||null;
  if (canvastg) {
    var ctg = canvastg.getContext('2d');
    canvastg.width  = 60;
    canvastg.height = 26;
    ctg.fillStyle = '#fff';
    ctg.strokeStyle = '#ccc';
    ctg.lineWidth = 2;
    ctg.beginPath();
    ctg.moveTo(0, 26);
    ctg.lineTo(30, 0);
    ctg.lineTo(60, 26);
    ctg.fill();
    ctg.stroke();
  }
}
*/

// adds event listener to window so it can toggle mobile menu, and can close menu when clicked elsewhere

function addListenerToWindow() {
  if (window.addEventListener) 
    window.addEventListener('click', toggleMenu, false);
  else if (window.attachEvent)
    window.attachEvent('onclick', toggleMenu);
};

var closedElementsArray = [];
var toggleContainer;

function createClosedElementsArray() {
  closedElementsArray = (Array.prototype.slice.call( document.getElementsByClassName('closed') )); // converts HTMLCollection to array
  toggleContainer = closedElementsArray[1];
}

function toggleMenu(e) {
  var closedClass = new RegExp("(^|\\s)closed(\\s|$)");
  var openClass = new RegExp("(^|\\s)open(\\s|$)");
  var navListArray = toggleContainer.getElementsByTagName('*'); 
    function matchNavListItem() {
    for (var i=0; i<navListArray.length; i++) {
      if (e.target == navListArray[i]) {
        return true;
      };
    };
  };
  matchNavListItem();
  if (e.target == document.getElementById('nav__head')) {
    if (closedClass.test(toggleContainer.className) ) {
      toggleContainer.className = toggleContainer.className.replace(/(\s)closed/," open");
    } else if (openClass.test(toggleContainer.className) ) {
      toggleContainer.className = toggleContainer.className.replace(/(\s)open/," closed");
    }
    e.preventDefault();
  } else if ( (e.target == toggleContainer.firstElementChild)||(matchNavListItem()) ) {
    return;
  } else if (openClass.test(toggleContainer.className) ) {
    toggleContainer.className = toggleContainer.className.replace(/(\s)open/," closed");
  };
};





function carousel() {
  var imagesArray = [];
  //make array of images
  //if native css3 implementation works, use that to create array, else use js

  function getElementsByClassName(searchClass) {
    if (document.getElementsByClassName) { // use native implementation
      imagesArray = (Array.prototype.slice.call( document.getElementsByClassName(searchClass) )); // converts HTMLCollection to array
      imagesArray[(imagesArray.length-2)].className += (" start");
    } else { 
      var allListItems = document.getElementsByTagName("li"),
      allListItemsLength = allListItems.length,
      pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"),
      i,
      j;

      for (i = 0, j = 0; i < allListItemsLength; i++) {
        if ( pattern.test(allListItems[i].className) ) {
          imagesArray[j] = allListItems[i];
          j++;

        }
      }
    }
    
    // create the correct number of carousel indicators

    var indicatorsArray =[];
    var indicators = document.getElementById('carousel__indicator__list');
    for (i=1, maxi = imagesArray.length+1; i<maxi; i++) {
      var thisIndicator = document.createElement("li");
      document.getElementById('carousel__indicator__list').appendChild(thisIndicator);
      thisIndicator.className = "carousel__indicator indicator" + i;
      push.indicatorsArray(thisIndicator);
    }
  }

console.log(indicatorsArray);
  //use counter to create active and next in turn, and put active class on
  var activeImage;
  var nextImage;
  var counter;
  function appendActiveClass() {
    counter = (imagesArray.length-1);
    var intervalTime = 5000;
    var changeClassSpeed = setInterval(changeActiveClass, intervalTime);
    function changeActiveClass() {
      for (var i=0; i < imagesArray.length; i++) {
        imagesArray[i].className = imagesArray[i].className.replace(/(\s)active/,"");
        imagesArray[i].className = imagesArray[i].className.replace(/(\s)next/,"");
        activeImage = imagesArray[(counter-1)%(imagesArray.length)];
        nextImage = imagesArray[(counter)%(imagesArray.length)];
      }
      counter ++;
      activeImage.className += (" active");   
      nextImage.className += (" next"); 
      imagesArray[(imagesArray.length)-2].className = imagesArray[(imagesArray.length)-2].className.replace(/(\s)start/,"");
    

      //if slide<n> is active, add active class to indicator<n>


    //check if css3 available, if not call fade
    function getSupportedTransform() {
        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
        for(var i = 0; i < prefixes.length; i++) {
        if(document.createElement('div').style[prefixes[i]] !== undefined) {
          return prefixes[i];
        }
      }
      return false;
    }
    if (getSupportedTransform() === false) { //use !== false to test supported browser, otherwise ===
      fade(activeImage,nextImage);
      }
    }
  }

    
//should work for ie9 but doesn't   
  function fade(activeImage,nextImage) {
    var activeop = 1;
    var nextop = 0.01;

    for (var i=0; i<imagesArray.length; i++) {
      if ((imagesArray[i] == (activeImage)) || (imagesArray[i] == (nextImage))) {
        imagesArray[i].style.display = 'block';
      }
      if ((imagesArray[i] !== (activeImage)) && (imagesArray[i] !== (nextImage))) {
        imagesArray[i].style.display = 'none';
        imagesArray[i].style.opacity = 0;
        imagesArray[i].style.filter='progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'; //IE8&9 only - detect user agent
        imagesArray[i].style.filter = "alpha(opacity=0)";
    }
  }
  
    var timer = setInterval(function () {
      if (activeop <= 0.001) {
        activeImage.style.display = 'none';
        clearInterval(timer);
      }
      activeImage.style.opacity = activeop;
      activeImage.style.filter='progid:DXImageTransform.Microsoft.Alpha(Opacity=(activeop * 100))'; //IE8&9 only - detect user agent
      activeImage.style.filter = 'alpha(opacity=' + activeop * 100 + ")"; //for ie
      
      
      activeop -= activeop * 0.15;
      if (nextop > 0.978) {
        clearInterval(timer);
      }
      nextImage.style.opacity = nextop;
      nextImage.style.filter='progid:DXImageTransform.Microsoft.Alpha(Opacity=(nextop * 100))'; //IE8&9 only - detect user agent
      nextImage.style.filter = 'alpha(opacity=' + nextop * 100 + ")"; //for ie
      nextop += 0.0313;
    }, 30);
  }
      
    //call functions

  getElementsByClassName("carousel__slide");
  appendActiveClass();
  
}