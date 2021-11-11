"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function divDom() {
  return React.createElement(
    "div",
    { id: "xxq", "class": "divClass" },
    "this is div",
    React.createElement(
      "span",
      null,
      "this is span"
    )
  );
}

function Counter() {
  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return createElement(
    "h1",
    { onClick: function onClick() {
        return setState(function (c) {
          return c + 1;
        });
      } },
    "Count: ",
    state
  );
}
