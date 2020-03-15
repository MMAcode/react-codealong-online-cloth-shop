import React from 'react'
import './MiroMouseEntryOverlay.scss'
// import { createLogger } from 'redux-logger';




function MiroMouseEntryOverlay({ imageUrl }) {

  let ReturnTrueIfExitingWithinElement = (e, enteredSide) => {

    //X-coordinate relative to it's element's left border
    let cursorPositionX = e.pageX - e.target.getBoundingClientRect().left - window.scrollX
    //Y-coordinate relative to it's element's top border
    // let cursorPositionY = e.pageY - e.target.getBoundingClientRect().top + window.scrollY;
    let cursorPositionY = e.pageY - e.target.getBoundingClientRect().top - window.scrollY;
    //elemet's width
    let elementWidth = e.target.offsetWidth;
    //element's height
    let elementHeight = e.target.offsetHeight;

    // console.log("--------------")
    // console.log("X ", cursorPositionX);
    // console.log("w ", elementWidth);
    // console.log("-")
    // console.log("Y ", cursorPositionY);
    // console.log("h ", elementHeight);
    // console.log("Exiting overlay element: ")

    if (cursorPositionX > 0 && cursorPositionX < elementWidth
      && cursorPositionY > 0 && cursorPositionY < elementHeight) {
      // console.log("to Inner element");
      return true;
    } else {
      // console.log("to outer element");
      return false;
    }


  }
  let ReturnTrueIfEnteringWithinElement = (e, enteredSide) => {

    //X-coordinate relative to it's element's left border
    let cursorPositionX = e.pageX - e.target.getBoundingClientRect().left - window.scrollX
    //Y-coordinate relative to it's element's top border
    let cursorPositionY = e.pageY - e.target.getBoundingClientRect().top - window.scrollY;
    //elemet's width
    let elementWidth = e.target.offsetWidth;
    //element's height
    let elementHeight = e.target.offsetHeight;

    // console.log("--------------")
    // console.log("X ", cursorPositionX);
    // console.log("w ", elementWidth);
    // console.log("-")
    // console.log("Y ", cursorPositionY);
    // console.log("h ", elementHeight);
    // console.log("ENTERING overlay element. ", e.target);

    let boundaryLimit = 15;

    if (enteredSide === "left" || enteredSide === "right") {
      if (cursorPositionX > boundaryLimit && cursorPositionX < elementWidth - boundaryLimit) {
        // console.log("horizontally, from inner");
        return true;
      }
      else {
        // console.log("horizontally, from outer");
        return false;
      };
    }
    else {
      if (cursorPositionY > boundaryLimit && cursorPositionY < elementHeight - boundaryLimit) {
        // console.log("vertically, from inner");
        return true;
      }
      else {
        // console.log("vertically, from outer");
        return false;
      }
    }

    // if (cursorPositionX > boundaryLimit && cursorPositionX < elementWidth - boundaryLimit
    //   && cursorPositionY > boundaryLimit && cursorPositionY < elementHeight - boundaryLimit) { console.log("true"); return true; } else { console.log("false"); return false; }


  }

  let returnAndPrintMouseEntrySide = (mouseEntryEvent) => {

    function returnClosestEdge(x, y, w, h) {
      // console.log("--------------")
      // console.log("X ", x);
      // console.log("w ", w);
      // console.log("-")
      // console.log("Y ", y);
      // console.log("h ", h);
      function distMetric(x, y, x2, y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
      }

      var topEdgeDist = distMetric(x, y, w / 2, 0);
      var bottomEdgeDist = distMetric(x, y, w / 2, h);
      var leftEdgeDist = distMetric(x, y, 0, h / 2);
      var rightEdgeDist = distMetric(x, y, w, h / 2);

      var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
      switch (min) {
        case leftEdgeDist:
          return "left";
        case rightEdgeDist:
          return "right";
        case topEdgeDist:
          return "top";
        case bottomEdgeDist:
          return "bottom";
        default: return "Error";
      }
    }

    function returnOffsetsAsObject(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }
    let offSets = returnOffsetsAsObject(mouseEntryEvent.target);

    let entryEdge = returnClosestEdge(
      mouseEntryEvent.pageX - offSets.left,
      mouseEntryEvent.pageY - offSets.top,
      mouseEntryEvent.target.offsetWidth,
      mouseEntryEvent.target.offsetHeight
    );

    // console.log("entered side: ", entryEdge);
    return entryEdge;

  }
  function setXYCoordinatesForNewPosition(enteredSide) {
    let moveX = 0;
    let moveY = 0;
    switch (enteredSide) {
      case 'left':
        moveX = -100
        break
      case 'right':
        moveX = 100
        break
      case 'top':
        moveY = -100
        break
      case 'bottom':
        moveY = 100
        break
      default: console.log("numbers for mouse moving overlay messed up")
    }
    return { x: moveX, y: moveY }
  }

  return (
    <div
      className='image'  //setting properties of img
      style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
      onMouseEnter={(e) => {
        let enteredSide = returnAndPrintMouseEntrySide(e);
        if (!ReturnTrueIfEnteringWithinElement(e, enteredSide)) {
          let { x, y } = setXYCoordinatesForNewPosition(enteredSide);
          const mouseOverlayElement = document.createElement('div');
          mouseOverlayElement.setAttribute('id', 'mouseOverlay');
          mouseOverlayElement.classList.add('mouse-overlay');
          mouseOverlayElement.style.transform = `translate(${x}%,${y}%)`;
          //insert layer into correct position
          e.target.prepend(mouseOverlayElement);
          //animate movement
          mouseOverlayElement.classList.add('animateToCenter');
        }
      }}

      onMouseLeave={async (e) => {
        let enteredSide = returnAndPrintMouseEntrySide(e);
        if (ReturnTrueIfExitingWithinElement(e, enteredSide)) return; //no animation when exiting internal elements
        e.persist();

        let animateChoice = '';
        switch (enteredSide) {
          case 'left':
            animateChoice = 'animateGoLeft'
            break
          case 'right':
            animateChoice = 'animateGoRight'
            break
          case 'top':
            animateChoice = 'animateGoUp'
            break
          case 'bottom':
            animateChoice = 'animateGoDown'
            break
          default: console.log("numbers for mouse moving overlay messed up")
        }


        if (e.target.firstElementChild != null) {
          e.target.firstElementChild.style.animation = `${animateChoice} 0.3s forwards ease-in-out`;
          await new Promise(resolve => setTimeout(resolve, 305));
          if (e.target.firstElementChild != null) e.target.firstElementChild.remove(); //if needs to be 2x as there is 300ms delay
        }
      }}
    >

    </div>
  )
}

export default MiroMouseEntryOverlay
