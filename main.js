function shuffle(elems, shuffleCards) {
  allElems = (function() {
    var ret = [],
      l = elems.length;
    while (l--) {
      ret[ret.length] = elems[l];
    }
    return ret;
  })();

  var shuffled = (function() {
      var l = allElems.length,
        ret = [];
      if (shuffleCards) {
        while (l--) {
          var random = Math.floor(Math.random() * allElems.length),
            randEl = allElems[random].cloneNode(true);
          allElems.splice(random, 1);
          ret[ret.length] = randEl;
        }
      } else {
        document.getElementById("shuffle").innerHTML = "";
        for (var i = 0; i < allElems.length; i++) {
          if (!allElems[i].className) {
            continue;
          }
          var sortPart = allElems[i].className.charAt(
            allElems[i].className.length - 1
          );
          if (sortPart.length >= 1) {
            ret.push([1 * sortPart, allElems[i]]);
          }
        }
        ret.sort(function(x, y) {
          return x[0] - y[0];
        });
        for (var i = 0; i < allElems.length; i++) {
          document.getElementById("shuffle").appendChild(ret[i][1]);
        }
      }
      return ret;
    })(),
    l = elems.length;

  while (l--) {
    if (shuffleCards) {
      elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
      elems[l].parentNode.removeChild(elems[l]);
    }
  }
}

var button = document.getElementById("shuffleBtn");
button.addEventListener(
  "click",
  function() {
    shuffle(document.querySelectorAll("#shuffle > div"), true);
  },
  false
);

var button = document.getElementById("sortBtn");
button.addEventListener(
  "click",
  function() {
    shuffle(document.querySelectorAll("#shuffle > div"), false);
  },
  false
);
