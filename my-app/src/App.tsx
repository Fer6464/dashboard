
import { Grid, Typography } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AniCardsUI from './components/AniCardsUI'
import useFetchTopAnimes from './hooks/useFetchData';
import GenreBarChart from './components/GenreBarChart';
import StudioBarChart from './components/StudioBarChart';
import './App.css'
import useFetchTopGenres from './hooks/useFetchGenreData';
import useFetchTopStudio from './hooks/useFetchStudioData';


function App() {
   const topAnimes = useFetchTopAnimes();
   const genresByScore = useFetchTopGenres('average_score');
   const genresByPopularity = useFetchTopGenres('appearance_count')
   const studioByScore = useFetchTopStudio('average_score');
   const studioByPopularity = useFetchTopStudio('appearance_count')
  
   return (
      <Grid container spacing={20}>
         {/* Encabezado */}
         <Grid size = {12}>
            <HeaderUI/>
         </Grid>


         {/* Selector */}
         
         <Grid size = {12} container spacing={1} sx={{justifyContent: "center", alignItems: "center"}}>
            <Grid size ={12}>
               <Typography 
                  variant="h4"
                  component="h1"
                  sx={{fontWeight: 'bold'}}>
                  Top 5 animes
               </Typography>
            </Grid>
            
            {topAnimes.map((anime) => (
               <Grid size = {{xs: 12, sm:2}}>
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

         {/* Genre bar chart*/}
         <Grid size = {12} container spacing={1} sx={{justifyContent: "center"}}>
            <Grid size = {{xs: 12, sm:6}}>
               <GenreBarChart data={genresByScore} metric="average_score" title="Top Genres by Score" />
            </Grid>
            <Grid size = {{xs: 12, sm:6}}>
               <GenreBarChart data={genresByPopularity} metric="appearance_count" title="Top Genres by Popularity" />
            </Grid>
         </Grid>

         {/* Studio bar chart*/}
         <Grid size = {12} container spacing={1} sx={{justifyContent: "center"}}>
            <Grid size = {{xs: 12, sm:6}}>
               <StudioBarChart data={studioByScore} metric="average_score" title="Top Studios by Score" />
            </Grid>
            <Grid size = {{xs: 12, sm:6}}>
               <StudioBarChart data={studioByPopularity} metric="appearance_count" title="Top Studios by Popularity" />
            </Grid>
         </Grid>
      
      </Grid>
   );

}

export default App
