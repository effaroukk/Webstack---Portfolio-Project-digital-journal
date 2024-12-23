import useSWR from "swr";

const BASE_URL = "/api/";
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useFetcher(endpoint) {
	const { data, error } = useSWR(BASE_URL + endpoint, fetcher);

	return { data, isLoading: !error && !data, isError: error };
}
