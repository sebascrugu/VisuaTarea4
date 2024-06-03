// visualizations.js

// Aquí pondrás el contenido de los archivos JSON directamente como variables JavaScript
const distritosCrData = {
    "name": "Costa Rica",
    "children": [
      {
        "name": "San José",
        "children": [
          {
            "name": "San José",
            "children": [
              { "name": "Carmen", "size": 2946 },
              { "name": "Merced", "size": 15408 },
              { "name": "Hospital", "size": 24030 },
              { "name": "Catedral", "size": 15682 },
              { "name": "Zapote", "size": 21990 },
              { "name": "San Francisco de Dos Ríos", "size": 23745 },
              { "name": "Uruca", "size": 42861 },
              { "name": "Mata Redonda", "size": 10119 },
              { "name": "Pavas", "size": 89531 },
              { "name": "Hatillo", "size": 60723 },
              { "name": "San Sebastián", "size": 44923 }
            ]
          },
          {
            "name": "Escazú",
            "children": [
              { "name": "Escazú", "size": 13752 },
              { "name": "San Antonio", "size": 28329 },
              { "name": "San Rafael", "size": 29121 }
            ]
          },
          {
            "name": "Desamparados",
            "children": [
              { "name": "Desamparados", "size": 37479 },
              { "name": "San Miguel", "size": 38716 },
              { "name": "San Juan de Dios", "size": 24505 },
              { "name": "San Rafael Arriba", "size": 18412 },
              { "name": "San Antonio", "size": 11343 },
              { "name": "Frailes", "size": 4586 },
              { "name": "Patarrá", "size": 14919 },
              { "name": "San Cristóbal", "size": 4769 },
              { "name": "Rosario", "size": 3787 },
              { "name": "Damas", "size": 15713 },
              { "name": "San Rafael Abajo", "size": 26781 },
              { "name": "Gravilias", "size": 17237 },
              { "name": "Los Guido", "size": 31120 }
            ]
          },
          {
            "name": "Puriscal",
            "children": [
              { "name": "Santiago", "size": 12600 },
              { "name": "Mercedes Sur", "size": 7099 },
              { "name": "Barbacoas", "size": 4486 },
              { "name": "Grifo Alto", "size": 1492 },
              { "name": "San Rafael", "size": 2009 },
              { "name": "Candelarita", "size": 1753 },
              { "name": "Desamparaditos", "size": 794 },
              { "name": "San Antonio", "size": 4720 },
              { "name": "Chires", "size": 3640 }
            ]
          },
          {
            "name": "Tarrazú",
            "children": [
              { "name": "San Marcos", "size": 11365 },
              { "name": "San Lorenzo", "size": 5250 },
              { "name": "San Carlos", "size": 2172 }
            ]
          },
          {
            "name": "Aserrí",
            "children": [
              { "name": "Aserrí", "size": 30347 },
              { "name": "Tarbaca", "size": 1676 },
              { "name": "Vuelta de Jorco", "size": 7342 },
              { "name": "San Gabriel", "size": 6930 },
              { "name": "Legua", "size": 1748 },
              { "name": "Monterrey", "size": 558 },
              { "name": "Salitrillos", "size": 15879 }
            ]
          },
          {
            "name": "Mora",
            "children": [
              { "name": "Colón", "size": 17411 },
              { "name": "Guayabo", "size": 5414 },
              { "name": "Tabarcia", "size": 5160 },
              { "name": "Piedras Negras", "size": 498 },
              { "name": "Picagres", "size": 899 },
              { "name": "Jaris", "size": 1377 },
              { "name": "Quitirrisí", "size": 0 }
            ]
          },
          {
            "name": "Goicoechea",
            "children": [
              { "name": "Guadalupe", "size": 22347 },
              { "name": "San Francisco", "size": 2421 },
              { "name": "Calle Blancos", "size": 23451 },
              { "name": "Mata de Plátano", "size": 21198 },
              { "name": "Ipís", "size": 32049 },
              { "name": "Rancho Redondo", "size": 3224 },
              { "name": "Purral", "size": 36074 }
            ]
          },
          {
            "name": "Santa Ana",
            "children": [
              { "name": "Santa Ana", "size": 12956 },
              { "name": "Salitral", "size": 5587 },
              { "name": "Pozos", "size": 20671 },
              { "name": "Uruca", "size": 9129 },
              { "name": "Piedades", "size": 10263 },
              { "name": "Brasil", "size": 3247 }
            ]
          },
          {
            "name": "Alajuelita",
            "children": [
              { "name": "Alajuelita", "size": 13325 },
              { "name": "San Josecito", "size": 13069 },
              { "name": "San Antonio", "size": 6003 },
              { "name": "Concepción", "size": 23455 },
              { "name": "San Felipe", "size": 41306 }
            ]
          },
          {
            "name": "Vázquez de Coronado",
            "children": [
              { "name": "San Isidro", "size": 18631 },
              { "name": "San Rafael", "size": 8643 },
              { "name": "Dulce Nombre de Jesús", "size": 12149 },
              { "name": "Patalillo", "size": 24907 },
              { "name": "Cascajal", "size": 8602 }
            ]
          },
          {
            "name": "Acosta",
            "children": [
              { "name": "San Ignacio", "size": 9475 },
              { "name": "Guaitil", "size": 2685 },
              { "name": "Palmichal", "size": 5308 },
              { "name": "Cangrejal", "size": 2121 },
              { "name": "Sabanillas", "size": 2668 }
            ]
          },
          {
            "name": "Tibás",
            "children": [
              { "name": "San Juan", "size": 25866 },
              { "name": "Cinco Esquinas", "size": 8617 },
              { "name": "Anselmo Llorente", "size": 12913 },
              { "name": "León XIII", "size": 20551 },
              { "name": "Colima", "size": 18118 }
            ]
          },
          {
            "name": "Moravia",
            "children": [
              { "name": "San Vicente", "size": 32041 },
              { "name": "San Jerónimo", "size": 7463 },
              { "name": "La Trinidad", "size": 23755 }
            ]
          },
          {
            "name": "Montes de Oca",
            "children": [
              { "name": "San Pedro", "size": 28844 },
              { "name": "Sabanilla", "size": 14082 },
              { "name": "Mercedes", "size": 6086 },
              { "name": "San Rafael", "size": 13832 }
            ]
          },
          {
            "name": "Turrubares",
            "children": [
              { "name": "San Pablo", "size": 1573 },
              { "name": "San Pedro", "size": 861 },
              { "name": "San Juan de Mata", "size": 1546 },
              { "name": "San Luis", "size": 721 },
              { "name": "Carara", "size": 2330 }
            ]
          },
          {
            "name": "Dota",
            "children": [
              { "name": "Santa María", "size": 5251 },
              { "name": "Jardín", "size": 702 },
              { "name": "Copey", "size": 2088 }
            ]
          },
          {
            "name": "Curridabat",
            "children": [
              { "name": "Curridabat", "size": 32605 },
              { "name": "Granadilla", "size": 19207 },
              { "name": "Sánchez", "size": 6833 },
              { "name": "Tirrases", "size": 22032 }
            ]
          },
          {
            "name": "Pérez Zeledón",
            "children": [
              { "name": "San Isidro de El General", "size": 48435 },
              { "name": "El General", "size": 6873 },
              { "name": "Daniel Flores", "size": 35584 },
              { "name": "Rivas", "size": 7318 },
              { "name": "San Pedro", "size": 9344 },
              { "name": "Platanares", "size": 7497 },
              { "name": "Pejibaye", "size": 7972 },
              { "name": "Cajón", "size": 9045 },
              { "name": "Barú", "size": 2854 },
              { "name": "Río Nuevo", "size": 3495 },
              { "name": "Páramo", "size": 4865 },
              { "name": "La Amistad", "size": 0 }
            ]
          },
          {
            "name": "León Cortés",
            "children": [
              { "name": "San Pablo", "size": 4663 },
              { "name": "San Andrés", "size": 1746 },
              { "name": "Llano Bonito", "size": 2269 },
              { "name": "San Isidro", "size": 1870 },
              { "name": "Santa Cruz", "size": 2164 },
              { "name": "San Antonio", "size": 1278 }
            ]
          }
        ]
      },
      {
        "name": "Alajuela",
        "children": [
          {
            "name": "Alajuela",
            "children": [
              { "name": "Alajuela", "size": 48326 },
              { "name": "San José", "size": 52686 },
              { "name": "Carrizal", "size": 9002 },
              { "name": "San Antonio", "size": 31637 },
              { "name": "Guácima", "size": 26642 },
              { "name": "San Isidro", "size": 22586 },
              { "name": "Sabanilla", "size": 12396 },
              { "name": "San Rafael", "size": 34182 },
              { "name": "Río Segundo", "size": 13561 },
              { "name": "Desamparados", "size": 33654 },
              { "name": "Turrúcares", "size": 9349 },
              { "name": "Tambor", "size": 14338 },
              { "name": "Garita", "size": 9492 },
              { "name": "Sarapiquí", "size": 4021 }
            ]
          },
          {
            "name": "San Ramón",
            "children": [
              { "name": "San Ramón", "size": 9107 },
              { "name": "Santiago", "size": 5699 },
              { "name": "San Juan", "size": 13406 },
              { "name": "Piedades Norte", "size": 9564 },
              { "name": "Piedades Sur", "size": 4603 },
              { "name": "San Rafael", "size": 10904 },
              { "name": "San Isidro", "size": 5938 },
              { "name": "Ángeles", "size": 9793 },
              { "name": "Alfaro", "size": 8402 },
              { "name": "Volio", "size": 2727 },
              { "name": "Concepción", "size": 2765 },
              { "name": "Zapotal", "size": 515 },
              { "name": "Peñas Blancas", "size": 12371 },
              { "name": "San Lorenzo", "size": 0 }
            ]
          },
          {
            "name": "Grecia",
            "children": [
              { "name": "Grecia", "size": 16146 },
              { "name": "San Isidro", "size": 7293 },
              { "name": "San José", "size": 10231 },
              { "name": "San Roque", "size": 13660 },
              { "name": "Tacares", "size": 10050 },
              { "name": "Puente de Piedra", "size": 13274 },
              { "name": "Bolívar", "size": 9018 }
            ]
          },
          {
            "name": "San Mateo",
            "children": [
              { "name": "San Mateo", "size": 3071 },
              { "name": "Desmonte", "size": 1201 },
              { "name": "Jesús María", "size": 1517 },
              { "name": "Labrador", "size": 1487 }
            ]
          },
          {
            "name": "Atenas",
            "children": [
              { "name": "Atenas", "size": 8015 },
              { "name": "Jesús", "size": 4396 },
              { "name": "Mercedes", "size": 3832 },
              { "name": "San Isidro", "size": 3521 },
              { "name": "Concepción", "size": 4261 },
              { "name": "San José", "size": 2326 },
              { "name": "Santa Eulalia", "size": 2510 },
              { "name": "Escobal", "size": 1019 }
            ]
          },
          {
            "name": "Naranjo",
            "children": [
              { "name": "Naranjo", "size": 17348 },
              { "name": "San Miguel", "size": 5782 },
              { "name": "San José", "size": 3666 },
              { "name": "Cirrí Sur", "size": 5533 },
              { "name": "San Jerónimo", "size": 4076 },
              { "name": "San Juan", "size": 3688 },
              { "name": "El Rosario", "size": 4638 },
              { "name": "Palmitos", "size": 5033 }
            ]
          },
          {
            "name": "Palmares",
            "children": [
              { "name": "Palmares", "size": 3764 },
              { "name": "Zaragoza", "size": 9901 },
              { "name": "Buenos Aires", "size": 8931 },
              { "name": "Santiago", "size": 3379 },
              { "name": "Candelaria", "size": 2457 },
              { "name": "Esquipulas", "size": 8435 },
              { "name": "La Granja", "size": 4938 }
            ]
          },
          {
            "name": "Poás",
            "children": [
              { "name": "San Pedro", "size": 8243 },
              { "name": "San Juan", "size": 5647 },
              { "name": "San Rafael", "size": 6655 },
              { "name": "Carrillos", "size": 11330 },
              { "name": "Sabana Redonda", "size": 3051 }
            ]
          },
          {
            "name": "Orotina",
            "children": [
              { "name": "Orotina", "size": 10680 },
              { "name": "El Mastate", "size": 2249 },
              { "name": "Hacienda Vieja", "size": 1242 },
              { "name": "Coyolar", "size": 7685 },
              { "name": "La Ceiba", "size": 2592 }
            ]
          },
          {
            "name": "San Carlos",
            "children": [
              { "name": "Quesada", "size": 46127 },
              { "name": "Florencia", "size": 18517 },
              { "name": "Buenavista", "size": 420 },
              { "name": "Aguas Zarcas", "size": 26305 },
              { "name": "Venecia", "size": 12172 },
              { "name": "Pital", "size": 25359 },
              { "name": "La Fortuna", "size": 19584 },
              { "name": "La Tigra", "size": 7964 },
              { "name": "La Palmera", "size": 7940 },
              { "name": "Venado", "size": 2173 },
              { "name": "Cutris", "size": 15537 },
              { "name": "Monterrey", "size": 4321 },
              { "name": "Pocosol", "size": 19696 }
            ]
          },
          {
            "name": "Zarcero",
            "children": [
              { "name": "Zarcero", "size": 4397 },
              { "name": "Laguna", "size": 2031 },
              { "name": "Tapesco", "size": 1582 },
              { "name": "Guadalupe", "size": 1427 },
              { "name": "Palmira", "size": 1712 },
              { "name": "Zapote", "size": 944 },
              { "name": "Brisas", "size": 2536 }
            ]
          },
          {
            "name": "Sarchí",
            "children": [
              { "name": "Sarchí Norte", "size": 8382 },
              { "name": "Sarchí Sur", "size": 6539 },
              { "name": "Toro Amarillo", "size": 380 },
              { "name": "San Pedro", "size": 4463 },
              { "name": "Rodríguez", "size": 2832 }
            ]
          },
          {
            "name": "Upala",
            "children": [
              { "name": "Upala", "size": 16850 },
              { "name": "Aguas Claras", "size": 5714 },
              { "name": "San José", "size": 8795 },
              { "name": "Bijagua", "size": 5363 },
              { "name": "Delicias", "size": 5479 },
              { "name": "Dos Ríos", "size": 4017 },
              { "name": "Yolillal", "size": 4129 },
              { "name": "Canalete", "size": 5119 }
            ]
          },
          {
            "name": "Los Chiles",
            "children": [
              { "name": "Los Chiles", "size": 21714 },
              { "name": "Caño Negro", "size": 2333 },
              { "name": "El Amparo", "size": 7772 },
              { "name": "San Jorge", "size": 3369 }
            ]
          },
          {
            "name": "Guatuso",
            "children": [
              { "name": "San Rafael", "size": 10117 },
              { "name": "Buenavista", "size": 1990 },
              { "name": "Cote", "size": 1092 },
              { "name": "Katira", "size": 6497 }
            ]
          },
          {
            "name": "Río Cuarto",
            "children": [
              { "name": "Río Cuarto", "size": 0 },
              { "name": "Santa Rita", "size": 0 },
              { "name": "Santa Isabel", "size": 0 }
            ]
          }
        ]
      },
      {
        "name": "Cartago",
        "children": [
          {
            "name": "Cartago",
            "children": [
              { "name": "Oriental", "size": 12310 },
              { "name": "Occidental", "size": 10465 },
              { "name": "Carmen", "size": 19390 },
              { "name": "San Nicolás", "size": 29913 },
              { "name": "Aguacaliente", "size": 36408 },
              { "name": "Guadalupe", "size": 16547 },
              { "name": "Corralillo", "size": 12064 },
              { "name": "Tierra Blanca", "size": 5926 },
              { "name": "Dulce Nombre", "size": 12004 },
              { "name": "Llano Grande", "size": 5120 },
              { "name": "Quebradilla", "size": 6057 }
            ]
          },
          {
            "name": "Paraíso",
            "children": [
              { "name": "Paraíso", "size": 21561 },
              { "name": "Santiago", "size": 6493 },
              { "name": "Orosi", "size": 10208 },
              { "name": "Cachí", "size": 5944 },
              { "name": "Llanos de Santa Lucía", "size": 19590 },
              { "name": "Birrisito", "size": 0 }
            ]
          },
          {
            "name": "La Unión",
            "children": [
              { "name": "Tres Ríos", "size": 9298 },
              { "name": "San Diego", "size": 25354 },
              { "name": "San Juan", "size": 15752 },
              { "name": "San Rafael", "size": 16277 },
              { "name": "Concepción", "size": 19259 },
              { "name": "Dulce Nombre", "size": 9289 },
              { "name": "San Ramón", "size": 4526 },
              { "name": "Río Azul", "size": 14860 }
            ]
          },
          {
            "name": "Jiménez",
            "children": [
              { "name": "Juan Viñas", "size": 7095 },
              { "name": "Tucurrique", "size": 5601 },
              { "name": "Pejibaye", "size": 3665 },
              { "name": "La Victoria", "size": 0 }
            ]
          },
          {
            "name": "Turrialba",
            "children": [
              { "name": "Turrialba", "size": 27039 },
              { "name": "La Suiza", "size": 7939 },
              { "name": "Peralta", "size": 621 },
              { "name": "Santa Cruz", "size": 3804 },
              { "name": "Santa Teresita", "size": 5402 },
              { "name": "Pavones", "size": 4628 },
              { "name": "Tuis", "size": 2950 },
              { "name": "Tayutic", "size": 2506 },
              { "name": "Santa Rosa", "size": 5747 },
              { "name": "Tres Equis", "size": 1964 },
              { "name": "La Isabel", "size": 6362 },
              { "name": "Chirripó", "size": 4584 }
            ]
          },
          {
            "name": "Alvarado",
            "children": [
              { "name": "Pacayas", "size": 5989 },
              { "name": "Cervantes", "size": 6916 },
              { "name": "Capellades", "size": 2710 }
            ]
          },
          {
            "name": "Oreamuno",
            "children": [
              { "name": "San Rafael", "size": 29275 },
              { "name": "Cot", "size": 11360 },
              { "name": "Potrero Cerrado", "size": 2705 },
              { "name": "Cipreses", "size": 4234 },
              { "name": "Santa Rosa", "size": 3021 }
            ]
          },
          {
            "name": "El Guarco",
            "children": [
              { "name": "El Tejar", "size": 27037 },
              { "name": "San Isidro", "size": 11632 },
              { "name": "Tobosi", "size": 7834 },
              { "name": "Patio de Agua", "size": 456 }
            ]
          }
        ]
      },
      {
        "name": "Heredia",
        "children": [
          {
            "name": "Heredia",
            "children": [
              { "name": "Heredia", "size": 18988 },
              { "name": "Mercedes", "size": 30276 },
              { "name": "San Francisco", "size": 60166 },
              { "name": "Ulloa", "size": 35618 },
              { "name": "Varablanca", "size": 972 }
            ]
          },
          {
            "name": "Barva",
            "children": [
              { "name": "Barva", "size": 5099 },
              { "name": "San Pedro", "size": 12026 },
              { "name": "San Pablo", "size": 10105 },
              { "name": "San Roque", "size": 5507 },
              { "name": "Santa Lucía", "size": 8524 },
              { "name": "San José de la Montaña", "size": 6929 }
            ]
          },
          {
            "name": "Santo Domingo",
            "children": [
              { "name": "Santo Domingo", "size": 5050 },
              { "name": "San Vicente", "size": 8072 },
              { "name": "San Miguel", "size": 7988 },
              { "name": "Paracito", "size": 2832 },
              { "name": "Santo Tomás", "size": 7953 },
              { "name": "Santa Rosa", "size": 9264 },
              { "name": "Tures", "size": 4477 },
              { "name": "Pará", "size": 4199 }
            ]
          },
          {
            "name": "Santa Bárbara",
            "children": [
              { "name": "Santa Bárbara", "size": 6394 },
              { "name": "San Pedro", "size": 7016 },
              { "name": "San Juan", "size": 9308 },
              { "name": "Jesús", "size": 11842 },
              { "name": "Santo Domingo", "size": 3699 },
              { "name": "Purabá", "size": 5619 }
            ]
          },
          {
            "name": "San Rafael",
            "children": [
              { "name": "San Rafael", "size": 10787 },
              { "name": "San Josecito", "size": 14331 },
              { "name": "Santiago", "size": 10534 },
              { "name": "Ángeles", "size": 13017 },
              { "name": "Concepción", "size": 7891 }
            ]
          },
          {
            "name": "San Isidro",
            "children": [
              { "name": "San Isidro", "size": 6413 },
              { "name": "San José", "size": 8895 },
              { "name": "Concepción", "size": 3115 },
              { "name": "San Francisco", "size": 5232 }
            ]
          },
          {
            "name": "Belén",
            "children": [
              { "name": "San Antonio", "size": 11625 },
              { "name": "La Ribera", "size": 7753 },
              { "name": "La Asunción", "size": 7475 }
            ]
          },
          {
            "name": "Flores",
            "children": [
              { "name": "San Joaquín", "size": 8341 },
              { "name": "Barrantes", "size": 5340 },
              { "name": "Llorente", "size": 11720 }
            ]
          },
          {
            "name": "San Pablo",
            "children": [
              { "name": "San Pablo", "size": 21485 },
              { "name": "Rincón de Sabanilla", "size": 10034 }
            ]
          },
          {
            "name": "Sarapiquí",
            "children": [
              { "name": "Puerto Viejo", "size": 31580 },
              { "name": "La Virgen", "size": 16493 },
              { "name": "Las Horquetas", "size": 35957 },
              { "name": "Llanuras del Gaspar", "size": 2059 },
              { "name": "Cureña", "size": 1598 }
            ]
          }
        ]
      },
      {
        "name": "Guanacaste",
        "children": [
          {
            "name": "Liberia",
            "children": [
              { "name": "Liberia", "size": 67132 },
              { "name": "Cañas Dulces", "size": 4075 },
              { "name": "Mayorga", "size": 2032 },
              { "name": "Nacascolo", "size": 3129 },
              { "name": "Curubandé", "size": 3242 }
            ]
          },
          {
            "name": "Nicoya",
            "children": [
              { "name": "Nicoya", "size": 27131 },
              { "name": "Mansión", "size": 5772 },
              { "name": "San Antonio", "size": 7148 },
              { "name": "Quebrada Honda", "size": 2591 },
              { "name": "Sámara", "size": 4685 },
              { "name": "Nosara", "size": 7213 },
              { "name": "Belén de Nosarita", "size": 3084 }
            ]
          },
          {
            "name": "Santa Cruz",
            "children": [
              { "name": "Santa Cruz", "size": 28008 },
              { "name": "Bolsón", "size": 2182 },
              { "name": "Veintisiete de Abril", "size": 9302 },
              { "name": "Tempate", "size": 6467 },
              { "name": "Cartagena", "size": 5147 },
              { "name": "Cuajiniquil", "size": 2678 },
              { "name": "Diriá", "size": 4983 },
              { "name": "Cabo Velas", "size": 4381 },
              { "name": "Tamarindo", "size": 8136 }
            ]
          },
          {
            "name": "Bagaces",
            "children": [
              { "name": "Bagaces", "size": 16462 },
              { "name": "La Fortuna", "size": 3112 },
              { "name": "Mogote", "size": 4079 },
              { "name": "Río Naranjo", "size": 1194 }
            ]
          },
          {
            "name": "Carrillo",
            "children": [
              { "name": "Filadelfia", "size": 8967 },
              { "name": "Palmira", "size": 6910 },
              { "name": "Sardinal", "size": 20094 },
              { "name": "Belén", "size": 11785 }
            ]
          },
          {
            "name": "Cañas",
            "children": [
              { "name": "Cañas", "size": 26577 },
              { "name": "Palmira", "size": 1361 },
              { "name": "San Miguel", "size": 2076 },
              { "name": "Bebedero", "size": 2582 },
              { "name": "Porozal", "size": 797 }
            ]
          },
          {
            "name": "Abangares",
            "children": [
              { "name": "Las Juntas", "size": 10437 },
              { "name": "Sierra", "size": 2827 },
              { "name": "San Juan", "size": 1857 },
              { "name": "Colorado", "size": 5161 }
            ]
          },
          {
            "name": "Tilarán",
            "children": [
              { "name": "Tilarán", "size": 9449 },
              { "name": "Quebrada Grande", "size": 3104 },
              { "name": "Tronadora", "size": 2029 },
              { "name": "Santa Rosa", "size": 2188 },
              { "name": "Líbano", "size": 958 },
              { "name": "Tierras Morenas", "size": 1545 },
              { "name": "Arenal", "size": 2711 }
            ]
          },
          {
            "name": "Nandayure",
            "children": [
              { "name": "Carmona", "size": 2663 },
              { "name": "Santa Rita", "size": 1480 },
              { "name": "Zapotal", "size": 1263 },
              { "name": "San Pablo", "size": 2362 },
              { "name": "Porvenir", "size": 759 },
              { "name": "Bejuco", "size": 3311 }
            ]
          },
          {
            "name": "La Cruz",
            "children": [
              { "name": "La Cruz", "size": 13204 },
              { "name": "Santa Cecilia", "size": 9191 },
              { "name": "La Garita", "size": 2665 },
              { "name": "Santa Elena", "size": 3011 }
            ]
          },
          {
            "name": "Hojancha",
            "children": [
              { "name": "Hojancha", "size": 4707 },
              { "name": "Monte Romo", "size": 724 },
              { "name": "Puerto Carrillo", "size": 1893 },
              { "name": "Huacas", "size": 761 },
              { "name": "Matambú", "size": 0 }
            ]
          }
        ]
      },
      {
        "name": "Puntarenas",
        "children": [
          {
            "name": "Puntarenas",
            "children": [
              { "name": "Puntarenas", "size": 10342 },
              { "name": "Pitahaya", "size": 2755 },
              { "name": "Chomes", "size": 6645 },
              { "name": "Lepanto", "size": 10444 },
              { "name": "Paquera", "size": 8410 },
              { "name": "Manzanillo", "size": 3459 },
              { "name": "Guacimal", "size": 1173 },
              { "name": "Barranca", "size": 39426 },
              { "name": "Monte Verde", "size": 4943 },
              { "name": "Isla del Coco", "size": 0 },
              { "name": "Cóbano", "size": 9736 },
              { "name": "Chacarita", "size": 21244 },
              { "name": "Chira", "size": 1714 },
              { "name": "Acapulco", "size": 1560 },
              { "name": "El Roble", "size": 21240 },
              { "name": "Arancibia", "size": 784 }
            ]
          },
          {
            "name": "Esparza",
            "children": [
              { "name": "Espíritu Santo", "size": 22181 },
              { "name": "San Juan Grande", "size": 8915 },
              { "name": "Macacona", "size": 5482 },
              { "name": "San Rafael", "size": 1725 },
              { "name": "San Jerónimo", "size": 941 },
              { "name": "Caldera", "size": 0 }
            ]
          },
          {
            "name": "Buenos Aires",
            "children": [
              { "name": "Buenos Aires", "size": 29454 },
              { "name": "Volcán", "size": 3690 },
              { "name": "Potrero Grande", "size": 6494 },
              { "name": "Boruca", "size": 3289 },
              { "name": "Pilas", "size": 1749 },
              { "name": "Colinas", "size": 1391 },
              { "name": "Chánguena", "size": 2929 },
              { "name": "Biolley", "size": 2589 },
              { "name": "Brunka", "size": 3197 }
            ]
          },
          {
            "name": "Montes de Oro",
            "children": [
              { "name": "Miramar", "size": 9027 },
              { "name": "La Unión", "size": 1513 },
              { "name": "San Isidro", "size": 4047 }
            ]
          },
          {
            "name": "Osa",
            "children": [
              { "name": "Puerto Cortés", "size": 8844 },
              { "name": "Palmar", "size": 9716 },
              { "name": "Sierpe", "size": 3645 },
              { "name": "Bahía Ballena", "size": 3487 },
              { "name": "Piedras Blancas", "size": 4529 },
              { "name": "Bahía Drake", "size": 1162 }
            ]
          },
          {
            "name": "Quepos",
            "children": [
              { "name": "Quepos", "size": 25665 },
              { "name": "Savegre", "size": 4116 },
              { "name": "Naranjito", "size": 4239 }
            ]
          },
          {
            "name": "Golfito",
            "children": [
              { "name": "Golfito", "size": 11867 },
              { "name": "Puerto Jiménez", "size": 12836 },
              { "name": "Guaycará", "size": 14120 },
              { "name": "Pavón", "size": 7700 }
            ]
          },
          {
            "name": "Coto Brus",
            "children": [
              { "name": "San Vito", "size": 16629 },
              { "name": "Sabalito", "size": 13202 },
              { "name": "Aguabuena", "size": 7050 },
              { "name": "Limoncito", "size": 4152 },
              { "name": "Pittier", "size": 3247 },
              { "name": "Gutiérrez Braun", "size": 0 }
            ]
          },
          {
            "name": "Parrita",
            "children": [
              { "name": "Parrita", "size": 20984 }
            ]
          },
          {
            "name": "Corredores",
            "children": [
              { "name": "Corredor", "size": 20050 },
              { "name": "La Cuesta", "size": 5333 },
              { "name": "Canoas", "size": 15929 },
              { "name": "Laurel", "size": 12172 }
            ]
          },
          {
            "name": "Garabito",
            "children": [
              { "name": "Jacó", "size": 18613 },
              { "name": "Tárcoles", "size": 8791 }
            ]
          }
        ]
      },
      {
        "name": "Limón",
        "children": [
          {
            "name": "Limón",
            "children": [
              { "name": "Limón", "size": 60710 },
              { "name": "Valle La Estrella", "size": 20818 },
              { "name": "Río Blanco", "size": 10257 },
              { "name": "Matama", "size": 8451 }
            ]
          },
          {
            "name": "Pococí",
            "children": [
              { "name": "Guápiles", "size": 39611 },
              { "name": "Jiménez", "size": 13052 },
              { "name": "Rita", "size": 29241 },
              { "name": "Roxana", "size": 20342 },
              { "name": "Cariari", "size": 40278 },
              { "name": "Colorado", "size": 5040 },
              { "name": "La Colonia", "size": 7110 }
            ]
          },
          {
            "name": "Siquirres",
            "children": [
              { "name": "Siquirres", "size": 34576 },
              { "name": "Pacuarito", "size": 10804 },
              { "name": "Florida", "size": 2656 },
              { "name": "Germania", "size": 3062 },
              { "name": "El Cairo", "size": 7628 },
              { "name": "Alegría", "size": 6947 },
              { "name": "Reventazón", "size": 0 }
            ]
          },
          {
            "name": "Talamanca",
            "children": [
              { "name": "Bratsi", "size": 10590 },
              { "name": "Sixaola", "size": 11847 },
              { "name": "Cahuita", "size": 13656 },
              { "name": "Telire", "size": 8709 }
            ]
          },
          {
            "name": "Matina",
            "children": [
              { "name": "Matina", "size": 10437 },
              { "name": "Batán", "size": 20814 },
              { "name": "Carrandi", "size": 16140 }
            ]
          },
          {
            "name": "Guácimo",
            "children": [
              { "name": "Guácimo", "size": 26152 },
              { "name": "Mercedes", "size": 2357 },
              { "name": "Pocora", "size": 8494 },
              { "name": "Río Jiménez", "size": 11836 },
              { "name": "Duacarí", "size": 8182 }
            ]
          }
        ]
      }
    ]
  }
  

