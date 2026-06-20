import { useEffect, useState } from 'react';
import { type StudioResponse, type StudioListResponse } from '../types/DashboardTypes';

const BASE_URL = 'https://dashboard-practica-default-rtdb.firebaseio.com/estudio/.json';

type StudioMetric = 'average_score' | 'appearance_count';

function normalizeAndSort(
    data: StudioListResponse | undefined,
    metric:StudioMetric
): StudioResponse[] {
    if (!data) return [];
    const arr = Array.isArray(data) ? data : Object.values(data);
    return [...arr].sort((a, b) => b[metric] - a[metric]);
}

export default function useFetchTopStudio(
    metric: StudioMetric,
    count = 5
): StudioResponse[] {
    const [data, setData] = useState<StudioResponse[]>([]);

    useEffect(() => {
        const url = `${BASE_URL}?orderBy="${metric}"&limitToLast=${count}`;

        const loadData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: StudioListResponse = await response.json();
                setData(normalizeAndSort(jsonData, metric));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, [metric, count]);

    return data;
}