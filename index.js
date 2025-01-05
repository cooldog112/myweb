function selectMenu(page) {
    const iframe = document.getElementById('content');    
    iframe.src = 'page/'+page; // iFrame의 src 속성을 변경하여 페이지 로드
}

async function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMenu = document.getElementById('loginMenu');
    const myModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    
    

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    
    if (response.ok) {        
        myModal.hide();
        loginMenu.innerText = "로그아웃";
    } else {
        alert(result.message);
    }

}