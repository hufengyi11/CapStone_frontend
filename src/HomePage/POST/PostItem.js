const PostItem = (newItems) => fetch("http://localhost:8080/item", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newItems
})
    .then((items) => items.json())
    .catch((error) => { console.log(error) })

export default PostItem