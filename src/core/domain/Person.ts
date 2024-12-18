export class Person {
  name: string
  email: string
  document?: string
  telephone: string
  gender?: string
  photo?: string
  typePerson: string // física | jurídica
  typeAccess: string // cliente | gestor
  password: string
  //address: Address=
  //company: Company=
  isActive: boolean

  constructor() {
    this.name = ""
    this.email = ""
    this.password = ""
    this.telephone = ""
    this.isActive = true
    this.typeAccess = "cliente"
    this.typePerson = "fisica"
  }
}

//export default new Person
