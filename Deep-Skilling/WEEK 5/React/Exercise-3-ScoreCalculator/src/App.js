import CalculateScore from './Components/CalculateScore';
function App() {
  return (
    <div>
      <CalculateScore name="John" school="ABC School" total={450} goal="500" />
      <CalculateScore name="Jane" school="XYZ School" total={480} goal="500" />
    </div>
  );
}
export default App;
