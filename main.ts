let a: any = {name: 'Duy', greeting: function() { console.log(`Hello, ${this.name}!`); }};

function greeting(person: any) {
  person.what();
}