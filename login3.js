document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signinForm').style.display = 'none';
    document.body.style.backgroundColor = 'rgb(171, 84, 84)';
});

document.getElementById('signinBtn').addEventListener('click', function() {
    document.getElementById('signinForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.body.style.backgroundColor = 'rgb(77, 99, 180)';
});