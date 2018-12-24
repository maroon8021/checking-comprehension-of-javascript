# Question

# Spec
- Can Answer
- Can have their answer on URL params
- Totall score -> 一番上に一覧と合計点出てもいいかも

## form sample Questions
```
var hoge = "hoge"
var huga = "huga"
var needChange = false
if(needChange) 
hoge = "hogehoge"
huga = "hugahuga"

console.log(hoge)
console.log(huga)
```
Q.
1-1 console.log(hoge) で出力される文字は？
1-2 console.log(huga) で出力される文字は？
A. (Your)
`Select box?`

## form sample Answers
```
var hoge = "hoge"
var huga = "huga"
var needChange = false
if(needChange) 
hoge = "hogehoge"
huga = "hugahuga"

console.log(hoge)
console.log(huga)
```
Q.
1-1 console.log(hoge) で出力される文字は？
1-2 console.log(huga) で出力される文字は？
A. (Correct Answer)
`Select box?`

A. (Your answer) -> primary or danger

Detail


# Questions list
## 1. ifのスコープ
```
var hoge = "hoge"
var huga = "huga"
var needChange = false
if(needChange) 
hoge = "hogehoge"
huga = "hugahuga"

console.log(hoge)
console.log(huga)
```
Q.
- 1-1 console.log(hoge) で出力される文字は？
- 1-2 console.log(huga) で出力される文字は？

A. 
- hoge
- hugahuga
D.
まず根本的に
var hoge = "hoge"
hoge = "hogehoge"
console.log(hoge) // hogehoge
と2行目で更新された結果がでます
が、この問題では `if(needChange)` がいて、こいつによって更新されるかどうかが変わってきます
if(needChange)周辺のコードは実は
```
if(needChange){
  hoge = "hogehoge"
}
huga = "hugahuga"
```
と同義です。
すなわち `if()` 以降に `{}` が無いものは一行だけifの中にあるという認識になります
上記のneedChangeにはfalseが渡されているので、hogeは更新されず、最初に代入されたもので表示されます。
ここでいいたい大事なことは、ちゃんと{}でくくりましょう。ってことです

## 2. 同期処理と非同期処理
```js
console.log("1")
setTimeout(function(){
  console.log("2")
}, 1000)
for(var i = 0; i < 1000; i++){
  if(i + 1 === 1000){
    console.log("3")
  }
}
console.log("4")
```
Q.出力される順調に書きなさい
A. 1 -> 3 -> 4 -> 2
D.
jsはシングルスレッドで、上から順に実行されていきます。(変数の巻き上げ等ありますが、それはここでは言及しません。興味がある人は別途調べてください)
しかしながら、重たい処理や、時間のかかる処理、特にサーバーサイドにリクエスト投げる系のやつを同期的に実行すると、それが終わるまで他の処理を全部止めてしまいます。
そのためそういった処理は `非同期` で実行したりします。
setTimeoutも非同期処理の有名なひとつです。
console.log("1")が終わったあとに、 `setTimeout` というmethod自体は実行されています。ただし、中のconsole.log("2") は1000ミリ秒後に実行されます。
console.log("3")はforを1000回回されてますが、あくまで同期的処理は上から順に実行されるため、3が表示されたあとに後続の4が表示されます。

## 3. prototype
```
var hoge = function(){}
hoge.huga = "huga"
hoge.prototype.huga = "hugahuga"
var huga = new hoge()
console.log(huga.huga)
```
Q.出力される文字を書きなさい
A.hugahuga
D.
jsのfunctionは `第一級オブジェクト` ですが、その名の通り、オブジェクトです。
var hoge = function(){}
hoge.huga = "huga"
とやってしまうと、
var hoge = {}
hoge.huga = "huga"
ほぼ同義です。
new hoge()として得たインスタンスには引き継がれません。
インスタンスに引き継がれ、外からアクセスできるようにするためには
```js
var hoge = function(){
this.huga = "huga"
}
```
hoge.prototype.hugahuga = "hugahuga"
と内部にthisとしてもたせるか、prototypeとして記載するかのどちらかだけです。
```
var hogehoge = new hoge()
console.log(hogehoge.huga) // "huga"
console.log(hogehoge.hugahuga) // "hugahuga"
```
↑順番は要確認

