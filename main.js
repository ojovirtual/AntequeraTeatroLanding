function rellenaContenido() {
	OBRAS.map(function (obra) {
		PLANTILLA = `
                <div class='column is-one-third'>
                    <div class="card mb-2">
						<div class="card-image">
							<figure class="image is-1by1">
								${obra.url ? `<a href='https://www.giglon.com/evento/${obra.url}' target='_blank'><img src="${obra.img}" alt="${obra.titulo}" /></a>` : `<img src="${obra.img}" alt="${obra.titulo}" />`}
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content">
									<p class="title is-4">${obra.titulo}</p>
									<p class="subtitle is-6"><em>${obra.autor}</em></p>
								</div>
							</div>
							<div class="content">                            
								${obra.fechas.map((elemento) => {
									return '<time>' + elemento + '</time> ';
								})}
								<p>
									${obra.cuerpo}
								</p>
								<p class="has-text-weight-bold">Reparto:</p>
								<p class="is-italic">${obra.reparto.join(', ')}</p>
								<p><strong>Dirección:</strong> ${obra.director}</p>
								<p>
                                ${obra.tags.map((elemento) => {
																	return '<span class="tag is-danger">' + elemento + '</span> ';
																})}								
                                </p>
								${obra.url ? 
									`<a class="button is-success" href="https://www.giglon.com/evento/${obra.url}" target="_blank">Comprar en Giglon.com</a>` : 
									`<button class="button is-success" disabled>Comprar en Giglon.com</button>`
								}
                                
							</div>                            
						</div>
					</div>
                </div>`;
		document.querySelector('div[name=contenedor]').innerHTML += PLANTILLA;
	});
}

window.addEventListener('DOMContentLoaded', (event) => {
	rellenaContenido();
});
