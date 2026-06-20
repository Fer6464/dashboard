import { useEffect, useState } from 'react';
import { type GenreResponse, type GenreListResponse } from '../types/DashboardTypes';

const BASE_URL = 'https://dashboard-practica-default-rtdb.firebaseio.com/genero/.json';

type GenreMetric = 'average_score' | 'appearance_count';

function normalizeAndSort(
    data: GenreListResponse | undefined,
    metric: GenreMetric
): GenreResponse[] {
    if (!data) return [];
    const arr = Array.isArray(data) ? data : Object.values(data);
    return [...arr].sort((a, b) => b[metric] - a[metric]);
}

export default function useFetchTopGenres(
    metric: GenreMetric,
    count = 5
): GenreResponse[] {
    const [data, setData] = useState<GenreResponse[]>([]);

    useEffect(() => {
        const url = `${BASE_URL}?orderBy="${metric}"&limitToLast=${count}`;

        const loadData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: GenreListResponse = await response.json();
                setData(normalizeAndSort(jsonData, metric));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, [metric, count]);

    return data;
}