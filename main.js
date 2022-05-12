let OBRAS = [
	{
		titulo: 'El peque&ntilde;o Quijote',
		img: 'img/quijote.png',
		cuerpo: `Cabalguemos junto al peque&ntilde;o Quijote y su escudero Sanchillo para conocer muchos de los
				cap&iacute;tulos de la novela m&aacute;s importante de todos los tiempos. Cervantes intentar&aacute;
				leerla pero los ni&ntilde;os y ni&ntilde;as de nuestro grupo de teatro quieren contarnos la historia a
				su manera, de manera divertida y sin dejar de jugar...`,
		url: 'el-pequeno-quijote',
		fechas: ['21/05/2022 19:30h'],
		tags: ['Teatro infantil'],
	},
	{
		titulo: 'La verdadera historia de Romeo y Julieta',
		img: 'img/romeo.png',
		cuerpo: `Verona, dos familias enfrentadas. Romeo Montesco y Julieta Capuleto se enamoran pese al odio entre sus familias. Es un amor imposible. Pero basta de tragedias y presenciemos con atenci&oacute;n lo que verdaderamente pudo haber pasado.`,
		url: 'la-verdadera-historia-de-romeo-y-julieta',
		fechas: ['22/05/2022 19:30'],
		tags: ['Teatro infantil'],
	},
	{
		titulo: 'La zanahoria gigante',
		img: 'img/zanahoria.png',
		cuerpo: `Os presentamos un cuento en el que necesitaremos tu ayuda. &iexcl;Venga, ayudadnos a sacar esta gigantesca zanahoria! &iquest;Podremos sacarla entre todos? No lo s&eacute;, pero seguro que lo pasaremos muy bien.`,
		url: 'la-zanahoria-gigante',
		fechas: ['28/05/2022 19:30', '29/05/2022 12:00'],
		tags: ['Teatro infantil'],
	},
	{
		titulo: 'La verdadera y singular historia de la princesa y el drag&oacute;n',
		img: 'img/verdadera.png',
		cuerpo: `En un escenario intemporal, la Princesa es raptada por el drag&oacute;n. Surge entre ellos inesperadamente una amistad rodeada de poes&iacute;a. El drag&oacute;n Regaliz est&aacute; perdidamente enamorado de la Princesa Peladilla, y no ocurri&eacute;ndosele nada mejor, la rapta. El caballero Pel&oacute;n de Ardilla acude raudo a salvar a la Princesa, pero esta, durante su cautiverio, ha descubierto la pureza de sentimientos del enamorado drag&oacute;n y empieza a corresponderle. Con enga&ntilde;os, Pel&oacute;n vence al drag&oacute;n y gana la mano de Peladilla. Pero, &iexcl;ah!, no se&ntilde;ores, no... La linda princesa ya no cambiar&aacute; por nada del mundo a su tierno drag&oacute;n por ese caballero enano y bastante idiota.`,
		url: 'la-verdadera-y-singular-historia-de-la-princesa-y-el-dragon-mayo',
		fechas: ['29/05/2022 19:30'],
		tags: ['Teatro infantil'],
	},
	{
		titulo: 'El pueblo m&aacute;s cutre de Espa&ntilde;a',
		img: 'img/cutre.png',
		cuerpo: `Los escasos habitantes de un perdido pueblo de interior, abocado a la desaparici&oacute;n, planean el resurgir tur&iacute;stico que jam&aacute;s tuvieron. Los personajes esperp&eacute;nticos dar&aacute;n pie a situaciones disparatadas en torno al &uacute;nico bar del pueblo. Cuando parece que lo van a conseguir, la cosa se complica, y es que no ser&aacute; nada f&aacute;cil convertir El pueblo m&aacute;s cutre de Espa&ntilde;a en un destino de moda...
Representaci&oacute;n a cargo de los alumnos y alumnas de la Escuela Municipal de Teatro de Antequera. `,
		url: 'el-pueblo-mas-cutre-de-espana',
		fechas: ['09/06/2022 20:00h', '10/06/2022 20:00h'],
		tags: ['Comedia'],
	},
	{
		titulo: 'Qu&eacute; ruina de funci&oacute;n',
		img: 'img/ruina.png',
		cuerpo: `Una compa&ntilde;&iacute;a de teatro se prepara para un importante estreno teatral.
Un dif&iacute;cil vodevil con muchas puertas y muchas sardinas...
Es una de las comedias m&aacute;s disparatadas de la historia, donde un gag detr&aacute;s del otro
no dar&aacute;n descanso ni al p&uacute;blico ni al reparto.
Qu&eacute; ruina de funci&oacute;n es un cl&aacute;sico del teatro y un reto como puesta en escena.
El teatro dentro del teatro.
La obra est&aacute; escrita por Michael Frayn (1982) y llevada al cine
con gran &eacute;xito por Peter Bogdanovich (1992)`,
		url: 'que-ruina-de-funcion',
		fechas: ['11/06/2022 20:00h', '12/06/2022 20:00h'],
		tags: ['Comedia'],
	},
	{
		titulo: 'El &uacute;ltimo cabaret',
		img: 'img/cabaret.png',
		cuerpo: `El &uacute;ltimo cabaret de la ciudad ha recibido la peor noticia que podr&iacute;an darle: &quot;el g&eacute;nero del cabaret est&aacute; obsoleto&quot;. El mensaje llega de manos de la comisi&oacute;n de inspectores de espect&aacute;culos. Mary la due&ntilde;a y regente no est&aacute; dispuesta a perder su negocio. Sus chicas, tampoco. El &uacute;ltimo cabaret nos habla de sororidad, de feminismo, de resiliencia y de fraternidad. Una comedia de enredo en la que s&oacute;lo una cosa est&aacute; clara: el espect&aacute;culo debe continuar.`,
		url: 'el-ultimo-cabaret',
		fechas: ['17/06/2022 20:00', '18/06/2022 12:00'],
		tags: ['Teatro musical'],
	},
	{
		titulo: 'Silencio, se rueda',
		img: 'img/silencio.png',
		cuerpo: `Buenas noches, se&ntilde;oras y se&ntilde;ores. El cine y todo lo que le rodea son un mundo aparte.
&iquest;Qui&eacute;n no envidia a esa chica de rubia melena y ojos azules en el momento en que sus labios se posan
en los del moreno gal&aacute;n de ojos no menos centelleantes? &iquest;Qui&eacute;n no?
Estrellas les llaman. Humphrey Bogart, Marilyn Monroe, Robert Redford, Greta Garbo...
Nosotros, maravillados espectadores, &iquest;sabemos algo de ese mundo m&aacute;s de lo que se nos muestra en la pantalla?
Tras esos rostros deslumbrantes y esas palabras que nos compungen el pecho y nos hacen llorar y abrazar el televisor
en un arrebato apasionado, tras esa pantalla a trav&eacute;s de la cual contemplamos alelados a nuestros mitos del cine,
tras todo esto hay muchas cosas que, se&ntilde;oras y se&ntilde;ores, esta noche desvelaremos aqu&iacute;.
Las man&iacute;as y procedimientos de todo buen actor, pasando por el complejo y menospreciado trabajo de los guionistas,
hasta la ilusi&oacute;n y verg&uuml;enza de aquella joven hermosa que pretende llegar a ser actriz...
Todo eso y m&aacute;s lo descubriremos esta noche... Pero, primero, &iquest;han ido ustedes al cine alguna vez? Seguro que s&iacute;...
Todos conjugamos el verbo &quot;ir al cine&quot;. Todos, por unos euros, compramos nuestro derecho a la ilusi&oacute;n.
Es in&uacute;til negarlo. El cine es el gran desvelador de misterios, y usted, que compra su entrada,
es c&oacute;mplice de esa indiscreci&oacute;n`,
		url: 'silencio-se-rueda',
		fechas: ['18/06/2022 20:00', '19/06/2022 20:00'],
		tags: ['Comedia'],
	},
	{
		titulo: 'La embajada',
		img: 'img/embajada.png',
		cuerpo: `Walter Hollander, un empresario del catering de New Jersey, se encuentra de vacaciones con su esposa y su hija Sam en un imaginario peque&ntilde;o pa&iacute;s tras el Tel&oacute;n de Acero. Hollander es sorprendido tomando fotograf&iacute;as en zona prohibida y la familia se ve obligada a refugiarse en el embajada de los Estados Unidos. En ausencia de la embajadora, est&aacute; al cargo su hijo Alex Magee, que se revela como uno de los funcionarios m&aacute;s incompetentes que el Ministerio de Asuntos Exteriores de los Estados Unidos ha tenido jam&aacute;s. En la embajada se encuentra refugiada desde hace mucho tiempo la madre Drobney, muy aficionada a la magia. Para complicar a&uacute;n m&aacute;s las cosas, llega en visita oficial la mujer del Sult&aacute;n de Bashir aumentando el caos en la embajada.
La embajada (o No te bebas el agua) es la primera obra de teatro de Woody Allen, escrita en 1966. Se llev&oacute; a escena al a&ntilde;o siguiente en Broadway.`,
		url: 'la-embajada',
		fechas: ['25/06/2022 20:00', '26/06/2022 20:00'],
		tags: ['Comedia'],
	},
];

function rellenaContenido() {
	for (let i = 0; i < OBRAS.length; i++) {
		let obra = OBRAS[i];
		PLANTILLA = `
                <div class='column is-one-third'>
                    <div class="card mb-2">
						<div class="card-image">
							<figure class="image is-1by1">
								<img src="${obra.img}" alt="${obra.titulo}" />
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
								<a class="button is-success" href="https://www.giglon.com/evento/${obra.url}" target="_blank"
									>Comprar en Giglon.com</a
								>
                                
							</div>                            
						</div>
					</div>
                </div>`;
		document.querySelector('div[name=contenedor]').innerHTML += PLANTILLA;
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	rellenaContenido();
});
