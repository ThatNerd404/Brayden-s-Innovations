//? Sidebar_audio.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const audio = document.getElementById('hover-sound');  // This should match the id of your <audio> element

    // Set the desired volume (between 0 and 1)
    audio.volume = 0.2;  // For example, 20% volume

    // Check if sidebar and audio elements exist
    if (sidebar && audio) {
        // Select all the links inside the sidebar
        const links = sidebar.querySelectorAll('a');

        // Add hover event listener to each link
        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                // Check if the audio is already playing
                if (!audio.paused) {
                    audio.pause();         // Pause the current audio
                    audio.currentTime = 0; // Reset audio to the start
                }
                // Clone the audio element and play
                const clone = audio.cloneNode();
                clone.volume = 0.2;
                clone.currentTime = 0;  // Reset to start
                clone.play().catch(error => {
                    console.error("Audio play error:", error);
                });
            });
        });
    } else {
        console.error('Sidebar or audio element not found.');
    }
});