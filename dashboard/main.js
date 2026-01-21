document.addEventListener('DOMContentLoaded', () => {
    const randomizeButton = document.getElementById('randomizeButton');
    const userCard = document.getElementById('user');

    async function fetchRandomUser() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];
            updateUserCard(user);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    function updateUserCard(user) {
        userCard.innerHTML = `
                <h2>${user.name.first} ${user.name.last}</h2>
                <img src="${user.picture.large}" alt="User Picture"/>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
        `;
    }

    fetchRandomUser();

    randomizeButton.addEventListener('click', fetchRandomUser);
});
