document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const planetInfo = {
        sun: [
            'The Sun is the star at the center of our Solar System.',
            'The Sun is composed primarily of hydrogen and helium.',
            'The Sun has a diameter of about 1.4 million kilometers.',
            'The Sun generates energy through nuclear fusion.',
            'The Sun is over 4.5 billion years old.'
        ],
        mercury: [
            'Mercury is the smallest planet in the Solar System.',
            'A year on Mercury is just 88 days long.',
            'Mercury has no atmosphere to retain heat.',
            'Mercury has a molten core.',
            'Temperatures on Mercury can reach 430°C during the day and drop to -180°C at night.'
        ],
        venus: [
            'Venus is the hottest planet in the Solar System.',
            'A day on Venus is longer than a year on Venus.',
            'Venus rotates in the opposite direction to most planets.',
            'Venus is often called Earth\'s sister planet.',
            'Venus has the densest atmosphere of the terrestrial planets.'
        ],
        earth: [
            'Earth is the only planet known to support life.',
            'Earth\'s atmosphere is composed mainly of nitrogen and oxygen.',
            'Earth has one moon called Luna.',
            '70% of Earth\'s surface is covered by water.',
            'Earth orbits the Sun once every 365.25 days.'
        ],
        mars: [
            'Mars is known as the Red Planet.',
            'Mars has the tallest volcano in the Solar System, Olympus Mons.',
            'Mars has two moons: Phobos and Deimos.',
            'Mars has seasons like Earth.',
            'Mars has signs of ancient floods.'
        ],
        jupiter: [
            'Jupiter is the largest planet in our Solar System.',
            'Jupiter has a Great Red Spot, which is a giant storm.',
            'Jupiter has 79 known moons.',
            'Jupiter has a strong magnetic field.',
            'Jupiter is mostly made of hydrogen and helium.'
        ],
        saturn: [
            'Saturn has the most extensive ring system.',
            'Saturn has 82 known moons.',
            'Saturn is a gas giant composed mostly of hydrogen and helium.',
            'Saturn\'s largest moon is Titan.',
            'Saturn\'s rings are made of ice and rock particles.'
        ],
        uranus: [
            'Uranus rotates on its side.',
            'Uranus has 27 known moons.',
            'Uranus has a blue-green color due to methane in its atmosphere.',
            'Uranus is the coldest planet in the Solar System.',
            'Uranus has a faint ring system.'
        ],
        neptune: [
            'Neptune has the strongest winds in the Solar System.',
            'Neptune has 14 known moons.',
            'Neptune is a blue planet due to methane in its atmosphere.',
            'Neptune was the first planet located through mathematical predictions.',
            'Neptune has a Great Dark Spot similar to Jupiter\'s Great Red Spot.'
        ],
        pluto: [
            'Pluto is classified as a dwarf planet.',
            'Pluto has five known moons.',
            'Pluto\'s largest moon is Charon.',
            'Pluto has a heart-shaped glacier called Tombaugh Regio.',
            'Pluto has an elliptical orbit.'
        ]
    };

    // Function to shuffle an array (Fisher-Yates shuffle algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle facts for each planet
    Object.values(planetInfo).forEach(facts => shuffleArray(facts));

    planets.forEach(planet => {
        const planetName = planet.getAttribute('data-name');
        const facts = planetInfo[planetName];

        if (facts) {
            let factIndex = 0;

            planet.addEventListener('mouseover', () => {
                document.querySelector('p').textContent = facts[factIndex];
                factIndex = (factIndex + 1) % facts.length; // Move to the next fact, loop back to the start if at the end
            });

            planet.addEventListener('mouseout', () => {
                document.querySelector('p').textContent = 'Hover over the planets to learn more about each one!';
            });
        }
    });
});
