
let user = {
  name: prompt("Ismingizni kiriting:"),
  id: prompt("ID raqamingizni kiriting:"),
  password: prompt("Parolingizni kiriting:")
};

console.log(user);


document.getElementById("output").innerHTML = `
  <p><strong>Ism:</strong> ${user.name}</p>
  <p><strong>ID:</strong> ${user.id}</p>
  <p><strong>Parol:</strong> ${user.password}</p>
`;
