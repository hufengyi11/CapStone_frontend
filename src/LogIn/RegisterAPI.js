const RegisterAPI = (newUser) => fetch("http://localhost:3500/api/v1/registration", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newUser
})
    .then((user) => user.json())
    .catch((error) => { console.log(error) })

export default RegisterAPI;