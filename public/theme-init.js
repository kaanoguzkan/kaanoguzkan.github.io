// Theme initialization — runs before React to prevent FOUC
(function() {
    var stored = localStorage.getItem('theme');
    var theme;
    if (stored === 'bone' || stored === 'ink') {
        theme = stored;
    } else if (stored === 'light') {
        theme = 'bone';
    } else if (stored === 'dark') {
        theme = 'ink';
    } else {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'ink' : 'bone';
    }
    document.documentElement.setAttribute('data-theme', theme);
})();
