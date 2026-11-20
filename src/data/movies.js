// Movie listing data for the cinema billboard.
// Each movie has: id, title, image, synopsis, rating (age classification),
// score (0-10), genre, duration (minutes) and showtimes.
export const movies = [
  {
    id: 1,
    title: 'Órbita Final',
    image: '/posters/orbita-final.svg',
    synopsis:
      'Una tripulación varada en la estación espacial debe decidir quien regresa a la Tierra cuando solo queda una cápsula de escape.',
    rating: 'PG-13',
    score: 8.7,
    genre: 'Ciencia ficción',
    duration: 128,
    showtimes: ['14:00', '17:30', '21:00'],
  },
  {
    id: 2,
    title: 'La Casa del Puerto',
    image: '/posters/la-casa-del-puerto.svg',
    synopsis:
      'Una familia hereda una casona en el Callao y descubre que sus antiguos dueños nunca se fueron del todo.',
    rating: '14',
    score: 7.4,
    genre: 'Terror',
    duration: 102,
    showtimes: ['16:15', '19:45', '22:30'],
  },
  {
    id: 3,
    title: 'Corazón de Barro',
    image: '/posters/corazon-de-barro.svg',
    synopsis:
      'Un alfarero de Chulucanas intenta salvar el taller de su abuelo mientras se enamora de la arquitecta que viene a demolerlo.',
    rating: 'APT',
    score: 7.9,
    genre: 'Romance',
    duration: 110,
    showtimes: ['13:30', '16:00', '18:30'],
  },
  {
    id: 4,
    title: 'Código Rojo',
    image: '/posters/codigo-rojo.svg',
    synopsis:
      'Una analista de ciberseguridad tiene doce horas para detener un ataque que dejará a oscuras a toda la ciudad.',
    rating: '14',
    score: 8.1,
    genre: 'Acción',
    duration: 118,
    showtimes: ['15:00', '18:15', '21:45'],
  },
  {
    id: 5,
    title: 'El Gran Viaje de Pipo',
    image: '/posters/el-gran-viaje-de-pipo.svg',
    synopsis:
      'Un pequeño colibrí que no sabe volar recorre los Andes para reencontrarse con su bandada antes del invierno.',
    rating: 'APT',
    score: 8.4,
    genre: 'Animación',
    duration: 95,
    showtimes: ['11:00', '13:15', '15:30'],
  },
  {
    id: 6,
    title: 'Última Ronda',
    image: '/posters/ultima-ronda.svg',
    synopsis:
      'Un boxeador retirado acepta entrenar a la hija de su antiguo rival para la pelea que él nunca pudo ganar.',
    rating: 'PG-13',
    score: 7.6,
    genre: 'Drama',
    duration: 124,
    showtimes: ['17:00', '20:00'],
  },
  {
    id: 7,
    title: 'Risas en Cuarentena',
    image: '/posters/risas-en-cuarentena.svg',
    synopsis:
      'Cinco compañeros de departamento quedan encerrados una semana y convierten la convivencia en un caos absoluto.',
    rating: 'APT',
    score: 6.9,
    genre: 'Comedia',
    duration: 98,
    showtimes: ['12:45', '15:15', '19:00', '21:30'],
  },
  {
    id: 8,
    title: 'Sombras de Lima',
    image: '/posters/sombras-de-lima.svg',
    synopsis:
      'Un detective veterano y una periodista novata siguen la pista de un asesino que deja acertijos en el Centro Histórico.',
    rating: '18',
    score: 8.3,
    genre: 'Suspenso',
    duration: 131,
    showtimes: ['18:00', '21:15', '23:40'],
  },
]

// The featured movie shown in the Hero banner.
export const featuredMovie = movies[0]
