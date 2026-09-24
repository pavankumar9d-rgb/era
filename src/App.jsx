import DitherVeil from './components/DitherVeil';
import './styles.css';

const PHOTO = './portrait.jpg';

function App() {
  return (
    <main className="image-only-page">
      <DitherVeil
        src={PHOTO}
        fit="contain"
        pattern="floyd"
        pixelSize={2}
        inkColor="#120f17"
        paperColor="#f4f1ea"
        revealRadius={200}
        softness={0.6}
        linger={1.6}
        brightness={-0.1}
        contrast={1.15}
        clickBurst
      />
    </main>
  );
}

export default App;