const flareData = {
  "name": "flare",
  "children": [
      {
          "name": "analytics",
          "children": [
              {
                  "name": "cluster",
                  "children": [
                      {"name": "AgglomerativeCluster", "value": 3938},
                      {"name": "CommunityStructure", "value": 3812},
                      {"name": "HierarchicalCluster", "value": 6714},
                      {"name": "MergeEdge", "value": 743}
                  ]
              },
              {
                  "name": "graph",
                  "children": [
                      {"name": "BetweennessCentrality", "value": 3534},
                      {"name": "LinkDistance", "value": 5731},
                      {"name": "MaxFlowMinCut", "value": 7840},
                      {"name": "ShortestPaths", "value": 5914},
                      {"name": "SpanningTree", "value": 3416}
                  ]
              },
              {
                  "name": "optimization",
                  "children": [
                      {"name": "AspectRatioBanker", "value": 7074}
                  ]
              }
          ]
      },
      {
          "name": "animate",
          "children": [
              {"name": "Easing", "value": 17010},
              {"name": "FunctionSequence", "value": 5842},
              {
                  "name": "interpolate",
                  "children": [
                      {"name": "ArrayInterpolator", "value": 1983},
                      {"name": "ColorInterpolator", "value": 2047},
                      {"name": "DateInterpolator", "value": 1375},
                      {"name": "Interpolator", "value": 8746},
                      {"name": "MatrixInterpolator", "value": 2202},
                      {"name": "NumberInterpolator", "value": 1382},
                      {"name": "ObjectInterpolator", "value": 1629},
                      {"name": "PointInterpolator", "value": 1675},
                      {"name": "RectangleInterpolator", "value": 2042}
                  ]
              }
          ]
      },
      {
          "name": "data",
          "children": [
              {
                  "name": "converters",
                  "children": [
                      {"name": "Converters", "value": 721},
                      {"name": "DelimitedTextConverter", "value": 4294},
                      {"name": "GraphMLConverter", "value": 9800},
                      {"name": "IDataConverter", "value": 1314},
                      {"name": "JSONConverter", "value": 2220}
                  ]
              },
              {"name": "DataField", "value": 1759},
              {"name": "DataSchema", "value": 2165},
              {"name": "DataSet", "value": 586},
              {"name": "DataSource", "value": 3331},
              {"name": "DataTable", "value": 772},
              {"name": "DataUtil", "value": 3322}
          ]
      },
      {
          "name": "display",
          "children": [
              {"name": "DirtySprite", "value": 8833},
              {"name": "LineSprite", "value": 1732},
              {"name": "RectSprite", "value": 3623},
              {"name": "TextSprite", "value": 10066}
          ]
      },
      {
          "name": "flex",
          "children": [
              {"name": "FlareVis", "value": 4116}
          ]
      },
      {
          "name": "physics",
          "children": [
              {"name": "DragForce", "value": 1082},
              {"name": "GravityForce", "value": 1336},
              {"name": "IForce", "value": 319},
              {"name": "NBodyForce", "value": 10498},
              {"name": "Particle", "value": 2822},
              {"name": "Simulation", "value": 9983},
              {"name": "Spring", "value": 2213},
              {"name": "SpringForce", "value": 1681}
          ]
      },
      {
          "name": "query",
          "children": [
              {"name": "AggregateExpression", "value": 1616},
              {"name": "And", "value": 1027},
              {"name": "Arithmetic", "value": 3891},
              {"name": "Average", "value": 891},
              {"name": "BinaryExpression", "value": 2893},
              {"name": "Comparison", "value": 5103},
              {"name": "CompositeExpression", "value": 3677},
              {"name": "Count", "value": 781},
              {"name": "DateUtil", "value": 4141},
              {"name": "Distinct", "value": 933},
              {"name": "Expression", "value": 5130},
              {"name": "ExpressionIterator", "value": 3617},
              {"name": "Fn", "value": 3240},
              {"name": "If", "value": 2732},
              {"name": "IsA", "value": 2039},
              {"name": "Literal", "value": 1214},
              {"name": "Match", "value": 3748},
              {"name": "Maximum", "value": 843},
              {"name": "methods", "children": [
                  {"name": "_", "value": 264},
                  {"name": "add", "value": 593},
                  {"name": "and", "value": 330},
                  {"name": "average", "value": 287},
                  {"name": "count", "value": 277},
                  {"name": "distinct", "value": 292},
                  {"name": "div", "value": 595},
                  {"name": "eq", "value": 594},
                  {"name": "fn", "value": 460},
                  {"name": "gt", "value": 603},
                  {"name": "gte", "value": 625},
                  {"name": "iff", "value": 748},
                  {"name": "isa", "value": 461},
                  {"name": "lt", "value": 597},
                  {"name": "lte", "value": 619},
                  {"name": "max", "value": 283},
                  {"name": "min", "value": 283},
                  {"name": "mod", "value": 591},
                  {"name": "mul", "value": 603},
                  {"name": "neq", "value": 599},
                  {"name": "not", "value": 386},
                  {"name": "or", "value": 323},
                  {"name": "orderby", "value": 307},
                  {"name": "range", "value": 772},
                  {"name": "select", "value": 296},
                  {"name": "stddev", "value": 363},
                  {"name": "sub", "value": 600},
                  {"name": "sum", "value": 280},
                  {"name": "update", "value": 307},
                  {"name": "variance", "value": 335},
                  {"name": "where", "value": 299},
                  {"name": "xor", "value": 354}
              ]},
              {"name": "Minimum", "value": 843},
              {"name": "Not", "value": 1554},
              {"name": "Or", "value": 970},
              {"name": "Query", "value": 13896},
              {"name": "Range", "value": 1594},
              {"name": "StringUtil", "value": 4130},
              {"name": "Sum", "value": 791},
              {"name": "Variable", "value": 1124},
              {"name": "Variance", "value": 1876},
              {"name": "Xor", "value": 1101}
          ]
      },
      {
          "name": "scale",
          "children": [
              {"name": "IScaleMap", "value": 2105},
              {"name": "LinearScale", "value": 1316},
              {"name": "LogScale", "value": 3151},
              {"name": "OrdinalScale", "value": 3770},
              {"name": "QuantileScale", "value": 2435},
              {"name": "QuantitativeScale", "value": 4839},
              {"name": "RootScale", "value": 1756},
              {"name": "Scale", "value": 4268},
              {"name": "ScaleType", "value": 1821},
              {"name": "TimeScale", "value": 5833}
          ]
      },
      {
          "name": "util",
          "children": [
              {"name": "Arrays", "value": 8258},
              {"name": "Colors", "value": 10001},
              {"name": "Dates", "value": 8217},
              {"name": "Displays", "value": 12555},
              {"name": "Filter", "value": 2324},
              {"name": "Geometry", "value": 10993},
              {"name": "heap", "children": [
                  {"name": "FibonacciHeap", "value": 9354},
                  {"name": "HeapNode", "value": 1233}
              ]},
              {"name": "IEvaluable", "value": 335},
              {"name": "IPredicate", "value": 383},
              {"name": "IValueProxy", "value": 874},
              {"name": "math", "children": [
                  {"name": "DenseMatrix", "value": 3165},
                  {"name": "IMatrix", "value": 2815},
                  {"name": "SparseMatrix", "value": 3366}
              ]},
              {"name": "Maths", "value": 17705},
              {"name": "Orientation", "value": 1486},
              {"name": "palette", "children": [
                  {"name": "ColorPalette", "value": 6367},
                  {"name": "Palette", "value": 1229},
                  {"name": "ShapePalette", "value": 2059},
                  {"name": "SizePalette", "value": 2291}
              ]},
              {"name": "Property", "value": 5559},
              {"name": "Shapes", "value": 19118},
              {"name": "Sort", "value": 6887},
              {"name": "Stats", "value": 6557},
              {"name": "Strings", "value": 22026}
          ]
      },
      {
          "name": "vis",
          "children": [
              {
                  "name": "axis",
                  "children": [
                      {"name": "Axes", "value": 1302},
                      {"name": "Axis", "value": 24593},
                      {"name": "AxisGridLine", "value": 652},
                      {"name": "AxisLabel", "value": 636},
                      {"name": "CartesianAxes", "value": 6703}
                  ]
              },
              {
                  "name": "controls",
                  "children": [
                      {"name": "AnchorControl", "value": 2138},
                      {"name": "ClickControl", "value": 3824},
                      {"name": "Control", "value": 1353},
                      {"name": "ControlList", "value": 4665},
                      {"name": "DragControl", "value": 2649},
                      {"name": "ExpandControl", "value": 2832},
                      {"name": "HoverControl", "value": 4896},
                      {"name": "IControl", "value": 763},
                      {"name": "PanZoomControl", "value": 5222},
                      {"name": "SelectionControl", "value": 7862},
                      {"name": "TooltipControl", "value": 8435}
                  ]
              },
              {
                  "name": "data",
                  "children": [
                      {"name": "Data", "value": 20544},
                      {"name": "DataList", "value": 19788},
                      {"name": "DataSprite", "value": 10349},
                      {"name": "EdgeSprite", "value": 3301},
                      {"name": "NodeSprite", "value": 19382},
                      {
                          "name": "render",
                          "children": [
                              {"name": "ArrowType", "value": 698},
                              {"name": "EdgeRenderer", "value": 5569},
                              {"name": "IRenderer", "value": 353},
                              {"name": "ShapeRenderer", "value": 2247}
                          ]
                      },
                      {"name": "ScaleBinding", "value": 11275},
                      {"name": "Tree", "value": 7147},
                      {"name": "TreeBuilder", "value": 9930}
                  ]
              },
              {
                  "name": "events",
                  "children": [
                      {"name": "DataEvent", "value": 2313},
                      {"name": "SelectionEvent", "value": 1880},
                      {"name": "TooltipEvent", "value": 1701},
                      {"name": "VisualizationEvent", "value": 1117}
                  ]
              },
              {
                  "name": "legend",
                  "children": [
                      {"name": "Legend", "value": 20859},
                      {"name": "LegendItem", "value": 4614},
                      {"name": "LegendRange", "value": 10530}
                  ]
              },
              {
                  "name": "operator",
                  "children": [
                      {
                          "name": "distortion",
                          "children": [
                              {"name": "BifocalDistortion", "value": 4461},
                              {"name": "Distortion", "value": 6314},
                              {"name": "FisheyeDistortion", "value": 3444}
                          ]
                      },
                      {
                          "name": "encoder",
                          "children": [
                              {"name": "ColorEncoder", "value": 3179},
                              {"name": "Encoder", "value": 4060},
                              {"name": "PropertyEncoder", "value": 4138},
                              {"name": "ShapeEncoder", "value": 1690},
                              {"name": "SizeEncoder", "value": 1830}
                          ]
                      },
                      {
                          "name": "filter",
                          "children": [
                              {"name": "FisheyeTreeFilter", "value": 5219},
                              {"name": "GraphDistanceFilter", "value": 3165},
                              {"name": "VisibilityFilter", "value": 3509}
                          ]
                      },
                      {"name": "IOperator", "value": 1286},
                      {"name": "label", "children": [
                          {"name": "Labeler", "value": 9956},
                          {"name": "RadialLabeler", "value": 3899},
                          {"name": "StackedAreaLabeler", "value": 3202}
                      ]},
                      {
                          "name": "layout",
                          "children": [
                              {"name": "AxisLayout", "value": 6725},
                              {"name": "BundledEdgeRouter", "value": 3727},
                              {"name": "CircleLayout", "value": 9317},
                              {"name": "CirclePackingLayout", "value": 12003},
                              {"name": "DendrogramLayout", "value": 4853},
                              {"name": "ForceDirectedLayout", "value": 8411},
                              {"name": "IcicleTreeLayout", "value": 4864},
                              {"name": "IndentedTreeLayout", "value": 3174},
                              {"name": "Layout", "value": 7881},
                              {"name": "NodeLinkTreeLayout", "value": 12870},
                              {"name": "PieLayout", "value": 2728},
                              {"name": "RadialTreeLayout", "value": 12348},
                              {"name": "RandomLayout", "value": 870},
                              {"name": "StackedAreaLayout", "value": 9121},
                              {"name": "TreeMapLayout", "value": 9191}
                          ]
                      },
                      {"name": "Operator", "value": 2490},
                      {"name": "OperatorList", "value": 5248},
                      {"name": "OperatorSequence", "value": 4190},
                      {"name": "OperatorSwitch", "value": 2581},
                      {"name": "SortOperator", "value": 2023}
                  ]
              },
              {"name": "Visualization", "value": 16540}
          ]
      }
  ]
}

  

