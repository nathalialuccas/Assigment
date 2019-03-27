window.addEventListener('load', function(){
  // wait for the window to load before doing anything
  const form = document.querySelector('form')

  function validate(input) {
    // this function takes an argument, the number that should come from the form
    const multiplierIndex = 9
    const convertedArray = input.toString().split("").map(Number)

    const result = convertedArray.reduce(
      (acc, number, index) => (acc + (number * ( multiplierIndex - index ))),
    0)

    const hasValidLength = convertedArray.length === 9
    const isDivisibleByEleven = !(result % 11)
    const isNotThreeOfAKind = !/(.)\1{2}/.test(input)

    // this is a bit of a noob fix, you can make it better -- you can also

    if (hasValidLength && isDivisibleByEleven && isNotThreeOfAKind) {
      alert("Yay you won")
      return false;
    } else {
      alert("try again")
      // you can try to re-render the page here after the alert
      return false;
    }
  }

  // add an event listener to the form, it's easier than actually use onsubmit
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const number = event.target["number"].value
    // we get the value of the input by using the event.target, then the name of the input
    // we want, then .value

    validate(number);
    // then we call the function validate, passing that number as an argument
  })
})
