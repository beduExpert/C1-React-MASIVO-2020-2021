export const RUTAS = {
	precios: '/',
	cotizador: '/cotizador',
	instrucciones: '/instrucciones'
};

export const calcularBurger = (burger, precios) => {
	let acum = 0;

	acum += precios.pan1 * burger.pan1;
	acum += precios.pan2 * burger.pan2;

	if (burger.carne) acum += precios.carne * burger.carne;
	if (burger.queso) acum += precios.queso * burger.queso;
	if (burger.lechuga) acum += precios.lechuga * burger.lechuga;

	return acum;
};
