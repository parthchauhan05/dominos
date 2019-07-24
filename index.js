const $sizes = document.getElementById('sizes')
const $displaySizes = document.querySelector('.sizes')

$sizes.addEventListener('change', function (event) {
  $displaySizes.textContent = $sizes.value
})

const $toppings = document.querySelectorAll('.button')

const $pepperoni = document.querySelector('.pepperoni')
const $sausage = document.querySelector('.sausage')
const $olives = document.querySelector('.olives')

for (const topping of $toppings) {
  topping.addEventListener('click', function (event) {
    topping.classList.toggle('checked')
    // Alternative for following if condition
    // const $topping = document.querySelector(`.${topping.id}`)
    // $topping.classList.toggle('show')

    if (topping.id === 'pepperoni') {
      $pepperoni.classList.toggle('show')
    } else if (topping.id === 'sausage') {
      $sausage.classList.toggle('show')
    } else if (topping.id === 'olives') {
      $olives.classList.toggle('show')
    }
  })
}
