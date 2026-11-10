# PokéNid

Un petit jeu façon Tamagotchi avec les Pokémon des générations 1 à 4, dans une seule page web.

**Jouer :** https://jeansonpaul-ops.github.io/Pokenid/

## Pour commencer
- Touche l'œuf sur l'écran pour le réchauffer jusqu'à l'éclosion.
- Les boutons sous l'écran servent à nourrir, jouer, laver, soigner et faire dormir ton Pokémon.
- Le temps passe pour de vrai : ton Pokémon a faim et se salit même quand la page est fermée (il dort pendant ton absence).
- Le carnet à droite (ou en dessous sur téléphone) contient le sac, la boutique, les combats, le Pokédex, la pension, les amis et les succès.

## Jouer entre amis
Onglet **Amis** : copie ton code de dresseur et envoie-le par message. Ton ami le colle chez lui pour voir la carte de ton compagnon et affronter ton équipe. Les échanges de Pokémon se font aussi par codes.

## À savoir
- La partie est gardée dans le navigateur : changer d'appareil ou vider le navigateur repart de zéro.
- Sur téléphone, « Ajouter à l'écran d'accueil » permet de l'ouvrir comme une appli.
- Les sprites viennent de [PokeAPI](https://github.com/PokeAPI/sprites). Projet de fan, non commercial, pour un test entre amis. Pokémon appartient à Nintendo, Game Freak et The Pokémon Company.

## Crédits graphiques

Objets du décor et fonds « Plaine », « Désert », « Givre » : packs **Pixel Platformer** et **Roguelike Indoors** de [Kenney](https://kenney.nl), licence CC0 (domaine public). Voir `LICENSE-kenney.txt`.

Icônes des boutons et des onglets : sprites d'objets Pokémon issus de [PokeAPI/sprites](https://github.com/PokeAPI/sprites) (images © The Pokémon Company, comme les sprites des Pokémon).

## Administration

Le panneau Admin s'ouvre avec `#admin` à la fin de l'adresse. Il demande une clé GitHub (fine-grained token) avec l'accès « Contents : Read and write » sur ce dépôt uniquement. Les réglages publiés sont écrits dans `config.json` et lus par tous les joueurs au chargement.
