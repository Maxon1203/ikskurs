const m2 = document.getElementById('m2');
const m4 = document.getElementById('m4');
const history = document.getElementById('history');
const tour = document.getElementById('tour');
const kon = document.getElementById('kon');

history.addEventListener('click', function(e){
    e.preventDefault();
    m2.scrollIntoView();
});

kon.addEventListener('click', function(e){
    e.preventDefault();
    m4.scrollIntoView();
});



