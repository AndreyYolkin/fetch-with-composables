import { useApiFetch } from './useApiFetch';

export const useSportsAPI = () => {
    const getSports = () => {
        return useApiFetch('sport_types', {
            method: 'get',
        })
    }
    return {
        getSports
    }
}