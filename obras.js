const OBRAS = [
	{
		titulo: 'El gato con botas',
		img: 'img/gato_botas.png',
		cuerpo: `Uno de los cuentos cl&aacute;sicos m&aacute;s famosos, interpretado por los m&aacute;s peque&ntilde;os de la escuela. Ven a conocer al Marqu&eacute;s de Carab&aacute;s. Juguemos al teatro.`,
		url: 'el-gato-con-botas-emute',
		fechas: ['29/04/2023 20h'],
		tags: ['Teatro infantil'],
	},
	{
		titulo: 'Corviniano I, pr&iacute;ncipe azul en busca de cuento',
		img: 'img/corviniano.png',
		cuerpo: `Corvi va en busca de un cuento para &eacute;l y otro para su amigo Segismundo II. Conocer&aacute;n divertidos personajes en el pa&iacute;s de los cuentos cl&aacute;sicos, fabulas, comics y libros de aventuras. &iquest;Conseguir&aacute;n su historia? Ay&uacute;dales a encontrarla y a escribir un &quot;fueron felices y comieron perdices&quot;`,
		url: 'corviniano-emute',
		fechas: ['06/05/2023 20h'],
		tags: ['Teatro infantil'],
	},
	/*	{
		titulo: 'Foto familiar',
		img: 'img/foto_familiar.png',
		cuerpo: `Obra representada por la Escuela de Teatro Duque de Rivas de Lucena (C&oacute;rdoba).`,
		url: 'foto-familiar',
		fechas: ['12/05/2023 19h'],
		tags: ['Adultos'],
	},*/
	{
		titulo: 'Haciendo diabluras',
		img: 'img/diabluras2.png',
		cuerpo: `Hoy es un d&iacute;a importante porque nuestros alumnos tienen que superar las pruebas, para conseguir su diploma de diablillos. 
		Necesitar&aacute;n vuestra ayuda y os la pedir&aacute;n amablemente. Cuatro pruebas muy divertidas y locas que llenar&aacute;n el teatro de 
		risas y diversi&oacute;n. Te esperamos para jugar juntos.`,
		url: 'haciendo-diabluras',
		fechas: ['14/05/2023 12h'],
		tags: ['Teatro infantil'],
	},

	{
		titulo: 'Litrona',
		img: 'img/litrona.png',
		cuerpo: `Litrona habla de un grupo de adolescentes de finales de los 90 cuya realidad se ve
influenciada por el lanzamiento musical de una de ellos. El grupo suele reunirse en un
callej&oacute;n para tomar juntos unas cervezas, pero a medida que avanzan las escenas,
comprendemos que lo que comparten son temas mucho m&aacute;s profundos; entre los vidrios se
enamoran, sufren, se divierten, sue&ntilde;an con un futuro mejor y nos regalan un reflejo de la
sociedad m&aacute;s amarga de Espa&ntilde;a.`,
		url: 'litrona-emute',
		fechas: ['19/05/2023 20h'],
		tags: ['Teatro juvenil'],
	},
	/*{
		titulo: 'Cuesti&oacute;n de fe',
		img: 'img/fe.png',
		cuerpo: `<ol><li>Amar&aacute;s el TEATRO por encima de &ldquo;todas&rdquo; las cosas.🎭</li>
<li>No tomar&aacute;s la opini&oacute;n del p&uacute;blico en vano. 👨‍👩‍👧‍👦</li>
<li>Santificar&aacute;s las fiestas. Nosotras cantando y bailando. 🕺🏼💃🏼</li>
<li>Honrar&aacute;s a tu padre y a tu madre. Siempre. 🧑‍👩‍👧</li>
<li>No matar&aacute;s, a no ser que sea de risa. 😂</li>
<li>No cometer&aacute;s actos impuros. Esp&eacute;rense a despu&eacute;s de la representaci&oacute;n. 🍆</li>
<li>No robar&aacute;s, a no ser que sea un paquete de yogures por necesidad. 🫱🏼</li>
<li>No dar&aacute;s falso testimonio, ni mentir&aacute;s. Puede que alguna piadosa se nos escape. 😅</li>
<li>No tendr&aacute;s pensamientos impuros. Estos s&iacute; pueden durante la representaci&oacute;n. 😋</li>
<li>No codiciar&aacute;s los bienes ajenos. Pero s&iacute; un ratito de su tiempo para disfrutar juntos de:</li>
</ol>
<h4>Cuesti&oacute;n de fe 🙏🏼</h4>`,
		url: 'cuestion-de-fe-emute',
		fechas: ['26/05/2023 20:00h', '27/05/2023 20:00h'],
		tags: ['Teatro musical'],
	},
	{
		titulo: 'Himmelweg',
		img: 'img/himmelweg.png',
		cuerpo: `Este texto de Juan Mayorga, premio princesa de Asturias de las letras 2023, es un desaf&iacute;o. 
		Una obra dura sobre el holocausto nazi pero tratada de una manera que solo nos puede ofrecer el teatro. <i>Metateatro</i> escrito magistralmente.<br>
		&quot;Himmelweg&quot;. D&iacute;ganlo en su idioma: &quot;Camino del cielo&quot;. Se&ntilde;oras y se&ntilde;ores, pasen y vean. 
		En plena naturaleza, en el coraz&oacute;n de Europa. Y si les gusta, vuelvan cuando quieran.`,
		url: 'himmelweg',
		fechas: ['02/06/2023 20:00h', '04/06/2022 20:00h'],
		tags: ['Metateatro'],
	},
	{
		titulo: 'La venganza de Don Mendo',
		img: 'img/mendo.webp',
		cuerpo: `Una de las obras que m&aacute;s se ha representado en Espa&ntilde;a. Le damos una vuelta de tuerca m&aacute;s, poniendo todo al servicio absoluto del CHISTE. 
		Una astracanada importante que les har&aacute; re&iacute;r de principio a fin. La parodia en su m&aacute;xima expresi&oacute;n y con unos actores entregados al dif&iacute;cil 
		arte de hacer re&iacute;r. Gracias a ellos por su generosidad y a ustedes por venir a verlo.`,
		url: 'la-venganza-de-don-mendo-emute',
		fechas: ['17/06/2023 20:00', '18/06/2023 12:00'],
		tags: ['Comedia'],
	},
	{
		titulo: 'Farsas contemporaneas',
		img: 'img/farsas.png',
		cuerpo: `Nos encontramos ante un espect&aacute;culo de teatro que recrea una sociedad humana del pasado, presente y futuro. Una forma de contar historias sencilla y directa, capaz de sorprender al p&uacute;blico y no dejar a nadie indiferente. El origen del hombre y el consumo, la sociedad que se divide en clases sociales y el respeto por la opini&oacute;n, son los temas que reflejan en clave de humor el mundo en el que vivimos, y en lo que se puede convertir si no somos capaces de reaccionar.`,
		url: 'farsas-contemporaneas-emute',
		fechas: ['19/06/2023 20:00', '20/06/2023 20:00'],
		tags: [''],
	},
	{
		titulo: 'Lo cursi',
		img: 'img/cursi.png',
		cuerpo: `Lo cursi es un vodevil que nos acerca a unos personajes sacrificados por la moda de la
&eacute;poca a&ntilde;os 20 de Madrid. Lo bueno, lo malo, lo divertido o lo aburrido, han dejado de tener
significado para dejar paso a lo cursi y a lo moderno. En esta dicotom&iacute;a constante se
desarrolla la historia de dos bandos: Los cursis y los anti-cursis. Y en el centro de todo un
matrimonio, Rosario y Agust&iacute;n. &iquest;Qui&eacute;n ganar&aacute;?`,
		url: 'lo-cursi-emute',
		fechas: ['23/06/2023 20:00', '24/06/2023 20:00'],
		tags: ['Comedia'],
	},
	{
		titulo: 'Usted tiene ojos de mujer fatal',
		img: 'img/ojos.png',
		cuerpo: `Esta obra, escrita por Enrique Jardiel Poncela, es una comedia que cuenta la historia de un hombre llamado Sergio que tiene la habilidad de seducir a cualquier mujer.`,
		url: 'usted-tiene-ojos-de-emute',
		fechas: ['30/06/2023 20:00', '01/07/2023 20:00'],
		tags: ['Comedia'],
	},*/
];
