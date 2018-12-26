let question = [{
  id: 1,
  code: `  var hoge = "hoge";
  var huga = "huga";
  var needChange = false;
  if(needChange);
  hoge = "hogehoge";
  huga = "hugahuga";
  
  console.log(hoge);
  console.log(huga);`,
  detail: `
  <strong>解説</strong><br>
  まず根本的に <br><br>
  var hoge = "hoge" <br>
  hoge = "hogehoge"  <br>
  console.log(hoge) // hogehoge  <br><br>
  と2行目で更新された結果がでます <br>
  が、この問題では <strong>if(needChange)</strong> がいて、こいつによって更新されるかどうかが変わってきます  <br>
  <strong>if(needChange)</strong>周辺のコードは実は  <br><br>
  if(needChange){  <br>
    &nbsp;&nbsp;hoge = "hogehoge"  <br>
  }  <br>
  huga = "hugahuga"  <br><br>
  と同義です。  <br>
  すなわち "if()" 以降に "{}" が無いものは一行だけifの中にあるという認識になります  <br>
  上記のneedChangeにはfalseが渡されているので、hogeは更新されず、最初に代入されたもので表示されます。  <br>
  ここでいいたい大事なことは、ちゃんと{}でくくりましょう。ってことです <br>
  `,
  answerStr:`
  <strong>答え</strong><br>
  1-1 : <strong>hoge</strong> <br>
  1-1 : <strong>hugahuga</strong> <br>
  `,
  questionItems: [
    {
      questionId: '1-1',
      questionText: 'console.log(hoge) で出力される文字は？',
      answer : 1,
      userAnswer : 1,
      answerItems: [
        {
          answerId: 1,
          answerText: 'hoge'
        },
        {
          answerId: 2,
          answerText: 'hogehoge'
        },
        {
          answerId: 3,
          answerText: 'NONE(nothing shown)'
        },
      ]
    },
    {
      questionId: '1-2',
      questionText: 'console.log(huga) で出力される文字は？',
      answer : 2,
      userAnswer : 1,
      answerItems: [
        {
          answerId: 1,
          answerText: 'huga'
        },
        {
          answerId: 2,
          answerText: 'hugahuga'
        },
        {
          answerId: 3,
          answerText: 'NONE(nothing shown)'
        },
      ]
    }
  ]
},{
  id: 2,
  code: `  console.log("1");
  setTimeout(function(){
    console.log("2");
  }, 1000);
  for(var i = 0; i < 1000; i++){
    if(i + 1 === 1000){
      console.log("3");
    }
  }
  console.log("4");`,
  questionItems: [
    {
      questionId: '2-1',
      questionText: '出力される順調はどれか',
      answer : 3,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: '1 -> 2 -> 3 -> 4'
        },
        {
          answerId: 2,
          answerText: '1 -> 2 -> 4 -> 3'
        },
        {
          answerId: 3,
          answerText: '1 -> 3 -> 4 -> 2'
        },
      ]
    }
  ]
},{
  id: 3,
  code: `  <button id="a" />
  <button id="b" />`,
  codeAnother:`
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
   *ユーザーがbButtonをクリックしたという
   *オペレーションを再現するためのmethodです。 
   */
  function clickOperation(){
    aButton.focus();
    bButton.focus();
    bButton.click();
  }
  `,
  questionItems: [
    {
      questionId: '3-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'a:blur/b:focus/'
        },
        {
          answerId: 2,
          answerText: 'a:blur/b:focus/b:click/'
        },
        {
          answerId: 3,
          answerText: 'a:blur/b:focus/b:click/document:click/'
        },
        {
          answerId: 4,
          answerText: 'b:focus/'
        },
        {
          answerId: 5,
          answerText: 'b:focus/b:click/'
        },
        {
          answerId: 6,
          answerText: 'b:focus/b:click/document:click/'
        },
      ]
    }
  ]
},{
  id: 4,
  code: `
  var number = 10;
  number = number - '4';
  number = number + '7';
  
  console.log(number);`,
  
  questionItems: [
    {
      questionId: '4-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: '13'
        },
        {
          answerId: 2,
          answerText: '67'
        },
        {
          answerId: 3,
          answerText: '1047'
        },
      ]
    }
  ]
},{
  id: 5,
  code: `
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
  `,
  
  questionItems: [
    {
      questionId: '5-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 7,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'truth : str10 == num10/'
        },
        {
          answerId: 2,
          answerText: 'truth : str10 === num10/'
        },
        {
          answerId: 3,
          answerText: 'truth : str10 == num10/num1 == true/'
        },
        {
          answerId: 4,
          answerText: 'truth : str10 === num10/num1 == true/'
        },
        {
          answerId: 5,
          answerText: 'truth : str10 == num10/emptyArray'
        },
        {
          answerId: 6,
          answerText: 'truth : str10 === num10/emptyArray'
        },
        {
          answerId: 7,
          answerText: 'truth : str10 == num10/num1 == true/emptyArray'
        },
        {
          answerId: 8,
          answerText: 'truth : str10 === num10/num1 == true/emptyArray'
        }
      ]
    }
  ]
},{
  id: 6,
  code: `
  <script type="text/javascript" src="index1.js"></script>
  <script type="text/javascript" src="index2.js"></script>
  <script>
    console.log(mySpace.showText())
  </script>
  `,
  codeAnother: `
  // index1.js
  var mySpace = mySpace || {}
  mySpace.text = 'sample text'
  mySpace.showText = function(){
    return mySpace.text
  }
  // End of index1.js

  // index2.js
  var mySpace = mySpace || {}
  mySpace.showText = function(){
    return mySpace.text + ' : called from index2.js'
  }
  // End of index2.js
  `,
  questionItems: [
    {
      questionId: '6-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 3,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'NONE(Error/Nothing shown)'
        },
        {
          answerId: 2,
          answerText: 'sample text'
        },
        {
          answerId: 3,
          answerText: 'sample text : called from index2.js'
        },
        {
          answerId: 4,
          answerText: ' : called from index2.js'
        },
        {
          answerId: 5,
          answerText: 'undefined : called from index2.js'
        }
      ]
    }
  ]
},{
  id: 7,
  code: `
  String.prototype.toNumber = function(){
    return parseInt(this, 10);
  }
  
  var str10 = '10';
  console.log(str10.toNumber())
  `,
  questionItems: [
    {
      questionId: '7-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: '10(String)'
        },
        {
          answerId: 2,
          answerText: '10(number)'
        },
        {
          answerId: 3,
          answerText: 'NONE(Error/Nothing shown)'
        },
      ]
    }
  ]
},{
  id: 8,
  code: `
  var Sample = function(){}
  Sample.hoge = "hoge"
  Sample.prototype.hoge = "hogehoge"
  var hoge = new Sample()
  console.log(hoge.hoge)
  `,
  questionItems: [
    {
      questionId: '8-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'hoge'
        },
        {
          answerId: 2,
          answerText: 'hogehoge'
        },
        {
          answerId: 3,
          answerText: 'NONE(Error/Nothing happens)'
        },
      ]
    }
  ]
},{
  id: 9,
  code: `
  <button id='sample'>sample</button>
  `,
  codeAnother:`
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
  `,
  questionItems: [
    {
      questionId: '8-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'Sample (instance of Sample function)'
        },
        {
          answerId: 2,
          answerText: '<button id="sample">sample</button> (Element)'
        },
        {
          answerId: 3,
          answerText: 'NONE(Error/Nothing happens)'
        },
      ]
    }
  ]
}
,{
  id: 10,
  code: `
  var Greeting = function(people){
    this.people = people || 'everyone'
  }
  Greeting.prototype.say = function(){
    return 'Hi ' + this.people + '!!!';
  }
  
  Greeting.prototype.sayHello = function(){
    return 'Hello ' + this.people + this.lastWord;
  }
  
  Greeting.prototype.setPeople = function(people){
    this.people = people;
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
    return 'Good evening ' + this.people + '!!!';
  }
  
  var goodMorning = new GoodMorning();
  var goodEvening = new GoodEvening('Tom');
  
  console.log(goodMorning.say())
  console.log(goodEvening.say())
  goodEvening.lastWord = ' How are you?';
  goodEvening.setPeople('Tom');
  console.log(goodMorning.sayHello())
  console.log(goodEvening.sayHello())
  `,
  questionItems: [
    {
      questionId: '8-1',
      questionText: 'console.log(goodMorning.say())で出力される文字はなにか',
      answer : 4,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'Hi !!!'
        },
        {
          answerId: 2,
          answerText: 'Hi everyone!!!'
        },
        {
          answerId: 3,
          answerText: 'Good morning !!!'
        },
        {
          answerId: 4,
          answerText: 'Good morning everyone!!!'
        },
        {
          answerId: 5,
          answerText: 'NONE(Error/Nothing happens)'
        },
      ]
    },
    {
      questionId: '8-2',
      questionText: 'console.log(goodEvening.say())で出力される文字はなにか',
      answer : 4,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'Hi !!!'
        },
        {
          answerId: 2,
          answerText: 'Hi everyone!!!'
        },
        {
          answerId: 3,
          answerText: 'Good evening !!!'
        },
        {
          answerId: 4,
          answerText: 'Good evening everyone!!!'
        },
        {
          answerId: 5,
          answerText: 'NONE(Error/Nothing happens)'
        },
      ]
    },
    {
      questionId: '8-3',
      questionText: 'console.log(goodMorning.sayHello())で出力される文字はなにか',
      answer : 2,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'Hello'
        },
        {
          answerId: 2,
          answerText: 'Hello everyone'
        },
        {
          answerId: 3,
          answerText: 'Hello everyone How are you'
        },
        {
          answerId: 4,
          answerText: 'Hello Tom How'
        },
        {
          answerId: 5,
          answerText: 'Hello Tom How are you'
        }
      ]
    },
    {
      questionId: '8-4',
      questionText: 'console.log(goodEvening.sayHello())で出力される文字はなにか',
      answer : 5,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'Hello'
        },
        {
          answerId: 2,
          answerText: 'Hello everyone'
        },
        {
          answerId: 3,
          answerText: 'Hello everyone How are you'
        },
        {
          answerId: 4,
          answerText: 'Hello Tom How'
        },
        {
          answerId: 5,
          answerText: 'Hello Tom How are you'
        }
      ]
    }
  ]
}]

export default question;
