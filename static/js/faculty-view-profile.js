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

    // Hide the role section (first div after h3)
    const allDivs = contentDiv.querySelectorAll('div');
    allDivs.forEach(div => {
      if (div.className.includes('text-gray-600') && div.className.includes('mb-3')) {
      }
    });

    // Hide the interests section
    allDivs.forEach(div => {
      if (div.className.includes('mb-4')) {
        const flexDiv = div.querySelector('.flex.flex-wrap');
        if (flexDiv) {
          div.style.display = 'none';
        }
      }
    });

    // Find and replace the social links
    const socialLinks = contentDiv.querySelector('.flex.gap-3');
    if (socialLinks) {
      // Find profile link
      const profileLink = card.querySelector('h3 a');
      if (profileLink) {
        const profileUrl = profileLink.getAttribute('href');

        // Clear the social links div
        socialLinks.innerHTML = '';
        socialLinks.className = 'pt-2 border-t border-gray-200 dark:border-gray-700';

        // Create a single-column grid
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 gap-2';

        // Create View Profile link
        const viewProfileLink = document.createElement('a');
        viewProfileLink.href = profileUrl;
        viewProfileLink.className = 'inline-flex items-center gap-1.5 font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors';

        // Add arrow icon SVG
        viewProfileLink.innerHTML = 'View Profile <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>';

        // Create the Research item
        const researchItem = document.createElement('a');
        researchItem.className = 'inline-flex items-center gap-1.5 font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors';
        researchItem.textContent = 'ResearchSS';

        // Add both items to the grid
        grid.appendChild(viewProfileLink);
        grid.appendChild(researchItem);

        // Add the grid to the container
        socialLinks.appendChild(grid);
      }
    }
  });
});
