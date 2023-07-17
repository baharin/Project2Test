import { useTranslation } from 'react-i18next';
import PageNavbar from '../PageNavbar';


function AboutUs(){

    const {t} = useTranslation();


    return (
    <div aria-description='This page provides information about the company. It has three sections...'>

       
    <PageNavbar />
        
    <div className='text-center'>
        <h1>{t('AboutUs.title')}</h1>
        <p>{t('AboutUs.description')}</p>
        
        <h1>{t('AboutUs.tutorstitle')}</h1>
        <p>{t('AboutUs.tutors')}</p>
        <h1>{t('AboutUs.contactustitle')}</h1>
        <p>{t('AboutUs.contactus')}</p>
        

        
        
      
    </div>
    </div>
    );
};

export default AboutUs;
