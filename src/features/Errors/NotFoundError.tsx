import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundError: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">{t('pageNotFound')}</p>
                <button
                    onClick={() => navigate('/')}
                    className="text-blue-500 hover:text-blue-700 underline"
                >
                    {t('returnToHome')}
                </button>
            </div>
        </div>
    );
};

export default NotFoundError;
