const congratulationsMessage = document.querySelector('#congratulations');
const currentUser = sessionStorage.getItem('name');


congratulationsMessage.textContent = `Hi, ${currentUser} you have successfully logged in!`;