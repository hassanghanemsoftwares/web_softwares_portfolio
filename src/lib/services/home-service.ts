/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeResponse } from "@/types/response.interfaces";
import API_ENDPOINTS from "../api-endpoints";
import axiosInstance from "../axiosInstance";

export const getHome = async (): Promise<HomeResponse> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.HOME.LIST);
        return response.data;
    } catch (error: any) {
        return {
            result: false,
            message: error?.response?.data?.message || "Failed to fetch contacts",
            configurations: [],
            demonstrations: [],
            get_in_touches: [],
            home_banners: [],
            projects: [],
            faqs: {
                data: []
            },
            privacies: {
                data: []
            },
            terms: {
                data: []
            },
            services: [],
            setting: [],
            stats: [],
            team_members: [],
            testimonials: [],
        };
    }
};
