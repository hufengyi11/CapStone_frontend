const DeleteItem = (deleteItems) => fetch("http://localhost:8080/items", {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: deleteItems
})
    .then((items) => items.json())
    .catch((error) => { console.log(error) })

export default DeleteItem