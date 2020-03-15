import React from 'react'
import './MiroMouseEntryOverlay.scss'

let returnAndPrintMouseEntrySide = (mouseEntryEvent) => {

  function returnClosestEdge(x, y, w, h) {
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

function setXY(enteredSide) {
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



/////////////////////   MAIN


function MiroMouseEntryOverlay({children}) {
  return (
    <div
      className='set-itself'  //setting properties of img
      onMouseEnter={(e) => {
        let { x, y } = setXY(returnAndPrintMouseEntrySide(e));
        const mouseOverlayElement = document.createElement('div');
        mouseOverlayElement.setAttribute('id', 'mouseOverlay');
        mouseOverlayElement.classList.add('mouse-overlay');
        mouseOverlayElement.style.transform = `translate(${x}%,${y}%)`;
        //insert layer into correct position
        e.target.prepend(mouseOverlayElement);
        //animate movement
        mouseOverlayElement.classList.add('animateToCenter');
      }}

      onMouseLeave={async (e) => {
        e.persist();
        let animateChoice = '';
        switch (returnAndPrintMouseEntrySide(e)) {
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

        e.target.firstElementChild.style.animation = `${animateChoice} 0.3s forwards ease-in-out`;
        await new Promise(resolve => setTimeout(resolve, 305));
        if (e.target.firstElementChild != null) { e.target.firstElementChild.remove(); }
      }
      }
    >
{children}
    </div>
  )
}

export default MiroMouseEntryOverlay
