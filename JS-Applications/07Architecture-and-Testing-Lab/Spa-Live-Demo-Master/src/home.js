

export function showHomeView(){
    [...document.querySelectorAll('section')].forEach(s=> s.style.display ='none');
    document.getElementById('home-view').style.display = 'block';
}