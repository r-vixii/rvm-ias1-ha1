const unauthorizedButton = document.getElementById('authorizationButton');
const authorizedButton = document.getElementById('authorizedButton');
const contentDiv = document.getElementById('content');
const dialogContainer = document.querySelector('.dialog-container');
const passwordInput = document.getElementById('password');

unauthorizedButton.addEventListener('click', () => {
    contentDiv.innerText = 'Downloading file...';
    setTimeout(() => {
        downloadFile();
    }, 2000);
});

authorizedButton.addEventListener('click', () => {
    showPasswordDialog();
});

function showPasswordDialog() {
    dialogContainer.style.display = 'block';
}

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = passwordInput.value;
    closePasswordDialog();
    // Simulating authorization by checking if the user is authorized
    const isAuthorized = checkAuthorization(password);

    if (isAuthorized) {
        contentDiv.innerText = 'You have authorization. Downloading file...';
        // Simulating downloading a file for authorized users
        setTimeout(() => {
            downloadFile();
        }, 2000);
    } else {
        contentDiv.innerText = 'You do not have authorization.';
    }
});

function closePasswordDialog() {
    dialogContainer.style.display = 'none';
}

function checkAuthorization(password) {
    // Check if the provided password matches the authorized password
    const authorizedPassword = 'password'; // Change this to your authorized password

    return password === authorizedPassword;
}

function downloadFile() {
    // Creating a downloadable file
    const fileContent = '<a href="https://www.pup.edu.ph/">Click here to go to the PUP website</a>';
    const fileName = 'pup_website.html';
    const blob = new Blob([fileContent], { type: 'text/html' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
