import React from 'react';
import Pelicula from './Pelicula.jsx';

// Array de películas y actores.
const infoPelicula = [
  {
    "titulo": "Titanic",
    "director": "James Cameron",
    "cartelera": "https://www.ecartelera.com/carteles/2400/2425/002_m.jpg",
    "resumen": "Titanic es una película de 1997 que cuenta la historia de amor entre Jack y Rose, dos pasajeros del famoso barco que choca con un iceberg y se hunde. A través de su romance, se muestra la tragedia del hundimiento del Titanic en 1912. A pesar de la intensidad de su relación, Jack fallece y Rose sobrevive, recordando su experiencia años después.",
    "elenco": [
      {
        "nombre": "Leonardo DiCaprio",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
        "biografia": "Ganador de múltiples premios, reconocido por roles icónicos en películas de renombre."
      },
      {
        "nombre": "Kate Winslet",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg",
        "biografia": "Actriz británica aclamada por su versatilidad y elección de roles desafiantes."
      }
    ]
  },
  {
    "titulo": "El Padrino",
    "director": "Francis Ford Coppola",
    "cartelera": "https://i.etsystatic.com/27725708/r/il/8a19d3/2859249018/il_570xN.2859249018_gkj1.jpg",
    "resumen": "El Padrino es una novela de Mario Puzo sobre la familia mafiosa Corleone en Nueva York, liderada por Vito Corleone. La trama sigue la transferencia de poder a su hijo Michael y las luchas y traiciones dentro del mundo del crimen organizado. Fue adaptada al cine en 1972, convirtiéndose en una de las películas más aclamadas de la historia.",
    "elenco": [
      {
        "nombre": "Marlon Brando",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/800px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png",
        "biografia": "Leyenda del cine conocido por su habilidad actoral y roles memorables en el cine clásico."
      },
      {
        "nombre": "Al Pacino",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Al_Pacino_2016_%2830401544240%29.jpg/640px-Al_Pacino_2016_%2830401544240%29.jpg",
        "biografia": "Conocido por su intensidad actoral y sus icónicos papeles en películas dramáticas."
      }
    ]
  },
  {
    "titulo": "El Caballero Oscuro",
    "director": "Christopher Nolan",
    "cartelera": "https://www.themoviedb.org/t/p/w500/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
    "resumen": "El Caballero Oscuro es una película de 2008 dirigida por Christopher Nolan. Es la segunda entrega de su trilogía de Batman. Batman (Christian Bale) se enfrenta al Joker (Heath Ledger), un criminal que busca sumir a Gotham en el caos. La actuación de Ledger es especialmente aclamada.",
    "elenco": [
      {
        "nombre": "Christian Bale",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Christian_Bale-7837.jpg",
        "biografia": "Actuaciones intensas y transformaciones físicas son marcas registradas de este talentoso actor."
      },
      {
        "nombre": "Heath Ledger",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Heath_Ledger_%282%29.jpg/800px-Heath_Ledger_%282%29.jpg",
        "biografia": "Conocido por su habilidad para sumergirse profundamente en cada papel. Ganó un Oscar póstumo por su papel como el Joker."
      }
    ]
  },
  {
    "titulo": "El Señor de los Anillos: El Retorno del Rey",
    "director": "Peter Jackson",
    "cartelera": "https://www.ecartelera.com/carteles/2600/2650/001.jpg",
    "resumen": "El Señor de los Anillos: El Retorno del Rey es la tercera película de la trilogía dirigida por Peter Jackson. Frodo y Sam buscan destruir el Anillo Único mientras Aragorn lidera la batalla final contra Sauron en Minas Tirith. Ganó 11 premios Oscar, incluido el de Mejor Película.",
    "elenco": [
      {
        "nombre": "Elijah Wood",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Elijah_Wood_%2847955397556%29_%28cropped%29.jpg/800px-Elijah_Wood_%2847955397556%29_%28cropped%29.jpg",
        "biografia": "Conocido principalmente por su papel de Frodo, ha trabajado en diversos géneros a lo largo de su carrera."
      },
      {
        "nombre": "Viggo Mortensen",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Viggo_Mortensen_B_%282020%29.jpg/640px-Viggo_Mortensen_B_%282020%29.jpg",
        "biografia": "Actor versátil con una amplia trayectoria en el cine, reconocido por su papel como Aragorn."
      }
    ]
  },
  {
    "titulo": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "cartelera": "https://cartelera.elpais.com/assets/uploads/2019/01/09030106/C_02863.jpg",
    "resumen": "Pulp Fiction es una película de 1994 dirigida por Quentin Tarantino. Entrelaza múltiples historias de crimen en Los Ángeles, destacando a un boxeador en problemas, dos asesinos a sueldo y un jefe mafioso. Es conocida por su diálogo ingenioso y estructura no lineal.",
    "elenco": [
      {
        "nombre": "John Travolta",
        "foto": "https://m.media-amazon.com/images/M/MV5BMTMyMjZlYzgtZWRjMC00OTRmLTllZTktMmM1ODVmNjljMTQyXkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_.jpg",
        "biografia": "Actor icónico que ha desempeñado una variedad de roles a lo largo de su carrera, desde musicales hasta películas de acción."
      },
      {
        "nombre": "Samuel L. Jackson",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/640px-SamuelLJackson.jpg",
        "biografia": "Conocido por su presencia carismática en pantalla, ha trabajado en numerosas películas aclamadas."
      }
    ]
  },
  {
    "titulo": "Forrest Gump",
    "director": "Robert Zemeckis",
    "cartelera": "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
    "resumen": "Forrest Gump es una película de 1994 dirigida por Robert Zemeckis. Sigue la vida de Forrest, interpretado por Tom Hanks, un hombre con discapacidad intelectual que inadvertidamente influye en numerosos eventos históricos de Estados Unidos a lo largo de varias décadas. Es conocida por su frase: La vida es como una caja de bombones; nunca sabes qué te va a tocar.",
    "elenco": [
      {
        "nombre": "Tom Hanks",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Tom_Hanks_2016.jpg",
        "biografia": "Actor y productor galardonado que ha protagonizado algunas de las películas más icónicas de las últimas décadas."
      },
      {
        "nombre": "Robin Wright",
        "foto": "https://m.media-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_FMjpg_UX1000_.jpg",
        "biografia": "Actriz conocida por sus papeles en cine y televisión, incluyendo su papel en la serie 'House of Cards'."
      }
    ]
  },
  {
    "titulo": "El Rey León",
    "director": "Roger Allers, Rob Minkoff",
    "cartelera": "https://lumiere-a.akamaihd.net/v1/images/image_8b5ca578.jpeg?region=0,0,540,810",
    "resumen": "El Rey León es una película animada de 1994 producida por Disney. Narra la historia de Simba, un joven león que, tras la muerte de su padre Mufasa, huye de su hogar. Con la ayuda de amigos, Timón y Pumba, eventualmente regresa para reclamar su trono de las garras de su malvado tío Scar. Es una historia sobre identidad, responsabilidad y redención.",
    "elenco": [
      {
        "nombre": "Matthew Broderick",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Matthew_Broderick_2022.jpg/640px-Matthew_Broderick_2022.jpg",
        "biografia": "Conocido por sus roles en cine y teatro, ha demostrado ser un talento versátil en la industria del entretenimiento."
      },
      {
        "nombre": "James Earl Jones",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/f/fc/James_Earl_Jones_%288516667383%29.jpg",
        "biografia": "Actor legendario con una voz distintiva que ha sido parte de innumerables producciones en cine y televisión."
      }
    ]
  },
  {
    "titulo": "La La Land",
    "director": "Damien Chazelle",
    "cartelera": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    "resumen": "La La Land es una película de 2016 dirigida por Damien Chazelle. Es un musical que sigue a Mia, una aspirante a actriz, y a Sebastian, un músico de jazz, mientras persiguen sus sueños en Los Ángeles. A lo largo de la historia, su romance florece y enfrenta desafíos. Es destacada por su música, coreografía y un homenaje al viejo Hollywood.",
    "elenco": [
      {
        "nombre": "Ryan Gosling",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Ryan_Gosling_in_2018.jpg",
        "biografia": "Actor y músico conocido por su habilidad para alternar entre papeles dramáticos y comedias románticas."
      },
      {
        "nombre": "Emma Stone",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/3/31/Emma_Stone_at_Maniac_UK_premiere_%28cropped%29.jpg",
        "biografia": "Actriz galardonada conocida por su carisma y capacidad para interpretar una amplia variedad de personajes."
      }
    ]
  },
  {
    "titulo": "Interestelar",
    "director": "Christopher Nolan",
    "cartelera": "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg",
    "resumen": "Interestelar es una película de 2014 dirigida por Christopher Nolan. Trata sobre un grupo de astronautas, incluido Cooper, interpretado por Matthew McConaughey, que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad, amenazada por el cambio climático en la Tierra. Es un drama épico que explora temas de amor, sacrificio y relatividad.",
    "elenco": [
      {
        "nombre": "Matthew McConaughey",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Matthew_McConaughey_2019_%2848648344772%29.jpg/1200px-Matthew_McConaughey_2019_%2848648344772%29.jpg",
        "biografia": "Actor ganador del Oscar que ha demostrado ser un talento versátil con una amplia gama de papeles."
      },
      {
        "nombre": "Anne Hathaway",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anne_Hathaway_at_Berlinale_2023_%28cropped%29.jpg/1200px-Anne_Hathaway_at_Berlinale_2023_%28cropped%29.jpg",
        "biografia": "Actriz galardonada con un talento innato para interpretar personajes complejos y emocionalmente cargados."
      }
    ]
  },
  {
    "titulo": "El Resplandor",
    "director": "Stanley Kubrick",
    "cartelera": "https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg",
    "resumen": "El Resplandor es una película de 1980 dirigida por Stanley Kubrick, basada en la novela de Stephen King. Sigue a Jack Torrance, quien se convierte en el cuidador de invierno del Hotel Overlook con su familia. Aislados por la nieve, Jack sufre un deterioro mental mientras presencias sobrenaturales afectan a su familia. Es famosa por su atmósfera inquietante y escenas icónicas.",
    "elenco": [
      {
        "nombre": "Jack Nicholson",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jack_Nicholson_2002.jpg/640px-Jack_Nicholson_2002.jpg",
        "biografia": "Leyenda del cine reconocido por sus actuaciones intensas y sus inconfundibles expresiones faciales."
      },
      {
        "nombre": "Shelley Duvall",
        "foto": "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/F5EMVI2NGBAYTPR2RFZKADUTZI.JPG",
        "biografia": "Actriz conocida por su habilidad para interpretar personajes peculiares y memorables."
      }
    ]
  },
  {
    "titulo": "Memento",
    "director": "Christopher Nolan",
    "cartelera": "https://pics.filmaffinity.com/Memento-230609861-large.jpg",
    "resumen": "Memento es una película de 2000 dirigida por Christopher Nolan. Narra la historia de Leonard, quien sufre de amnesia anterógrada y no puede crear nuevos recuerdos. Utiliza notas y tatuajes para buscar al asesino de su esposa. La trama se desarrolla de manera no lineal, alternando entre secuencias en blanco y negro y en color. Es conocida por su estructura única y giros sorprendentes.",
    "elenco": [
      {
        "nombre": "Guy Pearce",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Guy_Pearce_Cannes_2012.jpg",
        "biografia": "Actor versátil conocido por sumergirse en roles complejos y desafiantes."
      },
      {
        "nombre": "Carrie-Anne Moss",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Carrie-Anne_Moss_May_2016.jpg/800px-Carrie-Anne_Moss_May_2016.jpg",
        "biografia": "Actriz aclamada por su capacidad para interpretar personajes fuertes y determinados."
      }
    ]
  },
  {
    "titulo": "El Club de la Lucha",
    "director": "David Fincher",
    "cartelera": "https://www.ecartelera.com/carteles/4000/4028/002_m.jpg",
    "resumen": "El Club de la Lucha es una película de 1999 dirigida por David Fincher, basada en la novela de Chuck Palahniuk. La historia sigue a un hombre insomne, interpretado por Edward Norton, que forma un club de lucha con Tyler Durden, interpretado por Brad Pitt. Lo que comienza como una forma de liberar agresión se convierte en un movimiento anárquico. La película es conocida por su crítica a la sociedad consumista y su giro final.",
    "elenco": [
      {
        "nombre": "Brad Pitt",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/640px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
        "biografia": "Actor y productor de renombre mundial conocido por su carisma y selección de roles desafiantes."
      },
      {
        "nombre": "Edward Norton",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg/1200px-Ed_Norton_Shankbone_Metropolitan_Opera_2009.jpg",
        "biografia": "Conocido por su intensidad en pantalla y su habilidad para abordar personajes complejos."
      }
    ]
  },
  {
    "titulo": "El Gran Gatsby",
    "director": "Baz Luhrmann",
    "cartelera": "https://pics.filmaffinity.com/El_gran_Gatsby-737648170-large.jpg",
    "resumen": "El Gran Gatsby es una novela de F. Scott Fitzgerald y ha tenido varias adaptaciones cinematográficas, siendo una de las más recientes la de 2013 dirigida por Baz Luhrmann. La historia se sitúa en la década de 1920 y sigue a Jay Gatsby, un millonario misterioso obsesionado con la bella Daisy Buchanan. A través del narrador, Nick Carraway, se exploran temas de amor, exceso y el sueño americano en el contexto de la era del jazz. La historia es conocida por su crítica a la opulencia y la decadencia de la sociedad.",
    "elenco": [
      {
        "nombre": "Leonardo DiCaprio",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
        "biografia": "Actor ganador del Oscar reconocido por una variedad de roles icónicos en películas aclamadas."
      },
      {
        "nombre": "Tobey Maguire",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg",
        "biografia": "Conocido tanto por roles dramáticos como por ser Peter Parker en la trilogía original de Spider-Man."
      }
    ]
  },
  {
    "titulo": "El Silencio de los Corderos",
    "director": "Jonathan Demme",
    "cartelera": "https://pics.filmaffinity.com/El_silencio_de_los_corderos-767447992-mmed.jpg",
    "resumen": "El Silencio de los Corderos es una película de 1991 dirigida por Jonathan Demme, basada en la novela homónima de Thomas Harris. La historia sigue a Clarice Starling, una joven agente del FBI, que busca la ayuda del encarcelado caníbal, el Dr. Hannibal Lecter, para atrapar a un asesino en serie llamado Buffalo Bill. A medida que Clarice interactúa con Lecter, se establece un juego psicológico entre ellos. La película es aclamada por las actuaciones de Jodie Foster y Anthony Hopkins y aborda temas de maldad y redención.",
    "elenco": [
      {
        "nombre": "Jodie Foster",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
        "biografia": "Actriz galardonada por su profunda habilidad actoral y por tomar roles desafiantes."
      },
      {
        "nombre": "Anthony Hopkins",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/4/47/AnthonyHopkins10TIFF.jpg",
        "biografia": "Legendario actor conocido por su carisma y habilidad para interpretar personajes complejos."
      }
    ]
  },
  {
    "titulo": "La Vida es Bella",
    "director": "Roberto Benigni",
    "cartelera": "https://pics.filmaffinity.com/La_vida_es_bella-611574521-large.jpg",
    "resumen": "La Vida es Bella es una película italiana de 1997 dirigida y protagonizada por Roberto Benigni. La historia sigue a Guido, un judío optimista y humorístico, quien es llevado a un campo de concentración nazi con su hijo. Para proteger a su hijo de la cruel realidad, Guido convence al pequeño de que todo es parte de un juego. La película combina comedia y drama para tratar un tema doloroso, destacando el poder del amor y la imaginación en las circunstancias más adversas. Ganó el Óscar a Mejor Película Extranjera.",
    "elenco": [
      {
        "nombre": "Roberto Benigni",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Roberto_Benigni-5274.jpg/1200px-Roberto_Benigni-5274.jpg",
        "biografia": "Actor, comediante y cineasta italiano, reconocido por su habilidad para mezclar humor con temas serios."
      },
      {
        "nombre": "Nicoletta Braschi",
        "foto": "https://static.wikia.nocookie.net/doblaje/images/c/c2/Nicoletta_BraschiBIO.jpg/revision/latest?cb=20220801233638&path-prefix=es",
        "biografia": "Actriz italiana conocida por trabajar en numerosas películas junto a Roberto Benigni."
      }
    ]
  },
  {
    "titulo": "El Origen",
    "director": "Christopher Nolan",
    "cartelera": "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg",
    "resumen": "El Origen es una película de 2010 dirigida por Christopher Nolan. La trama sigue a Dom Cobb, un extractor que entra en los sueños de las personas para robarles secretos. Se le ofrece la oportunidad de borrar su pasado criminal a cambio de implantar una idea en la mente de alguien, un proceso llamado inception o inicio. Con un equipo de especialistas, Cobb enfrenta desafíos en capas de sueños, mientras lidia con sus propios demonios personales. La película es conocida por sus efectos visuales, su complejidad narrativa y su exploración de la naturaleza de los sueños.",
    "elenco": [
      {
        "nombre": "Leonardo DiCaprio",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
        "biografia": "Ganador del Oscar, conocido por su dedicación y versatilidad en sus actuaciones."
      },
      {
        "nombre": "Ellen Page",
        "foto": "https://www.elnacional.cat/enblau/uploads/s1/41/05/86/93/ellen-page-gtre.jpeg",
        "biografia": "Actriz canadiense aclamada por su autenticidad y elección de roles innovadores."
      }
    ]
  },
  {
    "titulo": "Matrix",
    "director": "The Wachowski Brothers",
    "cartelera": "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
    "resumen": "Matrix es una película de 1999 dirigida por los hermanos Wachowski. La historia sigue a Neo, un programador que descubre que la realidad en la que vive es una simulación creada por máquinas para someter a la humanidad. Bajo la guía de Morpheus, Neo se une a un grupo de rebeldes para combatir a estas máquinas y liberar a la humanidad. La película es conocida por sus innovadores efectos especiales, secuencias de acción y profundos temas filosóficos sobre la realidad y la percepción.",
    "elenco": [
      {
        "nombre": "Keanu Reeves",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Keanu_Reeves_2019.jpg",
        "biografia": "Actor con una presencia icónica en el cine de acción, conocido por su humildad fuera de la pantalla."
      },
      {
        "nombre": "Carrie-Anne Moss",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Carrie-Anne_Moss_May_2016.jpg/800px-Carrie-Anne_Moss_May_2016.jpg",
        "biografia": "Actriz reconocida por su papel en la trilogía de Matrix y su habilidad para interpretar personajes fuertes."
      }
    ]
  },
  {
    "titulo": "El Pianista",
    "director": "Roman Polanski",
    "cartelera": "https://pics.filmaffinity.com/El_pianista-978132965-large.jpg",
    "resumen": "El Pianista es una película de 2002 dirigida por Roman Polanski. Basada en la autobiografía de Władysław Szpilman, la trama sigue al músico judío-polaco mientras sobrevive al Holocausto en el gueto de Varsovia. Aislado y luchando por la supervivencia, la música se convierte en su refugio y salvación. La película destaca la brutalidad de la guerra y la resistencia del espíritu humano, con una actuación destacada de Adrien Brody, quien ganó el Óscar al Mejor Actor por su papel.",
    "elenco": [
      {
        "nombre": "Adrien Brody",
        "foto": "https://m.media-amazon.com/images/M/MV5BMjI3ODkxMjU3OF5BMl5BanBnXkFtZTgwMTk2Njk3MTE@._V1_.jpg",
        "biografia": "Actor aclamado y ganador del Oscar por su inmersiva actuación en 'El Pianista'."
      },
      {
        "nombre": "Emilia Fox",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/1/13/Emilia_Fox.jpg",
        "biografia": "Actriz británica reconocida por su talento y versatilidad en cine y televisión."
      }
    ]
  },
  {
    "titulo": "Ciudad de Dios",
    "director": "Fernando Meirelles, Kátia Lund",
    "cartelera": "https://pics.filmaffinity.com/Ciudad_de_Dios-826768565-large.jpg",
    "resumen": "Ciudad de Dios es una película brasileña de 2002 dirigida por Fernando Meirelles y Kátia Lund. Ambientada en una favela de Río de Janeiro, narra el crecimiento del crimen organizado en la zona desde finales de los años 60 hasta los 80, a través de los ojos de Buscapé, un joven que sueña con ser fotógrafo. La película es cruda y realista, mostrando la violencia y las difíciles decisiones que enfrentan sus habitantes. Es aclamada por su dirección, cinematografía y representación sin adornos de la vida en las favelas.",
    "elenco": [
      {
        "nombre": "Alexandre Rodrigues",
        "foto": "https://static.wikia.nocookie.net/doblaje/images/4/42/Alexandre_rodrigues_ator.png/revision/latest?cb=20180226035153&path-prefix=es",
        "biografia": "Conocido principalmente por su papel en 'Ciudad de Dios', ha dejado una marca en el cine brasileño."
      },
      {
        "nombre": "Leandro Firmino",
        "foto": "https://images.mubicdn.net/images/cast_member/2446/cache-134026-1596273313/image-w856.jpg?size=800x",
        "biografia": "Reconocido por su actuación intensa como 'Zé Pequeño' en 'Ciudad de Dios'."
      }
    ]
  },
  {
    "titulo": "La Lista de Schindler",
    "director": "Steven Spielberg",
    "cartelera": "https://m.media-amazon.com/images/I/91H6ueCBD1L._AC_UF1000,1000_QL80_.jpg",
    "resumen": "La Lista de Schindler es una película de 1993 dirigida por Steven Spielberg. Basada en hechos reales, cuenta la historia de Oskar Schindler, un empresario alemán que salva a más de mil judíos polacos del Holocausto al emplearlos en su fábrica durante la Segunda Guerra Mundial. A pesar de comenzar como un oportunista, Schindler se convierte en un salvador humanitario. La película es conocida por su representación emotiva y realista del Holocausto, y ganó siete premios Óscar, incluido el de Mejor Película.",
    "elenco": [
      {
        "nombre": "Liam Neeson",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Liam_Neeson_Deauville_2012_2.jpg",
        "biografia": "Actor renombrado por sus roles en películas de acción y drama, con una presencia imponente en pantalla."
      },
      {
        "nombre": "Ralph Fiennes",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Ralph_Fiennes_from_%22The_White_Crow%22_at_Opening_Ceremony_of_the_Tokyo_International_Film_Festival_2018_%2831747095048%29.jpg",
        "biografia": "Actor británico conocido por su habilidad para interpretar personajes complejos y antagónicos."
      }
    ]
  }
]

// Componente que muestra cada una de las películas del array infoPelicula.
function ContenedorPeliculas() {
  return (
    <div className="ContenedorPeliculas">
      {infoPelicula.map((pelicula, index) => (
        <Pelicula 
          key={index}
          titulo={pelicula.titulo}
          director={pelicula.director}
          cartelera={pelicula.cartelera}
          elenco={pelicula.elenco}
          resumen={pelicula.resumen}
        />
      ))}
    </div>
  );
}

export default ContenedorPeliculas