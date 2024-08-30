import { useTranslation } from 'react-i18next';

export const Aboutme = () => {
  const {t} = useTranslation (); 
   // eslint-disable-next-line jsx-a11y/anchor-is-valid
   return(
     <div>
      <h2>{t('contenido')}</h2>
      <img src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/346624643_638892458087662_2237893840221722269_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeELqdoYj2NStZ7JKvIGhWgklC_SJdhtw7OUL9Il2G3Ds1kTcb6FRNYPnOlbe2Ep3bE&_nc_ohc=2SiQIeLCZicAb5aJ0wg&_nc_ht=scontent.faep6-1.fna&oh=00_AfCimarZtq5_CNlb6ejlK2g4pWLevsE_y8LRGLSpjPFV3w&oe=662E18C7" width="500" height="500" alt="any"/>
      </div>
      )
}