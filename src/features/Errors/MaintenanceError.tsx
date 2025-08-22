import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MaintenanceError: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="error-content text-center">
            <div className="container">
                <h1 className="error-title">{t('maintenanceTitle')}</h1>
                <p>{t('maintenanceMessage')}</p>
                <a className="btn btn-outline-primary-2 btn-minwidth-lg" onClick={() => navigate('/')}>
                    <span>{t('backToHomepage')}</span>
                    <i className="icon-long-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};

export default MaintenanceError;
