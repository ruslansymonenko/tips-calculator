document.addEventListener('DOMContentLoaded', () => {
  const tipPercentBtns = document.querySelectorAll('.app-controllers__tip-item');
  const totalTipAmountContainer = document.querySelector('#tip-amount');
  const totalTipForPerson = document.querySelector('#tip-person');
  const calculateBtn = document.querySelector('.btn-calculate');
  const resetBtn = document.querySelector('.btn-reset');

  const billInput = document.querySelector('.app-controllers__bill-input');
  const peopleInput= document.querySelector('.app-controllers__people-input');

  let bill = 0;
  let numberOfPeople = 1;
  let activeTipPercent = 10;


  function setActiveTip (btn) {
    let btnAmount = parseInt(btn.textContent, 10);
    activeTipPercent = btnAmount;
  }

  function getInputsInfo () {
    const billInputValue = document.querySelector('.app-controllers__bill-input').value;
    const peopleInputValue = document.querySelector('.app-controllers__people-input').value;

    if(billInputValue) {
      bill = billInputValue;
    }

    if (peopleInputValue) {
      numberOfPeople = peopleInputValue
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

  function calculate () {
    getInputsInfo();
    let tipSum = bill * (activeTipPercent/100);
    let tipForPerson = tipSum / numberOfPeople;

    totalTipAmountContainer.textContent = tipSum.toFixed(2);
    totalTipForPerson.textContent = tipForPerson.toFixed(2);
  }

  function reset () {
    bill = 0;
    numberOfPeople = 1;
    activeTipPercent = 10;

    tipPercentBtns.forEach(item => {
      item.classList.remove('app-controllers__tip-item--active');
      if(item.textContent === '10%') {
        item.classList.add('app-controllers__tip-item--active');
      }
    })

    totalTipAmountContainer.textContent = '0.00';
    totalTipForPerson.textContent = '0.00';

    billInput.value = '';
    peopleInput.value = '';
  }

  tipPercentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveTip(btn);
      showActiveTip(tipPercentBtns, btn);
    })
  });

  calculateBtn.addEventListener('click', () => {
    calculate();
  });

  resetBtn.addEventListener('click', () => {
    reset();
  })

})