const vueData = {
  "name": "VUE",
  "children": [
    {
      "name": "@babel",
      "children": [
        {
          "name": "parser",
          "children": [
            { "name": "CHANGELOG.md", "size": 38238 },
            { "name": "LICENSE", "size": 1086 },
            { "name": "README.md", "size": 427 },
            { "name": "bin", "children": [{ "name": "babel-parser.js", "size": 328 }] },
            {
              "name": "lib",
              "children": [
                { "name": "index.js", "size": 469611 },
                { "name": "index.js.map", "size": 1371164 }
              ]
            },
            { "name": "package.json", "size": 1096 },
            { "name": "typings", "children": [{ "name": "babel-parser.d.ts", "size": 6100 }] }
          ]
        }
      ]
    },
    {
      "name": "@vitejs",
      "children": [
        {
          "name": "plugin-vue",
          "children": [
            { "name": "LICENSE", "size": 1098 },
            { "name": "README.md", "size": 3916 },
            {
              "name": "dist",
              "children": [
                { "name": "index.d.ts", "size": 2359 },
                { "name": "index.js", "size": 169316 }
              ]
            },
            { "name": "package.json", "size": 1690 }
          ]
        }
      ]
    },
    {
      "name": "@vue",
      "children": [
        {
          "name": "compiler-core",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 21 },
            {
              "name": "dist",
              "children": [
                { "name": "compiler-core.cjs.js", "size": 229320 },
                { "name": "compiler-core.cjs.prod.js", "size": 222231 },
                { "name": "compiler-core.d.ts", "size": 43752 },
                { "name": "compiler-core.esm-bundler.js", "size": 195230 }
              ]
            },
            { "name": "index.js", "size": 191 },
            { "name": "package.json", "size": 950 }
          ]
        },
        {
          "name": "compiler-dom",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 19 },
            {
              "name": "dist",
              "children": [
                { "name": "compiler-dom.cjs.js", "size": 76849 },
                { "name": "compiler-dom.cjs.prod.js", "size": 74981 },
                { "name": "compiler-dom.d.ts", "size": 2147 },
                { "name": "compiler-dom.esm-browser.js", "size": 216060 },
                { "name": "compiler-dom.esm-browser.prod.js", "size": 56402 },
                { "name": "compiler-dom.esm-bundler.js", "size": 19313 },
                { "name": "compiler-dom.global.js", "size": 231014 },
                { "name": "compiler-dom.global.prod.js", "size": 56218 }
              ]
            },
            { "name": "index.js", "size": 189 },
            { "name": "package.json", "size": 978 }
          ]
        },
        {
          "name": "compiler-sfc",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 4434 },
            {
              "name": "dist",
              "children": [
                { "name": "compiler-sfc.cjs.js", "size": 504725 },
                { "name": "compiler-sfc.d.ts", "size": 10104 },
                { "name": "compiler-sfc.esm-browser.js", "size": 1522262 }
              ]
            },
            { "name": "package.json", "size": 1492 }
          ]
        },
        {
          "name": "compiler-ssr",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 19 },
            {
              "name": "dist",
              "children": [
                { "name": "compiler-ssr.cjs.js", "size": 51963 },
                { "name": "compiler-ssr.d.ts", "size": 216 }
              ]
            },
            { "name": "package.json", "size": 729 }
          ]
        },
        {
          "name": "reactivity",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 1049 },
            {
              "name": "dist",
              "children": [
                { "name": "reactivity.cjs.js", "size": 41403 },
                { "name": "reactivity.cjs.prod.js", "size": 38466 },
                { "name": "reactivity.d.ts", "size": 11757 },
                { "name": "reactivity.esm-browser.js", "size": 42343 },
                { "name": "reactivity.esm-browser.prod.js", "size": 11647 },
                { "name": "reactivity.esm-bundler.js", "size": 41895 },
                { "name": "reactivity.global.js", "size": 45767 },
                { "name": "reactivity.global.prod.js", "size": 11612 }
              ]
            },
            { "name": "index.js", "size": 185 },
            { "name": "package.json", "size": 905 }
          ]
        },
        {
          "name": "reactivity-transform",
          "children": [
            { "name": "README.md", "size": 3014 },
            {
              "name": "dist",
              "children": [
                { "name": "reactivity-transform.cjs.js", "size": 21827 },
                { "name": "reactivity-transform.d.ts", "size": 1007 }
              ]
            },
            { "name": "package.json", "size": 959 }
          ]
        },
        {
          "name": "runtime-core",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 790 },
            {
              "name": "dist",
              "children": [
                { "name": "runtime-core.cjs.js", "size": 306756 },
                { "name": "runtime-core.cjs.prod.js", "size": 246061 },
                { "name": "runtime-core.d.ts", "size": 81656 },
                { "name": "runtime-core.esm-bundler.js", "size": 314543 }
              ]
            },
            { "name": "index.js", "size": 189 },
            { "name": "package.json", "size": 831 }
          ]
        },
        {
          "name": "runtime-dom",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 198 },
            {
              "name": "dist",
              "children": [
                { "name": "runtime-dom.cjs.js", "size": 60141 },
                { "name": "runtime-dom.cjs.prod.js", "size": 55312 },
                { "name": "runtime-dom.d.ts", "size": 43204 },
                { "name": "runtime-dom.esm-browser.js", "size": 407976 },
                { "name": "runtime-dom.esm-browser.prod.js", "size": 84400 },
                { "name": "runtime-dom.esm-bundler.js", "size": 61658 },
                { "name": "runtime-dom.global.js", "size": 432395 },
                { "name": "runtime-dom.global.prod.js", "size": 83777 }
              ]
            },
            { "name": "index.js", "size": 187 },
            { "name": "package.json", "size": 929 }
          ]
        },
        {
          "name": "server-renderer",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 3881 },
            {
              "name": "dist",
              "children": [
                { "name": "server-renderer.cjs.js", "size": 38124 },
                { "name": "server-renderer.cjs.prod.js", "size": 29033 },
                { "name": "server-renderer.d.ts", "size": 4253 },
                { "name": "server-renderer.esm-bundler.js", "size": 36165 }
              ]
            },
            { "name": "index.js", "size": 195 },
            { "name": "package.json", "size": 879 }
          ]
        },
        {
          "name": "shared",
          "children": [
            { "name": "LICENSE", "size": 1091 },
            { "name": "README.md", "size": 87 },
            {
              "name": "dist",
              "children": [
                { "name": "shared.cjs.js", "size": 25270 },
                { "name": "shared.cjs.prod.js", "size": 25236 },
                { "name": "shared.d.ts", "size": 11715 },
                { "name": "shared.esm-bundler.js", "size": 24069 }
              ]
            },
            { "name": "index.js", "size": 177 },
            { "name": "package.json", "size": 710 }
          ]
        }
      ]
    },
    {
      "name": "csstype",
      "children": [
        { "name": "LICENSE", "size": 1081 },
        { "name": "README.md", "size": 9026 },
        { "name": "index.d.ts", "size": 1651497 },
        { "name": "index.js.flow", "size": 290240 },
        { "name": "package.json", "size": 1928 }
      ]
    },
    {
      "name": "esbuild",
      "children": [
        { "name": "README.md", "size": 175 },
        { "name": "bin", "children": [{ "name": "esbuild", "size": 8513536 }] },
        { "name": "install.js", "size": 9428 },
        { "name": "lib", "children": [{ "name": "main.d.ts", "size": 17724 }, { "name": "main.js", "size": 82131 }] },
        { "name": "package.json", "size": 1179 }
      ]
    },
    {
      "name": "esbuild-darwin-64",
      "children": [
        { "name": "README.md", "size": 141 },
        { "name": "bin", "children": [{ "name": "esbuild", "size": 8513536 }] },
        { "name": "package.json", "size": 330 }
      ]
    },
    {
      "name": "estree-walker",
      "children": [
        { "name": "CHANGELOG.md", "size": 1548 },
        { "name": "LICENSE", "size": 1126 },
        { "name": "README.md", "size": 1623 },
        {
          "name": "dist",
          "children": [
            { "name": "esm", "children": [{ "name": "estree-walker.js", "size": 7158 }, { "name": "package.json", "size": 17 }] },
            { "name": "umd", "children": [{ "name": "estree-walker.js", "size": 7828 }] }
          ]
        },
        {
          "name": "src",
          "children": [
            { "name": "async.js", "size": 2712 },
            { "name": "index.js", "size": 842 },
            { "name": "package.json", "size": 18 },
            { "name": "sync.js", "size": 2659 },
            { "name": "walker.js", "size": 1114 }
          ]
        },
        {
          "name": "types",
          "children": [
            { "name": "async.d.ts", "size": 1939 },
            { "name": "index.d.ts", "size": 2242 },
            { "name": "sync.d.ts", "size": 1879 },
            { "name": "tsconfig.tsbuildinfo", "size": 15666 },
            { "name": "walker.d.ts", "size": 1024 }
          ]
        }
      ]
    },
    {
      "name": "fsevents",
      "children": [
        { "name": "LICENSE", "size": 1133 },
        { "name": "README.md", "size": 2958 },
        { "name": "fsevents.d.ts", "size": 1431 },
        { "name": "fsevents.js", "size": 2424 },
        { "name": "fsevents.node", "size": 147128 },
        { "name": "package.json", "size": 1348 }
      ]
    },
    {
      "name": "function-bind",
      "children": [
        { "name": "LICENSE", "size": 1052 },
        { "name": "README.md", "size": 1488 },
        { "name": "implementation.js", "size": 1463 },
        { "name": "index.js", "size": 126 },
        { "name": "package.json", "size": 1498 },
        {
          "name": "test",
          "children": [
            { "name": "index.js", "size": 8991 }
          ]
        }
      ]
    },
    {
      "name": "has",
      "children": [
        { "name": "LICENSE-MIT", "size": 1060 },
        { "name": "README.md", "size": 239 },
        { "name": "package.json", "size": 1011 },
        {
          "name": "src",
          "children": [
            { "name": "index.js", "size": 129 }
          ]
        },
        {
          "name": "test",
          "children": [
            { "name": "index.js", "size": 331 }
          ]
        }
      ]
    },
    {
      "name": "is-core-module",
      "children": [
        { "name": "CHANGELOG.md", "size": 10629 },
        { "name": "LICENSE", "size": 1078 },
        { "name": "README.md", "size": 1659 },
        { "name": "core.json", "size": 5492 },
        { "name": "index.js", "size": 1757 },
        { "name": "package.json", "size": 1680 },
        {
          "name": "test",
          "children": [
            { "name": "index.js", "size": 4076 }
          ]
        }
      ]
    },
    {
      "name": "magic-string",
      "children": [
        { "name": "LICENSE", "size": 1051 },
        { "name": "README.md", "size": 9313 },
        {
          "name": "dist",
          "children": [
            { "name": "magic-string.cjs.js", "size": 33911 },
            { "name": "magic-string.cjs.js.map", "size": 80859 },
            { "name": "magic-string.es.js", "size": 33714 },
            { "name": "magic-string.es.js.map", "size": 80361 },
            { "name": "magic-string.umd.js", "size": 37176 },
            { "name": "magic-string.umd.js.map", "size": 87487 }
          ]
        },
        { "name": "index.d.ts", "size": 7678 },
        { "name": "package.json", "size": 1506 }
      ]
    },
    {
      "name": "nanoid",
      "children": [
        { "name": "LICENSE", "size": 1095 },
        { "name": "README.md", "size": 1557 },
        {
          "name": "async",
          "children": [
            { "name": "index.browser.cjs", "size": 983 },
            { "name": "index.browser.js", "size": 973 },
            { "name": "index.cjs", "size": 993 },
            { "name": "index.d.ts", "size": 1505 },
            { "name": "index.js", "size": 976 },
            { "name": "index.native.js", "size": 814 }
          ]
        },
        { "name": "package.json", "size": 233 },
        {
          "name": "bin",
          "children": [
            { "name": "nanoid.cjs", "size": 1129 }
          ]
        },
        { "name": "index.browser.cjs", "size": 1074 },
        { "name": "index.browser.js", "size": 1060 },
        { "name": "index.cjs", "size": 1343 },
        { "name": "index.d.ts", "size": 2252 },
        { "name": "index.js", "size": 1326 },
        { "name": "nanoid.js", "size": 169 },
        {
          "name": "non-secure",
          "children": [
            { "name": "index.cjs", "size": 499 },
            { "name": "index.d.ts", "size": 983 },
            { "name": "index.js", "size": 489 }
          ]
        },
        { "name": "package.json", "size": 1702 },
        {
          "name": "url-alphabet",
          "children": [
            { "name": "index.cjs", "size": 120 },
            { "name": "index.js", "size": 110 }
          ]
        }
      ]
    },
    {
      "name": "path-parse",
      "children": [
        { "name": "LICENSE", "size": 1080 },
        { "name": "README.md", "size": 871 },
        { "name": "index.js", "size": 1893 },
        { "name": "package.json", "size": 667 }
      ]
    },
    {
      "name": "picocolors",
      "children": [
        { "name": "LICENSE", "size": 781 },
        { "name": "README.md", "size": 622 },
        { "name": "package.json", "size": 550 },
        { "name": "picocolors.browser.js", "size": 360 },
        { "name": "picocolors.d.ts", "size": 138 },
        { "name": "picocolors.js", "size": 2594 },
        { "name": "types.ts", "size": 610 }
      ]
    },
    {
      "name": "postcss",
      "children": [
        { "name": "LICENSE", "size": 1095 },
        { "name": "README.md", "size": 1965 },
        {
          "name": "lib",
          "children": [
            { "name": "at-rule.d.ts", "size": 2498 },
            { "name": "at-rule.js", "size": 471 },
            { "name": "comment.d.ts", "size": 1376 },
            { "name": "comment.js", "size": 203 },
            { "name": "container.d.ts", "size": 12590 },
            { "name": "container.js", "size": 10228 },
            { "name": "css-syntax-error.d.ts", "size": 6223 },
            { "name": "css-syntax-error.js", "size": 2524 },
            { "name": "declaration.d.ts", "size": 3059 },
            { "name": "declaration.js", "size": 495 },
            { "name": "document.d.ts", "size": 1524 },
            { "name": "document.js", "size": 654 },
            { "name": "fromJSON.d.ts", "size": 107 },
            { "name": "fromJSON.js", "size": 1506 },
            { "name": "input.d.ts", "size": 3466 },
            { "name": "input.js", "size": 6189 },
            { "name": "lazy-result.d.ts", "size": 4630 },
            { "name": "lazy-result.js", "size": 13562 },
            { "name": "list.d.ts", "size": 1262 },
            { "name": "list.js", "size": 1167 },
            { "name": "map-generator.js", "size": 8786 },
            { "name": "no-work-result.d.ts", "size": 1323 },
            { "name": "no-work-result.js", "size": 2551 },
            { "name": "node.d.ts", "size": 12457 },
            { "name": "node.js", "size": 8485 },
            { "name": "parse.d.ts", "size": 89 },
            { "name": "parse.js", "size": 1147 },
            { "name": "parser.js", "size": 14482 },
            { "name": "postcss.d.ts", "size": 11357 },
            { "name": "postcss.js", "size": 2786 },
            { "name": "postcss.mjs", "size": 980 },
            { "name": "previous-map.d.ts", "size": 1618 },
            { "name": "previous-map.js", "size": 3923 },
            { "name": "processor.d.ts", "size": 3012 },
            { "name": "processor.js", "size": 1810 },
            { "name": "result.d.ts", "size": 4115 },
            { "name": "result.js", "size": 745 },
            { "name": "root.d.ts", "size": 1856 },
            { "name": "root.js", "size": 1209 },
            { "name": "rule.d.ts", "size": 2395 },
            { "name": "rule.js", "size": 569 },
            { "name": "stringifier.d.ts", "size": 1202 },
            { "name": "stringifier.js", "size": 8220 },
            { "name": "stringify.d.ts", "size": 107 },
            { "name": "stringify.js", "size": 213 },
            { "name": "symbols.js", "size": 91 },
            { "name": "terminal-highlight.js", "size": 1399 },
            { "name": "tokenize.js", "size": 6536 },
            { "name": "warn-once.js", "size": 256 },
            { "name": "warning.d.ts", "size": 2735 },
            { "name": "warning.js", "size": 739 }
          ]
        },
        { "name": "package.json", "size": 2450 }
      ]
    },
    {
      "name": "resolve",
      "children": [
        { "name": "LICENSE", "size": 1071 },
        { "name": "SECURITY.md", "size": 157 },
        { "name": "appveyor.yml", "size": 2768 },
        { "name": "async.js", "size": 56 },
        {
          "name": "bin",
          "children": [
            { "name": "resolve", "size": 1473 }
          ]
        },
        {
          "name": "example",
          "children": [
            { "name": "async.js", "size": 155 },
            { "name": "sync.js", "size": 103 }
          ]
        },
        { "name": "index.js", "size": 174 },
        {
          "name": "lib",
          "children": [
            { "name": "async.js", "size": 11359 },
            { "name": "caller.js", "size": 354 },
            { "name": "core.js", "size": 1653 },
            { "name": "core.json", "size": 5469 },
            { "name": "homedir.js", "size": 805 },
            { "name": "is-core.js", "size": 116 },
            { "name": "node-modules-paths.js", "size": 1294 },
            { "name": "normalize-options.js", "size": 348 },
            { "name": "sync.js", "size": 6993 }
          ]
        },
        { "name": "package.json", "size": 1765 },
        { "name": "readme.markdown", "size": 11504 },
        { "name": "sync.js", "size": 55 },
        {
          "name": "test",
          "children": [
            { "name": "core.js", "size": 2671 },
            { "name": "dotdot", "children": [
              { "name": "abc", "children": [
                { "name": "index.js", "size": 39 }
              ]},
              { "name": "index.js", "size": 29 }
            ]},
            { "name": "dotdot.js", "size": 799 },
            { "name": "faulty_basedir.js", "size": 807 },
            { "name": "filter.js", "size": 1045 },
            { "name": "filter_sync.js", "size": 1427 },
            { "name": "home_paths.js", "size": 4472 },
            { "name": "home_paths_sync.js", "size": 3797 },
            { "name": "mock.js", "size": 10012 },
            { "name": "mock_sync.js", "size": 6047 },
            { "name": "module_dir", "children": [
              { "name": "xmodules", "children": [
                { "name": "aaa", "children": [
                  { "name": "index.js", "size": 51 }
                ]}
              ]},
              { "name": "ymodules", "children": [
                { "name": "aaa", "children": [
                  { "name": "index.js", "size": 51 }
                ]}
              ]},
              { "name": "zmodules", "children": [
                { "name": "bbb", "children": [
                  { "name": "main.js", "size": 51 },
                  { "name": "package.json", "size": 24 }
                ]}
              ]}
            ]},
            { "name": "module_dir.js", "size": 1558 },
            { "name": "node-modules-paths.js", "size": 5101 },
            { "name": "node_path", "children": [
              { "name": "x", "children": [
                { "name": "aaa", "children": [
                  { "name": "index.js", "size": 22 }
                ]},
                { "name": "ccc", "children": [
                  { "name": "index.js", "size": 22 }
                ]}
              ]},
              { "name": "y", "children": [
                { "name": "bbb", "children": [
                  { "name": "index.js", "size": 22 }
                ]},
                { "name": "ccc", "children": [
                  { "name": "index.js", "size": 23 }
                ]}
              ]}
            ]},
            { "name": "node_path.js", "size": 2128 },
            { "name": "nonstring.js", "size": 182 },
            { "name": "pathfilter", "children": [
              { "name": "deep_ref", "children": [
                { "name": "main.js", "size": 0 }
              ]}
            ]},
            { "name": "pathfilter.js", "size": 2248 },
            { "name": "precedence", "children": [
              { "name": "aaa", "children": [
                { "name": "index.js", "size": 25 },
                { "name": "main.js", "size": 28 },
                { "name": "js", "size": 24 }
              ]},
              { "name": "bbb", "children": [
                { "name": "main.js", "size": 44 },
                { "name": "js", "size": 24 }
              ]}
            ]},
            { "name": "precedence.js", "size": 646 },
            { "name": "resolver", "children": [
              { "name": "baz", "children": [
                { "name": "doom.js", "size": 0 },
                { "name": "package.json", "size": 45 },
                { "name": "quux.js", "size": 20 }
              ]}
            ]},
            { "name": "resolver.browser_field", "children": [
              { "name": "a.js", "size": 0 },
              { "name": "b.js", "size": 0 },
              { "name": "package.json", "size": 63 }
            ]},
            { "name": "resolver.cup.coffee", "size": 1 },
            { "name": "resolver.dot_main", "children": [
              { "name": "index.js", "size": 20 },
              { "name": "package.json", "size": 20 }
            ]},
            { "name": "resolver.dot_slash_main", "children": [
              { "name": "index.js", "size": 20 },
              { "name": "package.json", "size": 21 }
            ]},
            { "name": "resolver.foo.js", "size": 20 },
            { "name": "resolver.incorrect_main", "children": [
              { "name": "index.js", "size": 116 },
              { "name": "package.json", "size": 27 }
            ]},
            { "name": "resolver.invalid_main", "children": [
              { "name": "package.json", "size": 93 }
            ]},
            { "name": "resolver.malformed_package_json", "children": [
              { "name": "index.js", "size": 0 },
              { "name": "package.json", "size": 2 }
            ]},
            { "name": "resolver.mug", "children": [
              { "name": "coffee", "size": 0 },
              { "name": "js", "size": 0 }
            ]},
            { "name": "resolver.multirepo", "children": [
              { "name": "lerna.json", "size": 63 },
              { "name": "package.json", "size": 380 },
              { "name": "packages", "children": [
                { "name": "package-a", "children": [
                  { "name": "index.js", "size": 1319 },
                  { "name": "package.json", "size": 281 }
                ]},
                { "name": "package-b", "children": [
                  { "name": "index.js", "size": 0 },
                  { "name": "package.json", "size": 281 }
                ]}
              ]}
            ]},
            { "name": "resolver.nested_symlinks", "children": [
              { "name": "mylib", "children": [
                { "name": "async.js", "size": 858 },
                { "name": "package.json", "size": 259 },
                { "name": "sync.js", "size": 606 }
              ]}
            ]},
            { "name": "resolver.other_path", "children": [
              { "name": "lib", "children": [
                { "name": "other-lib.js", "size": 0 }
              ]},
              { "name": "root.js", "size": 0 }
            ]},
            { "name": "resolver.quux", "children": [
              { "name": "foo", "children": [
                { "name": "index.js", "size": 20 }
              ]}
            ]},
            { "name": "resolver.same_names", "children": [
              { "name": "foo", "children": [
                { "name": "index.js", "size": 20 },
                { "name": "js", "size": 21 }
              ]}
            ]},
            { "name": "resolver.symlinked", "children": [
              { "name": "_", "children": [
                { "name": "node_modules", "children": [
                  { "name": "foo.js", "size": 0 }
                ]},
                { "name": "symlink_target", "size": 102 }
              ]},
              { "name": "package", "children": [
                { "name": "bar.js", "size": 24 },
                { "name": "package.json", "size": 24 }
              ]}
            ]},
            { "name": "resolver.without_basedir", "children": [
              { "name": "main.js", "size": 111 }
            ]}
          ]
        },
        { "name": "resolver.js", "size": 18556 },
        { "name": "resolver_sync.js", "size": 18010 },
        { "name": "shadowed_core", "children": [
          { "name": "node_modules", "children": [
            { "name": "util", "children": [
              { "name": "index.js", "size": 0 }
            ]}
          ]},
          { "name": "shadowed_core.js", "size": 1814 }
        ]},
        { "name": "subdirs.js", "size": 353 },
        { "name": "symlinks.js", "size": 6535 }
      ]
    },
    {
      "name": "rollup",
      "children": [
        { "name": "CHANGELOG.md", "size": 242619 },
        { "name": "LICENSE.md", "size": 35412 },
        { "name": "README.md", "size": 8835 },
        {
          "name": "dist",
          "children": [
            { "name": "bin", "children": [
              { "name": "rollup", "size": 73363 }
            ]},
            { "name": "es", "children": [
              { "name": "package.json", "size": 17 },
              { "name": "rollup.browser.js", "size": 395242 },
              { "name": "rollup.js", "size": 373 },
              { "name": "shared", "children": [
                { "name": "rollup.js", "size": 884933 },
                { "name": "watch.js", "size": 138305 }
              ]}
            ]},
            { "name": "loadConfigFile.js", "size": 578 },
            { "name": "rollup.browser.js", "size": 394586 },
            { "name": "rollup.browser.js.map", "size": 3298388 },
            { "name": "rollup.d.ts", "size": 26978 },
            { "name": "rollup.js", "size": 649 },
            { "name": "shared", "children": [
              { "name": "index.js", "size": 121328 },
              { "name": "loadConfigFile.js", "size": 24436 },
              { "name": "mergeOptions.js", "size": 8170 },
              { "name": "rollup.js", "size": 886672 },
              { "name": "watch-cli.js", "size": 15885 },
              { "name": "watch.js", "size": 10072 }
            ]}
          ]
        },
        { "name": "package.json", "size": 5460 }
      ]
    },
    {
      "name": "source-map",
      "children": [
        { "name": "CHANGELOG.md", "size": 7884 },
        { "name": "LICENSE", "size": 1526 },
        { "name": "README.md", "size": 24072 },
        {
          "name": "dist",
          "children": [
            { "name": "source-map.debug.js", "size": 272874 },
            { "name": "source-map.js", "size": 106973 },
            { "name": "source-map.min.js", "size": 27111 },
            { "name": "source-map.min.js.map", "size": 257409 }
          ]
        },
        {
          "name": "lib",
          "children": [
            { "name": "array-set.js", "size": 3197 },
            { "name": "base64-vlq.js", "size": 4714 },
            { "name": "base64.js", "size": 1540 },
            { "name": "binary-search.js", "size": 4249 },
            { "name": "mapping-list.js", "size": 2339 },
            { "name": "quick-sort.js", "size": 3616 },
            { "name": "source-map-consumer.js", "size": 40562 },
            { "name": "source-map-generator.js", "size": 14356 },
            { "name": "source-node.js", "size": 13808 },
            { "name": "util.js", "size": 12950 }
          ]
        },
        { "name": "package.json", "size": 2579 },
        { "name": "source-map.d.ts", "size": 3060 },
        { "name": "source-map.js", "size": 405 }
      ]
    },
    {
      "name": "source-map-js",
      "children": [
        { "name": "CHANGELOG.md", "size": 8606 },
        { "name": "LICENSE", "size": 1526 },
        { "name": "README.md", "size": 25736 },
        {
          "name": "lib",
          "children": [
            { "name": "array-set.js", "size": 3197 },
            { "name": "base64-vlq.js", "size": 4714 },
            { "name": "base64.js", "size": 1540 },
            { "name": "binary-search.js", "size": 4249 },
            { "name": "mapping-list.js", "size": 2339 },
            { "name": "quick-sort.js", "size": 4068 },
            { "name": "source-map-consumer.js", "size": 41482 },
            { "name": "source-map-generator.js", "size": 14356 },
            { "name": "source-node.js", "size": 13808 },
            { "name": "util.js", "size": 15403 }
          ]
        },
        { "name": "package.json", "size": 2548 },
        { "name": "source-map.d.ts", "size": 3854 },
        { "name": "source-map.js", "size": 405 }
      ]
    },
    {
      "name": "sourcemap-codec",
      "children": [
        { "name": "CHANGELOG.md", "size": 1249 },
        { "name": "LICENSE", "size": 1072 },
        { "name": "README.md", "size": 1835 },
        {
          "name": "dist",
          "children": [
            { "name": "sourcemap-codec.es.js", "size": 4200 },
            { "name": "sourcemap-codec.es.js.map", "size": 8249 },
            { "name": "sourcemap-codec.umd.js", "size": 4717 },
            { "name": "sourcemap-codec.umd.js.map", "size": 8286 }
          ]
        },
        {
          "name": "types",
          "children": [
            { "name": "sourcemap-codec.d.ts", "size": 377 }
          ]
        },
        { "name": "package.json", "size": 1817 }
      ]
    },
    {
      "name": "supports-preserve-symlinks-flag",
      "children": [
        { "name": "CHANGELOG.md", "size": 1989 },
        { "name": "LICENSE", "size": 1067 },
        { "name": "README.md", "size": 2287 },
        { "name": "browser.js", "size": 38 },
        { "name": "index.js", "size": 293 },
        { "name": "package.json", "size": 1895 },
        {
          "name": "test",
          "children": [
            { "name": "index.js", "size": 737 }
          ]
        }
      ]
    },
    {
      "name": "vite",
      "children": [
        { "name": "LICENSE.md", "size": 182935 },
        { "name": "README.md", "size": 1164 },
        {
          "name": "bin",
          "children": [
            { "name": "openChrome.applescript", "size": 2356 },
            { "name": "vite.js", "size": 1593 }
          ]
        },
        { "name": "client.d.ts", "size": 3720 },
        {
          "name": "dist",
          "children": [
            {
              "name": "client",
              "children": [
                { "name": "client.mjs", "size": 18416 },
                { "name": "client.mjs.map", "size": 33073 },
                { "name": "env.mjs", "size": 776 },
                { "name": "env.mjs.map", "size": 1686 }
              ]
            },
            {
              "name": "node",
              "children": [
                {
                  "name": "chunks",
                  "children": [
                    { "name": "dep-2056ae8a.js", "size": 12828 },
                    { "name": "dep-59dc6e00.js", "size": 1937821 },
                    { "name": "dep-739cc694.js", "size": 300323 },
                    { "name": "dep-a9015192.js", "size": 22032 },
                    { "name": "dep-ac1ae66b.js", "size": 590724 },
                    { "name": "dep-d2c728c0.js", "size": 222039 }
                  ]
                },
                { "name": "cli.js", "size": 25563 },
                { "name": "index.d.ts", "size": 99386 },
                { "name": "index.js", "size": 5751 },
                { "name": "terser.js", "size": 1043291 }
              ]
            }
          ]
        },
        { "name": "package.json", "size": 3901 },
        {
          "name": "src",
          "children": [
            {
              "name": "client",
              "children": [
                { "name": "client.ts", "size": 14437 },
                { "name": "env.ts", "size": 729 },
                { "name": "overlay.ts", "size": 4262 }
              ]
            },
            { "name": "tsconfig.json", "size": 239 }
          ]
        },
        {
          "name": "types",
          "children": [
            { "name": "alias.d.ts", "size": 2301 },
            { "name": "anymatch.d.ts", "size": 214 },
            { "name": "chokidar.d.ts", "size": 7690 },
            { "name": "commonjs.d.ts", "size": 8663 },
            { "name": "connect.d.ts", "size": 3334 },
            { "name": "customEvent.d.ts", "size": 404 },
            { "name": "dynamicImportVars.d.ts", "size": 546 },
            { "name": "hmrPayload.d.ts", "size": 904 },
            { "name": "hot.d.ts", "size": 607 },
            { "name": "http-proxy.d.ts", "size": 7973 },
            { "name": "importMeta.d.ts", "size": 1112 },
            { "name": "package.json", "size": 79 },
            { "name": "shims.d.ts", "size": 2036 },
            { "name": "terser.d.ts", "size": 5733 },
            { "name": "ws.d.ts", "size": 16436 }
          ]
        }
      ]
    },
    {
      "name": "vue",
      "children": [
        { "name": "LICENSE", "size": 1091 },
        { "name": "README.md", "size": 4105 },
        {
          "name": "compiler-sfc",
          "children": [
            { "name": "index.d.ts", "size": 34 },
            { "name": "index.js", "size": 46 },
            { "name": "index.mjs", "size": 33 },
            { "name": "package.json", "size": 74 }
          ]
        },
        {
          "name": "dist",
          "children": [
            { "name": "vue.cjs.js", "size": 2725 },
            { "name": "vue.cjs.prod.js", "size": 2147 },
            { "name": "vue.d.ts", "size": 270 },
            { "name": "vue.esm-browser.js", "size": 606230 },
            { "name": "vue.esm-browser.prod.js", "size": 130931 },
            { "name": "vue.esm-bundler.js", "size": 2629 },
            { "name": "vue.global.js", "size": 636006 },
            { "name": "vue.global.prod.js", "size": 127923 },
            { "name": "vue.runtime.esm-browser.js", "size": 408572 },
            { "name": "vue.runtime.esm-browser.prod.js", "size": 84424 },
            { "name": "vue.runtime.esm-bundler.js", "size": 611 },
            { "name": "vue.runtime.global.js", "size": 433029 },
            { "name": "vue.runtime.global.prod.js", "size": 83784 }
          ]
        },
        { "name": "index.js", "size": 171 },
        { "name": "index.mjs", "size": 26 },
        { "name": "macros-global.d.ts", "size": 414 },
        { "name": "macros.d.ts", "size": 2909 },
        { "name": "package.json", "size": 1841 },
        { "name": "ref-macros.d.ts", "size": 90 },
        {
          "name": "server-renderer",
          "children": [
            { "name": "index.d.ts", "size": 37 },
            { "name": "index.js", "size": 49 },
            { "name": "index.mjs", "size": 36 },
            { "name": "package.json", "size": 74 }
          ]
        }
      ]
    }
  ]
}
// visualizations.js

