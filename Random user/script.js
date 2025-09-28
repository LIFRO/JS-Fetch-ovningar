let name;
let phone;
let email;
let pfb;
let firstrun = true;
let ul = document.createElement('ul');
let li = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let img = document.createElement('img');
let randomUser = document.getElementById('randomUser');

function data(){
    fetch("https://randomuser.me/api/")
        .then(
            response => response.json()
        )
        .then(data => {
            const info = data.results[0]

            names = info.name.first + " " + info.name.last;
            phone = info.phone;
            email = info.email;
            imageSrc = info.picture.medium;

            li.textContent = "name" + " " + names;
            li2.textContent = "phone" + " " + phone;
            li3.textContent = "email" + " " + email;
            img.src = imageSrc;
            img.alt = "picture of a dude";

            if (firstrun == true){
                ul.append(li, li2, li3, img);
                document.body.appendChild(ul);
                firstrun == false
            };
        });
};

window.onload = data;

randomUser.addEventListener('click', data); 
