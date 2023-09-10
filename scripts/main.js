document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    // Verificar el estado del modo oscuro al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode(false); // No aplicar transición al cargar
        darkModeSwitch.checked = true;
    }

    // Cambiar entre el modo claro y oscuro al hacer clic en el interruptor
    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            enableDarkMode(true); // Aplicar transición al hacer clic
        } else {
            disableDarkMode();
        }
    });

    // Función para habilitar el modo oscuro
    function enableDarkMode(applyTransition) {
        if (applyTransition) {
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    // Función para deshabilitar el modo oscuro
    function disableDarkMode() {
        body.style.transition = ''; // Eliminar la transición
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }
});