// Function to draw a Treemap
// visualizations.js

// Function to draw a Treemap
function drawTreemap(data, elementId) {
  const width = 1200;
  const height = 800;
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const root = d3.hierarchy(data)
      .sum(d => d.size || d.value || 1)
      .sort((a, b) => b.height - a.height || b.value - a.value);

  d3.treemap()
      .size([width - margin.left - margin.right, height - margin.top - margin.bottom])
      .padding(2)
      .round(true)(root);

  const svg = d3.select(elementId).append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("font", "12px sans-serif")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  const cell = svg.selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

  cell.append("rect")
      .attr("id", d => d.data.name)
      .attr("fill", d => d3.interpolateViridis(d.value / root.value))
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0);

  cell.append("text")
      .attr("x", 3)
      .attr("y", 13)
      .text(d => d.data.name)
      .attr("fill", "white");
}

// Function to draw a Radial layout
function drawRadial(data, elementId) {
  const width = 1200;
  const height = 800;
  const radius = (Math.min(width, height) / 2) - 20;

  const root = d3.hierarchy(data)
      .sum(d => d.size || d.value || 1);

  d3.tree()
      .size([2 * Math.PI, radius])
      (root);

  const svg = d3.select(elementId).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

  const link = svg.append("g")
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .attr("d", d3.linkRadial()
          .angle(d => d.x)
          .radius(d => d.y));

  const node = svg.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
      `);

  node.append("circle")
      .attr("fill", d => d.children ? "#555" : "#999")
      .attr("r", 4);

  node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
      .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
      .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
      .text(d => d.data.name)
      .clone(true).lower()
      .attr("stroke", "white");
}

// Function to draw a Partition layout
// Function to draw a Partition layout
// Function to draw a Partition layout
function drawPartition(data, elementId) {
  const width = 1200;
  const height = 2000; // Aumentamos la altura para mayor visibilidad
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const root = d3.hierarchy(data)
      .sum(d => d.size || d.value || 1)
      .sort((a, b) => b.height - a.height || b.value - a.value);

  d3.partition()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])
      (root);

  const svg = d3.select(elementId).append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("font", "12px sans-serif")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  const cell = svg.selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.y0},${d.x0})`);

  cell.append("rect")
      .attr("width", d => d.y1 - d.y0)
      .attr("height", d => d.x1 - d.x0)
      .attr("fill", d => d3.interpolateViridis(d.value / root.value))
      .attr("stroke", "#fff"); // Añadimos un borde blanco para mejor visualización

  // Ajustar posición del texto para evitar superposición
  cell.append("text")
      .attr("x", 4)
      .attr("y", d => (d.x1 - d.x0) / 2)
      .text(d => d.data.name)
      .attr("fill", "white")
      .style("font-size", d => `${Math.min(12, (d.x1 - d.x0) / 4)}px`); // Ajustar el tamaño de la fuente
}


