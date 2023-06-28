export const useApiFetch = () => {
    const config = useRuntimeConfig();
    const base = config.public.base
    const headers = {
        'test1': 'test1',
    }
    const get = async (url: string) => {
        const data = await $fetch(`${url}`, {
            method: 'GET',
            baseURL: base,
            headers
        });
        return data;
    }
    return {
        get
    }
}