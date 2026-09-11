import { useEffect, useState } from 'react';

const navigation = [
  { label: 'How it works', href: '#principles' },
  { label: 'The case for guidance', href: '#market-gap' },
  { label: 'For parents', href: '#for-parents' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header" data-testid="site-header">
        <a className="wordmark" href="#top" aria-label="StudySprout home">
          <img src="/brand/sprout-mark.svg" alt="" aria-hidden="true" />
          <span>Study<span>Sprout</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#for-parents">Talk with us <span aria-hidden="true">↗</span></a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          data-testid="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          id="mobile-menu"
          className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
          data-testid="mobile-menu"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="mobile-menu-cta" href="#for-parents" onClick={closeMenu}>Talk with us <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame" data-testid="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI WILL BE PART OF THEIR WORLD.</p>
            <h1 id="hero-title" data-testid="hero-title">
              They're going to use AI.<br />
              <em>Help them learn how to use it well.</em>
            </h1>
            <p className="hero-body" data-hero-body>A learning tool that explains, questions, and practices with kids — then gradually steps out of the way.</p>
            <div className="hero-actions">
              <a className="button button-primary" data-testid="hero-primary-cta" href="#principles">See how it works</a>
              <a className="button button-secondary" data-testid="hero-secondary-cta" href="#for-parents">For parents</a>
            </div>
            <div className="hero-note" aria-label="A note about the approach">
              <span className="note-line" aria-hidden="true" />
              <span>Support that leaves room for their own thinking.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label"><span className="dot" aria-hidden="true" /> A different kind of help</div>
            <div className="hero-image-frame">
              <picture>
                <source type="image/png" srcSet="/assets/hero-child-robot.png" />
                <img
                  src="/assets/hero-child-robot.svg"
                  alt="Child writing on paper beside a small robot tutor"
                  data-testid="hero-image"
                />
              </picture>
              <span className="image-caption">The child does the work.</span>
            </div>
            <span className="scribble scribble-one" aria-hidden="true">✳</span>
            <span className="scribble scribble-two" aria-hidden="true">↗</span>
          </div>
        </section>

        <section className="market-gap section-frame" data-testid="market-gap" id="market-gap" aria-labelledby="market-gap-title">
          <div className="section-kicker">THE MOMENT WE'RE IN</div>
          <div className="market-grid">
            <div>
              <h2 id="market-gap-title">AI is already here. <em>Guidance isn't.</em></h2>
              <p className="market-intro">Kids are meeting AI before most adults have found the right words to talk about it. They deserve a place to practice good judgment, not just good prompts.</p>
            </div>
            <div className="proof-block" data-testid="proof-stat">
              <div className="stat-row">
                <span className="stat-number">86<small>%</small></span>
                <span className="stat-label">of U.S. children ages 9–17 surveyed in 2026 reported using AI</span>
              </div>
              <p className="supporting-fact">More than 4 in 10 surveyed children said no parent or guardian had ever talked with them about AI safety.</p>
              <a className="source-link" data-testid="source-link" href="https://www.commonsensemedia.org/research/a-comprehensive-report-on-teens-tweens-and-ai" target="_blank" rel="noreferrer">Source: Common Sense Media, 2026 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="principles section-frame" data-testid="principles" id="principles" aria-labelledby="principles-title">
          <div className="principles-heading">
            <div className="section-kicker">HOW IT WORKS</div>
            <h2 id="principles-title">Help first.<br /><em>Step back, slowly.</em></h2>
          </div>
          <div className="principle-list">
            <article className="principle" data-principle data-testid="principle-ask">
              <span className="principle-number">01</span>
              <h3>Ask</h3>
              <p>Start with the question.</p>
            </article>
            <article className="principle" data-principle data-testid="principle-think">
              <span className="principle-number">02</span>
              <h3>Think</h3>
              <p>Get a hint, not the answer.</p>
            </article>
            <article className="principle" data-principle data-testid="principle-try">
              <span className="principle-number">03</span>
              <h3>Try alone</h3>
              <p>Practice without help.</p>
            </article>
          </div>
        </section>

        <section className="independence section-frame" id="for-parents" data-testid="independence" aria-labelledby="independence-title">
          <div className="independence-mark" aria-hidden="true">“</div>
          <div className="independence-content">
            <div className="section-kicker">THE GOAL</div>
            <h2 id="independence-title" data-testid="independence-quote">Sometimes the best thing our AI can say is: <em>“Try this one without me.”</em></h2>
          </div>
          <div className="parent-invite">
            <p>For parents who want their kids to be ready for what's next — and able to think through it themselves.</p>
            <a className="text-link" href="mailto:hello@studysprout.example">Talk with us <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame" data-testid="site-footer">
        <a className="wordmark footer-wordmark" href="#top" aria-label="StudySprout home">
          <img src="/brand/sprout-mark.svg" alt="" aria-hidden="true" />
          <span>Study<span>Sprout</span></span>
        </a>
        <p>Learning with AI. Thinking for yourself.</p>
        <span className="footer-note">© 2026 StudySprout</span>
      </footer>
    </div>
  );
}

export default App;
