import AppleMusicLargeLogo from '@assets/icons/logo/large/AppleMusic';
import BaeminLargeLogo from '@assets/icons/logo/large/Baemin';
import CoupangLargeLogo from '@assets/icons/logo/large/Coupang';
import DisneyLargeLogo from '@assets/icons/logo/large/Disney';
import KakaoLargeLogo from '@assets/icons/logo/large/Kakao';
import KurlyLargeLogo from '@assets/icons/logo/large/Kurly';
import MelonLargeLogo from '@assets/icons/logo/large/Melon';
import NaverLargeLogo from '@assets/icons/logo/large/Naver';
import NetflixLargeLogo from '@assets/icons/logo/large/Netflix';
import SpotifyLargeLogo from '@assets/icons/logo/large/Spotify';
import TvingLargeLogo from '@assets/icons/logo/large/Tving';
import WatchaLargeLogo from '@assets/icons/logo/large/Watcha';
import WavveLargeLogo from '@assets/icons/logo/large/Wavve';
import YogiyoLargeLogo from '@assets/icons/logo/large/Yogiyo';
import YoutubeLargeLogo from '@assets/icons/logo/large/Youtube';

import AppleMusicSmallLogo from '@assets/icons/logo/small/AppleMusic';
import BaeminSmallLogo from '@assets/icons/logo/small/Baemin';
import CoupangSmallLogo from '@assets/icons/logo/small/Coupang';
import DisneySmallLogo from '@assets/icons/logo/small/Disney';
import KakaoSmallLogo from '@assets/icons/logo/small/Kakao';
import KurlySmallLogo from '@assets/icons/logo/small/Kurly';
import MelonSmallLogo from '@assets/icons/logo/small/Melon';
import NaverSmallLogo from '@assets/icons/logo/small/Naver';
import NetflixSmallLogo from '@assets/icons/logo/small/Netflix';
import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';
import TvingSmallLogo from '@assets/icons/logo/small/Tving';
import WatchaSmallLogo from '@assets/icons/logo/small/Watcha';
import WavveSmallLogo from '@assets/icons/logo/small/Wavve';
import YogiyoSmallLogo from '@assets/icons/logo/small/Yogiyo';
import YoutubeSmallLogo from '@assets/icons/logo/small/Youtube';

interface IProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const BRAND_LOGO = (props: IProps) => ({
  large: {
    E001: <KakaoLargeLogo {...props} />,
    M001: <MelonLargeLogo {...props} />,
    M002: <AppleMusicLargeLogo {...props} />,
    M003: <YoutubeLargeLogo {...props} />,
    M004: <SpotifyLargeLogo {...props} />,
    O001: <NetflixLargeLogo {...props} />,
    O002: <DisneyLargeLogo {...props} />,
    O003: <YoutubeLargeLogo {...props} />,
    O004: <TvingLargeLogo {...props} />,
    O005: <WavveLargeLogo {...props} />,
    O006: <WatchaLargeLogo {...props} />,
    S001: <CoupangLargeLogo {...props} />,
    S002: <KurlyLargeLogo {...props} />,
    S003: <NaverLargeLogo {...props} />,
    S004: <BaeminLargeLogo {...props} />,
    S005: <YogiyoLargeLogo {...props} />,
  } as Record<string, React.ReactNode>,
  small: {
    E001: <KakaoSmallLogo {...props} />,
    M001: <MelonSmallLogo {...props} />,
    M002: <AppleMusicSmallLogo {...props} />,
    M003: <YoutubeSmallLogo {...props} />,
    M004: <SpotifySmallLogo {...props} />,
    O001: <NetflixSmallLogo {...props} />,
    O002: <DisneySmallLogo {...props} />,
    O003: <YoutubeSmallLogo {...props} />,
    O004: <TvingSmallLogo {...props} />,
    O005: <WavveSmallLogo {...props} />,
    O006: <WatchaSmallLogo {...props} />,
    S001: <CoupangSmallLogo {...props} />,
    S002: <KurlySmallLogo {...props} />,
    S003: <NaverSmallLogo {...props} />,
    S004: <BaeminSmallLogo {...props} />,
    S005: <YogiyoSmallLogo {...props} />,
  } as Record<string, React.ReactNode>,
});
