let calcBtn = document.getElementById('calcBtn')
let toH = document.getElementById('toHBtn')
let toHResult = document.getElementById('taskHour')
let doneDay = document.getElementById('doneDayBtn')
let doneSecurity = document.getElementById('doneSecurity')
let taskAmount = document.getElementById('taskAmountSubTitle')
let latestTask = document.getElementById('latestTaskSubTitle')
let doneBtn = document.getElementById('done')
let showEnd = document.getElementById('finalOfTheDay')
let historicMenu = document.getElementById('historicContainer')
let historicBtn = document.getElementById('openHistoric')
let historicList = document.getElementById('historicSectionContainer')

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

calcBtn.addEventListener('click', () => {
  if (taskTime.value > 0) {
    let calc = Number(taskTime.value) + Number(taskResult.value)

    taskResult.value = calc.toFixed(1)

    taskAmount.innerText++

    let date = new Date()
    let h = addZero(date.getHours())
    let m = addZero(date.getMinutes())
    let s = addZero(date.getSeconds())

    let hour = (latestTask.innerText = h + ':' + m + ':' + s)
    historicList.innerHTML += `<p>Última task: ${taskTime.value}min ás ${hour}</p>`

    doneDay.addEventListener('click', () => {
      document.getElementById('amount').innerText =
        'Total de tasks: ' + taskAmount.innerText
      document.getElementById('minutes').innerText =
        'Total de minutos: ' + taskResult.value
      document.getElementById('hours').innerText =
        'Total de horas: ' + toHResult.value

      showEnd.style = 'top: 0rem; display: flex'
    })
  }
})

toH.addEventListener('click', () => {
  if (taskResult.value > 0) {
    let calcToH = Number(taskResult.value) / 60

    toHResult.value = calcToH.toFixed(1) + ' hora(s)'
  }
})

doneSecurity.addEventListener('click', () => {
  if (doneSecurity.checked == true) {
    doneDay.disabled = false
  } else {
    doneDay.disabled = true
  }
})

doneBtn.addEventListener('click', () => {
  showEnd.style = 'top: -100rem'
  setInterval(() => {
    location.reload()
  }, 300)
})

let historicValue = 0
historicBtn.addEventListener('click', () => {
  if (historicValue <= 0) {
    document.getElementById('open').style = 'display: none'
    document.getElementById('close').style = 'display: block'
    historicMenu.style = 'transform: translateX(0)'
    historicValue = 1
  } else if (historicValue >= 1) {
    document.getElementById('open').style = 'display: block'
    document.getElementById('close').style = 'display: none'
    historicMenu.style = 'transform: translateX(-100%)'
    historicValue = 0
  }
})
