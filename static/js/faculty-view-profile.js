// Redirect faculty cards to their profile URLs and add View Profile & Research buttons
document.addEventListener('DOMContentLoaded', function() {
  const facultySection = document.getElementById('faculty');
  if (!facultySection) return;

  // Use the authorData mapping generated from author YAML files
  const authorData = window.authorData || {};

  // Find all author links in the faculty section and store slug
  const authorLinks = facultySection.querySelectorAll('a[href*="/authors/"]');

  // Process each author link
  authorLinks.forEach(link => {
    const href = link.getAttribute('href');
    const match = href.match(/\/authors\/([^/]+)\//);
    if (!match) return;

    const slug = match[1];
    const data = authorData[slug];
    if (!data || !data.profile_url) return;

    // Store slug for later reference
    link.setAttribute('data-author-slug', slug);

    // Update the link to point to profile URL
    link.href = data.profile_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  // Add View Profile and Research buttons to cards
  const cards = facultySection.querySelectorAll('.group.relative');

  cards.forEach(card => {
    const authorLink = card.querySelector('[data-author-slug]');
    if (!authorLink) return;

    const slug = authorLink.getAttribute('data-author-slug');
    const data = authorData[slug];
    if (!data || !data.profile_url) return;

    // Find the content div
    let contentDiv = card.querySelector('.p-6');
    if (!contentDiv) return;

    // Check if buttons already exist
    if (contentDiv.querySelector('[data-action-buttons]')) return;

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3';
    buttonContainer.setAttribute('data-action-buttons', 'true');

    // Create View Profile button
    const viewProfileBtn = document.createElement('a');
    viewProfileBtn.href = data.profile_url;
    viewProfileBtn.target = '_blank';
    viewProfileBtn.rel = 'noopener noreferrer';
    viewProfileBtn.className = 'w-full inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-transparent hover:opacity-70 font-medium text-base transition-opacity duration-200';
    viewProfileBtn.style.color = '#000000';
    viewProfileBtn.innerHTML = 'View Profile <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7v10h10V11m0-4l6-6m0 0v6m0-6H7"/></svg>';

    buttonContainer.appendChild(viewProfileBtn);

    // Create Research button if research_url exists
    if (data.research_url) {
      const researchBtn = document.createElement('a');
      researchBtn.href = data.research_url;
      researchBtn.target = '_blank';
      researchBtn.rel = 'noopener noreferrer';
      researchBtn.className = 'w-full inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg bg-transparent hover:opacity-70 font-medium text-base transition-opacity duration-200';
      researchBtn.style.color = '#000000';
      researchBtn.innerHTML = 'Research <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7v10h10V11m0-4l6-6m0 0v6m0-6H7"/></svg>';

      buttonContainer.appendChild(researchBtn);
    }

    contentDiv.appendChild(buttonContainer);
  });
});
