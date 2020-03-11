// Use destructering to get the properties off the person
function getFullName({firstName, lastName}) {
  return firstName + ' ' + lastName
}


const person1 = {
  firstName: 'Jimmy',
  lastName: 'Carr'
}

const result = getFullName(person1)

console.log(result)