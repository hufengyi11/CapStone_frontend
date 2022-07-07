const DeleteItem = (deleteItems) => fetch(`http://localhost:8080/items/${deleteItems.id}`, {
    method: 'DELETE'
})
    .catch((error) => { console.log(error) })

export default DeleteItem