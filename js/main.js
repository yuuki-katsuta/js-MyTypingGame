'use strict'

{

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0]
    //帰ってくるのは配列なので[0]をつけて値を取得する
    target.textContent = word
  }

  const words = [
    'red',
    'green',
    'natadecoco'
  ]

  let startTime
  let loc = 0
  let word
  //playしているかを管理
  let isPlaying = false

  const target = document.getElementById('target')
  //word = words[Math.floor(Math.random() * words.length)]
  //これで、０〜２のランダムな要素を取得できる
  //target.textContent = word
  //setWord()

  document.addEventListener('click', () => {
    if (isPlaying) {
      return
      //これ以降の処理はしない
    }
    isPlaying = true
    setWord()
    startTime = Date.now()
  })

  //documentオブジェクトに対して
  document.addEventListener('keydown', (e) => {

    if (e.key !== word[loc]) {
      return;
      //これ以降の処理をしない
    }
    //ここからは、e.key === word[loc]が保証されている
    //よって、if文を削除
    loc++
    //_ed
    //__d
    //___
    target.textContent = '_'.repeat(loc) + word.substring(loc)
    //substringで文字列を取り出す

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2)
        const result = document.getElementById('result')
        result.textContent = `Finished! ${elapsedTime} seconds!`
        return
        //returnがないと、またsetWord(wordなしで)してしまう
      }
      setWord()
      loc = 0
    }
  });



}
