import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from 'axios'
import { handleServerError } from "@/utils/handle-server-error";
import { StoreProvider } from "./StoreProvider";
import { DirectionProvider } from "@radix-ui/react-direction";
import i18n from "@/i18n";
import { FullPageLoadingProvider } from "@/context/FullPageLoadingContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                if (import.meta.env.DEV) console.log({ failureCount, error })

                if (failureCount >= 0 && import.meta.env.DEV) return false
                if (failureCount > 3 && import.meta.env.PROD) return false

                return !(
                    error instanceof AxiosError &&
                    [401, 403].includes(error.response?.status ?? 0)
                )
            },
            refetchOnWindowFocus: import.meta.env.PROD,
            staleTime: 10 * 1000, // 10s
        },
        mutations: {
            onError: (error) => {
                handleServerError(error)

                if (error instanceof AxiosError) {
                    if (error.response?.status === 304) {
                        toast.error('Content not modified!')
                    }
                }
            },
        },
    },
    queryCache: new QueryCache({
        onError: (error) => {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {
                    toast.error('Session expired!')
                }
                if (error.response?.status === 500) {
                    toast('Internal Server Error!')
                }
                if (error.response?.status === 403) {
                    // router.navigate("/forbidden", { replace: true });
                }
            }
        },
    }),
})

export default function Providers({
    children
}: {
    children: React.ReactNode;
}) {
    const lang = i18n.language || "en";
    const isArabic = lang === 'ar';

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            scriptProps={{ async: true, defer: true }}
        >
            <StoreProvider>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TooltipProvider>
                            <DirectionProvider dir={isArabic ? "rtl" : "ltr"}>
                                <FullPageLoadingProvider>
                                    {children}
                                </FullPageLoadingProvider>
                            </DirectionProvider>
                        </TooltipProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </StoreProvider>
        </GoogleReCaptchaProvider>
    )
}