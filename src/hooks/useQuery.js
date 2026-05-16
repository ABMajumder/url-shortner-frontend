import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import dayjs from 'dayjs';

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shortenurls", token],
        queryFn: async () => {
            try {
                // ✅ Get clean token from localStorage
                const cleanToken = localStorage.getItem("JWT_TOKEN");

                return await api.get(
                    "api/urls/myurls",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: "Bearer " + cleanToken,
                        },
                    }
                );
            } catch (error) {
                onError();
                throw error;
            }
        },
        select: (data) => {
            const sortedData = data.data.sort(
                (a,b) => new Date(b.createdDate) - new Date(a.createdDate)
            );
            return sortedData;
        },
        enabled: !!token,
        staleTime: 5000,
        retry: 1, // ✅ Only retry once on failure
    });
};

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick", token],
        queryFn: async () => {
            try {
                // ✅ Get clean token from localStorage
                const cleanToken = localStorage.getItem("JWT_TOKEN");

                const startDate = dayjs().subtract(30, 'day').format("YYYY-MM-DD");
                const endDate = dayjs().add(1, 'day').format("YYYY-MM-DD");

                return await api.get(
                    `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: "Bearer " + cleanToken,
                        },
                    }
                );
            } catch (error) {
                onError();
                throw error;
            }
        },
        select: (data) => {
            const convertToArray = Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            }));
            return convertToArray;
        },
        enabled: !!token,
        staleTime: 5000,
        retry: 1, // ✅ Only retry once on failure
    });
};