import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import API_ENDPOINTS from './api-endpoints';
import i18n from 'i18next';
import { toast } from 'sonner';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const axiosInstance = axios.create({
    baseURL: API_ENDPOINTS.BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
});
export const getOrCreateDeviceId = async (): Promise<string> => {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
        try {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            deviceId = result.visitorId;
        } catch {
            deviceId = crypto.randomUUID();
        }
        localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
};


const onRequest = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    try {
        const APP_KEY = import.meta.env.VITE_APP_KEY;
        const language = i18n.language || 'en';
        const userAgent = navigator.userAgent;
        const deviceId = await getOrCreateDeviceId();
        const trackingData = {
            user_agent: userAgent,
            device_id: deviceId,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language,
            screen_resolution: `${window.screen.width}x${window.screen.height}`,
            page: window.location.href,
            referrer: document.referrer,
        };

        config.headers = new AxiosHeaders({
            'Accept-Language': language,
            'App-key': APP_KEY,
            'agent': userAgent,
            'X-Device-ID': deviceId,
            'X-Tracking-Data': JSON.stringify(trackingData),
            ...config.headers,
        });

        return config;
    } catch (err: any) {
        if (err.message === 'Location permission denied') {
            toast.error('Location permission is required to proceed.');
        } else {
            toast.error('Unexpected error while preparing request.');
        }
        return Promise.reject(err);
    }
};


axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(
    (response) => response,
);

export default axiosInstance;
