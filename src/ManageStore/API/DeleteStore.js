const DeleteStore = (deleteStores) => fetch("http://localhost:8080/stores", {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: deleteStores
})
    .then((stores) => stores.json())
    .catch((error) => { console.log(error) })

export default DeleteStore;