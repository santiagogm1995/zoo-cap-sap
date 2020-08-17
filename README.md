# Getting Started

For deploy in Hana CLoud: 

In package.json:

"cds": {
    "hana": {
      "deploy-format": "hdbtable"
    },
    "requires": {
      "db": {
        "kind": "hana"
      }
    }

- cd gen/db
- npm install
- cf create-service-key zoo-container default
- hana-cli serviceKey zoo-container default
- npm start

For deploy in SQL Lite:

In package.json

"cds": {
    "requires": {
      "db": {
        "kind": "sql"
      }
    }

- root
- npm run start-local


