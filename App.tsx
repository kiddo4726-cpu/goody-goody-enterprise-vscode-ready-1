import { useEffect, useState } from 'react';

const phoneOne = '08062409266';
const phoneTwo = '09054010911';
const email = 'osawebeauty2016@gmail.com';
const waOne = '2348062409266';

const products = [
  { id: 'cement', number: '01', category: 'CEMENT', name: 'Dangote Cement', description: 'Cement for building, block making, concrete work, and everyday construction.', image: 'https://api.buildingsandmoreng.com/storage/7171/images-%2812%29.jpeg', alt: 'Dangote Cement bags' },
  { id: 'sand', number: '02', category: 'AGGREGATES', name: 'Sand Supply', description: 'Sand supply for construction and other building requirements.', image: 'https://stroytorg-leon.ru/sites/default/files/styles/large/public/pesok-prirodnyj-600x584.png?itok=G2IeLSD3', alt: 'Pile of construction sand' },
  { id: 'granite', number: '03', category: 'AGGREGATES', name: 'Granite Supply', description: 'Crushed granite for concrete, foundations, and construction projects.', image: 'https://ireland.apollo.olxcdn.com/v1/files/buvorlzzxj4t3-PL/image', alt: 'Crushed granite aggregate' },
  { id: 'rods', number: '04', category: 'REINFORCEMENT', name: 'Iron Rods', description: 'Steel reinforcement rods for structural and concrete work.', image: 'https://image.made-in-china.com/2f0j00JGEoARTDhZrS/8mm-10mm-12mm-Iron-Rod-HRB400-HRB500-Composite-Liberia-A615-Steel-Bar-Rebar-Deformation-Concrete-Reinforcement-for-Sale-Suppliers.webp', alt: 'Steel reinforcement rods' }
];

function getPage() {
  const path = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return ['products', 'about', 'services', 'faq', 'contact'].includes(path) ? path : 'home';
}

