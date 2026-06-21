function toggleMobileNavMenu() {
  if (window.innerWidth <= 768) {
    const barTrigger = document.getElementById('mobile-menu-trigger');
    const linksDrawer = document.getElementById('nav-links-menu');
    
    if (barTrigger && linksDrawer) {
      const isMenuOpening = !linksDrawer.classList.contains('active');
      
      // Toggle design element state tags
      barTrigger.classList.toggle('active');
      linksDrawer.classList.toggle('active');
      
      // Update screen-reader assistive state parameters dynamically
      barTrigger.setAttribute('aria-expanded', isMenuOpening.toString());
    }
  }
}

// Global programmatic interaction hook cleanup
document.addEventListener('click', (event) => {
  const barTrigger = document.getElementById('mobile-menu-trigger');
  const linksDrawer = document.getElementById('nav-links-menu');
  
  if (linksDrawer && linksDrawer.classList.contains('active')) {
    // If user clicks completely off the active mobile nav block menu container, drop focus closure
    if (!linksDrawer.contains(event.target) && !barTrigger.contains(event.target)) {
      toggleMobileNavMenu();
    }
  }
});