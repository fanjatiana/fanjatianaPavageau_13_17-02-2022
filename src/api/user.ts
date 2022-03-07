interface InfosUsers {
    firstName:string,
    lastName:string,
    email: string,
    password: string,
}



export const users: InfosUsers[] = [
    {
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tony@stark.com',
      password: 'password123'
    },
    {
      firstName: 'Steve',
      lastName: 'Rogers',
      email: 'steve@rogers.com',
      password: 'password456'
    }
  ]