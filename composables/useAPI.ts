import { useApiFetch } from './useApiFetch';

export const useAPI = () => {
    const { get } = useApiFetch();
    const getSports = async () => {
        const data = await get(`/posts`) as Array<object>;
        return data;
    }
    return {
        getSports
    }
}