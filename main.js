function rellenaContenido() {
	OBRAS.map(function (obra) {
		PLANTILLA = `
                <div class='column is-4-desktop is-6-tablet is-12-mobile'>
                    <div class="card mb-2">
                        <div class="card-content">
                            <div class="columns">
                                <div class="column is-3">
                                    <figure class="image is-2by3">
                                        ${
                                            obra.url
                                                ? `<a href='https://www.giglon.com/evento/${obra.url}' target='_blank'><img src="${obra.img}" alt="${obra.titulo}" class="obra-image" /></a>`
                                                : `<img src="${obra.img}" alt="${obra.titulo}" class="obra-image" />`
                                        }
                                    </figure>
                                </div>
                                <div class="column">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">${obra.titulo}</p>
                                            <p class="subtitle is-6"><em>${obra.autor}</em></p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="tabs">
                                            <ul>
                                                <li class="is-active">
                                                    <a>
                                                        <span class="icon"><i class="fas fa-book"></i></span>
                                                        <span>Sinopsis</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <span class="icon"><i class="fas fa-users"></i></span>
                                                        <span>Reparto</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-content">
                                            <div class="tab-pane is-active" style="display: block;">
                                                <div class="mb-2">
                                                    ${obra.fechas.map((elemento) => {
                                                        return '<time>' + elemento + '</time> ';
                                                    })}
                                                </div>
                                                <p>${obra.cuerpo}</p>
                                                <p><strong>Dirección:</strong> ${obra.director}</p>
                                                <p>
                                                    ${obra.tags.map((elemento) => {
                                                        return '<span class="tag is-danger">' + elemento + '</span> ';
                                                    })}
                                                </p>
                                            </div>
                                            <div class="tab-pane" style="display: none;">
                                                <p class="has-text-weight-bold">Reparto:</p>
                                                <p class="is-italic">${obra.reparto.join(', ')}</p>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            ${
                                                obra.url
                                                    ? `<a class="button is-success" href="https://www.giglon.com/evento/${obra.url}" target="_blank">Comprar en Giglon.com</a>`
                                                    : `<button class="button is-success" disabled>Entradas a la venta en breve</button>`
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
		document.querySelector('div[name=contenedor]').innerHTML += PLANTILLA;
	});
}

window.addEventListener('DOMContentLoaded', (event) => {
	rellenaContenido();
    
    // Añadir funcionalidad a las pestañas
    document.querySelectorAll('.tabs li').forEach(tab => {
        tab.addEventListener('click', () => {
            // Encontrar el contenedor de pestañas más cercano
            const tabsContainer = tab.closest('.tabs');
            const contentContainer = tabsContainer.nextElementSibling;
            
            // Obtener todas las pestañas y paneles dentro de este contenedor específico
            const tabs = tabsContainer.querySelectorAll('li');
            const panes = contentContainer.querySelectorAll('.tab-pane');
            
            // Remover clase activa de todas las pestañas y paneles
            tabs.forEach(t => t.classList.remove('is-active'));
            panes.forEach(p => {
                p.classList.remove('is-active');
                p.style.display = 'none';
            });
            
            // Añadir clase activa a la pestaña seleccionada y su panel correspondiente
            tab.classList.add('is-active');
            const index = Array.from(tabs).indexOf(tab);
            panes[index].classList.add('is-active');
            panes[index].style.display = 'block';
        });
    });

    // Funcionalidad del modal para las imágenes
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = modal.querySelector('.modal-close');
    const modalBackground = modal.querySelector('.modal-background');

    // Función para abrir el modal
    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.classList.add('is-active');
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('is-active');
    }

    // Event listeners para cerrar el modal
    modalClose.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);

    // Event listener para las imágenes
    document.querySelectorAll('.obra-image').forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(img.src);
        });
    });
});
