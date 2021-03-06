var test = require('prova');
var style = require("./");
var select = require("select-dom");
var el;

test('hides and shows', function (t) {
  reset();
  t.plan(2);

  style.hide(el);
  t.equal(el.style.display, 'none');
  style.show(el);
  t.equal(el.style.display, '');
});

test('sets a css property', function (t) {
  reset();
  t.plan(3);

  style(el, 'color', 'red');
  t.equal(el.style.color, 'red');

  style(el, {
    background: 'yellow',
    margin: '20px'
  });

  t.equal(el.style.background, 'yellow');
  t.equal(el.style.margin, '20px');
});

function reset (){
  document.body.innerHTML = '<button>hello</button>';
  el = select('button');
};
