const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (event) =>{
    ui.clear();
    let text = event.target.value;
    if(text !== ""){
        profile.getProfile(text)
            .then((response) => {
                if(response.profile.length === 0){
                    ui.showAlert(text);
                }else{
                    // console.log(response.profile[0])
                    console.log(response);
                    ui.showProfile(response.profile[0]);
                    ui.showTodo(response.todo);
                }
            })
            .catch((error) =>{
                ui.showAlert(text);
            })
    }

})

const kullanıcıListesi = document.querySelector("#userList")
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((kullanıcılar) =>{
        kullanıcılar.map((kullanıcı) =>{
            // console.log(kullanıcı.username)
            kullanıcıListesi.insertAdjacentHTML("beforeend",
            `
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-danger">${kullanıcı.username}</li>
                    </ul>
            
            `
            ) 
        })
    }).catch((error) =>{
        console.log(error);
    })

//!!text.trim()