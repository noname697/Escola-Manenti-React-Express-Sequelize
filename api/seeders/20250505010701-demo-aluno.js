"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "aluno",
      [
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Alice Souza",
          idade: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Beto Lima",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Caio Martins",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Daniela Rocha",
          idade: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Eduardo Alves",
          idade: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Fernanda Dias",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Guilherme Torres",
          idade: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Helena Mendes",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Igor Carvalho",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Julia Barros",
          idade: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Kaique Silva",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Lara Moreira",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Marcos Souza",
          idade: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Natasha Oliveira",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Oscar Ferreira",
          idade: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Patrícia Lima",
          idade: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Rafael Duarte",
          idade: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Sabrina Pires",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Tales Monteiro",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Úrsula Costa",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://imgur.com/a/MP09JsG",
          nome: "Vinícius Ramos",
          idade: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("aluno", null, {});
  },
};
