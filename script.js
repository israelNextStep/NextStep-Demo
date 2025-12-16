// script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Logique simplifiée : stocke juste l'email pour la démo
    console.log(`Nouvel utilisateur enregistré : ${email}`);
    
    // Simuler une inscription réussie et rediriger vers la page de discussion
    alert("Inscription réussie ! Redirection vers la plateforme de discussion.");

    // Redirection vers la page de discussion
    window.location.href = 'discussion.html'; 
});