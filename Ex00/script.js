const alunos = [
  {nome: "Manu", idade: 17, disciplinaPreferida: "Matemática"},
  {nome: "Ricardo", idade: 18, disciplinaPreferida: "Química"},
  {nome: "Leo", idade: 16, disciplinaPreferida: "Educação Física"},
  {nome: "Samuel", idade: 19, disciplinaPreferida: "Biologia"},
  {nome: "Kaique", idade: 17, disciplinaPreferida: "Programação"}
];

const primeiroNome = alunos [0].nome;
const ultimaDisciplina = alunos [4].disciplinaPreferida;

alert("Primeiro aluno: " + primeiroNome);
alert("Disciplina do último aluno: " + ultimaDisciplina);