## 4. stopPropagationとpreventDefault
Q.
```html
<button id="a">
<button id="b">
```
```js
var result  = '';
var aButton = document.getElementById('a');
var bButton = document.getElementById('b');

aButton.addEventListener('blur', function(e){
  result += 'a:blur/';
})

bButton.addEventListener('focus', function(e){
  result += 'b:focus/';
  e.stopPropagation();
})

bButton.addEventListener('click', function(e){
  result += 'b:click/';
  e.stopPropagation();
})

document.addEventListener('click', function(e){
  result += 'document:click/';
})

clickOperation()

setTimeout(function(){
  console.log(result);
}, 3000)

/**
 *もともとaButtonにfocusがあたっていた状態で、
 *ユーザーがbButtonをクリックしたというオペレーションを再現するためのmethodです。 
 */
function clickOperation(){
  aButton.focus();
  bButton.focus();
  bButton.click();
}
```
console.logで出力される文字はなにか

A.
`a:blur/b:focus/b:click/`

## 5. 数字の問題
Q.
```js
var number = 10;
number = number - '4';
number = number + '7';

console.log(number);
```
console.logで出力される文字はなにか

A. `67`

## 6. == & === と true false
```js
var result = 'truth : ';
var str10 = '10';
var num10 = 10;
var num1 = 1;
var emptyArray = [];

if(str10 == num10){
  result += 'str10 == num10/';
} 
if(str10 === num10){
  result += 'str10 === num10/';
}
if(num1 == true){
  result += 'num1 == true/';
}
if(emptyArray){
  result += 'emptyArray';
}
console.log(result);
```
A.
`truth : str10 == num10/num1 == true/emptyArray`

D.
https://qiita.com/katsuo5/items/ffb8b83c6b8a6dcbd9d6
https://qiita.com/PianoScoreJP/items/e43d70ec188c6fed73ed
https://google.github.io/closure-library/api/goog.html#isDef

## 7. string とかのoverride
```js
String.prototype.toNumber = function(){
  return parseInt(this, 10);
}

var str10 = '10';
console.log(str10.toNumber())
```
A.10(number)


## 8. inherit & override
```js
var Greeting = function(people){
  this.people = people || 'everyone'
}
Greeting.prototype.say = function(){
  return 'Hi ' + this.people + '!!!';
}

Greeting.prototype.sayHello = function(){
  return 'Hello ' + this.people + this.lastWord;
}

Greeting.prototype.lastWord = '';

var GoodMorning = function(){}

GoodMorning.prototype = new Greeting();

GoodMorning.prototype.say = function(){
  return 'Good morning ' + this.people + '!!!';
}

var GoodEvening = function(){}
GoodEvening.prototype = Greeting.prototype;
GoodEvening.prototype = new Greeting();

GoodEvening.prototype.say = function(){
  return 'Good Evening ' + this.people + '!!!';
}

var goodMorning = new GoodMorning();
var goodEvening = new GoodMorning();

console.log(goodMorning.say())
console.log(goodEvening.say())
goodEvening.lastWord = ' How are you?';
console.log(goodMorning.sayHello())
console.log(goodEvening.sayHello())

```

## 9.namespace
```html
<script type="text/javascript" src="index1.js"></script>
<script type="text/javascript" src="index2.js"></script>
<script>
  console.log(mySpace.showText())
</script>
```

```js
// index1.js
var mySpace = mySpace || {}
mySpace.text = 'sample text'
mySpace.showText = function(){
  return mySpace.text
}
```
```js
// index2.js
var mySpace = mySpace || {}
mySpace.showText = function(){
  return mySpace.text + ' : called from index2.js'
}
```

## 10.this
Q.
```html
<button id='sample'>sample</button>
```
```js
var sampleElement = document.getElementById('sample')


var Sample = function(element){
  this.element = element
}

Sample.prototype.init = function(){
  this.element.addEventListener('click', function(){
    console.log(this)
  })
}

var sample = new Sample(sampleElement);
sample.init();
sampleElement.click();
```
A.
`<button id='sample'>sample</button>`

D.
https://qiita.com/takeharu/items/9935ce476a17d6258e27