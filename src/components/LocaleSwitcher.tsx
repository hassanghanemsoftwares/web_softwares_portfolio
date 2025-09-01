"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { SUPPORTED_LANGS } from "@/i18n";

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();
    const queryClient = useQueryClient();

    function onSelectChange(lang: string) {
        i18n.changeLanguage(lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        queryClient.invalidateQueries();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 mx-2 relative"
                    aria-label="Change language"
                >
                    <Globe className="h-4 w-4 rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle language menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
                {SUPPORTED_LANGS.map((localeOption) => (
                    <DropdownMenuItem
                        key={localeOption}
                        onClick={() => onSelectChange(localeOption)}
                        className={`text-sm transition-all ${localeOption === i18n.language
                                ? "font-bold bg-gray-100 dark:bg-gray-700"
                                : "font-normal"
                            }`}
                    >
                        {localeOption.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
