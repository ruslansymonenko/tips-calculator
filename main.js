document.addEventListener('DOMContentLoaded', () => {
  const tipPercentBtns = document.querySelectorAll('.app-controllers__tip-item');

  let bill = 0;
  let numberOfPeople = 1;
  let activeTipPercent = 10;


  function setActiveTip (btn) {
    if(btn.textContent != 'Custom') {
      let btnAmount = parseInt(btn.textContent, 10);
      activeTipPercent = btnAmount;
    } else {
      console.log('custom');
    }
  }

  function showActiveTip (btns, btn) {
    btns.forEach(item => {
      if(item === btn) {
        item.classList.add('app-controllers__tip-item--active');
      } else {
        item.classList.remove('app-controllers__tip-item--active');
      }
    })
  }

  function calculate (tipPercent) {

  }

  function reset () {

  }

  tipPercentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveTip(btn);
      showActiveTip(tipPercentBtns, btn);
    })
  })

})