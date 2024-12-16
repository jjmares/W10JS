/* 
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user
to add a new row to the table when clicking on submit.
*/

/*
Add info to the table when submitting

form the <input> fields and their .value()
firstName, lastName, favoriteColor

get the # value

get values from the form

Get values with getElementById()
which means I need need ID's in the values

*/
const formButton = document.getElementById('formSubmit')

//To start the numbering at 0 for each sumbitted value
let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    //variables to hold the values of the form
    let firstName = document.getElementById('firstName').value 
    let lastName = document.getElementById('lastName').value
    let favoriteColor = document.getElementById('favoriteColor').value

    //Create a node...tr node to append to my form
    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteColorNode = document.createElement('td')
    favoriteColorNode.innerHTML = favoriteColor
    newTableRow.append(favoriteColorNode)

    document.getElementById('tBody').appendChild(newTableRow)

    // This is to empty the values
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

    number++
})