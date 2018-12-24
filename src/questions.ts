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
  questionItems: [
    {
      questionId: '1-1',
      questionText: 'console.log(hoge) で出力される文字は？',
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
  code: `  <button id="a">
  <button id="b">
  
  var result  = '';
  var aButton = document.getElementById('a');
  var bButton = document.getElementById('b');
  `,
  questionItems: [
    {
      questionId: '3-1',
      questionText: 'console.logで出力される文字はなにか',
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
}]

export default question;
