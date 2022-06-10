
const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';






let open_modal = $('.open_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { 
      const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
      // ajax
      $.ajax(requestURL,{
        success: function(data){
    $('#link')[0].src = baseSrc + data[i].dogImage;
    $('#name')[0].innerHTML = data[i].title;
    $('#sex')[0].innerHTML = data[i].sex;
    $('#age')[0].innerHTML = data[i].age;
    $('#description')[0].innerHTML = data[i].description;
    modal.classList.add('modal_vis'); 
    body.classList.add('body_block');  
        }
      });
      
//end of xhr
        
    };
}

// close modal

$('#close_modal').click(function() {  
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block'); 
});