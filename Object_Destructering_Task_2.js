function getFullName(person) {
  // Use destructering to get the properties off the person
  let {firstName} = person // --> destructer here
  let {lastName} = person // --> destructer here
  
  return firstName + ' ' + lastName
}


const person1 = {
  firstName: 'Jimmy',
  lastName: 'Carr'
}

const result = getFullName(person1)

console.log(result)