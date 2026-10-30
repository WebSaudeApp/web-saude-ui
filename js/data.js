window.WebSaude = window.WebSaude || {};

WebSaude.unidades = [
  { id: 1, nome: "Hospital Santa Helena", tipo: "Hospital geral", cidade: "São Paulo", estado: "SP", endereco: "Rua Vergueiro, 2941 — Vila Mariana", distancia: "1,2 km", nota: 4.8, avaliacoes: 1240, aberto: true, horario: "Aberto 24 horas", foto: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80", convenios: ["Unimed", "Estacionamento", "Acessível PCD"], especialidades: ["Cardiologia", "Ortopedia", "Pediatria", "Neurologia", "Dermatologia", "Clínica Geral"], telefone: "(11) 3456-7890", email: "contato@santahelena.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 2, nome: "Clínica Viva Bem", tipo: "Clínica médica", cidade: "São Paulo", estado: "SP", endereco: "Av. Paulista, 1420 — Bela Vista", distancia: "2,8 km", nota: 4.6, avaliacoes: 687, aberto: true, horario: "Aberto até 20h", foto: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", convenios: ["Consultas", "Bradesco Saúde"], especialidades: ["Clínica Geral", "Dermatologia"], telefone: "(11) 3090-1122", email: "contato@vivabem.com.br", status: "Rascunho", aprovacao: "Pendente" },
  { id: 3, nome: "Hospital Saúde+", tipo: "Hospital", cidade: "São Paulo", estado: "SP", endereco: "Rua dos Pinheiros, 890 — Pinheiros", distancia: "4,1 km", nota: 4.4, avaliacoes: 932, aberto: true, horario: "Aberto 24 horas", foto: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", convenios: ["Emergência", "Caixa Saúde", "Acessível PCD"], especialidades: ["Emergência", "Clínica Geral"], telefone: "(11) 4002-8922", email: "contato@saudemais.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 4, nome: "Hospital São Lucas", tipo: "Hospital", cidade: "São Paulo", estado: "SP", endereco: "Av. Paulista, 500 — Bela Vista", distancia: "3,0 km", nota: 4.7, avaliacoes: 450, aberto: true, horario: "Aberto até 22h", foto: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=800&q=80", convenios: ["Unimed", "SulAmérica"], especialidades: ["Cardiologia", "Neurologia"], telefone: "(11) 3256-4400", email: "contato@saolucas.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 5, nome: "Clínica Horizonte", tipo: "Clínica", cidade: "São Paulo", estado: "SP", endereco: "Rua Augusta, 300 — Consolação", distancia: "2,1 km", nota: 4.9, avaliacoes: 210, aberto: false, horario: "Abre às 7h", foto: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80", convenios: ["Particular", "Amil"], especialidades: ["Pediatria", "Dermatologia"], telefone: "(11) 3123-7788", email: "contato@horizonte.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 6, nome: "Instituto Vida", tipo: "Instituto", cidade: "São Paulo", estado: "SP", endereco: "Rua Oscar Freire, 1000 — Jardins", distancia: "5,4 km", nota: 5.0, avaliacoes: 150, aberto: true, horario: "Aberto até 19h", foto: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80", convenios: ["Premium", "Estacionamento"], especialidades: ["Cardiologia", "Clínica Geral"], telefone: "(11) 3088-9900", email: "contato@institutovida.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 7, nome: "Hospital das Clínicas", tipo: "Hospital geral", cidade: "São Paulo", estado: "SP", endereco: "Av. Dr. Enéas, 255 — Cerqueira César", distancia: "6,2 km", nota: 4.5, avaliacoes: 2104, aberto: true, horario: "Aberto 24 horas", foto: "https://images.unsplash.com/photo-1538108149393-fbbd5549594f?w=800&q=80", convenios: ["SUS", "Unimed"], especialidades: ["Emergência", "Ortopedia", "Neurologia"], telefone: "(11) 2661-0000", email: "contato@hc.fm.usp.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 8, nome: "Clínica Jardim Saúde", tipo: "Clínica médica", cidade: "Rio de Janeiro", estado: "RJ", endereco: "Rua Visconde de Pirajá, 330 — Ipanema", distancia: "1,8 km", nota: 4.3, avaliacoes: 318, aberto: true, horario: "Aberto até 18h", foto: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80", convenios: ["Bradesco Saúde"], especialidades: ["Clínica Geral"], telefone: "(21) 2522-1010", email: "contato@jardimsaude.com.br", status: "Pendente", aprovacao: "Pendente" },
  { id: 9, nome: "Hospital Belo Horizonte", tipo: "Hospital", cidade: "Belo Horizonte", estado: "MG", endereco: "Av. Afonso Pena, 1500 — Centro", distancia: "2,4 km", nota: 4.2, avaliacoes: 540, aberto: true, horario: "Aberto 24 horas", foto: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80", convenios: ["Unimed", "Acessível PCD"], especialidades: ["Emergência", "Cardiologia"], telefone: "(31) 3239-2000", email: "contato@hbh.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 10, nome: "Clínica Brasília Norte", tipo: "Clínica", cidade: "Brasília", estado: "DF", endereco: "SQN 202, Bloco A — Asa Norte", distancia: "3,3 km", nota: 4.6, avaliacoes: 198, aberto: true, horario: "Aberto até 21h", foto: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", convenios: ["Caixa Saúde"], especialidades: ["Pediatria"], telefone: "(61) 3321-4400", email: "contato@bsbnorte.com.br", status: "Publicado", aprovacao: "Aprovado" },
  { id: 11, nome: "Hospital Central", tipo: "Hospital", cidade: "São Paulo", estado: "SP", endereco: "Rua da Consolação, 80 — Centro", distancia: "4,8 km", nota: 4.1, avaliacoes: 870, aberto: true, horario: "Aberto 24 horas", foto: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80", convenios: ["Emergência"], especialidades: ["Emergência"], telefone: "(11) 3222-0900", email: "contato@psc.com.br", status: "Rascunho", aprovacao: "Pendente" },
  { id: 12, nome: "Instituto Coração Livre", tipo: "Instituto", cidade: "São Paulo", estado: "SP", endereco: "Av. Jabaquara, 2100 — Saúde", distancia: "7,1 km", nota: 4.8, avaliacoes: 276, aberto: true, horario: "Aberto até 17h", foto: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80", convenios: ["Particular"], especialidades: ["Cardiologia"], telefone: "(11) 5087-3300", email: "contato@coracaolivre.com.br", status: "Publicado", aprovacao: "Aprovado" }
];

WebSaude.avaliacoes = [
  { nome: "Maria Silva", foto: "https://i.pravatar.cc/80?img=47", nota: 5, texto: "Excelente atendimento e estrutura moderna.", data: "10/10/2023" },
  { nome: "João Santos", foto: "https://i.pravatar.cc/80?img=12", nota: 5, texto: "Ótima equipe médica, recomendo muito.", data: "08/10/2023" },
  { nome: "Ana Lima", foto: "https://i.pravatar.cc/80?img=32", nota: 4, texto: "Atendimento rápido e equipe atenciosa.", data: "02/10/2023" }
];

WebSaude.usuarios = [
  { id: 1, nome: "Carlos Silva", email: "carlos@exemplo.com", tipo: "Admin", status: "Ativo" },
  { id: 2, nome: "Maria Souza", email: "maria@exemplo.com", tipo: "Functional", status: "Ativo" },
  { id: 3, nome: "João Mendes", email: "joao@exemplo.com", tipo: "Common", status: "Ativo" },
  { id: 4, nome: "Patrícia Alves", email: "patricia@exemplo.com", tipo: "Common", status: "Ativo" },
  { id: 5, nome: "Roberto Dias", email: "roberto@exemplo.com", tipo: "Functional", status: "Ativo" },
  { id: 6, nome: "Fernanda Costa", email: "fernanda@exemplo.com", tipo: "Common", status: "Desativado" },
  { id: 7, nome: "Lucas Pereira", email: "lucas@exemplo.com", tipo: "Common", status: "Desativado" },
  { id: 8, nome: "Beatriz Nunes", email: "beatriz@exemplo.com", tipo: "Functional", status: "Ativo" },
  { id: 9, nome: "Hugo Almeida", email: "hugo@exemplo.com", tipo: "Admin", status: "Desativado" }
];

WebSaude.GESTOR_ATUAL = "Dra. Maria Silva";
WebSaude.ESPECIALIDADES = ["Cardiologia", "Ortopedia", "Pediatria", "Neurologia", "Dermatologia", "Clínica Geral", "Emergência"];
WebSaude.ESTADOS = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
WebSaude.DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

WebSaude.horariosPadrao = function () {
  return WebSaude.DIAS.map(function (_, weekday) {
    return { weekday: weekday, opensAt: "08:00", closesAt: "18:00", active: weekday >= 1 && weekday <= 5 };
  });
};

WebSaude.situacaoUnidade = function (u) {
  if (u.aprovacao === "Pendente" || u.aprovacao === "Aprovado" || u.aprovacao === "Rejeitado") return u.aprovacao;
  return "Rascunho";
};

WebSaude.minhasUnidades = function () {
  return WebSaude.unidades.filter(function (u) { return u.gestor === WebSaude.GESTOR_ATUAL; });
};

WebSaude.persistUnidades = function () {
  try {
    localStorage.setItem("web-saude-units-v1", JSON.stringify({ v: 3, items: WebSaude.unidades }));
  } catch (e) {}
};

(function enrichUnits() {
  var maria = WebSaude.GESTOR_ATUAL;
  var donos = {
    1: "Gestor responsável",
    2: maria,
    3: "Gestor responsável",
    4: "Dr. Roberto Dias",
    5: maria,
    6: maria,
    7: "Gestor responsável",
    8: maria,
    9: "Ana Lima",
    10: maria,
    11: maria,
    12: maria
  };
  var envio = { 2: "12/10/2023", 4: "09/10/2023", 8: "14/10/2023", 11: "18/10/2023" };
  var estados = {
    2: { status: "Rascunho", aprovacao: "Pendente" },
    6: { status: "Rascunho", aprovacao: "Aprovado" },
    8: { status: "Rascunho", aprovacao: "Pendente" },
    11: { status: "Rascunho", aprovacao: "Rejeitado", motivoRejeicao: "CNPJ e endereço não conferem com o cadastro." },
    12: { status: "Rascunho", aprovacao: "Rascunho" }
  };
  WebSaude.unidades.forEach(function (u) {
    u.gestor = donos[u.id] || "Gestor responsável";
    u.dataEnvio = envio[u.id] || "10/10/2023";
    u.whatsapp = u.whatsapp || u.telefone;
    u.fotos = u.fotos || (u.foto ? [u.foto] : []);
    u.horarios = u.horarios || WebSaude.horariosPadrao();
    u.cep = u.cep || "";
    if (!u.rua && u.endereco) {
      var parts = String(u.endereco).split("—");
      u.complemento = (parts[1] || "").trim();
      var left = (parts[0] || "").trim();
      var m = left.match(/^(.*),\s*([^,]+)$/);
      if (m) { u.rua = m[1].trim(); u.numero = m[2].trim(); }
      else { u.rua = left; u.numero = ""; }
    }
    if (estados[u.id]) Object.assign(u, estados[u.id]);
  });
  try {
    var saved = JSON.parse(localStorage.getItem("web-saude-units-v1") || "null");
    if (saved && saved.v === 3 && Array.isArray(saved.items) && saved.items.length) {
      WebSaude.unidades = saved.items;
    }
  } catch (e) {}
})();
