const DeleteStore = (deleteStores) => fetch(`http://localhost:8080/stores/${deleteStores.id}`, {
    method: 'DELETE'
})
    .catch((error) => { console.log(error) })

export default DeleteStore;