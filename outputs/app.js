const STORAGE_KEY = "contafacil-mz-state-v2";
const VAT_RATE = 16;

function makeItems(description, net, vatRate = VAT_RATE) {
  const quantity = 1;
  const unitPrice = Number(net || 0);
  const vat = unitPrice * quantity * (vatRate / 100);
  return [{ description, quantity, unitPrice, vatRate, vat, total: unitPrice + vat }];
}

const seedState = {
  companies: [
    {
      name: "Padaria Baia de Maputo, Lda.",
      nuit: "400884112",
      address: "Av. Marginal, Bairro da Costa do Sol, Maputo",
      plan: "Profissional",
      status: "Activa",
      modules: ["Facturacao", "Recibos", "IVA", "Relatorios", "Utilizadores", "Projectos", "Leads"],
      monthly: 12500,
      clients: [
        { name: "Mercado Central Maputo", nuit: "500884112", city: "Maputo", address: "Av. Guerra Popular, Mercado Central, Maputo", bank: { bankName: "BCI", accountNumber: "1020304050", swift: "CGDIMZMA", nib: "0008.0000.10203040.501.11" } },
        { name: "Cafe Avenida Julius Nyerere", nuit: "501220775", city: "Maputo", address: "Av. Julius Nyerere, Polana, Maputo", bank: { bankName: "Millennium BIM", accountNumber: "9080706050", swift: "BIMOMZMX", nib: "0001.0000.90807060.501.11" } },
        { name: "Hotel Baia da Beira", nuit: "502112390", city: "Beira", address: "Av. Marginal, Beira", bank: { bankName: "Moza Banco", accountNumber: "007607676101", swift: "MOZAMZMAXXX", nib: "0034.0000.07607676.101.11" } }
      ],
      documents: [
        { number: "FT 2026/084", client: "Mercado Central Maputo", type: "Factura", date: "2026-06-05", status: "Pago", project: "Expansao Maputo", items: makeItems("Fornecimento de paes e bolos", 212068.97), net: 212068.97, vat: 33931.03, total: 246000 },
        { number: "FT 2026/083", client: "Cafe Avenida Julius Nyerere", type: "Factura", date: "2026-06-03", status: "Pendente", items: makeItems("Produtos de pastelaria", 63620.69), net: 63620.69, vat: 10179.31, total: 73800 },
        { number: "RC 2026/042", client: "Hotel Baia da Beira", type: "Recibo", date: "2026-06-02", status: "Pago", project: "Contrato Hoteleiro Beira", items: makeItems("Fornecimento semanal", 159051.72), net: 159051.72, vat: 25448.28, total: 184500 },
        { number: "FT 2026/079", client: "Cafe Avenida Julius Nyerere", type: "Factura", date: "2026-05-28", status: "Vencido", items: makeItems("Encomenda mensal", 50896.55), net: 50896.55, vat: 8143.45, total: 59040 }
      ],
      purchases: [
        { number: "FC 2026/018", supplier: "Moagem Nacional, Lda.", nuit: "600112233", date: "2026-06-04", description: "Farinha de trigo", project: "Expansao Maputo", net: 85000, vatRate: 16, vat: 13600, total: 98600 },
        { number: "FC 2026/019", supplier: "Embalagens Maputo", nuit: "600445778", date: "2026-06-06", description: "Sacos e embalagens", net: 24000, vatRate: 16, vat: 3840, total: 27840 }
      ],
      projects: [
        { name: "Expansao Maputo", client: "Mercado Central Maputo", status: "Activo", budget: 350000 },
        { name: "Contrato Hoteleiro Beira", client: "Hotel Baia da Beira", status: "Activo", budget: 220000 }
      ],
      leads: [
        { id: "LD-001", name: "Supermercado Costa do Sol", nuit: "507001234", phone: "+258 84 000 0000", source: "Referencia", address: "Costa do Sol, Maputo", status: "Contactado", calls: [{ date: "2026-06-05", outcome: "Pedido de proposta", notes: "Solicitou proposta para fornecimento semanal." }] },
        { id: "LD-002", name: "Restaurante Baixa", nuit: "507009876", phone: "+258 82 111 2233", source: "Campanha", address: "Baixa, Maputo", status: "Novo", calls: [] }
      ],
      users: [
        { name: "Armando Tembe", email: "armando@padaria.co.mz", role: "Administrador", status: "Activo", lastAccess: "2026-06-06" },
        { name: "Elsa Mucavele", email: "elsa@padaria.co.mz", role: "Contabilista", status: "Activo", lastAccess: "2026-06-05" }
      ]
    },
    {
      name: "Clinica Matola Saude, Lda.",
      nuit: "401220775",
      address: "Av. Uniao Africana, Matola",
      plan: "Essencial",
      status: "Activa",
      modules: ["Facturacao", "Recibos", "IVA"],
      monthly: 7000,
      clients: [
        { name: "Empresa Transportes Matola", nuit: "503880119", city: "Matola", address: "EN4, Matola", bank: { bankName: "Standard Bank", accountNumber: "3002001000", swift: "SBICMZMX", nib: "0002.0000.30020010.001.11" } },
        { name: "Escola Kaya", nuit: "504119002", city: "Matola", address: "Bairro Fomento, Matola", bank: { bankName: "Absa Bank Mocambique", accountNumber: "7788990011", swift: "BARCMZMX", nib: "0006.0000.77889900.111.11" } }
      ],
      documents: [
        { number: "FT 2026/021", client: "Empresa Transportes Matola", type: "Factura", date: "2026-06-04", status: "Pendente", items: makeItems("Servicos clinicos", 86206.9), net: 86206.9, vat: 13793.1, total: 100000 },
        { number: "RC 2026/014", client: "Escola Kaya", type: "Recibo", date: "2026-06-01", status: "Pago", items: makeItems("Consultas e exames", 43103.45), net: 43103.45, vat: 6896.55, total: 50000 }
      ],
      purchases: [
        { number: "FC 2026/007", supplier: "Farmacia Central", nuit: "601002119", date: "2026-06-03", description: "Consumiveis clinicos", net: 32000, vatRate: 16, vat: 5120, total: 37120 }
      ],
      projects: [
        { name: "Programa Saude Matola", client: "Empresa Transportes Matola", status: "Activo", budget: 180000 }
      ],
      leads: [
        { id: "LD-001", name: "Clinica Satelite Matola", nuit: "508001119", phone: "+258 86 444 1199", source: "Website", address: "Matola", status: "Novo", calls: [] }
      ],
      users: [
        { name: "Marta Langa", email: "marta@clinica.co.mz", role: "Administrador", status: "Activo", lastAccess: "2026-06-04" }
      ]
    },
    {
      name: "Hotel Baia da Beira, SA",
      nuit: "402112390",
      address: "Av. Marginal, Beira",
      plan: "Profissional",
      status: "Suspensa",
      modules: ["Facturacao", "Recibos", "IVA", "Relatorios", "Utilizadores", "Projectos", "Leads"],
      monthly: 14000,
      clients: [{ name: "Agencia Turismo Sofala", nuit: "505882001", city: "Beira", address: "Rua Correia de Brito, Beira", bank: { bankName: "FNB Mocambique", accountNumber: "4411223300", swift: "FIRNMZMX", nib: "0007.0000.44112233.001.11" } }],
      documents: [],
      purchases: [],
      projects: [],
      leads: [],
      users: [
        { name: "Joao Chissano", email: "joao@hotel.co.mz", role: "Administrador", status: "Bloqueado", lastAccess: "2026-05-29" }
      ]
    }
  ]
};

let state = loadState();
let loginRole = "company";
let currentRole = null;
let currentUser = null;
let activeCompany = state.companies[0];
let selectedDocumentNumber = null;

const formatter = new Intl.NumberFormat("pt-MZ", {
  style: "currency",
  currency: "MZN",
  currencyDisplay: "narrowSymbol"
});

