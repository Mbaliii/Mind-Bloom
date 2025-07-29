
// Get current date and format
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);

// Mood selection functionality
const moodOptions = document.querySelectorAll('.mood-option');
moodOptions.forEach(option => {
    option.addEventListener('click', function () {
        moodOptions.forEach(o => o.classList.remove('mood-selected', 'border-2', 'border-indigo-400'));
        this.classList.add('mood-selected', 'border-2', 'border-indigo-400');

        // Generate affirmation based on mood
        const moodIndex = Array.from(moodOptions).indexOf(this);
        const affirmations = [
            "It's okay to feel this way. Tomorrow is a new day.",
            "Feelings are temporary. I can get through this.",
            "I am learning and growing through all my experiences.",
            "I am worthy of love and happiness.",
            "My potential is limitless. I radiate positivity!"
        ];

        document.getElementById('daily-affirmation').textContent = affirmations[moodIndex];
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// Tab functionality for journal section
const journalTabs = document.querySelectorAll('[data-tab]');
journalTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        document.querySelectorAll('[data-tab-content]').forEach(content => {
            content.classList.add('hidden');
        });
        document.querySelector(`[data-tab-content="${tabId}"]`).classList.remove('hidden');

        journalTabs.forEach(t => t.classList.remove('text-indigo-600', 'border-indigo-600'));
        this.classList.add('text-indigo-600', 'border-indigo-600');
    });
});