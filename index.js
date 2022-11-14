//AJAX  Asynchronous JavaScript And XML
let id=0
// const llamarApi = ()=> {
//     id++
//     $.get(`https://www.breakingbadapi.com/api/quotes/${id}`, function(response,status){
//         console.log(response)
//         console.log(status)
//         $('#quote').text(response[0].quote)
//         $('#author').text(response[0].author)
    
//     })
// }

//Usando fetch nativo de JS
// const llamarApi = ()=> {
//     id++
//     fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
//     .then (response => response.json())
//     .then (data => {
//         $('#quote').text(data[0].quote)
//         $('#author').text(data[0].author)
//     })
// }

//fetch Async Await
const llamarApi = async()=> {
    id++
    const resp = await fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
    const data = await resp.json()
    $('#quote').text(data[0].quote)
    $('#author').text(data[0].author)
}

$('#siguiente').on('click',llamarApi)

