(() => {
    const KEY_CODE_CTRL = 71;
    const grid = document.createElement('div');
    grid.className = 'grid';
    document.body.appendChild(grid);

    document.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.keyCode === KEY_CODE_CTRL) {
            event.preventDefault();
            grid.classList.toggle('grid_visible');
        }
    });
})();
