import { useEffect, useState } from 'react';
import { type AnimeResponse } from '../types/DashboardTypes';

const TOP5_BY_SCORE_URL =
  'https://react-prueba-6385b-default-rtdb.firebaseio.com/1.json?orderBy="score"&limitToLast=5';

  function normalizeAndSort(
        data: AnimeResponse[] | Record<string, AnimeResponse> | undefined,
        compareFn: (a: AnimeResponse, b: AnimeResponse) => number
        ): AnimeResponse[] {
        if (!data) return [];
        const arr = Array.isArray(data) ? data : Object.values(data);
        return [...arr].sort(compareFn);
    }
    
export default function useFetchTopAnimes(): AnimeResponse[] {
    const [data, setData] = useState<AnimeResponse[]>([]);

    

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(TOP5_BY_SCORE_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: AnimeResponse[] = await response.json();
                const sortedData = normalizeAndSort(
                jsonData,
                (a, b) => b.score - a.score  
            );
                setData(sortedData);  //highest score first
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, []);

    return (data);
}