/* App shell — routing + tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "voice": "authority",
  "darkHero": true,
  "ctaCopy": "apply",
  "theme": "v1"
}/*EDITMODE-END*/;

const ThemeContext = React.createContext('v1');
const useTheme = () => React.useContext(ThemeContext);

const PAGES = [
  { id: 'home', label: 'Home', group: 'public' },
  { id: 'sales-main', label: 'Main Academy (Tier 2/3/4)', group: 'public' },
  { id: 'tier1', label: 'Tier 1 — Free', group: 'public' },
  { id: 'tier2', label: 'Tier 2 — Academy', group: 'public' },
  { id: 'tier3', label: 'Tier 3 — Growth', group: 'public' },
  { id: 'tier4', label: 'Tier 4 — Boardroom', group: 'public' },
  { id: 'tripwire', label: 'Tripwire ($27 Flash)', group: 'public' },
  { id: 'optin-lp', label: 'LP · Tier 1 Opt-In (no-nav)', group: 'lp' },
  { id: 'boardroom-app', label: 'LP · Boardroom Application (no-nav)', group: 'lp' },
  { id: 'lender-scholarship', label: 'LP · Lender Scholarship (hidden)', group: 'lp' },
  { id: 'thanks-t2', label: 'LP · Thank You (Tier 2)', group: 'lp' },
  { id: 'thanks-t3', label: 'LP · Thank You (Tier 3)', group: 'lp' },
  { id: 'thanks-t4', label: 'LP · Thank You (Tier 4)', group: 'lp' },
  { id: 'tripwire-lp', label: 'LP · Single Tripwire (no-nav)', group: 'lp' },
  { id: 'library', label: 'Vault Search', group: 'public' },
  { id: 'about', label: 'About', group: 'public' },
  { id: 'newsroom', label: 'Newsroom', group: 'public' },
  { id: 'article', label: 'Article (template)', group: 'public' },
  { id: 'cases', label: 'Case Studies', group: 'public' },
  { id: 'case', label: 'Case Detail', group: 'public' },
  { id: 'contact', label: 'Contact', group: 'public' },
  { id: 'terms', label: 'Terms', group: 'public' },
  { id: 'privacy', label: 'Privacy', group: 'public' },
  { id: 'login', label: 'Login', group: 'auth' },
  { id: 'welcome', label: 'Welcome (onboarding)', group: 'auth' },
  { id: '404', label: '404', group: 'auth' },
  { id: 'dashboard', label: 'My Library', group: 'member' },
  { id: 'course', label: 'Course', group: 'member' },
  { id: 'lesson', label: 'Lesson', group: 'member' },
  { id: 'calculators', label: 'Calculators', group: 'member' },
  { id: 'community', label: 'Community (The Floor)', group: 'member' },
];
const VALID_PAGE_IDS = new Set(PAGES.map(p => p.id));

