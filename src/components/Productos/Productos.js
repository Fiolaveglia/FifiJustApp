
const Productos = [
    {
        id: 1, 
        nombre: 'Naranja',
        precio: 1025,
        img: './img/products/Naranja.jpg',
        categoria: "citrico",
        stock: 12, 
        detalle: "Su aroma dulce, fresco, citrico y frutal nos protege de nosotros mismos aplacando olas de enojo e irritacion cuando naturalmente nos costaria frenarlas. Un par de gotas evitan que nos invada la angustia y la tristeza evocando momentos de felicidad, paz y tranquilidad. Con Aceite Esencial de Naranja, nunca mas una reunion donde las dscusiones se elevan a niveles que no tienen retorno."
    }, 
    {
        id: 2, 
        nombre: 'Jazmin',
        precio: 1420,
        img: './img/products/Jazmin.jpg',
        categoria: "floral",
        stock: 8, 
        detalle: "El Aceite Esencial de Jazmin envuelve con su aroma sensual, dulce, exotico e intensamente floral. Las inhibiciones desaparecen, los velos se corren y la pasion invade provocando intensidad en los sentimientos y entrega total."

    }, 
    {
        id: 3, 
        nombre: 'Limon',
        precio: 945,
        img: './img/products/Limon.jpg',
        categoria: "citrico",
        stock: 6, 
        detalle: "El aroma penetrante del Aceite Esencial de Limon se hace presente para liberar la energia bloqueada y estimular la creatividad y la concentracion. Aparece como una bocanada de aire fresco, citrico e inspirador dejando tras su paso alegria positiva, sonrisas, buen humor y ganas de hacer."
    },
    {
        id: 4, 
        nombre: 'Patchouli',
        precio: 1200,
        img: './img/products/Patchouli.jpg',
        categoria: "herbal",
        stock: 10, 
        detalle: "El aroma sensual y exotico del Aceite Esencial de Patchouli ha sido milenariamente reconocido en la conquista del amor. Su efecto naturalmente afrodisiaco ayuda a desencadenar la libido y estimular el deseo, reconectando con los afectos y las pasiones. Unas gotas bastan para hacer desaparecer el estres, equilibrando las emociones."
    },
    {
        id: 5, 
        nombre: 'Bergamota',
        precio: 1350,
        img: './img/products/Bergamota.jpg',
        categoria: "citrico",
        stock: 4, 
        detalle: "Un balsamo para el corazon. Asi nos gusta definir al Aceite Esencial de Bergamota con su aroma frutal, dulce y feliz. Cuando perdimos la ilusion y nos cuesta seguir, se transforma en un baston invisible sobre el cual podemos apoyarnos con confianza y fe en que el dolor y la tristeza no duran para siempre. Todo pasa."
    },
    {
        id: 6, 
        nombre: 'Eucalipto',
        precio: 950,
        img: './img/products/Eucalipto.jpg',
        categoria: "herbal",
        stock: 8, 
        detalle: "Posee un aroma inequívoco y personal. Alcanforado, fresco y vivaz, el Aceite Esencial de Eucalipto, ayuda a prepararse para los cambios bruscos de estacion, los inviernos frios y para los estados gripales que estos traen consigo. Respirar libremente ya no sera un problema."
    },
    {
        id: 7, 
        nombre: 'Geranio',
        precio: 1750,
        img: './img/products/Geranio.jpg',
        categoria: "floral",
        stock: 6, 
        detalle: "Su efecto armonizante evoca sentimientos de paz y serenidad. Ayuda a transitar los ciclos de la mujer, los sentimientos encontrados y esa extrema e inexplicable sensibilidad que suele abatir durante algunos periodos. Los cambios de la mujer dejaran de ser una interrupcion para poder transitarlos en plenitud."
    }, 
    {
        id: 8, 
        nombre: 'Lavanda',
        precio: 1250,
        img: './img/products/Lavanda.jpg',
        categoria: "floral",
        stock: 9, 
        detalle: "Con un aroma floral, fresco y con un dejo herbal, el Aceite Esencial de Lavanda es tan versatil como util en cualquier hogar. Su aroma calma y aquieta los nervios, la ansiedad y el estres ayudando a conciliar el sueño cuando resulta dificil bajar revoluciones. Es el aceite ideal para tener en el botiquin de primeros auxilios a la hora de reconfortar la piel en casos de quemaduras, eczemas y alergias."
    },
    {
        id: 9, 
        nombre: 'Manzanilla',
        precio: 1530,
        img: './img/products/Manzanilla.jpg',
        categoria: "herbal",
        stock: 12, 
        detalle: "Mas de una vez sufrimos las consecuencias de nuestras tentaciones cuando nos atracamos con comidas deliciosas o probamos alimentos nuevos y desconocidos que pueden hacer estragos en nuestro estomago. La manzanilla reconforta estos momentos combinando sus bondades con efectos calmantes y relajantes."
    },
    {
        id: 10, 
        nombre: '3 Mentas',
        precio: 1095,
        img: './img/products/Menta.jpg',
        categoria: "herbal",
        stock: 6, 
        detalle: "Cuando tu memoria, tu capacidad para resolver problemas y tu energia mental necesiten reiniciarse, el nuevo Blend 3 Mentas te ayudara a mejorar tu concentracion para que puedas enfocarte y liberarte del peso de las distracciones. 3 Mentas es un blend formado por un trio de aceites esenciales puros de menta piperita, spicata y silvestre que ayudaran a que tus dias sean mas productivos, naturalmente."
    },
    {
        id: 11, 
        nombre: 'Neroli',
        precio: 1390,
        img: './img/products/Neroli.jpg',
        categoria: "citrico",
        stock: 9, 
        detalle: "Su espiritu es romántico y su aroma dulce e intensamente floral. Despierta la ilusion y nos llena de deseo de soñar y de explorar. Estimula los afectos y renueva la seguridad en uno mismo. El Aceite Esencial de Neroli devuelve el alma al cuerpo."
    },
    {
        id: 12, 
        nombre: 'Palmarosa',
        precio: 1650,
        img: './img/products/Palmarosa.jpg',
        categoria: "herbal",
        stock: 7, 
        detalle: "El Aceite Esencial de Palmarosa es simbolo de equilibrio y tranquilidad. Su aroma a rocio recien formado y a rosa lo vuelve sutil y elegante a la vez. Brinda una sensacion de armonia y paz total. Ayuda a aclarar las ideas y aleja los malos pensamientos para permitirnos tomar las mejores decisiones sin quedar estancados en el mismo lugar. Los momentos fluyen sin dificultad."
    },
    {
        id: 13, 
        nombre: 'Romero',
        precio: 1600,
        img: './img/products/Romero.jpg',
        categoria: "herbal",
        stock: 14, 
        detalle: "El Aceite Esencial de Romero posee un aroma especiado, limpio y refrescante que renueva las fuerzas perdidas ante el cansancio fisico y mental. Despierta, activa y moviliza para que tus energias y tu tiempo rindan al maximo y el disfrute sea mayor."
    }







]

export default Productos;