
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI'
import './App.css'

function App() {

  return (
      <Grid>

         {/* Encabezado */}
         <Grid>
          <HeaderUI/>
        </Grid>

         {/* Alertas */}
         <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
             <AlertUI description="No se preveen lluvias"/>
        </Grid>

         {/* Selector */}
         <Grid>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid>Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
   );

}

export default App
