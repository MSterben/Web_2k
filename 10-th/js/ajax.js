//main 
const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';

let body = $('body').get(0);



let x = 0;
          // ajax
          $.ajax(requestURL,{
            success: function(data){

        data.forEach(element => {
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="display(this)"  value="${x}">
            <img src="${baseSrc}${element.dogImage}" alt="dog">
            <div class="textAling">
            <h2>${element.title}</h2>
            <p>${element.sex}</p>
            </div>
            </div>`);
            x++;

            
        });
    }
});

    

function display(elm) {
   
    var x = elm.getAttribute('value');
          // ajax
      $.ajax(requestURL,{
        success: function(data){
    // chenging of modal window
    $('#link')[0].src = baseSrc + data[x].dogImage;
        $('#name')[0].innerHTML = data[x].title;
        $('#sex')[0].innerHTML = data[x].sex;
        $('#age')[0].innerHTML = data[x].age;
        $('#description')[0].innerHTML = data[x].description;
    
    //manipulation with elements

    modal.classList.add('modal_vis'); 
    body.classList.add('body_block'); 

    }
});
}
    

// // close modal


$('#close_modal').click(function() {  
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block'); 
});
