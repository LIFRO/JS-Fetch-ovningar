function Adressbok(){
fetch("./ateam.json")

    .then(response => 
        response.json()
        )

    .then(data =>  {
        data.sort((a, b) =>{
            const keya = Object.keys(a)[2];
            const keyb = Object.keys(b)[2];
            return a[keya] - b[keyb];
        });

        const ul = document.getElementById("list");
        data.forEach(item =>{
            console.log(item);
            const li = document.createElement("li");  
            li.textContent = item.name + ', ' + item.age + ', ' + item.phone + ', ' + item.title;
            ul.appendChild(li)
        });
    })
};

window.onload = Adressbok;