function App() {
  const [page, setPage] = useState(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState('cement');

  useEffect(() => {
    const update = () => { setPage(getPage()); setMenuOpen(false); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const whatsapp = (item = 'building materials') => {
    const message = encodeURIComponent('Hello Goody Goody Enterprise, I would like to enquire about ' + item + '.');
    window.open('https://wa.me/' + waOne + '?text=' + message, '_blank', 'noopener,noreferrer');
  };

  const navLink = (name, route) => (
    <a className={page === route ? 'active' : ''} href={'#/' + route} onClick={() => setMenuOpen(false)}>{name}</a>
  );

  const ProductCard = ({ product }) => (
    <article className="product-card">
      <a className="product-visual" href="#/products" onClick={() => setSelected(product.id)} aria-label={'View ' + product.name}>
        <img className="material-photo" src={product.image} alt={product.alt} loading="lazy" />
        <span className="visual-tag">{product.number}</span>
        <span className="photo-view">Explore product ↗</span>
      </a>
      <div className="product-info">
        <div className="product-kicker">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button className="text-link" onClick={() => whatsapp(product.name)}>Enquire on WhatsApp <span>↗</span></button>
      </div>
    </article>
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#/home" aria-label="Goody Goody Enterprise home">
          <span className="brand-mark">G<span>+</span></span>
          <span className="brand-name">GOODY GOODY <small>ENTERPRISE</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          {navLink('Home', 'home')}
          {navLink('Products', 'products')}
          {navLink('Services', 'services')}
          {navLink('About us', 'about')}
          {navLink('FAQs', 'faq')}
          {navLink('Contact & Store', 'contact')}
        </nav>
        <a className="nav-cta" href="#/contact">Contact us <span>↗</span></a>
      </header>

      <main>
        {page === 'home' && <>
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR BUILDING MATERIALS PARTNER</div>
              <h1>Build with<br /><em>confidence.</em></h1>
              <p className="hero-lead">Your local source for Dangote Cement and essential building materials. Visit our store in Uroho 3 Community, opposite Town Hall, or contact us to make an enquiry.</p>
              <div className="hero-actions"><a className="button button-primary" href="#/products">Explore products <span>↗</span></a><a className="button button-ghost" href="#/contact">Visit our store <span>→</span></a></div>
              <div className="hero-note"><span className="check-icon">✓</span> Cement • Sand • Granite • Iron rods</div>
            </div>
            <div className="hero-art"><img className="hero-photo" src={products[0].image} alt="Dangote Cement bags" /><div className="hero-photo-caption">GOODY GOODY ENTERPRISE • UROHO COMMUNITY</div></div>
          </section>
          <section className="trust-strip"><div><span className="strip-icon">01</span><b>Retail cement sales</b></div><div><span className="strip-icon">02</span><b>Building materials</b></div><div><span className="strip-icon">03</span><b>Store-based shopping</b></div><div><span className="strip-icon">04</span><b>Direct enquiries</b></div></section>
          <section className="section products">
            <div className="section-heading"><div><div className="eyebrow dark-eyebrow">WHAT WE SUPPLY</div><h2>Materials for<br /><em>your next project.</em></h2></div><p>Explore the building materials available from Goody Goody Enterprise.</p></div>
            <div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div>
            <div className="center-action"><a className="button button-dark" href="#/products">View all products <span>↗</span></a></div>
          </section>
          <section className="visit-banner"><div><div className="eyebrow">COME AND SEE US</div><h2>Visit our store in<br /><em>Uroho 3 Community.</em></h2><p>Find us opposite Town Hall. Customers can visit the store to buy cement. Contact us for enquiries about other building materials.</p></div><a className="button button-primary" href="#/contact">Store & contact details <span>↗</span></a></section>
        </>}

        {page === 'products' && <section className="page-hero section">
          <div className="eyebrow dark-eyebrow">OUR PRODUCT RANGE</div><h1 className="page-title">Building materials.<br /><em>One place.</em></h1>
          <p className="page-intro">Browse our range and contact us to ask about availability, quantities, and pricing.</p>
          <div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div>
          <div className="product-help"><div><strong>Need help choosing?</strong><span>Send us an enquiry and tell us what your project needs.</span></div><button className="button button-primary" onClick={() => whatsapp('cement, sand, granite, or iron rods')}>Ask on WhatsApp ↗</button></div>
        </section>}

        {page === 'about' && <section className="about-page section">
          <div className="eyebrow dark-eyebrow">ABOUT THE BUSINESS</div><h1 className="page-title">A local partner<br /><em>for building.</em></h1>
          <div className="about-layout"><div className="about-photo"><img src={products[0].image} alt="Dangote Cement bags" /></div><div className="about-story"><div className="about-highlight">GOODY GOODY ENTERPRISE <span>• UROHO 3 COMMUNITY</span></div><h2>Materials for the work that matters.</h2><p>Every building project starts with a plan—and having the right materials close at hand can make that plan easier to put into action.</p><p>Goody Goody Enterprise is a community-based building materials business serving customers in Uroho 3 Community. The store sells Dangote Cement, while customers can also contact the business to enquire about sand, granite, and iron rods.</p><p>Whether you are preparing for a new project or looking for materials for ongoing work, our team is ready to hear what you need and help you make an enquiry.</p><a className="button button-dark" href="#/contact">Visit or contact us <span>↗</span></a></div></div>
          <div className="about-values"><div><b>01</b><strong>Local presence</strong><span>Based in Uroho 3 Community.</span></div><div><b>02</b><strong>Building essentials</strong><span>Cement and other key materials.</span></div><div><b>03</b><strong>Direct enquiries</strong><span>Call or message to discuss your needs.</span></div></div>
        </section>}

        {page === 'services' && <section className="section service-page">
          <div className="eyebrow dark-eyebrow">HOW WE CAN HELP</div><h1 className="page-title">Building needs,<br /><em>made simpler.</em></h1>
          <p className="page-intro">From building materials to everyday business and registration services, Goody Goody Enterprise is here to help.</p>
          <div className="service-grid">
            <article className="service-card"><span>01</span><div className="service-icon">▤</div><h2>Cement retail</h2><p>Visit our store to purchase Dangote Cement for your building and construction needs.</p><a href="#/contact">Store details ↗</a></article>
            <article className="service-card"><span>02</span><div className="service-icon">⌁</div><h2>Sand supply</h2><p>Contact us to discuss the sand you need and enquire about availability and quantities.</p><button onClick={() => whatsapp('sand supply')}>Enquire ↗</button></article>
            <article className="service-card"><span>03</span><div className="service-icon">◆</div><h2>Granite supply</h2><p>Ask us about granite for concrete, foundations, and other construction work.</p><button onClick={() => whatsapp('granite supply')}>Enquire ↗</button></article>
            <article className="service-card"><span>04</span><div className="service-icon">▥</div><h2>Iron rods</h2><p>Make an enquiry about steel reinforcement rods for your building project.</p><button onClick={() => whatsapp('iron rods')}>Enquire ↗</button></article>
            <article className="service-card"><span>05</span><div className="service-icon">₦</div><h2>POS services</h2><p>Visit us for POS transactions and ask in-store about available services.</p><button onClick={() => whatsapp('POS services')}>Enquire ↗</button></article>
            <article className="service-card"><span>06</span><div className="service-icon">▣</div><h2>NIN registration</h2><p>Get in touch to ask about NIN registration assistance and the requirements.</p><button onClick={() => whatsapp('NIN registration')}>Enquire ↗</button></article>
          </div><div className="service-note"><div><strong>Need help with a service?</strong><p>Contact the business to ask about POS transactions, NIN registration assistance, or building materials.</p></div><a className="button button-dark" href="#/contact">Talk to us <span>↗</span></a></div>
        </section>}

        {page === 'faq' && <section className="section faq-page">
          <div className="eyebrow dark-eyebrow">HELP & INFORMATION</div><h1 className="page-title">Frequently asked<br /><em>questions.</em></h1><p className="page-intro">A few helpful details before you visit or contact Goody Goody Enterprise.</p>
          <div className="faq-list"><details><summary>What materials do you sell or supply?</summary><p>Goody Goody Enterprise sells Dangote Cement at the store and takes enquiries for sand, granite, and iron rods.</p></details><details><summary>Where is the store located?</summary><p>Uroho 3 Community, opposite Town Hall.</p></details><details><summary>Can I check prices before visiting?</summary><p>Prices can change, so please call or message the business for current pricing and availability.</p></details><details><summary>Can I contact the business on WhatsApp?</summary><p>Yes. Use the WhatsApp buttons on this website to send an enquiry directly.</p></details><details><summary>Can I buy cement in person?</summary><p>Yes. Customers can visit the store to purchase cement.</p></details></div>
          <div className="faq-cta"><div><strong>Still have a question?</strong><span>Get in touch and ask us directly.</span></div><button className="button button-primary" onClick={() => whatsapp('a question about your products')}>Ask on WhatsApp ↗</button></div>
        </section>}

        {page === 'contact' && <section className="contact-page section">
          <div className="eyebrow dark-eyebrow">CONTACT & STORE</div><h1 className="page-title">Let's talk about<br /><em>your materials.</em></h1><p className="page-intro">Call or message Goody Goody Enterprise, or visit the store at Uroho 3 Community, opposite Town Hall.</p>
          <div className="contact-layout"><div className="contact-panel"><div className="contact-panel-top"><span>PHONE & WHATSAPP</span><span className="contact-arrow">↗</span></div><p>Reach the business using either number.</p><a className="contact-row" href={'tel:' + phoneOne}><span className="contact-icon">☎</span><span><small>PHONE NUMBER 1</small><strong>{phoneOne}</strong></span><b>↗</b></a><a className="contact-row" href={'tel:' + phoneTwo}><span className="contact-icon">☎</span><span><small>PHONE NUMBER 2</small><strong>{phoneTwo}</strong></span><b>↗</b></a><button className="button button-primary full-button" onClick={() => whatsapp()}>Chat on WhatsApp <span>↗</span></button><div className="contact-panel-top email-heading"><span>EMAIL</span></div><a className="email-link" href={'mailto:' + email}>{email} ↗</a></div>
          <div className="store-panel"><div className="store-icon">⌖</div><div className="eyebrow">OUR STORE</div><h2>Uroho 3<br /><em>Community</em></h2><p className="store-address">Opposite Town Hall</p><p>Customers can visit the store to purchase cement.</p><div className="store-note"><span>●</span><div><strong>In-person shopping</strong><small>Visit the store to buy cement.</small></div></div><div className="store-note"><span>●</span><div><strong>Other materials</strong><small>Call or message to enquire about sand, granite, and rods.</small></div></div><button className="button button-light full-button" onClick={() => whatsapp('store location and directions')}>Ask for directions <span>↗</span></button></div></div>
        </section>}
      </main>
      <footer><a className="brand footer-brand" href="#/home"><span className="brand-mark">G<span>+</span></span><span className="brand-name">GOODY GOODY <small>ENTERPRISE</small></span></a><span>Building materials for every project • Uroho 3 Community</span><a href="#/contact">Contact us ↑</a></footer>
      <a className="floating-whatsapp" href={'https://wa.me/' + waOne + '?text=' + encodeURIComponent('Hello Goody Goody Enterprise, I have an enquiry.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◉ <span>Chat with us</span></a>
    </div>
  );
}

export default App;
