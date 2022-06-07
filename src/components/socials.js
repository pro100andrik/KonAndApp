import logoFacebook from './socialsIcons/logoFacebook.svg';
import logoInstagram from './socialsIcons/logoInstagram.svg';
import logoTelegram from './socialsIcons/logoTelegram.svg';
import logoYoutube from './socialsIcons/logoYoutube.svg';
import logoGithub from './socialsIcons/logoGithub.svg';

const Socials = () => {
    return (
      <div className='socials-div'> <div className='socials-caption'>My Socials</div>
        <a href="https://www.facebook.com/profile.php?id=100001364241085"><img src={logoFacebook} className="social-logo" alt="logo" /></a>
        <a href="https://www.instagram.com/konand_/"><img src={logoInstagram} className="social-logo" alt="logo" /></a>
        <a href="https://t.me/KonAnd94"><img src={logoTelegram} className="social-logo" alt="logo" /></a>
        <a href="https://www.youtube.com/channel/UCwGT5WX72x3wUwp9ma5Cc4g"><img src={logoYoutube} className="social-logo" alt="logo" /></a>
        <a href="https://github.com/pro100andrik"><img src={logoGithub} className="social-logo" alt="logo" /></a>
      </div>

    )
}
//<a href="LINK"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a>


export default Socials;
