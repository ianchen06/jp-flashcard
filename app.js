const kuroshiro = require('kuroshiro')

kuroshiro.init(
  {
    dicPath: '/dict'
  },
  (err) => {
    if(err){
      console.error(err);
    } else {
      // kuroshiro is ready
      const result = kuroshiro.convert('初めまして',
        {mode: 'okurigana'});
      console.log(result);
    }
  });

const toOutput = (e) => {
  e.preventDefault();
  if (e.type === 'keyup') {
    if (e.key !== "Enter") {
      return
    }
  }else if(e.type === 'blur'){

  }
  const output = kuroshiro.convert(e.target.value, {mode: 'okurigana'})
  document.getElementById('output').textContent = output
}

const expression = document.getElementById('expression')
expression.addEventListener('blur', toOutput)
expression.addEventListener('keyup', toOutput)
//translate('喫茶店', {from: 'ja', to: 'en'}).then(res => {
//    console.log(res.text);
//    //=> Ik spreek Nederlands!
//    console.log(res.from.text.autoCorrected);
//    //=> true
//    console.log(res.from.text.value);
//    //=> I [speak] Dutch!
//    console.log(res.from.text.didYouMean);
//    //=> false
//}).catch(err => {
//    console.error(err);
//});

// fetch('https://jisho.org/search/%E5%85%83%E6%B0%97',
//   {method: 'get',
//     mode: 'no-cors'
//   })
// .then((resp)=>{
//   console.log(resp.body)
// })
