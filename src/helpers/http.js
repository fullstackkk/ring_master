import { useState, useCallback } from "react";

const token = 'rnSCFERG6CBrtCY9kuBI'

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }) => {
        setLoading(true);
        try {
            const response = await fetch(url, { method, body, headers });
            if (response.ok !== true) {
                setError(response.statusText);
                throw new Error(`Запрос к ${url},неудался со статусом ${response.status}`);
            }
            setLoading(false);
            if (response.status === 204) return null;
            if (response.ok) {
                return response.json();
            }
        }
        catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
};

export { useHttp };




