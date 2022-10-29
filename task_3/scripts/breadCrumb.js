const breadCrumb = document.getElementById('breadCrumb');

const currentPath = window.location.pathname;

const child = document.createElement('p');
child.id = 'current-link';
child.textContent = currentPath;

breadCrumb.appendChild(child);
