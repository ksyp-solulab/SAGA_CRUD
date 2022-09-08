import Grid from '@mui/system/Unstable_Grid/Grid';
import './App.css';
import DataTable from './components/DataTable';
import Form from './components/Form';


function App() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
    <Grid item xs={12} md={4} lg={6}>
       <Form />  
    </Grid>
    <Grid item xs={12} md={8} lg={6}>
       <DataTable />
    </Grid>
</Grid>
  );
}

export default App;
