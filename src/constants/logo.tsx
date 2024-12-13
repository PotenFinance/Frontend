import AdobeLargeLogo from '@assets/icons/logo/large/Adobe';
import DiscodeLargeLogo from '@assets/icons/logo/large/Discode';
import NetflixLargeLogo from '@assets/icons/logo/large/Netflix';
import SpotifyLargeLogo from '@assets/icons/logo/large/Spotify';
import AdobeSmallLogo from '@assets/icons/logo/small/Adobe';
import DiscodeSmallLogo from '@assets/icons/logo/small/Discode';
import NetflixSmallLogo from '@assets/icons/logo/small/Netflix';
import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';

interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const BRAND_LOGO = (props: IProps) => ({
  large: {
    101: <NetflixLargeLogo {...props} />,
    102: <SpotifyLargeLogo {...props} />,
    103: <DiscodeLargeLogo {...props} />,
    104: <AdobeLargeLogo {...props} />,
    105: <div />,
    106: <SpotifyLargeLogo {...props} />,
    107: <div />,
  } as Record<number, React.ReactNode>,
  small: {
    101: <NetflixSmallLogo {...props} />,
    102: <SpotifySmallLogo {...props} />,
    103: <DiscodeSmallLogo {...props} />,
    104: <AdobeSmallLogo {...props} />,
    105: <div />,
    106: <SpotifySmallLogo {...props} />,
    107: <div />,
  } as Record<number, React.ReactNode>,
});
