// app.js

// Function to fetch posts from an API and display them
async function fetchPosts() {
    try {
        // Fetch data from the JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const posts = await response.json();

        // Get the container where posts will be displayed
        const postsContainer = document.getElementById('posts');

        // Loop through each post and create HTML elements for them
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post'); // Add a class for styling

            // Create the HTML content for each post
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            // Append each post to the container
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Wait for the DOM to fully load before calling fetchPosts
document.addEventListener('DOMContentLoaded', fetchPosts);
