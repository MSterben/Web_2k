const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';

let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клік що б відкрити

        //xhr

    const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.responseType = 'json';
    xhr.onload = () =>{
    if(xhr.status >= 400){
         console.error(xhr.response)
     }
    else{
    // chenging of modal window

    document.getElementById("link").innerHTML = xhr.response[i].title;
    document.getElementById("link").src = baseSrc + xhr.response[i].dogImage;
    document.getElementById("name").innerHTML = xhr.response[i].title;
    document.getElementById("sex").innerHTML = xhr.response[i].sex;
    document.getElementById("age").innerHTML = xhr.response[i].age;
    document.getElementById("description").innerHTML = xhr.response[i].description;
    
    //manipulation with elements

    modal.classList.add('modal_vis'); // додаєм вісібл для вікна 
    modal.classList.remove('bounceOutDown'); //удадяєм ефект закриття
    body.classList.add('body_block'); // забираємо можливість прокрутки

    }
}
    
xhr.send();


//end of xhr
        
    };
}

// close modal

close_modal.onclick = function() { // клік що б закрити
    modal.classList.add('bounceOutDown'); // ефект закриття
    window.setTimeout(function() { // удаляєм ефект закриття через пів сикунди шо б його побачити
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // повертаємо можливість прокрутки
    }, 500);
};