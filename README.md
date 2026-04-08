# Da Fonseca – Sociedade de Advogados
## Site Oficial · dafonsecaadvogados.com.br

---

## ESTRUTURA DO SITE

```
dafonseca-site/
├── index.html              ← Página inicial (Home)
├── areas.html              ← Todas as áreas de atuação
├── direito-regulatorio.html← Direito Regulatório Empresarial
├── direito-medico.html     ← Direito Médico e da Saúde
├── escritorio.html         ← O Escritório / Sobre nós
├── contato.html            ← Formulário de contato
├── css/
│   └── style.css           ← Design system global
├── js/
│   ├── components.js       ← Navegação, footer e WhatsApp
│   └── main.js             ← Comportamentos e animações
└── README.md               ← Este arquivo
```

---

## CONFIGURAÇÕES OBRIGATÓRIAS ANTES DE PUBLICAR

### 1. NÚMERO DE WHATSAPP
Abra o arquivo `js/components.js` e localize a linha:
```javascript
const WA_NUMBER = '5531999999999';
```
Substitua pelo número real com DDI (55) + DDD + número.
Exemplo: `5531987654321` para (31) 98765-4321

### 2. FORMULÁRIO DE CONTATO (Formspree)
a) Acesse https://formspree.io e crie uma conta gratuita
b) Clique em "+ New Form" e dê um nome (ex: "Da Fonseca Contato")
c) Copie o ID do formulário (ex: `xyzabcde`)
d) Abra `contato.html` e localize:
   ```html
   action="https://formspree.io/f/SEU_ID_FORMSPREE"
   ```
   Substitua `SEU_ID_FORMSPREE` pelo ID obtido.
   Exemplo: `action="https://formspree.io/f/xyzabcde"`

e) No painel do Formspree, configure o e-mail de destino
   como: dafonsecaadvogados@gmail.com

### 3. LINK GOOGLE MAPS (opcional mas recomendado)
Em `escritorio.html` e `contato.html`, localize:
```
https://maps.google.com/?q=Rua+Afonso+Pena+51+Conselheiro+Lafaiete+MG
```
Confirme se o link abre o endereço correto no Google Maps.
Se quiser usar o link exato da listagem, busque o escritório
no Google Maps, clique em "Compartilhar" e copie o link.

---

## PUBLICAÇÃO GRATUITA (GitHub Pages)

### Passo a passo completo:

1. Acesse https://github.com e crie uma conta gratuita

2. Clique em "New repository"
   - Nome: `dafonseca-site` (ou qualquer nome)
   - Visibilidade: Public
   - Clique em "Create repository"

3. Faça o upload de TODOS os arquivos:
   - Clique em "uploading an existing file"
   - Selecione todos os arquivos e pastas (index.html, areas.html,
     direito-regulatorio.html, direito-medico.html, escritorio.html,
     contato.html, e as pastas css/ e js/)
   - Clique em "Commit changes"

4. Ative o GitHub Pages:
   - Vá em Settings → Pages
   - Em "Source", selecione "main" branch
   - Clique em Save
   - Em alguns minutos o site estará em:
     https://seunome.github.io/dafonseca-site

5. Conecte seu domínio dafonsecaadvogados.com.br:
   - No painel do seu registrador de domínio (Registro.br),
     adicione um registro CNAME:
     Nome: www → Valor: seunome.github.io
   - No GitHub Pages (Settings → Pages → Custom domain),
     digite: www.dafonsecaadvogados.com.br
   - Marque "Enforce HTTPS" (ativa o cadeado de segurança)
   - Aguarde até 48h para propagação do DNS

---

## ALTERNATIVA AINDA MAIS SIMPLES (Netlify)

1. Acesse https://netlify.com e crie conta gratuita
2. Na tela inicial, arraste a PASTA dafonseca-site inteira
3. O site vai ao ar em segundos em um link temporário
4. Para conectar seu domínio:
   - Vá em "Site settings" → "Domain management"
   - Clique em "Add custom domain"
   - Digite: dafonsecaadvogados.com.br
   - Siga as instruções para configurar o DNS
5. O formulário de contato pode usar o Netlify Forms:
   - Basta adicionar `netlify` no atributo da tag form:
     `<form id="contactForm" netlify ...>`
   - Remova o atributo `action` da tag form
   - Os contatos chegam no painel do Netlify e por e-mail

---

## MANUTENÇÃO E EDIÇÕES

Para editar textos: abra qualquer arquivo .html em um editor de texto
(Bloco de Notas, VS Code, etc.) e altere o conteúdo desejado.

Para alterar cores ou fontes: edite o arquivo css/style.css
As variáveis de cor ficam no início do arquivo em `:root { ... }`

Para adicionar novas páginas: copie qualquer página existente,
altere o conteúdo e adicione o link na navegação em components.js

---

## SUPORTE TÉCNICO

Em caso de dúvidas sobre a configuração, entre em contato.

© Da Fonseca – Sociedade de Advogados · dafonsecaadvogados.com.br
