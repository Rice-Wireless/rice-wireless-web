// Customize faculty profile cards
document.addEventListener('DOMContentLoaded', function() {
  const facultySection = document.getElementById('faculty');
  if (!facultySection) return;

  // Get all profile cards
  const profileCards = facultySection.querySelectorAll('.group.relative');

  profileCards.forEach(card => {
    // Find the content div
    const contentDiv = card.querySelector('.p-6');
    if (!contentDiv) return;

    // Add redirect icon div
    const iconDiv = document.createElement('div');
    iconDiv.className = 'flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700';
    contentDiv.appendChild(iconDiv);

    // Add test text to the card
    const textElement = document.createElement('p');
    textElement.textContent = 'View Profile';
    textElement.className = 'mt-3 text-sm text-gray-600 dark:text-gray-400';
    contentDiv.appendChild(textElement);

    // Find the first social link to get the redirect URL
    const firstSocialLink = card.querySelector('.flex.gap-3 a');
    let redirectUrl = null;

    if (firstSocialLink) {
      redirectUrl = firstSocialLink.getAttribute('href');
    }
    
    // If no social link found, fall back to profile link
    if (!redirectUrl) {
      const profileLink = card.querySelector('h3 a');
      if (profileLink) {
        redirectUrl = profileLink.getAttribute('href');
      }
    }

    if (redirectUrl) {
      // Make the entire card clickable by adding event listeners to key elements
      const imageLink = card.querySelector('a[href*="/authors/"]');
      const nameLink = card.querySelector('h3 a');

      if (imageLink) {
        imageLink.href = redirectUrl;
        imageLink.target = '_blank';
        imageLink.rel = 'noopener';
      }

      if (nameLink) {
        nameLink.href = redirectUrl;
        nameLink.target = '_blank';
        nameLink.rel = 'noopener';
      }
    }
  });
});
