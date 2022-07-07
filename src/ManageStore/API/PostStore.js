const PostStore = (newStores) => fetch("http://localhost:8080/stores", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newStores
})
    .then((stores) => stores.json())
    .catch((error) => { console.log(error) })

export default PostStore;