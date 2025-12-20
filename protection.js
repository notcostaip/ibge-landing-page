document.addEventListener('DOMContentLoaded', function () {
    // Desabilitar clique direito
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Desabilitar seleção de texto
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Desabilitar atalhos de teclado para ferramentas de desenvolvedor
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
    });

    // Tentar interferir com Print Screen (Desktop)
    document.addEventListener('keyup', function (e) {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            alert('Capturas de tela não são permitidas neste site.');
        }
    });

    // Desabilitar arrastar e soltar (imagens, texto, etc.)
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
});
