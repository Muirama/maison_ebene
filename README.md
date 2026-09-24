# MAISON ÉBÈNE

> **L'âme de Madagascar, servie à table.**

Maison Ébène est un site web immersif et expérimental pour un restaurant gastronomique inspiré de Madagascar.

L'objectif n'est pas simplement de présenter un restaurant, mais de **raconter Madagascar à travers la cuisine**, les ingrédients, les paysages, les matières et les traditions.

L'expérience repose principalement sur une navigation contrôlée par le scroll, des animations cinématiques et des scènes 3D interactives.

---

## Concept

Maison Ébène imagine une cuisine contemporaine inspirée par :

* la terre rouge de Madagascar ;
* les paysages de l'île ;
* les produits locaux ;
* les épices ;
* la vanille ;
* le cacao ;
* le riz ;
* les fruits tropicaux ;
* les traditions culinaires ;
* les différentes régions de Madagascar.

Le site doit donner l'impression que l'utilisateur **voyage à travers Madagascar avant d'arriver dans l'assiette**.

### Parcours narratif

```text
Madagascar
    ↓
La Terre
    ↓
Les Plantes
    ↓
Les Ingrédients
    ↓
La Cuisine
    ↓
Le Feu
    ↓
L'Assiette
    ↓
Les Régions
    ↓
Le Chef
    ↓
La Maison
    ↓
L'Expérience
    ↓
La Réservation
```

Chaque section doit être liée à la précédente par une transition visuelle et narrative.

---

# Direction artistique

## Identité

**Gastronomie contemporaine × Madagascar × Nature × Élégance**

L'identité malgache ne doit pas être représentée uniquement par les couleurs du drapeau.

Elle doit être ressentie à travers :

* les matières ;
* les paysages ;
* les ingrédients ;
* les textures ;
* la lumière ;
* la végétation ;
* les motifs inspirés de l'artisanat malgache ;
* les références aux différentes régions de l'île.

L'approche doit rester contemporaine et élégante.

---

## Palette

| Couleur     | Code      | Utilisation        |
| ----------- | --------- | ------------------ |
| Ébène       | `#10100E` | arrière-plans      |
| Terre rouge | `#8B3F2F` | terre, transitions |
| Vanille     | `#D8B978` | lumières, accents  |
| Sable       | `#E8DDC8` | textes             |
| Vert forêt  | `#25382D` | végétation         |

---

# Typographie

### Titres

**Cormorant Garamond**

Utilisée pour transmettre :

* l'élégance ;
* la gastronomie ;
* le caractère haut de gamme ;
* l'émotion.

### Texte

**Inter / Manrope**

Utilisée pour :

* les descriptions ;
* les boutons ;
* la navigation ;
* les informations pratiques.

---

# Expérience utilisateur

Le scroll est l'élément principal de navigation.

Il agit comme une caméra permettant de voyager à travers les différentes scènes.

Exemple :

```text
Scroll
  ↓
Caméra avance
  ↓
La plante grandit
  ↓
La caméra approche
  ↓
Zoom sur la vanille
  ↓
Transition vers la terre
  ↓
Apparition du paysage
```

Les animations ne doivent pas être purement décoratives.

Chaque mouvement doit avoir une fonction narrative.

---

# Landing Page

La première scène présente :

```text
                    MADAGASCAR

                         🌿
                    VANILLE 3D

                    MAISON ÉBÈNE

             L'âme de Madagascar,
                servie à table.

                    ↓ DÉCOUVRIR
```

La scène démarre dans une atmosphère sombre.

Une plante de vanille apparaît progressivement.

Le scroll permet ensuite de s'approcher de la plante et de découvrir la gousse de vanille avant de transitionner vers la terre rouge de Madagascar.

---

# Architecture du projet

```text
maison-ebene/
│
├── public/
│   └── models/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   │
│   │   └── scene/
│   │       ├── HeroScene.jsx
│   │       ├── Ground.jsx
│   │       ├── VanillaPlaceholder.jsx
│   │       ├── Particles.jsx
│   │       └── Lights.jsx
│   │
│   ├── animations/
│   │   └── heroScroll.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# Technologies

## Frontend

* React
* Vite
* JavaScript
* CSS

## 3D

* Three.js
* React Three Fiber
* Drei

## Animations

* GSAP
* ScrollTrigger

## Scroll

* Lenis

---

# Installation

Cloner le projet :

```bash
git clone <URL_DU_REPOSITORY>
```

Entrer dans le projet :

```bash
cd maison-ebene
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet sera ensuite accessible à l'adresse indiquée par Vite.

---

# Dépendances principales

Installation de React Three Fiber et Three.js :

```bash
npm install three @react-three/fiber @react-three/drei
```

Installation de GSAP :

```bash
npm install gsap
```

Installation de Lenis :

```bash
npm install lenis
```

---

# Architecture 3D

La scène 3D principale est organisée autour de plusieurs composants.

```text
HeroScene
│
├── Lights
│
├── Ground
│
├── VanillaPlant
│
└── Particles
```

