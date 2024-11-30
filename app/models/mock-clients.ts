
import Client from './client';

export const CLIENTS: Client[] = [
    {
        id: 1,
        brand: "Village by CA",
        locations: [
            { id: 1, name: "Village by CA Reims - Nord Est Start Up", latitude: 49.2161, longitude: 3.9981, numberOfBoxes: 0 },
        ]
    },
    {
        id: 2,
        brand: "IKEA",
        locations: [
            { id: 1, name: "IKEA Paris Nord", latitude: 48.9796, longitude: 2.4485, numberOfBoxes: 0 },
            { id: 2, name: "IKEA Paris La Madeleine", latitude: 48.8709, longitude: 2.3246, numberOfBoxes: 0 },
            { id: 3, name: "IKEA Villiers-sur-Marne", latitude: 48.8353, longitude: 2.5440, numberOfBoxes: 0 },
            { id: 4, name: "IKEA Bordeaux", latitude: 44.8424, longitude: -0.6028, numberOfBoxes: 0 },
            { id: 5, name: "IKEA Lyon Grand Parilly", latitude: 45.7194, longitude: 4.8648, numberOfBoxes: 0 },
            { id: 6, name: "IKEA Marseille Vitrolles", latitude: 43.4356, longitude: 5.2575, numberOfBoxes: 0 },
            { id: 7, name: "IKEA Toulouse", latitude: 43.6092, longitude: 1.4346, numberOfBoxes: 0 },
            { id: 8, name: "IKEA Nantes", latitude: 47.2512, longitude: -1.5188, numberOfBoxes: 32 },
            { id: 9, name: "IKEA Strasbourg", latitude: 48.5335, longitude: 7.7650, numberOfBoxes: 0 },
            { id: 10, name: "IKEA Nice", latitude: 43.7109, longitude: 7.2612, numberOfBoxes: 0 },
            { id: 11, name: "IKEA Grenoble", latitude: 45.1597, longitude: 5.7089, numberOfBoxes: 0 },
            { id: 12, name: "IKEA Lille", latitude: 50.6533, longitude: 3.0987, numberOfBoxes: 0 },
            { id: 13, name: "IKEA Metz", latitude: 49.1232, longitude: 6.1578, numberOfBoxes: 0 },
            { id: 14, name: "IKEA Rennes", latitude: 48.1276, longitude: -1.6911, numberOfBoxes: 0 },
            { id: 15, name: "IKEA Montpellier", latitude: 43.5841, longitude: 3.8789, numberOfBoxes: 0 },
            { id: 16, name: "IKEA Clermont-Ferrand", latitude: 45.7797, longitude: 3.0962, numberOfBoxes: 0 },
            { id: 17, name: "IKEA Caen", latitude: 49.1786, longitude: -0.3582, numberOfBoxes: 20 },
            { id: 18, name: "IKEA Dijon", latitude: 47.3526, longitude: 5.0452, numberOfBoxes: 0 },
            { id: 19, name: "IKEA Tours", latitude: 47.3902, longitude: 0.7070, numberOfBoxes: 0 },
            { id: 20, name: "IKEA Orléans", latitude: 47.9036, longitude: 1.9115, numberOfBoxes: 0 }
        ],
    },
    {
        id: 3,
        brand: "Monoprix",
        locations: [
            { id: 1, name: "Monoprix Paris Champs-Elysées", latitude: 48.8701, longitude: 2.3044, numberOfBoxes: 0 },
            { id: 2, name: "Monoprix Marseille Castellane", latitude: 43.2860, longitude: 5.3792, numberOfBoxes: 0 },
            { id: 3, name: "Monoprix Lyon Bellecour", latitude: 45.7580, longitude: 4.8347, numberOfBoxes: 16 },
            { id: 4, name: "Monoprix Lille Faidherbe", latitude: 50.6371, longitude: 3.0630, numberOfBoxes: 0 },
            { id: 5, name: "Monoprix Bordeaux Sainte-Catherine", latitude: 44.8375, longitude: -0.5733, numberOfBoxes: 0 },
            { id: 6, name: "Monoprix Toulouse Jean-Jaurès", latitude: 43.6056, longitude: 1.4501, numberOfBoxes: 0 },
            { id: 7, name: "Monoprix Nice Masséna", latitude: 43.6952, longitude: 7.2655, numberOfBoxes: 0 },
            { id: 8, name: "Monoprix Nantes Commerce", latitude: 47.2154, longitude: -1.5563, numberOfBoxes: 0 },
            { id: 9, name: "Monoprix Strasbourg Homme de Fer", latitude: 48.5845, longitude: 7.7455, numberOfBoxes: 0 },
            { id: 10, name: "Monoprix Rennes République", latitude: 48.1082, longitude: -1.6787, numberOfBoxes: 0 },
            { id: 11, name: "Monoprix Grenoble Victor Hugo", latitude: 45.1876, longitude: 5.7278, numberOfBoxes: 0 },
            { id: 12, name: "Monoprix Montpellier Comédie", latitude: 43.6093, longitude: 3.8795, numberOfBoxes: 5 },
            { id: 13, name: "Monoprix Dijon Wilson", latitude: 47.3225, longitude: 5.0417, numberOfBoxes: 0 },
            { id: 14, name: "Monoprix Reims Centre", latitude: 49.2593, longitude: 4.0347, numberOfBoxes: 14 },
            { id: 15, name: "Monoprix Tours Nationale", latitude: 47.3941, longitude: 0.6887, numberOfBoxes: 29 },
            { id: 16, name: "Monoprix Orléans Place d’Arc", latitude: 47.9025, longitude: 1.9046, numberOfBoxes: 0 },
            { id: 17, name: "Monoprix Metz Saint-Jacques", latitude: 49.1194, longitude: 6.1760, numberOfBoxes: 0 },
            { id: 18, name: "Monoprix Caen Vaugueux", latitude: 49.1829, longitude: -0.3537, numberOfBoxes: 0 },
            { id: 19, name: "Monoprix Perpignan Centre", latitude: 42.6985, longitude: 2.8956, numberOfBoxes: 23 },
            { id: 20, name: "Monoprix Rouen Centre", latitude: 49.4432, longitude: 1.0993, numberOfBoxes: 0 }
         ],
    },
    {
        id: 4,
        brand: "Biocoop",
        locations: [
            { id: 1, name: "Biocoop Paris Paradis", latitude: 48.8722, longitude: 2.3490, numberOfBoxes: 0 },
            { id: 2, name: "Biocoop Le Panier Bio Ambon", latitude: 47.6358, longitude: -2.5379, numberOfBoxes: 0 },
            { id: 3, name: "Biocoop Grandeur Nature Toulouse", latitude: 43.5769, longitude: 1.4656, numberOfBoxes: 0 },
            { id: 4, name: "Biocoop Ethik'être Glisy", latitude: 49.8876, longitude: 2.3589, numberOfBoxes: 15 },
            { id: 5, name: "Biocoop Ajaccio", latitude: 41.9266, longitude: 8.7285, numberOfBoxes: 0 },
            { id: 6, name: "La Ruch'bio Pontarlier", latitude: 46.9050, longitude: 6.3550, numberOfBoxes: 20 },
            { id: 7, name: "Biocoop Paimpol", latitude: 48.7802, longitude: -3.0481, numberOfBoxes: 0 },
            { id: 8, name: "Biocoop Maubec", latitude: 43.8411, longitude: 5.0346, numberOfBoxes: 0 },
            { id: 9, name: "Biocoop Le Boulou", latitude: 42.5427, longitude: 2.8435, numberOfBoxes: 0 },
            { id: 10, name: "Biocoop Arelate Arles", latitude: 43.6751, longitude: 4.6348, numberOfBoxes: 0 },
            { id: 11, name: "Biocoop Rennes Scarabée", latitude: 48.1147, longitude: -1.6809, numberOfBoxes: 0 },
            { id: 12, name: "Biocoop Montpellier", latitude: 43.6108, longitude: 3.8767, numberOfBoxes: 0 },
            { id: 13, name: "Biocoop Lyon Lumière", latitude: 45.7578, longitude: 4.8985, numberOfBoxes: 0 },
            { id: 14, name: "Biocoop Lille Solférino", latitude: 50.6326, longitude: 3.0534, numberOfBoxes: 0 },
            { id: 15, name: "Biocoop Nantes", latitude: 47.2186, longitude: -1.5546, numberOfBoxes: 0 },
            { id: 16, name: "Biocoop Marseille Prado", latitude: 43.2874, longitude: 5.3744, numberOfBoxes: 0 },
            { id: 17, name: "Biocoop Nice", latitude: 43.7009, longitude: 7.2684, numberOfBoxes: 0 },
            { id: 18, name: "Biocoop Bordeaux Lac", latitude: 44.8598, longitude: -0.5585, numberOfBoxes: 10 },
            { id: 19, name: "Biocoop Strasbourg Neudorf", latitude: 48.5734, longitude: 7.7521, numberOfBoxes: 0 },
            { id: 20, name: "Biocoop Toulouse Blagnac", latitude: 43.6323, longitude: 1.3816, numberOfBoxes: 0 },
            { id: 21, name: "Biocoop Grenoble Centre", latitude: 45.1885, longitude: 5.7245, numberOfBoxes: 0 },
            { id: 22, name: "Biocoop Dijon", latitude: 47.3220, longitude: 5.0415, numberOfBoxes: 0 },
            { id: 23, name: "Biocoop Rouen", latitude: 49.4432, longitude: 1.0999, numberOfBoxes: 0 },
            { id: 24, name: "Biocoop Tours", latitude: 47.3941, longitude: 0.6848, numberOfBoxes: 0 },
            { id: 25, name: "Biocoop Amiens", latitude: 49.8941, longitude: 2.2957, numberOfBoxes: 8 },
            { id: 26, name: "Biocoop Caen", latitude: 49.1829, longitude: -0.3707, numberOfBoxes: 0 },
            { id: 27, name: "Biocoop Metz", latitude: 49.1193, longitude: 6.1757, numberOfBoxes: 14 },
            { id: 28, name: "Biocoop Reims", latitude: 49.2583, longitude: 4.0317, numberOfBoxes: 0 },
            { id: 29, name: "Biocoop Nancy", latitude: 48.6921, longitude: 6.1844, numberOfBoxes: 0 },
            { id: 30, name: "Biocoop Angers", latitude: 47.4784, longitude: -0.5632, numberOfBoxes: 0 },
            { id: 31, name: "Biocoop Clermont-Ferrand", latitude: 45.7797, longitude: 3.0866, numberOfBoxes: 0 },
            { id: 32, name: "Biocoop Orleans", latitude: 47.9029, longitude: 1.9098, numberOfBoxes: 0 },
            { id: 33, name: "Biocoop Limoges", latitude: 45.8336, longitude: 1.2611, numberOfBoxes: 4 },
            { id: 34, name: "Biocoop Le Mans", latitude: 47.9961, longitude: 0.1996, numberOfBoxes: 0 },
            { id: 35, name: "Biocoop Brest", latitude: 48.3904, longitude: -4.4861, numberOfBoxes: 0 },
            { id: 36, name: "Biocoop Pau", latitude: 43.2951, longitude: -0.3708, numberOfBoxes: 0 },
            { id: 37, name: "Biocoop Bayonne", latitude: 43.4929, longitude: -1.4748, numberOfBoxes: 0 },
            { id: 38, name: "Biocoop Saint-Malo", latitude: 48.6476, longitude: -2.0070, numberOfBoxes: 0 },
            { id: 39, name: "Biocoop Quimper", latitude: 47.9957, longitude: -4.0974, numberOfBoxes: 14 },
            { id: 40, name: "Biocoop Lorient", latitude: 47.7488, longitude: -3.3662, numberOfBoxes: 5 },
            { id: 41, name: "Biocoop Tours Nord", latitude: 47.4245, longitude: 0.6793, numberOfBoxes: 0 },
            { id: 42, name: "Biocoop Evreux", latitude: 49.0241, longitude: 1.1505, numberOfBoxes: 0 },
            { id: 43, name: "Biocoop Chartres", latitude: 48.4461, longitude: 1.4897, numberOfBoxes: 22 },
            { id: 44, name: "Biocoop Montauban", latitude: 44.0171, longitude: 1.3566, numberOfBoxes: 8 },
            { id: 45, name: "Biocoop Annecy", latitude: 45.8992, longitude: 6.1294, numberOfBoxes: 0 },
            { id: 46, name: "Biocoop Albi", latitude: 43.9230, longitude: 2.1466, numberOfBoxes: 0 },
            { id: 47, name: "Biocoop Perpignan", latitude: 42.6986, longitude: 2.8956, numberOfBoxes: 0 },
            { id: 48, name: "Biocoop Béziers", latitude: 43.3434, longitude: 3.2158, numberOfBoxes: 0 },
            { id: 49, name: "Biocoop Cahors", latitude: 44.4475, longitude: 1.4419, numberOfBoxes: 0 },
            { id: 50, name: "Biocoop Bastia", latitude: 42.7021, longitude: 9.4509, numberOfBoxes: 0 }
        ]
},
{
    id: 5,
    brand: "Brasserie",
    locations: [
        { id: 1, name: "Brasserie des Champs-Elysées", latitude: 48.8701, longitude: 2.3044, numberOfBoxes: 0 },
        { id: 2, name: "Brasserie Lyon Part-Dieu", latitude: 45.7596, longitude: 4.8414, numberOfBoxes: 0 },
        { id: 3, name: "Brasserie Lille Grand Place", latitude: 50.6364, longitude: 3.0635, numberOfBoxes: 0 },
        { id: 4, name: "Brasserie Bordeaux Sainte-Catherine", latitude: 44.8378, longitude: -0.5792, numberOfBoxes: 0 },
        { id: 5, name: "Brasserie Marseille Vieux-Port", latitude: 43.2965, longitude: 5.3698, numberOfBoxes: 12 },
        { id: 6, name: "Brasserie Nice Promenade", latitude: 43.7034, longitude: 7.2663, numberOfBoxes: 0 },
        { id: 7, name: "Brasserie Toulouse Capitole", latitude: 43.6045, longitude: 1.4442, numberOfBoxes: 0 },
        { id: 8, name: "Brasserie Nantes Graslin", latitude: 47.2184, longitude: -1.5536, numberOfBoxes: 17 },
        { id: 9, name: "Brasserie Strasbourg Cathedral", latitude: 48.5839, longitude: 7.7455, numberOfBoxes: 0 },
        { id: 10, name: "Brasserie Montpellier Comédie", latitude: 43.6108, longitude: 3.8767, numberOfBoxes: 8 },
        { id: 11, name: "Brasserie Dijon République", latitude: 47.3165, longitude: 5.0169, numberOfBoxes: 0 },
        { id: 12, name: "Brasserie Rennes Thabor", latitude: 48.1147, longitude: -1.6794, numberOfBoxes: 0 },
        { id: 13, name: "Brasserie Grenoble Place Victor Hugo", latitude: 45.1885, longitude: 5.7245, numberOfBoxes: 0 },
        { id: 14, name: "Brasserie Avignon Pont Saint-Bénézet", latitude: 43.9493, longitude: 4.8055, numberOfBoxes: 7 },
        { id: 15, name: "Brasserie Saint-Malo Sillon", latitude: 48.6493, longitude: -2.0257, numberOfBoxes: 0 },
        { id: 16, name: "Brasserie Rouen Cathedral", latitude: 49.4432, longitude: 1.0993, numberOfBoxes: 0 },
        { id: 17, name: "Brasserie Perpignan Le Castillet", latitude: 42.6986, longitude: 2.8954, numberOfBoxes: 0 },
        { id: 18, name: "Brasserie Reims Place d’Erlon", latitude: 49.2583, longitude: 4.0317, numberOfBoxes: 12 },
        { id: 19, name: "Brasserie Amiens Saint-Leu", latitude: 49.8941, longitude: 2.2957, numberOfBoxes: 0 },
        { id: 20, name: "Brasserie Metz Gare", latitude: 49.1193, longitude: 6.1757, numberOfBoxes: 0 },
        { id: 21, name: "Brasserie Clermont-Ferrand Jaude", latitude: 45.7772, longitude: 3.0870, numberOfBoxes: 0 },
        { id: 22, name: "Brasserie Tours Place Plumereau", latitude: 47.3941, longitude: 0.6848, numberOfBoxes: 0 },
        { id: 23, name: "Brasserie Angers Place du Ralliement", latitude: 47.4784, longitude: -0.5632, numberOfBoxes: 0 },
        { id: 24, name: "Brasserie Pau Beaumont", latitude: 43.2951, longitude: -0.3708, numberOfBoxes: 0 },
        { id: 25, name: "Brasserie Caen Abbaye-aux-Hommes", latitude: 49.1828, longitude: -0.3706, numberOfBoxes: 0 },
        { id: 26, name: "Brasserie Nancy Stanislas", latitude: 48.6920, longitude: 6.1844, numberOfBoxes: 0 },
        { id: 27, name: "Brasserie Annecy Vieille Ville", latitude: 45.8992, longitude: 6.1294, numberOfBoxes: 0 },
        { id: 28, name: "Brasserie La Rochelle Vieux-Port", latitude: 46.1591, longitude: -1.1511, numberOfBoxes: 0 },
        { id: 29, name: "Brasserie Lorient Place Jules Ferry", latitude: 47.7480, longitude: -3.3603, numberOfBoxes: 0 },
        { id: 30, name: "Brasserie Bayonne Les Halles", latitude: 43.4914, longitude: -1.4749, numberOfBoxes: 0 },
        { id: 31, name: "Brasserie Besançon Battant", latitude: 47.2378, longitude: 6.0241, numberOfBoxes: 0 },
        { id: 32, name: "Brasserie Mulhouse Place de la Réunion", latitude: 47.7469, longitude: 7.3386, numberOfBoxes: 0 },
        { id: 33, name: "Brasserie Béziers Allees Paul Riquet", latitude: 43.3471, longitude: 3.2159, numberOfBoxes: 0 },
        { id: 34, name: "Brasserie Ajaccio Place Foch", latitude: 41.9192, longitude: 8.7386, numberOfBoxes: 0 },
        { id: 35, name: "Brasserie Brest Recouvrance", latitude: 48.3904, longitude: -4.4861, numberOfBoxes: 0 }
    ]
},
{
    id: 6,
    brand: "Glass Bottle Cleaning",
    locations: [
        {
            id: 1,
            name: "Ma Bouteille s'appelle Reviens",
            latitude: 45.0330,
            longitude: 5.0357,
            numberOfBoxes: 0
        },
        {
            id: 2,
            name: "Haut la Consigne Lille",
            latitude: 50.6292,
            longitude: 3.0573,
            numberOfBoxes: 0
        },
        {
            id: 3,
            name: "Eternity Système Lyon",
            latitude: 45.7640,
            longitude: 4.8357,
            numberOfBoxes: 0
        },
        {
            id: 4,
            name: "Eternity Système Paris",
            latitude: 48.8566,
            longitude: 2.3522,
            numberOfBoxes: 0
        },
        {
            id: 5,
            name: "Uzaje Nantes",
            latitude: 47.2184,
            longitude: -1.5536,
            numberOfBoxes: 0
        },
        {
            id: 6,
            name: "Uzaje Toulouse",
            latitude: 43.6047,
            longitude: 1.4442,
            numberOfBoxes: 0
        }
    ]
},
    
{
    id: 7,
    brand: "Duo oenologie",
    locations: [
        {
            id: 1,
            name: "Duo oenologie",
            latitude: 48.164471,
            longitude: 7.371615,
            numberOfBoxes: 22
        },
    
]
},
{
    id: 8,
    brand: "Clos du porteau",
    locations: [
        {
            id: 1,
            name: "Clos du porteau",
            latitude: 47.317102,
            longitude: 1.147287,
            numberOfBoxes: 12
        },
    
]
},
{
    id: 9,
    brand: "Duo oenologie",
    locations: [
        {
            id: 1,
            name: "Duo oenologie",
            latitude: 48.164471,
            longitude: 7.371615,
            numberOfBoxes: 22
        },
    
]
},
{
    id: 10,
    brand: "Biocoop Saint-Dizier",
    locations: [
        {
            id: 1,
            name: "Epicerie Bio",
            latitude: 48.650989,
            longitude: 4.961442,
            numberOfBoxes: 8
        },
]
},
{
    id: 11,
    brand: "Le Duc du bar",
    locations: [
        {
            id: 1,
            name: "Brasserie",
            latitude: 48.76516,
            longitude: 5.16,
            numberOfBoxes: 2
        },
    
]
}
]
