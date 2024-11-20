import Client from './client';

export const CLIENTS: Client[] = [
    {
        id: 1,
        brand: "Leroy Merlin",
        locations: [
            { id: 1, name: "Magasin Cormontreuil", latitude: 49.2319, longitude: 4.0478, numberOfBoxes: 0 },
            { id: 2, name: "Magasin Lille", latitude: 50.6292, longitude: 3.0573, numberOfBoxes: 0 },
            { id: 3, name: "Magasin Marseille", latitude: 43.2965, longitude: 5.3698, numberOfBoxes: 0 },
            { id: 4, name: "Magasin Bordeaux", latitude: 44.8378, longitude: -0.5792, numberOfBoxes: 0 },
            { id: 5, name: "Magasin Lyon", latitude: 45.7640, longitude: 4.8357, numberOfBoxes: 0 },
            { id: 6, name: "Magasin Strasbourg", latitude: 48.5734, longitude: 7.7521, numberOfBoxes: 0 },
            { id: 7, name: "Magasin Toulouse", latitude: 43.6047, longitude: 1.4442, numberOfBoxes: 0 },
            { id: 8, name: "Magasin Nantes", latitude: 47.2184, longitude: -1.5536, numberOfBoxes: 0 },
            { id: 9, name: "Magasin Nice", latitude: 43.7102, longitude: 7.2620, numberOfBoxes: 0 },
            { id: 10, name: "Magasin Rennes", latitude: 48.1173, longitude: -1.6778, numberOfBoxes: 0 },
            { id: 11, name: "Magasin Grenoble", latitude: 45.1885, longitude: 5.7245, numberOfBoxes: 0 },
            { id: 12, name: "Magasin Montpellier", latitude: 43.6108, longitude: 3.8767, numberOfBoxes: 0 },
            { id: 13, name: "Magasin Dijon", latitude: 47.3220, longitude: 5.0415, numberOfBoxes: 0 },
            { id: 14, name: "Magasin Clermont-Ferrand", latitude: 45.7772, longitude: 3.0870, numberOfBoxes: 0 },
            { id: 15, name: "Magasin Reims", latitude: 49.2583, longitude: 4.0317, numberOfBoxes: 0 },
            { id: 16, name: "Magasin Tours", latitude: 47.3941, longitude: 0.6848, numberOfBoxes: 0 },
            { id: 17, name: "Magasin Orleans", latitude: 47.9029, longitude: 1.9093, numberOfBoxes: 0 },
            { id: 18, name: "Magasin Metz", latitude: 49.1193, longitude: 6.1757, numberOfBoxes: 0 },
            { id: 19, name: "Magasin Caen", latitude: 49.1829, longitude: -0.3707, numberOfBoxes: 0 },
            { id: 20, name: "Magasin Perpignan", latitude: 42.6986, longitude: 2.8956, numberOfBoxes: 0 }
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
            { id: 8, name: "IKEA Nantes", latitude: 47.2512, longitude: -1.5188, numberOfBoxes: 0 },
            { id: 9, name: "IKEA Strasbourg", latitude: 48.5335, longitude: 7.7650, numberOfBoxes: 0 },
            { id: 10, name: "IKEA Nice", latitude: 43.7109, longitude: 7.2612, numberOfBoxes: 0 },
            { id: 11, name: "IKEA Grenoble", latitude: 45.1597, longitude: 5.7089, numberOfBoxes: 0 },
            { id: 12, name: "IKEA Lille", latitude: 50.6533, longitude: 3.0987, numberOfBoxes: 0 },
            { id: 13, name: "IKEA Metz", latitude: 49.1232, longitude: 6.1578, numberOfBoxes: 0 },
            { id: 14, name: "IKEA Rennes", latitude: 48.1276, longitude: -1.6911, numberOfBoxes: 0 },
            { id: 15, name: "IKEA Montpellier", latitude: 43.5841, longitude: 3.8789, numberOfBoxes: 0 },
            { id: 16, name: "IKEA Clermont-Ferrand", latitude: 45.7797, longitude: 3.0962, numberOfBoxes: 0 },
            { id: 17, name: "IKEA Caen", latitude: 49.1786, longitude: -0.3582, numberOfBoxes: 0 },
            { id: 18, name: "IKEA Dijon", latitude: 47.3526, longitude: 5.0452, numberOfBoxes: 0 },
            { id: 19, name: "IKEA Tours", latitude: 47.3902, longitude: 0.7070, numberOfBoxes: 0 },
            { id: 20, name: "IKEA Orléans", latitude: 47.9036, longitude: 1.9115, numberOfBoxes: 0 }
        ],

    },
    {
        id: 2,
        brand: "Monoprix",
        locations: [
            { id: 1, name: "Monoprix Paris Champs-Elysées", latitude: 48.8701, longitude: 2.3044, numberOfBoxes: 0 },
            { id: 2, name: "Monoprix Marseille Castellane", latitude: 43.2860, longitude: 5.3792, numberOfBoxes: 0 },
            { id: 3, name: "Monoprix Lyon Bellecour", latitude: 45.7580, longitude: 4.8347, numberOfBoxes: 0 },
            { id: 4, name: "Monoprix Lille Faidherbe", latitude: 50.6371, longitude: 3.0630, numberOfBoxes: 0 },
            { id: 5, name: "Monoprix Bordeaux Sainte-Catherine", latitude: 44.8375, longitude: -0.5733, numberOfBoxes: 0 },
            { id: 6, name: "Monoprix Toulouse Jean-Jaurès", latitude: 43.6056, longitude: 1.4501, numberOfBoxes: 0 },
            { id: 7, name: "Monoprix Nice Masséna", latitude: 43.6952, longitude: 7.2655, numberOfBoxes: 0 },
            { id: 8, name: "Monoprix Nantes Commerce", latitude: 47.2154, longitude: -1.5563, numberOfBoxes: 0 },
            { id: 9, name: "Monoprix Strasbourg Homme de Fer", latitude: 48.5845, longitude: 7.7455, numberOfBoxes: 0 },
            { id: 10, name: "Monoprix Rennes République", latitude: 48.1082, longitude: -1.6787, numberOfBoxes: 0 },
            { id: 11, name: "Monoprix Grenoble Victor Hugo", latitude: 45.1876, longitude: 5.7278, numberOfBoxes: 0 },
            { id: 12, name: "Monoprix Montpellier Comédie", latitude: 43.6093, longitude: 3.8795, numberOfBoxes: 0 },
            { id: 13, name: "Monoprix Dijon Wilson", latitude: 47.3225, longitude: 5.0417, numberOfBoxes: 0 },
            { id: 14, name: "Monoprix Reims Centre", latitude: 49.2593, longitude: 4.0347, numberOfBoxes: 0 },
            { id: 15, name: "Monoprix Tours Nationale", latitude: 47.3941, longitude: 0.6887, numberOfBoxes: 0 },
            { id: 16, name: "Monoprix Orléans Place d’Arc", latitude: 47.9025, longitude: 1.9046, numberOfBoxes: 0 },
            { id: 17, name: "Monoprix Metz Saint-Jacques", latitude: 49.1194, longitude: 6.1760, numberOfBoxes: 0 },
            { id: 18, name: "Monoprix Caen Vaugueux", latitude: 49.1829, longitude: -0.3537, numberOfBoxes: 0 },
            { id: 19, name: "Monoprix Perpignan Centre", latitude: 42.6985, longitude: 2.8956, numberOfBoxes: 0 },
            { id: 20, name: "Monoprix Rouen Centre", latitude: 49.4432, longitude: 1.0993, numberOfBoxes: 0 }
         ],
        
    },
]