### HeroScene

Responsable de la composition générale de la scène.

### Ground

Représente le sol et évoluera progressivement vers une représentation de la terre rouge de Madagascar.

### VanillaPlant

Représente la plante de vanille.

Dans la première version, une géométrie simple est utilisée comme placeholder.

Elle sera ensuite remplacée par un véritable modèle 3D.

### Particles

Ajoute de petites particules permettant de donner de la profondeur et une atmosphère cinématique.

### Lights

Gère l'éclairage de la scène.

---

# Modèles 3D

Les modèles définitifs seront progressivement ajoutés dans :

```text
public/models/
```

Le format privilégié est :

```text
.glb
.gltf
```

Les modèles pourront représenter :

* plante de vanille ;
* gousses de vanille ;
* cacao ;
* épices ;
* fruits ;
* assiettes ;
* ustensiles ;
* éléments de cuisine ;
* mobilier ;
* éléments architecturaux.

---

# Roadmap

## Phase 1 — Fondations

* [x] Création du projet React + Vite
* [x] Installation de Three.js
* [x] Installation de React Three Fiber
* [x] Installation de Drei
* [x] Installation de GSAP
* [x] Installation de Lenis
* [x] Création de la première scène 3D
* [x] Création du sol
* [x] Création de l'objet 3D temporaire
* [x] Mise en place des lumières
* [x] Mise en place des particules
* [x] Première interface du Hero

## Phase 2 — Hero immersif

* [ ] Création de la caméra cinématique
* [ ] Animation d'apparition
* [ ] Animation de rotation de la plante
* [ ] Mise en place du scroll
* [ ] Intégration de GSAP ScrollTrigger
* [ ] Animation de la caméra avec le scroll
* [ ] Zoom vers la vanille
* [ ] Transition vers la terre
* [ ] Synchronisation texte / 3D

## Phase 3 — Modèles 3D

* [ ] Modèle 3D de la plante de vanille
* [ ] Textures réalistes
* [ ] Matériaux
* [ ] Modèle de gousse de vanille
* [ ] Modèle de terre
* [ ] Végétation
* [ ] Optimisation des modèles

## Phase 4 — Monde de Madagascar

* [ ] Hautes Terres
* [ ] Côte
* [ ] Nord
* [ ] Sud
* [ ] Paysages 3D
* [ ] Ingrédients régionaux
* [ ] Transitions entre les environnements

## Phase 5 — Cuisine

* [ ] Cuisine 3D
* [ ] Feu
* [ ] Vapeur
* [ ] Ustensiles
* [ ] Préparation
* [ ] Cuisson
* [ ] Dressage

## Phase 6 — Assiette

* [ ] Modèle d'assiette
* [ ] Ingrédients 3D
* [ ] Animation du dressage
* [ ] Lumière cinématique
* [ ] Transition cuisine → assiette

## Phase 7 — Restaurant

* [ ] Modèle 3D du restaurant
* [ ] Salle
* [ ] Tables
* [ ] Éclairage
* [ ] Décoration
* [ ] Végétation
* [ ] Caméra immersive

## Phase 8 — Expérience utilisateur

* [ ] Navigation
* [ ] Curseur personnalisé
* [ ] Indicateur de progression
* [ ] Micro-interactions
* [ ] Responsive design
* [ ] Mobile
* [ ] Tablette

## Phase 9 — Performance

* [ ] Compression des modèles 3D
* [ ] Optimisation des textures
* [ ] Lazy loading
* [ ] Optimisation des particules
* [ ] Optimisation mobile
* [ ] Réduction de la consommation GPU

## Phase 10 — Finalisation

* [ ] Menu du restaurant
* [ ] Page Chef
* [ ] Page Maison
* [ ] Réservation
* [ ] Informations de contact
* [ ] SEO
* [ ] Accessibilité
* [ ] Tests
* [ ] Déploiement

---

# Objectif final

Le résultat attendu est un site qui combine :

```text
              MAISON ÉBÈNE
                    │
        ┌───────────┼───────────┐
        │           │           │
       3D       Animation     Design
        │           │           │
        └───────────┼───────────┘
                    │
                 SCROLL
                    │
                    ↓
              EXPÉRIENCE
                    │
                    ↓
              MADAGASCAR
                    │
                    ↓
                CUISINE
                    │
                    ↓
                ASSIETTE
```

L'objectif n'est pas seulement de créer un site vitrine.

**Maison Ébène doit être une expérience numérique qui raconte Madagascar à travers la gastronomie.**

---

## Statut actuel

Le projet est actuellement dans la phase de construction du **Hero 3D**.

La scène utilise pour le moment un modèle temporaire construit avec des géométries Three.js.

La prochaine évolution majeure consiste à mettre en place :

```text
GSAP
  +
ScrollTrigger
  +
Three.js Camera
  +
Scroll
```

afin de transformer le Hero statique en **séquence cinématique contrôlée par le scroll**.
