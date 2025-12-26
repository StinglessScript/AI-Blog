// Component Loader for HTML
// Sử dụng: Thêm <script src="components/loader.js"></script> vào cuối body

(function () {
    // Helper function to execute scripts in injected content
    function runScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }

    // Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                // Make the wrapper sticky to ensure header stays at top
                headerPlaceholder.classList.add('sticky', 'top-0', 'z-50', 'w-full');

                headerPlaceholder.innerHTML = data;
                runScripts(headerPlaceholder);
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                runScripts(footerPlaceholder);
            }
        })
        .catch(error => console.error('Error loading footer:', error));
})();
