import fetch from 'node-fetch'
const number = 1;

// inteface é mais utilizado para tipar objetos, para tipar algo que não seja objeto.
// Caso queira tipar algo que não seja um objeto, deve-se utilizar type.
// interface valueType {
//   value: number
// }

interface UserData {
  login: string,
  name: string,
}

async function getUserGithub(username: string ): Promise<UserData>{
  const response = await fetch('https://api.github.com/users/victorbr988')
  const jsonResponse = await response.json()

  return jsonResponse as UserData;
  // substituindo a tipagem padrão do retornno de uma promisse
  // para contornar isso, usa-se o casting "as Type"
}
