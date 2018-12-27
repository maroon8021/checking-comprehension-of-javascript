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
  detail: `
  <strong>解説</strong><br>
  jsはシングルスレッドで、上から順に実行されていきます。(変数の巻き上げ等はここでは取り上げません。興味がある方はぜひ調べてみてください)<br>
  しかしながら、重たい処理や、時間のかかる処理、特にサーバーサイドにリクエスト投げる系のやつを同期的に実行すると、それが終わるまで他の処理を全部止めてしまいます。<br>
  そのためそういった処理は <strong>非同期</strong> で実行したりします。<br>
  setTimeoutも非同期処理のひとつです。<br>
  console.log("1")が終わったあとに、 <strong>setTimeout</strong> というmethod自体は実行されています。ただし、中のconsole.log("2") は1000ミリ秒後に実行されます。
  console.log("3")はforを1000回回されてますが、あくまで同期的処理は上から順に実行されるため、3が表示されたあとに後続の4が表示されます。
  `,
  answerStr:`
  <strong>答え</strong><br>
  2-1 : <strong>1 -> 3 -> 4 -> 2</strong> <br>
  `,
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

  document.addEventListener('click', function(e){
    result += 'document:click by capture/';
  },true)

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
  detail: `
  <strong>解説</strong><br>
  これはイベントの伝播のお話です。<br>
  ユーザーの操作に応じてそれぞれ処理を行うjsにおいて、どうやってイベントが動いているかを把握することはとても大切なことです。<br><br>
  イベントフェーズに関する詳細はこちらの記事をご参照ください。<br>
  <a target="_blank" href="https://qiita.com/hosomichi/items/49500fea5fdf43f59c58">イベントフェーズについて</a><br>
  上記のソースコードで対象としてるイベントの流れとしては<br>
  <strong> aButtonのblur -> bButtonのfocus -> Buttonのclick </strong><br>
  となります。
  bButtonのfocusイベント発火時に <strong>stopPropagation()</strong> が呼ばれていますが、clickのイベントは別のイベントなので影響しません。<br>
  documentに対して2個clickイベントがlistenされていますが、後者のほうは第三引数にtrueが入っていることから、キャプチャーフェーズで呼ばれます。<br>
  流れとしては<br>
  <strong> documentのclick(キャプチャー) -> bButtonのclick(キャプチャー) -> bButtonのclick(バブリング) -> documentのclick(バブリング) </strong><br>
  となります。<br>
  bButtonのclick時に<strong>stopPropagation()</strong>が呼ばれているので、ここでイベントの伝播が止まり、<strong>documentのclick(バブリング)</strong>のlistenerは呼ばれません。<br>
  そのため、<strong>document:click by capture/b:click/</strong>となります

  
  `,
  answerStr:`
  <strong>答え</strong><br>
  3-1 : <strong>a:blur/b:focus/document:click by capture/b:click/</strong> <br>
  `,
  questionItems: [
    {
      questionId: '3-1',
      questionText: 'console.logで出力される文字はなにか',
      answer : 4,
      userAnswer : null,
      answerItems: [
        {
          answerId: 1,
          answerText: 'a:blur/b:focus/'
        },
        {
          answerId: 2,
          answerText: 'a:blur/b:focus/document:click by capture/'
        },
        {
          answerId: 3,
          answerText: 'a:blur/b:focus/b:click/'
        },
        {
          answerId: 4,
          answerText: 'a:blur/b:focus/document:click by capture/b:click/'
        },
        {
          answerId: 5,
          answerText: 'a:blur/b:focus/document:click by capture/b:click/document:click/'
        },
        {
          answerId: 6,
          answerText: 'b:focus/'
        },
        {
          answerId: 7,
          answerText: 'b:focus/b:click/'
        },
        {
          answerId: 8,
          answerText: 'b:focus/document:click by capture/b:click/document:click/'
        }
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
  detail: `
  <strong>解説</strong><br>
  javascriptの厄介な性質として、型が暗黙的に変わってしまうところがあります。<br>
  number + numberはもちろんnumberですが、string + numberは<strong>string</strong>に変換されてしまいます。<br>
  一方でstring - numberは<strong>number</strong>になります。<br>
  そのため、この問題のように直感的ではない結果がかえってきてしまいます<br>
  数値を扱うときは必ずparseIntでnumberになおしてから処理しましょう<br><br>
  <a target="_blank" href="https://jsprimer.net/basic/implicit-coercion/" >https://jsprimer.net/basic/implicit-coercion/</a>
  `,
  answerStr:`
  <strong>答え</strong><br>
  4-1 : <strong>67</strong> <br>
  `,
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
  detail: `
  <strong>解説</strong><br>
  ここでも暗黙の型変換が起きています。<br>
  10 == '10' これはtrueになってしまいます。<br>
  明示的に == もしくは != を使わない限りは === か !== で判定するようにしましょう。<br>
  * null == undefinedなので、nullでもなく、undefinedでもない状態を判定したいときは <strong>hoge != null</strong> とやることがあります。<br><br>
  型変換もややこしいところがありますが、trueになるもの、falseになるものもまた一癖あったりします。<br>
  今回の問題でいうと<br>
  1 == true と [] はtrueとして判定されてしまいます<br>
  特に後者に関してはarrayのlengthで判定かけるなどして、意図しない判定結果にならないように気をつけましょう<br><br>
  <a target="_blank" href="https://qiita.com/PianoScoreJP/items/e43d70ec188c6fed73ed" >JavaScript 忘れがちな　=== と == の違い
  </a><br>
  <a target="_blank" href="https://qiita.com/katsuo5/items/ffb8b83c6b8a6dcbd9d6" >JavaScriptでfalseになるもの
  </a>
  
  `,
  answerStr:`
  <strong>答え</strong><br>
  5-1 : <strong>truth : str10 == num10/num1 == true/emptyArray</strong>
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
  detail: `
  <strong>解説</strong><br>
  var hoge = "hoge"<br>
  と宣言をしたタイミングで変数hogeがグローバルに登録されます。そして、どこからでもその変数にアクセスできてしまいます。<br>
  そういった変数/関数のバッティングや予期せぬoverrideを避けるための工夫の一つに<strong>名前空間(namespace)</strong>というものがあります(ありました。正直モダンなjsでは書きません)。<br>
  ざっくり言ってしまえばobjectの中に入れて衝突を防ごうというものです。<br>
  var mySpace = mySpace || {}<br>
  mySpaceがすでに他の場所で定義されていた場合はそれをそのまま使い、なければobjectを渡す、といったことをすることによって予期せぬ上書きを防ぎます。<br>
  上記の問題では<strong>mySpace.showText</strong>がindex2.jsで再定義されているため、答えのような表示になります<br>
  
  `,
  answerStr:`
  <strong>答え</strong><br>
  6-1 : <strong>sample text : called from index2.js</strong>
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
  var Sample = function(){}
  Sample.hoge = "hoge"
  Sample.prototype.hoge = "hogehoge"
  var hoge = new Sample()
  console.log(hoge.hoge)
  `,
  detail: `
  <strong>解説</strong><br>
  jsのfunctionは 第一級オブジェクト ですが、その名の通り、オブジェクトです。<br>
  var hoge = function(){}<br>
  hoge.huga = "huga"<br>
  とやってしまうと、<br>
  var hoge = {}<br>
  hoge.huga = "huga"<br>
  ほぼ同義です。<br>
  new hoge()として得たインスタンスには引き継がれません。<br>
  インスタンスに引き継がれ、外からアクセスできるようにするためには<br>
  var hoge = function(){<br>
    &nbsp;&nbsp;this.huga = "huga"<br>
  }<br>
  hoge.prototype.hugahuga = "hugahuga"<br>
  と内部にthisとしてもたせるか、prototypeとして記載するかのどちらかだけです。<br>
  var hogehoge = new hoge()<br>
  console.log(hogehoge.huga) // "huga"<br>
  console.log(hogehoge.hugahuga) // "hugahuga"<br>
  
  `,
  answerStr:`
  <strong>答え</strong><br>
  7-1 : <strong>hogehoge</strong>
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
  id: 8,
  code: `
  String.prototype.toNumber = function(){
    return parseInt(this, 10);
  }
  
  var str10 = '10';
  console.log(str10.toNumber())
  `,
  detail: `
  <strong>解説</strong><br>
  StringやArrayなどのconstractorも同様にprototypeを持っており、そこに改めて登録することで定義したStringやArrayのインスタンスもそれを使うことができます。<br>
  ただし、これはあまり推奨された行為ではありません。
  他のライブラリでこういった追加や削除が行われていたりした場合にコンフリクトしたり、文書化などして他の開発者が正確に把握できる状態をつくっておかないと、かえって不便になることがあります。<br>
  IEでまだサポートされていない機能のポリフィルとして追加するときなどには使えますが、原則こういったモンキーパッチと呼ばれる実装は控えましょう。
  
  `,
  answerStr:`
  <strong>答え</strong><br>
  8-1 : <strong>10(number)</strong>
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
  detail: `
  <strong>解説</strong><br>
  javascriptの<strong>this</strong>にまつわる問題です。<br>
  詳細な解説は下記の記事に譲るとして、以下では起きてる事象について解説します。<br>
  <a target="_blank" href="https://qiita.com/takeharu/items/9935ce476a17d6258e27">JavaScriptの「this」は「4種類」？？</a><br><br>

  sample.init();が呼ばれるタイミングではfunction内のthisなので、インスタンスを生成した際に作られた<strong>this.element</strong>に対してaddEventListenerが実行されます。<br>
  ただし、そのlistenerないではbindしてる<strong>this.element</strong>がthisとして扱われるため、答えのような表示となります。<br>

  listenerの中でもインスタンスのthisを参照したい、ということのほうが多いと思います。<br>
  いろいろと対処の方法はありますが、シンプルな解決策としては<br>
  Sample.prototype.init = function(){<br>
    &nbsp;&nbsp; this.element.addEventListener('click', function(){<br>
      &nbsp;&nbsp;&nbsp;&nbsp; console.log(this)<br>
      &nbsp;&nbsp; }.<strong>this</strong>)<br>
  }<br>
  としてbindする対象を変えてあげることができます。
  `,
  answerStr:`
  <strong>答え</strong><br>
  9-1 : <strong>&lt;button id="sample">sample &lt;/button> (Element)</strong>
  `,
  questionItems: [
    {
      questionId: '9-1',
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

  GoodEvening.prototype = new Greeting();
  
  GoodEvening.prototype.say = function(){
    return 'Good evening ' + this.people + '!!!';
  }

  
  var goodMorning = new GoodMorning();
  var goodEvening = new GoodEvening();
  
  console.log(goodMorning.say()) // 10-1
  console.log(goodEvening.say()) // 10-2
  goodEvening.lastWord = ' How are you?';
  goodEvening.setPeople('Tom');
  console.log(goodMorning.sayHello()) // 10-3
  console.log(goodEvening.sayHello()) // 10-4
  `,
  detail: `
  <strong>解説</strong><br>
  javascriptの<strong>inherit</strong>や<strong>override</strong>にまつわる問題です。<br>
  jsではprototypeを使ってmethodを渡しています。そのため、継承元のインスタンスを継承先のprototypeに渡す、ということで継承を実現します。<br>
  そしてoverrideしたいとなった場合はその継承先のfunctionで同様に定義をすることでoverrideを実現することができます。<br><br>

  <strong>console.log(goodMorning.say()) // 10-1</strong>では<br>
  GoodMorningがsayのmethodをoverrideしています。ただしthis.peopleはGreetingから渡されてるものから変えてないため、<strong>Good morning everyone!!!</strong>という表示になります<br><br>
  <strong>console.log(goodEvening.say()) // 10-2</strong>も同様です。<br>
  sayのmethodがoverrideされているので、<strong>Good evening everyone!!!</strong>という表示になります<br><br>
  <strong>console.log(goodMorning.sayHello()) // 10-3</strong>では<br>
  何もoverrideされていないので<strong>Hello everyone</strong>という表示になります<br><br>
  一方で<strong>console.log(goodEvening.sayHello()) // 10-4</strong>では<br>
  <strong>goodEvening.lastWord = ' How are you?';</strong>と<strong>goodEvening.setPeople('Tom');</strong>で値が更新されているため、
  <strong>Hello Tom How are you</strong>という表示になります<br><br>


  `,
  answerStr:`
  <strong>答え</strong><br>
  10-1 : <strong>Good morning everyone!!!</strong> <br>
  10-2 : <strong>Good evening everyone!!!</strong> <br>
  10-3 : <strong>Hello everyone</strong> <br>
  10-4 : <strong>Hello Tom How are you</strong> <br>

  `,
  questionItems: [
    {
      questionId: '10-1',
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
      questionId: '10-2',
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
      questionId: '10-3',
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
      questionId: '10-4',
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
