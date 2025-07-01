# 🍬 Carambar & Co - API de Blagues

API Node.js pour servir des blagues Carambar aléatoires avec gestion complète CRUD.

---

## 🚀 Déploiement

- **URL de production** : (https://carambar-back-hmfy.onrender.com/api/v1)
- **Documentation Swagger**
( https://carambar-back-hmfy.onrender.com/api-docs/#/Jokes/get_jokes__id_ )

---

## 💻 Technologies

- Node.js 
- Express
- Sequelize (SQLite)
- Swagger UI

---

## 🔧 Installation

```bash
git clone https://github.com/CharlesCatto/carambar-back.git
cd carambar-back
npm install
```

---

## 🏗️ Structure

```txt
src/
├── controllers/     # Logique métier
├── models/          # Modèles Sequelize
├── routes/          # Définition des endpoints
├── middlewares/     # Gestion des erreurs
├── app.js           # Configuration Express
└── server.js        # Point d'entrée
```

---

## 📚 Endpoints
Méthode	Endpoint	Description
```txt
GET	/api/v1/jokes	Liste toutes les blagues
GET	/api/v1/jokes/random	Blague aléatoire
GET	/api/v1/jokes/:id	Blague spécifique
POST	/api/v1/jokes	Ajouter une blague
```

## 🐛 Développement

npm run dev  # Démarrer avec nodemon

---

## 🌱 Seed de la base

node src/seed.js  # Peuple la base avec des blagues initiales

---

## 🧠 Auteur

    Charles Catto
