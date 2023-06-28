import { useApiFetch } from './useApiFetch';

export const useSportsAPI = () => {
    const { get } = useApiFetch();
    const getSports = async () => {
        const data = await get(`/posts`) as Array<object>;
        return data;
    }
    return {
        getSports
    }
}