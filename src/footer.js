// create footer
function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const footerText = document.createElement('a');
    footerText.href = "https://www.github.io/rinarasia";
    footerText.textContent = "By ®inarasia";
    
    footer.appendChild(footerText);
    
    return footer
  }
  
  const footer = createFooter();
  
export { footer }  