function App() {
  const [page, setPage] = useState('home');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const theme = tweaks.theme || 'v1';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => document.documentElement.removeAttribute('data-theme');
  }, [theme]);

  const safeNav = (id) => setPage(VALID_PAGE_IDS.has(id) ? id : '404');
  const setTheme = (v) => setTweak('theme', v);
  const ctaCopy = tweaks.ctaCopy === 'apply' ? 'Apply Now' : tweaks.ctaCopy === 'join' ? 'Join Free' : 'Begin Inside';

  const memberPage = ['dashboard', 'course', 'lesson', 'calculators', 'community'].includes(page);
  const lpPages = ['optin-lp', 'boardroom-app', 'lender-scholarship', 'thanks-t2', 'thanks-t3', 'thanks-t4', 'tripwire-lp'];
  const noNav = ['login', '404', 'welcome'].includes(page) || lpPages.includes(page);

  return (
    <ThemeContext.Provider value={theme}>
      {!noNav && <Nav current={page} onNav={safeNav} dark={memberPage} ctaCopy={ctaCopy} memberPage={memberPage} theme={theme} setTheme={setTheme} />}
      {page === 'home' && <HomePage tweaks={tweaks} onNav={safeNav} />}
      {page === 'sales-main' && <SalesMainPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'tier1' && <Tier1Page tweaks={tweaks} onNav={safeNav} />}
      {page === 'tier2' && <Tier2Page tweaks={tweaks} onNav={safeNav} />}
      {page === 'tier3' && <Tier3Page tweaks={tweaks} onNav={safeNav} />}
      {page === 'tier4' && <Tier4Page tweaks={tweaks} onNav={safeNav} />}
      {page === 'tripwire' && <TripwirePage tweaks={tweaks} onNav={safeNav} />}
      {page === 'library' && <LibraryPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'about' && <AboutPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'newsroom' && <NewsroomPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'article' && <ArticlePage tweaks={tweaks} onNav={safeNav} />}
      {page === 'cases' && <CasesPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'case' && <CaseDetailPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'contact' && <ContactPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'terms' && <LegalPage tweaks={tweaks} onNav={safeNav} kind="terms" />}
      {page === 'privacy' && <LegalPage tweaks={tweaks} onNav={safeNav} kind="privacy" />}
      {page === 'login' && <LoginPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'welcome' && <WelcomePage tweaks={tweaks} onNav={safeNav} />}
      {page === '404' && <NotFoundPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'dashboard' && <DashboardPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'course' && <CoursePage tweaks={tweaks} onNav={safeNav} />}
      {page === 'lesson' && <LessonPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'calculators' && <CalculatorsPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'community' && <CommunityPage tweaks={tweaks} onNav={safeNav} />}
      {page === 'optin-lp' && <OptInLP onNav={safeNav} />}
      {page === 'boardroom-app' && <BoardroomApplicationLP onNav={safeNav} />}
      {page === 'lender-scholarship' && <LenderScholarshipLP onNav={safeNav} />}
      {page === 'thanks-t2' && <ThankYouLP onNav={safeNav} tier="tier2" />}
      {page === 'thanks-t3' && <ThankYouLP onNav={safeNav} tier="tier3" />}
      {page === 'thanks-t4' && <ThankYouLP onNav={safeNav} tier="tier4" />}
      {page === 'tripwire-lp' && <TripwireLP onNav={safeNav} />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Layout theme" subtitle="Switch between 5 complete UI directions">
          <TweakSelect value={theme} onChange={setTheme}
            options={[
              { value: 'v1', label: 'V1 · Editorial (default)' },
              { value: 'v2', label: 'V2 · Architectural / Swiss' },
              { value: 'v3', label: 'V3 · Cinematic / dark' },
              { value: 'v4', label: 'V4 · Boutique / luxury' },
              { value: 'v5', label: 'V5 · Performance / athletic' },
            ]} />
        </TweakSection>
        <TweakSection title="Jump to page" subtitle={`${PAGES.length} pages in the system`}>
          <TweakSelect
            value={page}
            onChange={safeNav}
            options={PAGES.map(p => ({ value: p.id, label: `${p.group === 'public' ? '○' : p.group === 'auth' ? '◐' : p.group === 'lp' ? '◇' : '●'}  ${p.label}` }))}
          />
        </TweakSection>
        <TweakSection title="Headline voice" subtitle="Affects homepage hero">
          <TweakRadio value={tweaks.voice} onChange={v => setTweak('voice', v)}
            options={[{ value: 'authority', label: 'Authority' }, { value: 'restrained', label: 'Restrained' }, { value: 'direct', label: 'Direct' }]} />
        </TweakSection>
        <TweakSection title="Hero treatment">
          <TweakRadio value={tweaks.darkHero ? 'dark' : 'light'} onChange={v => setTweak('darkHero', v === 'dark')}
            options={[{ value: 'dark', label: 'Dark' }, { value: 'light', label: 'Light' }]} />
        </TweakSection>
        <TweakSection title="CTA copy">
          <TweakRadio value={tweaks.ctaCopy} onChange={v => setTweak('ctaCopy', v)}
            options={[{ value: 'apply', label: 'Apply Now' }, { value: 'join', label: 'Join Free' }, { value: 'begin', label: 'Begin' }]} />
        </TweakSection>
      </TweaksPanel>
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