// Function to draw a Circle Packing layout
function drawCirclePacking(data, elementId) {
  const width = 1200;
  const height = 1200;
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const root = d3.hierarchy(data)
      .sum(d => d.size || d.value || 1)
      .sort((a, b) => b.value - a.value);

  d3.pack()
      .size([width - margin.left - margin.right, height - margin.top - margin.bottom])
      (root);

  const svg = d3.select(elementId).append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("font", "12px sans-serif")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  const node = svg.selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);

  node.append("circle")
      .attr("r", d => d.r)
      .attr("fill", d => d.children ? d3.interpolateViridis(d.value / root.value) : "#fff");

  node.append("text")
      .attr("dy", "0.3em")
      .attr("text-anchor", "middle")
      .text(d => d.children ? "" : d.data.name)
      .attr("fill", "black");
}

// Load JSON files and draw visualizations for each
// Load JSON files and draw visualizations for each
function loadDataAndDrawVisualizations(data, prefix) {
  drawTreemap(data, `#treemap-${prefix}`);
  drawRadial(data, `#radial-${prefix}`);
  drawPartition(data, `#partition-${prefix}`);
  drawCirclePacking(data, `#circle-packing-${prefix}`);
}

// Load distritos_cr.json
d3.json('distritos_cr.json').then(data => {
  loadDataAndDrawVisualizations(data, 'distritos_cr');
});

// Load flare.json
d3.json('flare.json').then(data => {
  loadDataAndDrawVisualizations(data, 'flare');
});

// Load vue.json with specific adjustment
d3.json('vue.json').then(data => {
  // Adjust data specifically for vue to avoid overlapping
  adjustDataForVue(data);
  loadDataAndDrawVisualizations(data, 'vue');
});

function adjustDataForVue(data) {
  // Add any specific adjustments needed to prevent overlapping
  // For example, adjusting the size or position of elements
  data.children.forEach(child => {
      child.size = Math.max(child.size, 1000); // Ensuring minimum size
  });
}