const amountFormatter = new Intl.NumberFormat("pt-MZ", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginIdentity = document.querySelector("#loginIdentity");
const loginEmailField = document.querySelector("#loginEmailField");
const loginEmail = document.querySelector("#loginEmail");
const identityLabel = document.querySelector("#identityLabel");
const activeCompanyName = document.querySelector("#activeCompanyName");
const accountPill = document.querySelector("#accountPill");
const planName = document.querySelector("#planName");
const licenseRows = document.querySelector("#licenseRows");
const clientCards = document.querySelector("#clientCards");
const leadCards = document.querySelector("#leadCards");
const projectCards = document.querySelector("#projectCards");
const rows = document.querySelector("#documentRows");
const purchaseRows = document.querySelector("#purchaseRows");
const search = document.querySelector("#documentSearch");
const purchaseSearch = document.querySelector("#purchaseSearch");
const purchaseClassFilter = document.querySelector("#purchaseClassFilter");
const statusFilter = document.querySelector("#statusFilter");
const userRows = document.querySelector("#userRows");
const userSearch = document.querySelector("#userSearch");
const userStatusFilter = document.querySelector("#userStatusFilter");
const dialog = document.querySelector("#documentDialog");
const documentDetailsDialog = document.querySelector("#documentDetailsDialog");
const reportDialog = document.querySelector("#reportDialog");
const purchaseDialog = document.querySelector("#purchaseDialog");
const leadDialog = document.querySelector("#leadDialog");
const leadCallDialog = document.querySelector("#leadCallDialog");
const projectDialog = document.querySelector("#projectDialog");
const permissionsDialog = document.querySelector("#permissionsDialog");
const passwordDialog = document.querySelector("#passwordDialog");
const clientDialog = document.querySelector("#clientDialog");
const companyDialog = document.querySelector("#companyDialog");
const userDialog = document.querySelector("#userDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const typeInput = document.querySelector("#typeInput");
const documentProjectField = document.querySelector("#documentProjectField");
const documentProjectInput = document.querySelector("#documentProjectInput");
const lineItems = document.querySelector("#lineItems");
const receiptLinkPanel = document.querySelector("#receiptLinkPanel");
const receiptInvoiceLinks = document.querySelector("#receiptInvoiceLinks");
const previewSubtotal = document.querySelector("#previewSubtotal");
const previewVat = document.querySelector("#previewVat");
const previewTotal = document.querySelector("#previewTotal");
const clientInput = document.querySelector("#clientInput");
const detailsTitle = document.querySelector("#detailsTitle");
const detailsSummary = document.querySelector("#detailsSummary");
const detailsItemRows = document.querySelector("#detailsItemRows");
const detailsSubtotal = document.querySelector("#detailsSubtotal");
const detailsVat = document.querySelector("#detailsVat");
const detailsTotal = document.querySelector("#detailsTotal");
const downloadPdfButton = document.querySelector("#downloadPdfButton");
const reportTitle = document.querySelector("#reportTitle");
const reportBody = document.querySelector("#reportBody");
const exportReportButton = document.querySelector("#exportReportButton");
const purchaseProjectField = document.querySelector("#purchaseProjectField");
const purchaseProjectInput = document.querySelector("#purchaseProjectInput");
const projectClientInput = document.querySelector("#projectClientInput");
const permissionsTitle = document.querySelector("#permissionsTitle");
const permissionsGrid = document.querySelector("#permissionsGrid");
const passwordTitle = document.querySelector("#passwordTitle");
const passwordUserName = document.querySelector("#passwordUserName");
const newPasswordInput = document.querySelector("#newPasswordInput");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const clientDialogTitle = document.querySelector("#clientDialogTitle");
const companyDialogTitle = document.querySelector("#companyDialogTitle");
const toast = document.querySelector("#toast");
let currentReportCsv = "";
let selectedLeadId = null;
let selectedPermissionEmail = null;
let selectedPasswordEmail = null;
let editingClientNuit = null;
let editingCompanyNuit = null;

const permissionCatalog = [
  { key: "documents.view", group: "Documentos", label: "Ver documentos" },
  { key: "documents.createInvoice", group: "Documentos", label: "Criar facturas" },
  { key: "documents.createQuote", group: "Documentos", label: "Criar orcamentos" },
  { key: "documents.createReceipt", group: "Documentos", label: "Emitir recibos" },
  { key: "documents.downloadPdf", group: "Documentos", label: "Baixar PDF" },
  { key: "clients.manage", group: "Clientes", label: "Gerir clientes" },
  { key: "purchases.manage", group: "Compras", label: "Gerir compras" },
  { key: "projects.manage", group: "Projectos", label: "Gerir projectos" },
  { key: "leads.manage", group: "Leads", label: "Gerir leads" },
  { key: "reports.view", group: "Relatorios", label: "Ver relatorios" },
  { key: "reports.export", group: "Relatorios", label: "Exportar relatorios" },
  { key: "users.manage", group: "Utilizadores", label: "Gerir utilizadores" }
];

const purchaseClassificationCatalog = [
  { key: "31-mercadorias", account: "31", label: "Compras de mercadorias", group: "Inventários", vat: "IVA dedutível quando documentado" },
  { key: "32-materias", account: "32", label: "Matérias-primas e materiais de consumo", group: "Inventários", vat: "IVA dedutível quando documentado" },
  { key: "42-activos-fixos", account: "42", label: "Activos fixos tangíveis", group: "Investimento", vat: "Capitalizar e amortizar" },
  { key: "43-activos-intangiveis", account: "43", label: "Activos intangíveis / software", group: "Investimento", vat: "Capitalizar se aplicável" },
  { key: "62-servicos-externos", account: "62", label: "Fornecimentos e serviços externos", group: "Gastos operacionais", vat: "IVA dedutível quando documentado" },
  { key: "622-rendas", account: "622", label: "Rendas e alugueres", group: "Gastos operacionais", vat: "Ver contrato e factura" },
  { key: "623-comunicacoes", account: "623", label: "Comunicações, internet e telefone", group: "Gastos operacionais", vat: "IVA dedutível quando documentado" },
  { key: "624-energia-agua", account: "624", label: "Energia, água e combustíveis", group: "Gastos operacionais", vat: "Confirmar dedutibilidade específica" },
  { key: "625-deslocacoes", account: "625", label: "Deslocações, estadias e refeições", group: "Gastos operacionais", vat: "Atenção a limites de dedução" },
  { key: "63-impostos-taxas", account: "63", label: "Impostos, taxas e licenças", group: "Gastos fiscais", vat: "Normalmente sem IVA dedutível" },
  { key: "64-pessoal", account: "64", label: "Gastos com pessoal", group: "Recursos humanos", vat: "Sem IVA dedutível" },
  { key: "68-outros-gastos", account: "68", label: "Outros gastos operacionais", group: "Outros gastos", vat: "Classificar com suporte documental" }
];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : structuredClone(seedState);
    return Array.isArray(parsed.companies) ? parsed : structuredClone(seedState);
  } catch {
    return structuredClone(seedState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function defaultClientBankDetails() {
  return {
    bankName: "Moza Banco",
    accountNumber: "007607676101",
    swift: "MOZAMZMAXXX",
    nib: "0034.0000.07607676.101.11"
  };
}

function normalizeClientBankDetails(client) {
  const defaults = defaultClientBankDetails();
  client.bank = {
    bankName: client.bank?.bankName || defaults.bankName,
    accountNumber: client.bank?.accountNumber || defaults.accountNumber,
    swift: client.bank?.swift || defaults.swift,
    nib: client.bank?.nib || defaults.nib
  };
}

function getPurchaseClassification(key) {
  return purchaseClassificationCatalog.find((item) => item.key === key) || purchaseClassificationCatalog[0];
}

function suggestPurchaseClassification(description = "") {
  const text = description.toLowerCase();
  if (/(software|licen|sistema|dominio|hosting|aplicativo)/.test(text)) return "43-activos-intangiveis";
  if (/(maquina|equipamento|computador|viatura|mobiliario|obra|construcao)/.test(text)) return "42-activos-fixos";
  if (/(farinha|materia|materiais|consumiveis|embalagem|sacos|stock|inventario)/.test(text)) return "32-materias";
  if (/(mercadoria|revenda|produto para venda)/.test(text)) return "31-mercadorias";
  if (/(renda|aluguer|arrendamento)/.test(text)) return "622-rendas";
  if (/(telefone|internet|comunicacao|dados)/.test(text)) return "623-comunicacoes";
  if (/(energia|electricidade|agua|combustivel|gasolina|diesel)/.test(text)) return "624-energia-agua";
  if (/(hotel|viagem|desloca|refeicao|estadia)/.test(text)) return "625-deslocacoes";
  if (/(imposto|taxa|licenca|multa)/.test(text)) return "63-impostos-taxas";
  if (/(salario|remuneracao|subsidio|pessoal)/.test(text)) return "64-pessoal";
  return "62-servicos-externos";
}

function classificationOptionHtml(selected = "") {
  return purchaseClassificationCatalog.map((item) => `
    <option value="${item.key}" ${item.key === selected ? "selected" : ""}>
      ${item.account} - ${item.label}
    </option>
  `).join("");
}

function permissionsForRole(role) {
  const all = permissionCatalog.map((item) => item.key);
  const profiles = {
    Administrador: all,
    Contabilista: [
      "documents.view",
      "documents.createInvoice",
      "documents.createQuote",
      "documents.createReceipt",
      "documents.downloadPdf",
      "clients.manage",
      "purchases.manage",
      "projects.manage",
      "reports.view",
      "reports.export"
    ],
    Operador: [
      "documents.view",
      "documents.createInvoice",
      "documents.createQuote",
      "documents.createReceipt",
      "clients.manage",
      "leads.manage"
    ],
    Consulta: ["documents.view", "reports.view"]
  };
  return profiles[role] || profiles.Consulta;
}

function normalizeUserPermissions(user) {
  user.permissions = Array.isArray(user.permissions) && user.permissions.length
    ? user.permissions
    : permissionsForRole(user.role);
  user.password = String(user.password || "").trim() || "demo123";
}

function normalizeDocuments() {
  state.companies.forEach((company) => {
    if (!company.address) {
      company.address = "Mocambique";
    }
    if (!Array.isArray(company.modules)) {
      company.modules = ["Facturacao", "Recibos", "IVA"];
    }
    if (!Array.isArray(company.clients)) {
      company.clients = [];
    }
    if (!Array.isArray(company.documents)) {
      company.documents = [];
    }
    if (!Array.isArray(company.users)) {
      company.users = [
        {
          name: "Administrador",
          email: `admin@${company.nuit}.co.mz`,
          role: "Administrador",
          status: "Activo",
          lastAccess: "-"
        }
      ];
    }
    company.users.forEach(normalizeUserPermissions);
    if (!Array.isArray(company.purchases)) {
      company.purchases = [];
    }
    if (!Array.isArray(company.projects)) {
      company.projects = [];
    }
    if (!Array.isArray(company.leads)) {
      company.leads = [];
    }
    company.leads.forEach((lead, index) => {
      lead.id = lead.id || `LD-${String(index + 1).padStart(3, "0")}`;
      lead.calls = Array.isArray(lead.calls) ? lead.calls : [];
    });
    company.clients.forEach((client) => {
      if (!client.address) {
        client.address = client.city ? `${client.city}, Mocambique` : "Mocambique";
      }
      normalizeClientBankDetails(client);
    });
    company.documents.forEach((documentItem) => {
      if (!Array.isArray(documentItem.items)) {
        documentItem.items = makeItems("Item do documento", Number(documentItem.net || 0));
      }
      const totals = calculateDocumentTotals(documentItem.items);
      documentItem.net = totals.net;
      documentItem.vat = totals.vat;
      documentItem.total = totals.total;
      documentItem.dueDate = documentItem.type === "Factura" ? calculateDueDate(documentItem.date) : documentItem.date;
      if (!Array.isArray(documentItem.relatedInvoices)) {
        documentItem.relatedInvoices = [];
      }
      documentItem.project = documentItem.project || "";
      documentItem.status = getDocumentStatus(documentItem);
    });
    company.purchases.forEach((purchase) => {
      const net = Number(purchase.net || 0);
      const vatRate = Number(purchase.vatRate ?? VAT_RATE);
      const classification = getPurchaseClassification(purchase.classification || suggestPurchaseClassification(purchase.description));
      purchase.vatRate = vatRate;
      purchase.vat = net * (vatRate / 100);
      purchase.total = net + purchase.vat;
      purchase.project = purchase.project || "";
      purchase.classification = classification.key;
      purchase.account = classification.account;
      purchase.accountName = classification.label;
    });
  });
}

function formatMoney(value) {
  return formatter.format(value || 0);
}

function formatPdfAmount(value) {
  return amountFormatter.format(Number(value || 0));
}

function calculateDocumentTotals(items) {
  return items.reduce(
    (totals, item) => {
      const quantity = Number(item.quantity || 0);
      const unitPrice = Number(item.unitPrice || 0);
      const vatRate = Number(item.vatRate || 0);
      const net = quantity * unitPrice;
      const vat = net * (vatRate / 100);
      totals.net += net;
      totals.vat += vat;
      totals.total += net + vat;
      return totals;
    },
    { net: 0, vat: 0, total: 0 }
  );
}

function calculateDueDate(date) {
  const dueDate = new Date(`${date}T00:00:00`);
  dueDate.setDate(dueDate.getDate() + 30);
  return dueDate.toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("pt-MZ");
}

function getDocumentStatus(documentItem) {
  if (documentItem.type === "Orcamento") {
    return documentItem.status || "Aberto";
  }
  if (documentItem.status === "Pago" || documentItem.type === "Recibo") {
    return "Pago";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(`${documentItem.dueDate || calculateDueDate(documentItem.date)}T00:00:00`);
  return dueDate < today ? "Vencido" : "Pendente";
}

function hasModule(moduleName) {
  return currentRole === "admin" || (Array.isArray(activeCompany.modules) && activeCompany.modules.includes(moduleName));
}

function projectOptionsHtml(selected = "") {
  const projects = activeCompany.projects || [];
  return `<option value="">Sem projecto</option>${projects.map((project) => `
    <option value="${project.name}" ${project.name === selected ? "selected" : ""}>${project.name}</option>
  `).join("")}`;
}

function syncProjectFields() {
  const enabled = hasModule("Projectos");
  documentProjectField.hidden = !enabled;
  purchaseProjectField.hidden = !enabled;
  if (enabled) {
    documentProjectInput.innerHTML = projectOptionsHtml(documentProjectInput.value);
    purchaseProjectInput.innerHTML = projectOptionsHtml(purchaseProjectInput.value);
  }
  projectClientInput.innerHTML = (activeCompany.clients || []).map((client) => `<option>${client.name}</option>`).join("");
}

function findClientByName(name) {
  return activeCompany.clients.find((client) => client.name === name) || {
    name,
    nuit: "-",
    address: "-"
  };
}

function statusClass(status) {
  if (status === "Pago") return "paid";
  if (status === "Vencido") return "overdue";
  if (status === "Aberto") return "pending";
  return "pending";
}

function nextNumber(type) {
  const prefix = type === "Recibo" ? "RC" : type === "Orcamento" ? "OR" : "FT";
  const count = activeCompany.documents.filter((item) => item.type === type).length + 1;
  return `${prefix} 2026/${String(count).padStart(3, "0")}`;
}

function nextLeadId() {
  return `LD-${String((activeCompany.leads || []).length + 1).padStart(3, "0")}`;
}

function setView(viewId) {
  if (viewId === "reports" && !hasModule("Relatorios")) {
    showToast("Modulo de relatorios bloqueado nesta licenca.");
    return;
  }
  if (viewId === "users" && !hasModule("Utilizadores")) {
    showToast("Modulo de utilizadores bloqueado nesta licenca.");
    return;
  }
  if (viewId === "projects" && !hasModule("Projectos")) {
    showToast("Modulo de projectos bloqueado nesta licenca.");
    return;
  }
  if (viewId === "leads" && !hasModule("Leads")) {
    showToast("Modulo de leads bloqueado nesta licenca.");
    return;
  }

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });
}

function renderDashboard() {
  const docs = activeCompany.documents;
  const invoices = docs.filter((item) => item.type === "Factura");
  const receipts = docs.filter((item) => item.type === "Recibo");
  const purchases = activeCompany.purchases || [];
  const revenue = invoices.reduce((sum, item) => sum + item.total, 0);
  const vat = invoices.reduce((sum, item) => sum + item.vat, 0) - purchases.reduce((sum, item) => sum + item.vat, 0);
  const receivable = invoices
    .filter((item) => getDocumentStatus(item) !== "Pago")
    .reduce((sum, item) => sum + item.total, 0);

  document.querySelector("#metricRevenue").textContent = formatMoney(revenue);
  document.querySelector("#metricVat").textContent = formatMoney(vat);
  document.querySelector("#metricReceivable").textContent = formatMoney(receivable);
  document.querySelector("#metricReceipts").textContent = receipts.length;
  document.querySelector("#metricRevenueNote").textContent = `${invoices.length} facturas emitidas`;
  document.querySelector("#metricReceivableNote").textContent = `${invoices.filter((item) => getDocumentStatus(item) !== "Pago").length} por regularizar`;
  document.querySelector("#metricReceiptNote").textContent = receipts[0] ? `Ultimo recibo: ${receipts[0].number}` : "Sem recibos emitidos";
}

function syncPurchaseClassificationFields(selected = "") {
  const selectedValue = selected || document.querySelector("#purchaseClassInput")?.value || "62-servicos-externos";
  document.querySelector("#purchaseClassInput").innerHTML = classificationOptionHtml(selectedValue);
  purchaseClassFilter.innerHTML = `
    <option value="all">Todas</option>
    ${purchaseClassificationCatalog.map((item) => `<option value="${item.key}" ${purchaseClassFilter.value === item.key ? "selected" : ""}>${item.account} - ${item.label}</option>`).join("")}
  `;
}

function renderPurchases() {
  const query = purchaseSearch.value.trim().toLowerCase();
  const selectedClass = purchaseClassFilter.value;
  const filtered = (activeCompany.purchases || []).filter((purchase) => {
    const classification = getPurchaseClassification(purchase.classification);
    const matchesQuery = [purchase.number, purchase.supplier, purchase.nuit, purchase.description, classification.account, classification.label, classification.group].join(" ").toLowerCase().includes(query);
    const matchesClass = selectedClass === "all" || purchase.classification === selectedClass;
    return matchesQuery && matchesClass;
  });

  purchaseRows.innerHTML = filtered.map((purchase) => `
    <tr>
      ${(() => {
        const classification = getPurchaseClassification(purchase.classification);
        return `
      <td><strong>${purchase.number}</strong></td>
      <td>${purchase.supplier}</td>
      <td>${purchase.nuit}</td>
      <td>${formatDate(purchase.date)}</td>
      <td>${purchase.description}</td>
      <td>
        <span class="account-badge">${classification.account}</span>
        <select class="purchase-class-select" data-number="${purchase.number}">
          ${classificationOptionHtml(purchase.classification)}
        </select>
      </td>
      <td>${purchase.project || "-"}</td>
      <td class="numeric">${formatMoney(purchase.net)}</td>
      <td class="numeric">${Number(purchase.vatRate || 0)}% - ${formatMoney(purchase.vat)}</td>
      <td class="numeric">${formatMoney(purchase.total)}</td>
        `;
      })()}
    </tr>
  `).join("");
}

function renderDocuments() {
  const query = search.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const filtered = activeCompany.documents.filter((item) => {
    const status = getDocumentStatus(item);
    const matchesQuery = [item.number, item.client, item.type, status].join(" ").toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || status === selectedStatus;
    return matchesQuery && matchesStatus;
  });

  rows.innerHTML = filtered.map((item) => {
    const status = getDocumentStatus(item);
    return `
      <tr>
        <td><strong>${item.number}</strong></td>
        <td>${item.client}</td>
        <td>${item.type}</td>
        <td>${item.project || "-"}</td>
        <td>${item.items.length}</td>
        <td>${formatDate(item.date)}</td>
        <td><span class="badge ${statusClass(status)}">${status}</span></td>
        <td class="numeric">${formatMoney(item.total)}</td>
        <td>
          <div class="row-actions">
            <button type="button" data-action="view-document" data-number="${item.number}">Ver</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function openDocumentDetails(number) {
  const documentItem = activeCompany.documents.find((item) => item.number === number);
  if (!documentItem) return;

  selectedDocumentNumber = number;
  const client = findClientByName(documentItem.client);
  const totals = calculateDocumentTotals(documentItem.items);
  detailsTitle.textContent = `${documentItem.type} ${documentItem.number}`;
  detailsSummary.innerHTML = `
    <div><span>Cliente</span><strong>${documentItem.client}</strong></div>
    <div><span>NUIT</span><strong>${client.nuit}</strong></div>
    <div><span>Endereco</span><strong>${client.address}</strong></div>
    <div><span>Data</span><strong>${formatDate(documentItem.date)}</strong></div>
    <div><span>Vencimento</span><strong>${formatDate(documentItem.dueDate || calculateDueDate(documentItem.date))}</strong></div>
    <div><span>Estado</span><strong>${getDocumentStatus(documentItem)}</strong></div>
    <div><span>Itens</span><strong>${documentItem.items.length}</strong></div>
    ${documentItem.type === "Recibo" ? `<div><span>Facturas</span><strong>${documentItem.relatedInvoices?.length ? documentItem.relatedInvoices.join(", ") : "Sem associacao"}</strong></div>` : ""}
  `;
  detailsItemRows.innerHTML = documentItem.items.map((item) => {
    const net = Number(item.quantity || 0) * Number(item.unitPrice || 0);
    return `
      <tr>
        <td>${item.description}</td>
        <td class="numeric">${item.quantity}</td>
        <td class="numeric">${formatMoney(item.unitPrice)}</td>
        <td class="numeric">${Number(item.vatRate || 0)}% · ${formatMoney(net * (Number(item.vatRate || 0) / 100))}</td>
        <td class="numeric">${formatMoney(net + net * (Number(item.vatRate || 0) / 100))}</td>
      </tr>
    `;
  }).join("");
  detailsSubtotal.textContent = formatMoney(totals.net);
  detailsVat.textContent = formatMoney(totals.vat);
  detailsTotal.textContent = formatMoney(totals.total);
  documentDetailsDialog.showModal();
}

function renderClients() {
  clientCards.innerHTML = activeCompany.clients.map((client) => {
    const total = activeCompany.documents
      .filter((item) => item.client === client.name)
      .reduce((sum, item) => sum + item.total, 0);
    return `
      <article class="client-card">
        <strong>${client.name}</strong>
        <span>NUIT ${client.nuit}</span>
        <small>${client.address}</small>
        <div class="client-bank-details">
          <span>Banco: ${client.bank.bankName}</span>
          <span>Conta: ${client.bank.accountNumber}</span>
          <span>SWIFT: ${client.bank.swift}</span>
          <span>NIB: ${client.bank.nib}</span>
        </div>
        <small>${formatMoney(total)} facturados</small>
        <div class="row-actions">
          <button type="button" data-action="edit-client" data-nuit="${client.nuit}">Editar</button>
        </div>
      </article>
    `;
  }).join("");

  clientInput.innerHTML = activeCompany.clients
    .map((client) => `<option>${client.name}</option>`)
    .join("");
}

function clientFormData() {
  return {
    name: document.querySelector("#clientNameInput").value.trim(),
    nuit: document.querySelector("#clientNuitInput").value.trim(),
    city: document.querySelector("#clientCityInput").value.trim(),
    address: document.querySelector("#clientAddressInput").value.trim(),
    bank: {
      bankName: document.querySelector("#clientBankNameInput").value.trim(),
      accountNumber: document.querySelector("#clientAccountNumberInput").value.trim(),
      swift: document.querySelector("#clientSwiftInput").value.trim(),
      nib: document.querySelector("#clientNibInput").value.trim()
    }
  };
}

function nextAvailableNuit(existingNuits, start = 404000001) {
  let next = start;
  while (existingNuits.includes(String(next))) {
    next += 1;
  }
  return String(next);
}

function openNewClientDialog() {
  editingClientNuit = null;
  clientDialogTitle.textContent = "Novo cliente";
  document.querySelector("#createClientButton").textContent = "Guardar cliente";
  document.querySelector("#clientNameInput").value = "Distribuidora Zambeze";
  document.querySelector("#clientNuitInput").value = nextAvailableNuit(activeCompany.clients.map((client) => client.nuit), 403998221);
  document.querySelector("#clientCityInput").value = "Maputo";
  document.querySelector("#clientAddressInput").value = "Av. 25 de Setembro, Maputo";
  document.querySelector("#clientBankNameInput").value = "BCI";
  document.querySelector("#clientAccountNumberInput").value = "1234567890";
  document.querySelector("#clientSwiftInput").value = "CGDIMZMA";
  document.querySelector("#clientNibInput").value = "0008.0000.12345678.901.11";
  clientDialog.showModal();
}

function openEditClientDialog(nuit) {
  const client = activeCompany.clients.find((item) => item.nuit === nuit);
  if (!client) {
    showToast("Cliente nao encontrado.");
    return;
  }
  editingClientNuit = client.nuit;
  clientDialogTitle.textContent = "Editar cliente";
  document.querySelector("#createClientButton").textContent = "Guardar alteracoes";
  document.querySelector("#clientNameInput").value = client.name || "";
  document.querySelector("#clientNuitInput").value = client.nuit || "";
  document.querySelector("#clientCityInput").value = client.city || "";
  document.querySelector("#clientAddressInput").value = client.address || "";
  document.querySelector("#clientBankNameInput").value = client.bank?.bankName || "";
  document.querySelector("#clientAccountNumberInput").value = client.bank?.accountNumber || "";
  document.querySelector("#clientSwiftInput").value = client.bank?.swift || "";
  document.querySelector("#clientNibInput").value = client.bank?.nib || "";
  clientDialog.showModal();
}

function renderLeads() {
  const leads = activeCompany.leads || [];
  leadCards.innerHTML = leads.length ? leads.map((lead) => {
    const calls = Array.isArray(lead.calls) ? lead.calls : [];
    const lastCall = calls[calls.length - 1];
    return `
      <article class="client-card">
        <strong>${lead.name}</strong>
        <span>NUIT ${lead.nuit || "-"}</span>
        <small>${lead.phone || "-"}</small>
        <small>${lead.address || "-"}</small>
        <div class="client-bank-details">
          <span>Origem: ${lead.source || "-"}</span>
          <span>Estado: ${lead.status}</span>
          <span>Chamadas: ${calls.length}</span>
          <span>Ultima: ${lastCall ? `${formatDate(lastCall.date)} - ${lastCall.outcome}` : "Sem chamadas"}</span>
        </div>
        <div class="row-actions">
          <button type="button" data-action="call-lead" data-id="${lead.id}">Chamada</button>
          <button type="button" data-action="convert-lead" data-id="${lead.id}">Converter</button>
        </div>
      </article>
    `;
  }).join("") : "<p class=\"empty-note\">Nenhum lead registado.</p>";
}

function renderProjects() {
  const projects = activeCompany.projects || [];
  projectCards.innerHTML = projects.length ? projects.map((project) => {
    const revenue = activeCompany.documents
      .filter((item) => item.project === project.name && item.type === "Factura")
      .reduce((sum, item) => sum + Number(item.total || 0), 0);
    const purchases = (activeCompany.purchases || [])
      .filter((item) => item.project === project.name)
      .reduce((sum, item) => sum + Number(item.total || 0), 0);
    return `
      <article class="client-card">
        <strong>${project.name}</strong>
        <span>${project.client}</span>
        <small>Estado: ${project.status}</small>
        <small>Orcamento: ${formatMoney(project.budget)}</small>
        <div class="client-bank-details">
          <span>Facturado: ${formatMoney(revenue)}</span>
          <span>Compras: ${formatMoney(purchases)}</span>
          <span>Saldo: ${formatMoney(revenue - purchases)}</span>
        </div>
      </article>
    `;
  }).join("") : "<p class=\"empty-note\">Nenhum projecto criado.</p>";
}

function renderReports() {
  const overdue = activeCompany.documents.filter((item) => getDocumentStatus(item) === "Vencido").length;
  const clientCount = activeCompany.clients.length;
  document.querySelector("#vatReportStatus").textContent = hasModule("IVA") ? "Pronto" : "Bloqueado";
  document.querySelector("#trialBalanceStatus").textContent = `${activeCompany.documents.length} docs`;
  document.querySelector("#clientSalesStatus").textContent = `${clientCount} clientes`;
  document.querySelector("#overdueStatus").textContent = `${overdue} itens`;
}

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function rowsToCsv(headers, rowsData) {
  return [headers, ...rowsData]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");
}

function reportTable(headers, rowsData) {
  return `
    <div class="table-wrap report-table">
      <table>
        <thead>
          <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rowsData.map((row) => `
            <tr>${row.map((cell, index) => `<td class="${index > 1 ? "numeric" : ""}">${cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function openReport(title, summaryCards, headers, rowsData) {
  reportTitle.textContent = title;
  reportBody.innerHTML = `
    <div class="report-summary">
      ${summaryCards.map((card) => `
        <article>
          <span>${card.label}</span>
          <strong>${card.value}</strong>
        </article>
      `).join("")}
    </div>
    ${reportTable(headers, rowsData)}
  `;
  currentReportCsv = rowsToCsv(headers, rowsData);
  exportReportButton.disabled = rowsData.length === 0;
  reportDialog.showModal();
}

function openVatReport() {
  if (!hasModule("IVA")) {
    showToast("Modulo de IVA bloqueado nesta licenca.");
    return;
  }

  const invoices = activeCompany.documents.filter((item) => item.type === "Factura");
  const purchases = activeCompany.purchases || [];
  const invoiceNet = invoices.reduce((sum, item) => sum + Number(item.net || 0), 0);
  const invoiceVat = invoices.reduce((sum, item) => sum + Number(item.vat || 0), 0);
  const deductibleVat = purchases.reduce((sum, item) => sum + Number(item.vat || 0), 0);
  const salesRows = invoices.map((item) => [
    item.number,
    item.type,
    item.client,
    formatDate(item.date),
    "-",
    formatMoney(item.net),
    formatMoney(item.vat),
    formatMoney(item.total),
    getDocumentStatus(item)
  ]);
  const purchaseRowsData = purchases.map((item) => [
    item.number,
    "Compra",
    item.supplier,
    formatDate(item.date),
    `${getPurchaseClassification(item.classification).account} - ${getPurchaseClassification(item.classification).label}`,
    formatMoney(item.net),
    `-${formatMoney(item.vat)}`,
    formatMoney(item.total),
    "IVA dedutivel"
  ]);
  const rowsData = [...salesRows, ...purchaseRowsData];

  openReport(
    "Mapa de IVA",
    [
      { label: "Base tributavel", value: formatMoney(invoiceNet) },
      { label: "IVA liquidado", value: formatMoney(invoiceVat) },
      { label: "IVA dedutivel", value: formatMoney(deductibleVat) },
      { label: "IVA a entregar", value: formatMoney(Math.max(invoiceVat - deductibleVat, 0)) }
    ],
    ["Documento", "Tipo", "Cliente/Fornecedor", "Data", "Classificacao", "Base", "IVA", "Total", "Estado"],
    rowsData
  );
}

function openTrialBalanceReport() {
  const invoices = activeCompany.documents.filter((item) => item.type === "Factura");
  const receipts = activeCompany.documents.filter((item) => item.type === "Recibo");
  const purchases = activeCompany.purchases || [];
  const sales = invoices.reduce((sum, item) => sum + Number(item.net || 0), 0);
  const vat = invoices.reduce((sum, item) => sum + Number(item.vat || 0), 0);
  const purchaseCost = purchases.reduce((sum, item) => sum + Number(item.net || 0), 0);
  const deductibleVat = purchases.reduce((sum, item) => sum + Number(item.vat || 0), 0);
  const purchaseAccounts = purchaseClassificationCatalog
    .map((classification) => {
      const total = purchases
        .filter((item) => item.classification === classification.key)
        .reduce((sum, item) => sum + Number(item.net || 0), 0);
      return total > 0 ? [`${classification.account} - ${classification.label}`, classification.group, formatMoney(total), classification.vat] : null;
    })
    .filter(Boolean);
  const receivables = invoices
    .filter((item) => getDocumentStatus(item) !== "Pago")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
  const cash = receipts.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const rowsData = [
    ["Caixa/Bancos", "Activo", formatMoney(cash), "Recibos emitidos"],
    ["Clientes", "Activo", formatMoney(receivables), "Facturas por receber"],
    ...purchaseAccounts,
    ["Vendas", "Rendimento", formatMoney(sales), "Facturas emitidas sem IVA"],
    ["IVA dedutivel", "Activo", formatMoney(deductibleVat), "Imposto sobre compras"],
    ["IVA liquidado", "Passivo", formatMoney(vat), "Imposto sobre facturas"]
  ];

  openReport(
    "Balancete mensal",
    [
      { label: "Vendas", value: formatMoney(sales) },
      { label: "Compras", value: formatMoney(purchaseCost) },
      { label: "Caixa/Bancos", value: formatMoney(cash) },
      { label: "IVA a entregar", value: formatMoney(Math.max(vat - deductibleVat, 0)) }
    ],
    ["Conta", "Classe", "Saldo", "Origem"],
    rowsData
  );
}

function openClientSalesReport() {
  const rowsData = activeCompany.clients.map((client) => {
    const docs = activeCompany.documents.filter((item) => item.client === client.name);
    const invoices = docs.filter((item) => item.type === "Factura");
    const total = invoices.reduce((sum, item) => sum + Number(item.total || 0), 0);
    const paid = invoices
      .filter((item) => getDocumentStatus(item) === "Pago")
      .reduce((sum, item) => sum + Number(item.total || 0), 0);
    const pending = Math.max(total - paid, 0);
    return [client.name, client.nuit, invoices.length, formatMoney(total), formatMoney(paid), formatMoney(pending)];
  });
  const totalSales = activeCompany.documents
    .filter((item) => item.type === "Factura")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);

  openReport(
    "Vendas por cliente",
    [
      { label: "Clientes", value: activeCompany.clients.length },
      { label: "Total vendido", value: formatMoney(totalSales) },
      { label: "Maior cliente", value: rowsData.slice().sort((a, b) => Number(String(b[3]).replace(/\D/g, "")) - Number(String(a[3]).replace(/\D/g, "")))[0]?.[0] || "-" }
    ],
    ["Cliente", "NUIT", "Facturas", "Total vendido", "Pago", "Pendente"],
    rowsData
  );
}

function openOverdueInvoicesReport() {
  const overdue = activeCompany.documents.filter((item) => getDocumentStatus(item) === "Vencido");
  const rowsData = overdue.map((item) => {
    const dueDate = item.dueDate || calculateDueDate(item.date);
    return [
      item.number,
      item.client,
      formatDate(item.date),
      formatDate(dueDate),
      formatMoney(item.total),
      item.status
    ];
  });
  const total = overdue.reduce((sum, item) => sum + Number(item.total || 0), 0);

  openReport(
    "Facturas vencidas",
    [
      { label: "Facturas vencidas", value: overdue.length },
      { label: "Valor vencido", value: formatMoney(total) },
      { label: "Prazo", value: "30 dias" }
    ],
    ["Factura", "Cliente", "Emissao", "Vencimento", "Total", "Estado original"],
    rowsData
  );
}

function renderUsers() {
  activeCompany.users.forEach(normalizeUserPermissions);
  const query = userSearch.value.trim().toLowerCase();
  const selectedStatus = userStatusFilter.value;
  const filtered = activeCompany.users.filter((user) => {
    const matchesQuery = [user.name, user.email, user.role, user.status].join(" ").toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
    return matchesQuery && matchesStatus;
  });

  userRows.innerHTML = filtered.map((user) => `
    <tr>
      <td><strong>${user.name}</strong></td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.permissions.length}/${permissionCatalog.length}</td>
      <td><span class="badge ${user.status === "Activo" ? "paid" : "overdue"}">${user.status}</span></td>
      <td>${user.lastAccess}</td>
      <td>
        <div class="row-actions">
          <button type="button" data-action="toggle-user" data-email="${user.email}">${user.status === "Activo" ? "Bloquear" : "Activar"}</button>
          <button type="button" data-action="edit-permissions" data-email="${user.email}" onclick="event.stopPropagation(); openUserPermissions(this.dataset.email)">Permissoes</button>
          <button type="button" data-action="change-password" data-email="${user.email}" onclick="event.stopPropagation(); openUserPassword(this.dataset.email)">Password</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderPermissionsEditor(user) {
  normalizeUserPermissions(user);
  permissionsTitle.textContent = `Permissoes - ${user.name}`;
  permissionsGrid.innerHTML = permissionCatalog.map((permission) => `
    <label>
      <input type="checkbox" value="${permission.key}" ${user.permissions.includes(permission.key) ? "checked" : ""}>
      <span>${permission.group}</span>
      <strong>${permission.label}</strong>
    </label>
  `).join("");
}

function openUserPermissions(email) {
  const user = activeCompany.users.find((item) => item.email === email);
  if (!user) {
    showToast("Utilizador nao encontrado.");
    return;
  }
  selectedPermissionEmail = user.email;
  renderPermissionsEditor(user);
  if (typeof permissionsDialog.showModal === "function") {
    permissionsDialog.showModal();
  } else {
    permissionsDialog.setAttribute("open", "");
  }
}

window.openUserPermissions = openUserPermissions;

function openUserPassword(email) {
  const user = activeCompany.users.find((item) => item.email === email);
  if (!user) {
    showToast("Utilizador nao encontrado.");
    return;
  }
  normalizeUserPermissions(user);
  selectedPasswordEmail = user.email;
  passwordTitle.textContent = `Password - ${user.name}`;
  passwordUserName.value = `${user.name} (${user.email})`;
  newPasswordInput.value = "";
  confirmPasswordInput.value = "";
  if (typeof passwordDialog.showModal === "function") {
    passwordDialog.showModal();
  } else {
    passwordDialog.setAttribute("open", "");
  }
}

window.openUserPassword = openUserPassword;

function renderLicenses() {
  const active = state.companies.filter((item) => item.status === "Activa").length;
  const suspended = state.companies.filter((item) => item.status === "Suspensa").length;
  const monthly = state.companies
    .filter((item) => item.status === "Activa")
    .reduce((sum, item) => sum + Number(item.monthly || 0), 0);

  document.querySelectorAll("#admin .metric strong")[0].textContent = active;
  document.querySelectorAll("#admin .metric strong")[1].textContent = formatMoney(monthly);
  document.querySelectorAll("#admin .metric strong")[2].textContent = suspended;

  licenseRows.innerHTML = state.companies.map((company) => `
    <tr>
      <td><strong>${company.name}</strong></td>
      <td>${company.nuit}</td>
      <td>${company.plan}</td>
      <td><button class="license-toggle ${company.status === "Activa" ? "enabled" : "disabled"}" type="button" data-action="toggle-license" data-nuit="${company.nuit}">${company.status}</button></td>
      <td>${company.modules.join(", ")}</td>
      <td class="numeric">${formatMoney(company.monthly)}</td>
      <td>
        <div class="row-actions">
          <button type="button" data-action="view-company" data-nuit="${company.nuit}">Entrar</button>
          <button type="button" data-action="edit-company" data-nuit="${company.nuit}">Editar</button>
          <button type="button" data-action="toggle-reports" data-nuit="${company.nuit}">Relatorios</button>
          <button type="button" data-action="toggle-projects" data-nuit="${company.nuit}">Projectos</button>
          <button type="button" data-action="toggle-leads" data-nuit="${company.nuit}">Leads</button>
          <button type="button" data-action="upgrade-plan" data-nuit="${company.nuit}">Plano</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function companyFormData() {
  const modules = [...companyDialog.querySelectorAll(".module-fieldset input:checked")].map((input) => input.value);
  return {
    name: document.querySelector("#companyNameInput").value.trim(),
    nuit: document.querySelector("#companyNuitInput").value.trim(),
    address: document.querySelector("#companyAddressInput").value.trim(),
    plan: document.querySelector("#companyPlanInput").value,
    modules,
    monthly: Number(document.querySelector("#companyMonthlyInput").value || 0)
  };
}

function setCompanyModules(modules) {
  companyDialog.querySelectorAll(".module-fieldset input").forEach((input) => {
    input.checked = modules.includes(input.value);
  });
}

function openNewCompanyDialog() {
  editingCompanyNuit = null;
  companyDialogTitle.textContent = "Nova empresa";
  document.querySelector("#createCompanyButton").textContent = "Criar licenca";
  document.querySelector("#companyNameInput").value = "Comercial Nacala, Lda.";
  document.querySelector("#companyNuitInput").value = nextAvailableNuit(state.companies.map((company) => company.nuit), 404775331);
  document.querySelector("#companyAddressInput").value = "Av. Samora Machel, Nacala";
  document.querySelector("#companyPlanInput").value = "Profissional";
  document.querySelector("#companyMonthlyInput").value = "12500";
  setCompanyModules(["Facturacao", "Recibos", "IVA", "Relatorios", "Projectos", "Leads"]);
  companyDialog.showModal();
}

function openEditCompanyDialog(nuit) {
  const company = state.companies.find((item) => item.nuit === nuit);
  if (!company) {
    showToast("Empresa nao encontrada.");
    return;
  }
  editingCompanyNuit = company.nuit;
  companyDialogTitle.textContent = "Editar empresa";
  document.querySelector("#createCompanyButton").textContent = "Guardar alteracoes";
  document.querySelector("#companyNameInput").value = company.name || "";
  document.querySelector("#companyNuitInput").value = company.nuit || "";
  document.querySelector("#companyAddressInput").value = company.address || "";
  document.querySelector("#companyPlanInput").value = company.plan || "Essencial";
  document.querySelector("#companyMonthlyInput").value = Number(company.monthly || 0);
  setCompanyModules(Array.isArray(company.modules) ? company.modules : []);
  companyDialog.showModal();
}

function renderModuleLocks() {
  document.querySelector('[data-view="reports"]')?.classList.toggle("locked-feature", !hasModule("Relatorios"));
  document.querySelector('[data-view="users"]')?.classList.toggle("locked-feature", !hasModule("Utilizadores"));
  document.querySelector('[data-view="projects"]')?.classList.toggle("locked-feature", !hasModule("Projectos"));
  document.querySelector('[data-view="leads"]')?.classList.toggle("locked-feature", !hasModule("Leads"));
  document.querySelector("#newReceiptButton")?.classList.toggle("locked-feature", !hasModule("Recibos"));
}

function renderAll() {
  renderDashboard();
  syncPurchaseClassificationFields();
  renderPurchases();
  renderDocuments();
  renderClients();
  renderLeads();
  renderProjects();
  renderReports();
  renderUsers();
  renderLicenses();
  syncProjectFields();
  renderModuleLocks();
}

function applySession(role, company = state.companies[0], user = null) {
  if (role === "company" && company.status !== "Activa") {
    showToast("Esta licenca esta suspensa. Contacte o administrador.");
    return;
  }

  currentRole = role;
  currentUser = role === "company" ? user : null;
  activeCompany = company;
  authScreen.classList.add("is-hidden");
  appShell.classList.remove("is-locked");
  activeCompanyName.textContent = role === "admin" ? "Admin ContaFacil MZ" : company.name;
  accountPill.textContent = role === "admin" ? "Administrador" : `${user?.name || "Utilizador"} | NUIT ${company.nuit}`;
  planName.textContent = role === "admin" ? "Gestao SaaS" : company.plan;

  document.querySelector(".admin-nav").hidden = role !== "admin";
  document.querySelector("#newQuoteButton").hidden = role === "admin";
  document.querySelector("#newInvoiceButton").hidden = role === "admin";
  document.querySelector("#exportButton").hidden = role === "admin";
  document.querySelector("#newReceiptButton").hidden = role === "admin";
  renderAll();
  setView(role === "admin" ? "admin" : "dashboard");
  showToast(role === "admin" ? "Sessao admin iniciada." : `Sessao iniciada para ${user?.name || company.name}.`);
}

function updateLoginRole(role) {
  loginRole = role;
  document.querySelectorAll("[data-login-role]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.loginRole === role);
  });
  identityLabel.textContent = role === "admin" ? "Email do administrador" : "NUIT da empresa";
  loginIdentity.value = role === "admin" ? "admin@contafacilmz.co.mz" : "400884112";
  loginEmailField.hidden = role === "admin";
  loginEmail.value = role === "admin" ? "" : "armando@padaria.co.mz";
}

function addLineItemRow(item = { description: "Produto ou servico", quantity: 1, unitPrice: 120000, vatRate: VAT_RATE }) {
  const row = document.createElement("div");
  row.className = "line-item-row";
  row.innerHTML = `
    <label>
      <span>Descricao</span>
      <input class="line-description" type="text" value="${item.description || ""}">
    </label>
    <label>
      <span>Qtd.</span>
      <input class="line-quantity" type="number" min="0" step="1" value="${item.quantity || 1}">
    </label>
    <label>
      <span>Preco unit.</span>
      <input class="line-unit-price" type="number" min="0" step="0.01" value="${item.unitPrice || 0}">
    </label>
    <label>
      <span>IVA</span>
      <select class="line-vat-rate">
        <option value="16" ${Number(item.vatRate) === 16 ? "selected" : ""}>16%</option>
        <option value="0" ${Number(item.vatRate) === 0 ? "selected" : ""}>Isento</option>
      </select>
    </label>
    <button class="remove-line-item" type="button" aria-label="Remover item">x</button>
  `;
  lineItems.append(row);
  updatePreviewTotal();
}

function availableInvoicesForReceipt() {
  return activeCompany.documents.filter((item) => item.type === "Factura");
}

function selectedReceiptInvoices() {
  return [...receiptInvoiceLinks.querySelectorAll("input:checked")].map((input) => input.value);
}

function renderReceiptInvoiceLinks() {
  const invoices = availableInvoicesForReceipt();
  receiptInvoiceLinks.innerHTML = invoices.length
    ? invoices.map((invoice) => `
      <label>
        <input type="checkbox" value="${invoice.number}">
        <span>${invoice.number} - ${invoice.client}</span>
        <strong>${formatMoney(invoice.total)}</strong>
      </label>
    `).join("")
    : "<p class=\"empty-note\">Nao existem facturas para associar.</p>";
}

function syncDocumentDialogForType() {
  const isReceipt = typeInput.value === "Recibo";
  receiptLinkPanel.hidden = !isReceipt;
  if (isReceipt) {
    renderReceiptInvoiceLinks();
  }
}

function getLineItems() {
  return [...lineItems.querySelectorAll(".line-item-row")]
    .map((row) => ({
      description: row.querySelector(".line-description").value.trim() || "Item",
      quantity: Number(row.querySelector(".line-quantity").value || 0),
      unitPrice: Number(row.querySelector(".line-unit-price").value || 0),
      vatRate: Number(row.querySelector(".line-vat-rate").value || 0)
    }))
    .filter((item) => item.quantity > 0 && item.unitPrice >= 0)
    .map((item) => {
      const net = item.quantity * item.unitPrice;
      const vat = net * (item.vatRate / 100);
      return { ...item, vat, total: net + vat };
    });
}

function updatePreviewTotal() {
  const totals = calculateDocumentTotals(getLineItems());
  previewSubtotal.textContent = formatMoney(totals.net);
  previewVat.textContent = formatMoney(totals.vat);
  previewTotal.textContent = formatMoney(totals.total);
}

function openDocumentDialog(type) {
  if (type === "Recibo" && !hasModule("Recibos")) {
    showToast("Modulo de recibos bloqueado nesta licenca.");
    return;
  }
  typeInput.value = type;
  dialogTitle.textContent = type === "Recibo" ? "Novo recibo" : type === "Orcamento" ? "Novo orcamento" : "Nova factura";
  lineItems.innerHTML = "";
  addLineItemRow({ description: "Produto ou servico", quantity: 1, unitPrice: 120000, vatRate: VAT_RATE });
  updatePreviewTotal();
  syncDocumentDialogForType();
  dialog.showModal();
}

function exportCurrentData() {
  const payload = {
    company: activeCompany.name,
    nuit: activeCompany.nuit,
    generatedAt: new Date().toISOString(),
    documents: activeCompany.documents,
    purchases: activeCompany.purchases,
    projects: activeCompany.projects,
    leads: activeCompany.leads,
    clients: activeCompany.clients
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${activeCompany.nuit}-export.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Exportacao criada em JSON.");
}

function cleanPdfText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pdfEscape(value) {
  return cleanPdfText(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(text, maxChars) {
  const words = cleanPdfText(text).split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function amountInWords(value) {
  const units = ["", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"];
  const teens = ["dez", "onze", "doze", "treze", "catorze", "quinze", "dezasseis", "dezassete", "dezoito", "dezanove"];
  const tens = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  const hundreds = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

  function underThousand(number) {
    if (number === 0) return "";
    if (number === 100) return "cem";

    const parts = [];
    const hundred = Math.floor(number / 100);
    const rest = number % 100;

    if (hundred) parts.push(hundreds[hundred]);
    if (rest >= 10 && rest < 20) {
      parts.push(teens[rest - 10]);
    } else {
      const ten = Math.floor(rest / 10);
      const unit = rest % 10;
      if (ten) parts.push(tens[ten]);
      if (unit) parts.push(units[unit]);
    }

    return parts.join(" e ");
  }

  function integerToWords(number) {
    if (number === 0) return "zero";

    const millions = Math.floor(number / 1000000);
    const thousands = Math.floor((number % 1000000) / 1000);
    const rest = number % 1000;
    const parts = [];

    if (millions) {
      parts.push(millions === 1 ? "um milhao" : `${underThousand(millions)} milhoes`);
    }
    if (thousands) {
      parts.push(thousands === 1 ? "mil" : `${underThousand(thousands)} mil`);
    }
    if (rest) {
      const connector = parts.length && rest < 100 ? "e " : "";
      parts.push(`${connector}${underThousand(rest)}`);
    }

    return parts.join(", ").replace(", e ", " e ");
  }

  const amount = Math.round(Number(value || 0) * 100);
  const meticais = Math.floor(amount / 100);
  const centavos = amount % 100;
  const meticalText = meticais === 1 ? "metical" : "meticais";
  const main = `${integerToWords(meticais)} ${meticalText}`;

  if (!centavos) return main;
  const centavoText = centavos === 1 ? "centavo" : "centavos";
  return `${main} e ${integerToWords(centavos)} ${centavoText}`;
}

function buildPdf(objects, content) {
  const addObject = (body) => {
    objects.push(body);
    return objects.length;
  };

  const contentId = addObject(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  const fontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const boldFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageId = addObject(`<< /Type /Page /Parent 0 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
  const pagesId = addObject(`<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`);
  objects[pageId - 1] = objects[pageId - 1].replace("/Parent 0 0 R", `/Parent ${pagesId} 0 R`);
  const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

function createInvoicePdf(documentItem) {
  const totals = calculateDocumentTotals(documentItem.items);
  const client = findClientByName(documentItem.client);
  const dueDate = documentItem.dueDate || calculateDueDate(documentItem.date);
  const content = [];
  const text = (x, y, value, size = 9, font = "F1") => {
    content.push(`BT /${font} ${size} Tf ${x} ${y} Td (${pdfEscape(value)}) Tj ET`);
  };
  const textRight = (x, y, value, size = 9, font = "F1") => {
    const clean = cleanPdfText(value);
    const approxWidth = clean.length * size * 0.48;
    text(x - approxWidth, y, clean, size, font);
  };
  const line = (x1, y1, x2, y2) => {
    content.push(`${x1} ${y1} m ${x2} ${y2} l S`);
  };
  const rect = (x, y, w, h) => {
    content.push(`${x} ${y} ${w} ${h} re S`);
  };
  const fillRect = (x, y, w, h, color = "0.95 0.97 0.94") => {
    content.push(`q ${color} rg ${x} ${y} ${w} ${h} re f Q`);
  };
  const strokeColor = (color = "0.82 0.86 0.82") => {
    content.push(`${color} RG`);
  };

  content.push("0.2 w");
  rect(36, 768, 523, 60);
  line(390, 768, 390, 828);
  text(48, 808, activeCompany.name, 12, "F2");
  text(48, 790, activeCompany.address, 8);
  text(48, 776, `NUIT: ${activeCompany.nuit}`, 8);
  text(410, 818, "ORIGINAL", 9, "F2");
  text(410, 804, documentItem.type.toUpperCase(), 16, "F2");
  text(410, 786, documentItem.number, 11, "F2");
  text(410, 773, `Emitido em ${formatDate(documentItem.date)}`, 8);

  strokeColor();
  rect(36, 652, 325, 72);
  text(50, 704, "CLIENTE", 8, "F2");
  text(50, 687, client.name, 12, "F2");
  text(50, 670, `NUIT: ${client.nuit}`, 9);
  wrapText(client.address, 46).slice(0, 2).forEach((lineText, index) => {
    text(50, 656 - index * 11, `Endereco: ${index ? "" : lineText}`, 8);
    if (index) text(93, 656 - index * 11, lineText, 8);
  });

  rect(380, 652, 179, 72);
  text(394, 704, "DADOS DO DOCUMENTO", 8, "F2");
  text(394, 686, "D. Emissao", 8, "F2");
  textRight(548, 686, formatDate(documentItem.date), 9);
  text(394, 668, "D. Vencimento", 8, "F2");
  textRight(548, 668, formatDate(dueDate), 9);

  rect(36, 568, 523, 30);
  text(46, 580, "Ref.", 8, "F2");
  text(94, 580, "Descricao", 8, "F2");
  textRight(315, 580, "Qtd.", 8, "F2");
  textRight(395, 580, "Preco", 8, "F2");
  textRight(445, 580, "IVA", 8, "F2");
  textRight(500, 580, "Incl.", 8, "F2");
  textRight(548, 580, "Total", 8, "F2");

  let y = 548;
  documentItem.items.forEach((item, index) => {
    const net = Number(item.quantity || 0) * Number(item.unitPrice || 0);
    const total = net + net * (Number(item.vatRate || 0) / 100);
    text(46, y, `${index + 1}`, 8);
    wrapText(item.description, 34).slice(0, 2).forEach((descriptionLine, offset) => {
      text(94, y - offset * 11, descriptionLine, 8);
    });
    textRight(315, y, item.quantity, 8);
    textRight(395, y, formatPdfAmount(item.unitPrice), 8);
    textRight(445, y, `${item.vatRate}%`, 8);
    textRight(500, y, "Sim", 8);
    textRight(548, y, formatPdfAmount(total), 8);
    y -= 28;
  });

  strokeColor();
  line(36, y + 16, 559, y + 16);
  const totalY = Math.min(y - 10, 392);
  rect(332, totalY - 126, 227, 126);
  text(346, totalY - 22, "Subtotal", 9);
  textRight(548, totalY - 22, formatPdfAmount(totals.net), 9, "F2");
  text(346, totalY - 42, "Desconto financeiro", 9);
  textRight(548, totalY - 42, "0,00", 9);
  text(346, totalY - 62, "Base de incidencia", 9);
  textRight(548, totalY - 62, formatPdfAmount(totals.net), 9, "F2");
  text(346, totalY - 82, "IVA", 9);
  textRight(548, totalY - 82, formatPdfAmount(totals.vat), 9, "F2");
  line(332, totalY - 96, 559, totalY - 96);
  text(346, totalY - 116, "TOTAL (MZN)", 10, "F2");
  textRight(548, totalY - 116, formatPdfAmount(totals.total), 11, "F2");

  const extensoY = totalY - 150;
  rect(36, extensoY - 20, 523, 34);
  text(48, extensoY - 2, `Extenso: ${amountInWords(totals.total)}`, 8, "F2");

  rect(36, 86, 523, 84);
  line(36, 142, 559, 142);
  line(36, 112, 559, 112);
  line(210, 112, 210, 142);
  line(385, 112, 385, 142);
  text(48, 154, "Dados bancarios", 10, "F2");
  text(48, 126, "Banco", 8, "F2");
  text(48, 116, "Moza Banco", 8);
  text(222, 126, "Conta", 8, "F2");
  text(222, 116, "007607676101", 8);
  text(397, 126, "SWIFT", 8, "F2");
  text(397, 116, "MOZAMZMAXXX", 8);
  text(48, 96, "NIB", 8, "F2");
  text(92, 96, "0034.0000.07607676.101.11", 8);
  line(36, 58, 559, 58);
  text(40, 36, `Documento processado por Computador. Software licenciado a: ${activeCompany.name}.`, 7);
  text(40, 22, "Documento gerado pelo ContaFacil MZ.", 7);

  return buildPdf([], content.join("\n"));
}

function downloadDocumentPdf(number = selectedDocumentNumber) {
  const documentItem = activeCompany.documents.find((item) => item.number === number);
  if (!documentItem) {
    showToast("Documento nao encontrado.");
    return;
  }
  const pdf = createInvoicePdf(documentItem);
  const blob = new Blob([pdf], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${documentItem.number.replace(/[\\/]/g, "-")}.pdf`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("PDF da factura gerado.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll("[data-view-shortcut]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewShortcut));
});

document.querySelectorAll("[data-login-role]").forEach((button) => {
  button.addEventListener("click", () => updateLoginRole(button.dataset.loginRole));
});

document.querySelectorAll("[data-demo-login]").forEach((button) => {
  button.addEventListener("click", () => {
    updateLoginRole(button.dataset.demoLogin);
    if (button.dataset.demoLogin === "admin") {
      applySession("admin");
      return;
    }
    const company = state.companies[0];
    company.users.forEach(normalizeUserPermissions);
    const user = company.users.find((item) => item.status === "Activo") || company.users[0];
    loginIdentity.value = company.nuit;
    loginEmail.value = user.email;
    document.querySelector("#loginPassword").value = user.password;
    applySession("company", company, user);
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (loginRole === "admin") {
    applySession("admin");
    return;
  }
  const company = state.companies.find((item) => item.nuit === loginIdentity.value.trim());
  if (!company) {
    showToast("NUIT nao encontrado.");
    return;
  }
  company.users.forEach(normalizeUserPermissions);
  const email = loginEmail.value.trim().toLowerCase();
  const password = document.querySelector("#loginPassword").value;
  const user = company.users.find((item) => item.email.toLowerCase() === email);
  if (!user) {
    showToast("Email do utilizador nao encontrado nesta empresa.");
    return;
  }
  if (user.status !== "Activo") {
    showToast("Este utilizador esta bloqueado.");
    return;
  }
  if (user.password !== password) {
    showToast("Palavra-passe invalida.");
    return;
  }
  applySession("company", company, user);
});

document.querySelector("#newInvoiceButton").addEventListener("click", () => openDocumentDialog("Factura"));
document.querySelector("#newQuoteButton").addEventListener("click", () => openDocumentDialog("Orcamento"));
document.querySelector("#newReceiptButton").addEventListener("click", () => openDocumentDialog("Recibo"));
document.querySelector("#exportButton").addEventListener("click", exportCurrentData);
downloadPdfButton.addEventListener("click", () => downloadDocumentPdf());
document.querySelector("#logoutButton").addEventListener("click", () => {
  appShell.classList.add("is-locked");
  authScreen.classList.remove("is-hidden");
  currentRole = null;
  currentUser = null;
  showToast("Sessao terminada.");
});
document.querySelector("#newCompanyButton").addEventListener("click", openNewCompanyDialog);
document.querySelector("#newClientButton").addEventListener("click", openNewClientDialog);
document.querySelector("#newLeadButton").addEventListener("click", () => {
  if (!hasModule("Leads")) {
    showToast("Modulo de leads bloqueado nesta licenca.");
    return;
  }
  leadDialog.showModal();
});
document.querySelector("#newProjectButton").addEventListener("click", () => {
  if (!hasModule("Projectos")) {
    showToast("Modulo de projectos bloqueado nesta licenca.");
    return;
  }
  syncProjectFields();
  projectDialog.showModal();
});
document.querySelector("#newPurchaseButton").addEventListener("click", () => {
  document.querySelector("#purchaseDateInput").value = new Date().toISOString().slice(0, 10);
  syncPurchaseClassificationFields(suggestPurchaseClassification(document.querySelector("#purchaseDescriptionInput").value));
  syncProjectFields();
  purchaseDialog.showModal();
});
document.querySelector("#newUserButton").addEventListener("click", () => {
  if (!hasModule("Utilizadores")) {
    showToast("Modulo de utilizadores bloqueado nesta licenca.");
    return;
  }
  userDialog.showModal();
});
document.querySelector("#prepareVatButton").addEventListener("click", () => {
  openVatReport();
});
document.querySelector("#vatReportButton").addEventListener("click", () => {
  openVatReport();
});
document.querySelector("#trialBalanceButton").addEventListener("click", () => {
  openTrialBalanceReport();
});
document.querySelector("#clientSalesButton").addEventListener("click", () => {
  openClientSalesReport();
});
document.querySelector("#overdueInvoicesButton").addEventListener("click", () => {
  openOverdueInvoicesReport();
});
exportReportButton.addEventListener("click", () => {
  const blob = new Blob([currentReportCsv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${reportTitle.textContent.toLowerCase().replace(/\s+/g, "-")}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Relatorio exportado em CSV.");
});

search.addEventListener("input", renderDocuments);
purchaseSearch.addEventListener("input", renderPurchases);
purchaseClassFilter.addEventListener("change", renderPurchases);
purchaseRows.addEventListener("change", (event) => {
  const select = event.target.closest(".purchase-class-select");
  if (!select) return;
  const purchase = activeCompany.purchases.find((item) => item.number === select.dataset.number);
  if (!purchase) return;
  const classification = getPurchaseClassification(select.value);
  purchase.classification = classification.key;
  purchase.account = classification.account;
  purchase.accountName = classification.label;
  purchase.accountGroup = classification.group;
  purchase.vatTreatment = classification.vat;
  saveState();
  renderPurchases();
  renderReports();
  showToast(`Compra classificada em ${classification.account} - ${classification.label}.`);
});
statusFilter.addEventListener("change", renderDocuments);
typeInput.addEventListener("change", syncDocumentDialogForType);
document.querySelector("#purchaseDescriptionInput").addEventListener("change", (event) => {
  syncPurchaseClassificationFields(suggestPurchaseClassification(event.target.value));
});
userSearch.addEventListener("input", renderUsers);
userStatusFilter.addEventListener("change", renderUsers);
rows.addEventListener("click", (event) => {
  const button = event.target.closest('[data-action="view-document"]');
  if (!button) return;
  openDocumentDetails(button.dataset.number);
});
document.querySelector("#addLineItemButton").addEventListener("click", () => {
  addLineItemRow({ description: "Novo item", quantity: 1, unitPrice: 0, vatRate: VAT_RATE });
});
lineItems.addEventListener("input", updatePreviewTotal);
lineItems.addEventListener("change", updatePreviewTotal);
lineItems.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-line-item");
  if (!button) return;
  if (lineItems.querySelectorAll(".line-item-row").length === 1) {
    showToast("O documento precisa de pelo menos um item.");
    return;
  }
  button.closest(".line-item-row").remove();
  updatePreviewTotal();
});

document.querySelector("#createDocumentButton").addEventListener("click", () => {
  const type = typeInput.value;
  const items = getLineItems();
  const totals = calculateDocumentTotals(items);
  if (!items.length || totals.total <= 0) {
    showToast("Adicione pelo menos um item com valor.");
    return;
  }
  const issueDate = new Date().toISOString().slice(0, 10);
  const relatedInvoices = type === "Recibo" ? selectedReceiptInvoices() : [];
  if (type === "Recibo" && !relatedInvoices.length) {
    showToast("Seleccione pelo menos uma factura para associar ao recibo.");
    return;
  }
  activeCompany.documents.unshift({
    number: nextNumber(type),
    client: clientInput.value,
    type,
    date: issueDate,
    dueDate: type === "Factura" ? calculateDueDate(issueDate) : issueDate,
    status: type === "Recibo" ? "Pago" : type === "Orcamento" ? "Aberto" : "Pendente",
    relatedInvoices,
    project: hasModule("Projectos") ? documentProjectInput.value : "",
    items,
    net: totals.net,
    vat: totals.vat,
    total: totals.total
  });
  relatedInvoices.forEach((number) => {
    const invoice = activeCompany.documents.find((item) => item.number === number);
    if (invoice) {
      invoice.status = "Pago";
    }
  });
  saveState();
  renderAll();
  setView("documents");
  showToast(`${type} emitido com sucesso.`);
});

document.querySelector("#createPurchaseButton").addEventListener("click", () => {
  const net = Number(document.querySelector("#purchaseNetInput").value || 0);
  const vatRate = Number(document.querySelector("#purchaseVatRateInput").value || 0);
  const vat = net * (vatRate / 100);
  const classification = getPurchaseClassification(document.querySelector("#purchaseClassInput").value);
  if (net <= 0) {
    showToast("Informe a base tributavel da compra.");
    return;
  }
  activeCompany.purchases.unshift({
    number: document.querySelector("#purchaseNumberInput").value.trim(),
    supplier: document.querySelector("#supplierNameInput").value.trim(),
    nuit: document.querySelector("#supplierNuitInput").value.trim(),
    date: document.querySelector("#purchaseDateInput").value || new Date().toISOString().slice(0, 10),
    description: document.querySelector("#purchaseDescriptionInput").value.trim(),
    classification: classification.key,
    account: classification.account,
    accountName: classification.label,
    accountGroup: classification.group,
    vatTreatment: classification.vat,
    project: hasModule("Projectos") ? purchaseProjectInput.value : "",
    net,
    vatRate,
    vat,
    total: net + vat
  });
  saveState();
  renderAll();
  setView("purchases");
  purchaseDialog.close();
  showToast("Factura de compra registada.");
});

document.querySelector("#createProjectButton").addEventListener("click", () => {
  activeCompany.projects.push({
    name: document.querySelector("#projectNameInput").value.trim(),
    client: document.querySelector("#projectClientInput").value,
    status: document.querySelector("#projectStatusInput").value,
    budget: Number(document.querySelector("#projectBudgetInput").value || 0)
  });
  saveState();
  renderAll();
  setView("projects");
  showToast("Projecto criado.");
});

document.querySelector("#createLeadButton").addEventListener("click", () => {
  activeCompany.leads.push({
    id: nextLeadId(),
    name: document.querySelector("#leadNameInput").value.trim(),
    nuit: document.querySelector("#leadNuitInput").value.trim(),
    phone: document.querySelector("#leadPhoneInput").value.trim(),
    source: document.querySelector("#leadSourceInput").value.trim(),
    address: document.querySelector("#leadAddressInput").value.trim(),
    status: document.querySelector("#leadStatusInput").value,
    calls: []
  });
  saveState();
  renderAll();
  setView("leads");
  showToast("Lead criado.");
});

document.querySelector("#createLeadCallButton").addEventListener("click", () => {
  const lead = activeCompany.leads.find((item) => item.id === selectedLeadId);
  if (!lead) return;
  lead.calls.push({
    date: document.querySelector("#leadCallDateInput").value || new Date().toISOString().slice(0, 10),
    outcome: document.querySelector("#leadCallOutcomeInput").value,
    notes: document.querySelector("#leadCallNotesInput").value.trim()
  });
  lead.status = lead.status === "Novo" ? "Contactado" : lead.status;
  saveState();
  renderAll();
  showToast("Chamada registada.");
});

document.querySelector("#createClientButton").addEventListener("click", (event) => {
  const data = clientFormData();
  const duplicate = activeCompany.clients.some((client) => client.nuit === data.nuit && client.nuit !== editingClientNuit);
  if (!data.name || !data.nuit || duplicate) {
    event.preventDefault();
    showToast(duplicate ? "Ja existe cliente com este NUIT." : "Nome e NUIT do cliente sao obrigatorios.");
    return;
  }
  if (editingClientNuit) {
    const client = activeCompany.clients.find((item) => item.nuit === editingClientNuit);
    if (!client) {
      showToast("Cliente nao encontrado.");
      return;
    }
    const oldName = client.name;
    Object.assign(client, data);
    activeCompany.documents.forEach((documentItem) => {
      if (documentItem.client === oldName) {
        documentItem.client = data.name;
      }
    });
    activeCompany.projects?.forEach((project) => {
      if (project.client === oldName) {
        project.client = data.name;
      }
    });
    editingClientNuit = null;
    showToast("Cliente actualizado.");
  } else {
    activeCompany.clients.push(data);
    showToast("Cliente criado.");
  }
  saveState();
  renderAll();
  setView("clients");
  clientDialog.close();
});

document.querySelector("#createUserButton").addEventListener("click", () => {
  const role = document.querySelector("#userRoleInput").value;
  activeCompany.users.push({
    name: document.querySelector("#userNameInput").value.trim(),
    email: document.querySelector("#userEmailInput").value.trim(),
    role,
    status: document.querySelector("#userStatusInput").value,
    lastAccess: "-",
    permissions: permissionsForRole(role),
    password: document.querySelector("#userPasswordInput").value || "demo123"
  });
  saveState();
  renderAll();
  setView("users");
  showToast("Utilizador criado.");
});

document.querySelector("#savePasswordButton").addEventListener("click", (event) => {
  const user = activeCompany.users.find((item) => item.email === selectedPasswordEmail);
  const newPassword = newPasswordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (!user) {
    event.preventDefault();
    showToast("Utilizador nao encontrado.");
    return;
  }
  if (newPassword.length < 6) {
    event.preventDefault();
    showToast("A password deve ter pelo menos 6 caracteres.");
    return;
  }
  if (newPassword !== confirmPassword) {
    event.preventDefault();
    showToast("As passwords nao coincidem.");
    return;
  }
  user.password = newPassword;
  saveState();
  renderUsers();
  showToast("Password actualizada.");
});

clientCards.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.dataset.action !== "edit-client") return;
  openEditClientDialog(button.dataset.nuit);
});

document.querySelector("#savePermissionsButton").addEventListener("click", () => {
  const user = activeCompany.users.find((item) => item.email === selectedPermissionEmail);
  if (!user) return;
  user.permissions = [...permissionsGrid.querySelectorAll("input:checked")].map((input) => input.value);
  saveState();
  renderUsers();
  showToast("Permissoes actualizadas.");
});

userRows.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const user = activeCompany.users.find((item) => item.email === button.dataset.email);
  if (!user) return;

  if (button.dataset.action === "toggle-user") {
    user.status = user.status === "Activo" ? "Bloqueado" : "Activo";
    showToast(`${user.name}: estado actualizado.`);
  }

  if (button.dataset.action === "edit-permissions") {
    openUserPermissions(user.email);
    return;
  }

  if (button.dataset.action === "change-password") {
    openUserPassword(user.email);
    return;
  }

  saveState();
  renderUsers();
});

leadCards.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const lead = activeCompany.leads.find((item) => item.id === button.dataset.id);
  if (!lead) return;

  if (button.dataset.action === "call-lead") {
    selectedLeadId = lead.id;
    document.querySelector("#leadCallTitle").textContent = `Chamada - ${lead.name}`;
    document.querySelector("#leadCallDateInput").value = new Date().toISOString().slice(0, 10);
    leadCallDialog.showModal();
  }

  if (button.dataset.action === "convert-lead") {
    const exists = activeCompany.clients.some((client) => client.nuit === lead.nuit || client.name === lead.name);
    if (!exists) {
      activeCompany.clients.push({
        name: lead.name,
        nuit: lead.nuit,
        city: "",
        address: lead.address,
        bank: defaultClientBankDetails()
      });
    }
    lead.status = "Convertido";
    saveState();
    renderAll();
    setView("clients");
    showToast(`${lead.name} convertido em cliente.`);
  }
});

document.querySelector("#createCompanyButton").addEventListener("click", (event) => {
  const data = companyFormData();
  const duplicate = state.companies.some((company) => company.nuit === data.nuit && company.nuit !== editingCompanyNuit);
  if (!data.name || !data.nuit || duplicate) {
    event.preventDefault();
    showToast(duplicate ? "Ja existe empresa com este NUIT." : "Nome e NUIT da empresa sao obrigatorios.");
    return;
  }
  if (editingCompanyNuit) {
    const company = state.companies.find((item) => item.nuit === editingCompanyNuit);
    if (!company) {
      showToast("Empresa nao encontrada.");
      return;
    }
    Object.assign(company, data);
    if (activeCompany === company) {
      activeCompanyName.textContent = company.name;
      accountPill.textContent = `${currentUser?.name || "Utilizador"} | NUIT ${company.nuit}`;
      planName.textContent = company.plan;
    }
    editingCompanyNuit = null;
    showToast("Empresa actualizada.");
  } else {
    state.companies.push({
      ...data,
      status: "Activa",
      clients: [],
      documents: [],
      purchases: [],
      projects: [],
      leads: [],
      users: [
        {
          name: "Administrador",
          email: `admin@${data.nuit}.co.mz`,
          role: "Administrador",
          status: "Activo",
          lastAccess: "-",
          password: "demo123"
        }
      ]
    });
    showToast("Nova licenca criada.");
  }
  saveState();
  renderAll();
  companyDialog.close();
});

licenseRows.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const company = state.companies.find((item) => item.nuit === button.dataset.nuit);
  if (!company) return;

  if (button.dataset.action === "toggle-license") {
    company.status = company.status === "Activa" ? "Suspensa" : "Activa";
    showToast(`${company.name}: licenca ${company.status.toLowerCase()}.`);
  }

  if (button.dataset.action === "edit-company") {
    openEditCompanyDialog(company.nuit);
    return;
  }

  if (button.dataset.action === "toggle-reports") {
    company.modules = company.modules.includes("Relatorios")
      ? company.modules.filter((item) => item !== "Relatorios")
      : [...company.modules, "Relatorios"];
    showToast(`${company.name}: modulo Relatorios actualizado.`);
  }

  if (button.dataset.action === "toggle-projects") {
    company.modules = company.modules.includes("Projectos")
      ? company.modules.filter((item) => item !== "Projectos")
      : [...company.modules, "Projectos"];
    showToast(`${company.name}: modulo Projectos actualizado.`);
  }

  if (button.dataset.action === "toggle-leads") {
    company.modules = company.modules.includes("Leads")
      ? company.modules.filter((item) => item !== "Leads")
      : [...company.modules, "Leads"];
    showToast(`${company.name}: modulo Leads actualizado.`);
  }

  if (button.dataset.action === "upgrade-plan") {
    const plans = ["Essencial", "Profissional", "Enterprise"];
    const next = plans[(plans.indexOf(company.plan) + 1) % plans.length];
    company.plan = next;
    company.monthly = next === "Essencial" ? 7000 : next === "Profissional" ? 12500 : 25000;
    showToast(`${company.name}: plano alterado para ${next}.`);
  }

  if (button.dataset.action === "view-company") {
    company.users.forEach(normalizeUserPermissions);
    const user = company.users.find((item) => item.status === "Activo") || company.users[0] || null;
    applySession("company", company, user);
  }

  saveState();
  renderAll();
});

normalizeDocuments();
saveState();
renderAll();
updatePreviewTotal();
