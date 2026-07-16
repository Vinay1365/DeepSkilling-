import CohortDetails from './CohortDetails';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Academy Dashboard</h1>
      <CohortDetails name="DN 5.0" status="ongoing" startDate="2024-01-01" endDate="2024-03-31" />
      <CohortDetails name="DN 4.0" status="completed" startDate="2023-06-01" endDate="2023-08-31" />
    </div>
  );
}
export default App;
