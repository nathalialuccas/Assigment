window.addEventListener('load', function(){

  const form = document.querySelector('form')

  function validate(input) {

    const multiplierIndex = 9
    const convertedArray = input.toString().split("").map(Number)

    const result = convertedArray.reduce(
      (acc, number, index) => (acc + (number * ( multiplierIndex - index ))),
    0)

    const hasValidLength = convertedArray.length === 9
    const isDivisibleByEleven = !(result % 11)
    const isNotThreeOfAKind = !/(.)\1{2}/.test(input)



    if (hasValidLength && isDivisibleByEleven && isNotThreeOfAKind) {
      alert("Yay you won")
      return false;
    } else {
      alert("try again")

      return false;
    }
  }


  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const number = event.target["number"].value


    validate(number);

  })
})
