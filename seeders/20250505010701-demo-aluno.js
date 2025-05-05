"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "aluno",
      [
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Alice Souza",
          idade: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Beto Lima",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Caio Martins",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Daniela Rocha",
          idade: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Eduardo Alves",
          idade: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Fernanda Dias",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Guilherme Torres",
          idade: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Helena Mendes",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Igor Carvalho",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Julia Barros",
          idade: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Kaique Silva",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Lara Moreira",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Marcos Souza",
          idade: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Natasha Oliveira",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Oscar Ferreira",
          idade: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Patrícia Lima",
          idade: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Rafael Duarte",
          idade: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Sabrina Pires",
          idade: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Tales Monteiro",
          idade: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
          nome: "Úrsula Costa",
          idade: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          foto: "https://i.imgur.com/qOPNaYj.png",
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
