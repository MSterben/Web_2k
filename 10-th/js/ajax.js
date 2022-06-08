
const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';






let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { 
      const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
      // ajax
      $.ajax(requestURL,{
        success: function(data){
    document.getElementById("link").src = baseSrc + data[i].dogImage;
    document.getElementById("name").innerHTML = data[i].title;
    document.getElementById("sex").innerHTML = data[i].sex;
    document.getElementById("age").innerHTML = data[i].age;
    document.getElementById("description").innerHTML = data[i].description;
    modal.classList.add('modal_vis'); 
    body.classList.add('body_block');  
        }
      });
      
//end of xhr
        
    };
}

// close modal

close_modal.onclick = function() {  
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block'); 
};