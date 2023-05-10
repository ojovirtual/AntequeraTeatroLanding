function rellenaContenido() {
	OBRAS.map((obra) => {
		const URL = obra.url ? `https://www.giglon.com/evento/${obra.url}` : 'https://www.giglon.com/todos?city=Antequera';
		PLANTILLA = `
                <div class='column is-one-quarter'>
                    <div class="card mb-2">
						<div class="card-image">
							<figure class="image is-1by1">
								<a href='${URL}' target='_blank'><img src="${obra.img}" alt="${obra.titulo}" /></a>
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content">
									<p class="title is-4">${obra.titulo}</p>
									<!--<p class="subtitle is-6"></p>-->
								</div>
							</div>
							<div class="content">                            
								${obra.fechas.map((elemento) => {
									return '<time>' + elemento + '</time> ';
								})}
								<p>
									${obra.cuerpo}
								</p><p>
                                ${obra.tags.map((elemento) => {
																	return '<span class="tag is-danger">' + elemento + '</span> ';
																})}								
                                </p>								
                                
							</div>                            
						</div>
						<div class="card-footer">
						<a class="card-footer-item button is-success ${
							obra.url === undefined ? 'is-static' : ''
						}" href="${URL}" target="_blank">${
			obra.url
				? '<span class="mdi mdi-ticket-confirmation mdi-rotate-45"></span> &nbsp; Comprar en Giglon.com'
				: 'Entradas disponibles en breve'
		}</a>
						</div>
					</div>
                </div>`;
		document.querySelector('div[name=contenedor]').innerHTML += PLANTILLA;
	});
}

window.addEventListener('DOMContentLoaded', (event) => {
	rellenaContenido();
});
