
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI'
import AniCardsUI from './components/AniCardsUI'
import useFetchTopAnimes from './hooks/useFetchData';
import './App.css'

function App() {
   const topAnimes = useFetchTopAnimes();

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
         Top Animes
         <Grid container spacing={1} sx={{justifyContent: "center"}}>
            {topAnimes.map((anime) => (
               <Grid size = {2}>
                  <AniCardsUI 
                     key={anime.anime_id}
                     name={anime.title}
                     score={`${anime.score}`}
                     popularity={`${anime.popularity}`}
                     url={anime.image_url}
                  />
               </Grid>
            ))}
            
         </Grid>

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
