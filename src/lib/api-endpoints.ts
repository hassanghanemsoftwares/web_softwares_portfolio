const BASE_URL = import.meta.env.VITE_BASE_URL;
const VERSION = import.meta.env.VITE_API_VERSION;

const withVersion = (path: string) => `/api/${VERSION}/client/${path}`;

const API_ENDPOINTS = {
    BASE_URL: BASE_URL,

    HOME: {
        LIST: withVersion("home"),
    },
    CONTACTS: {
        CREATE: withVersion("contact"),
    },
    NEWSLETTER: {
        SUBSCRIBE: withVersion("newsletterSubscribe"),
    },
};

export default API_ENDPOINTS;