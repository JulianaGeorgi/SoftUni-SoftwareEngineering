export function showRegisterView(){
    [...document.querySelectorAll('section')].forEach(s=> s.style.display ='none');
    document.getElementById('register-view').style.display = 'block';
}