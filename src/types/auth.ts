interface ISignupReq {
  code: string;
  userId: string;
  budget: string;
  platforms: ISignupPlatform[];
}

interface IUserInfo {
  id: string;
  connectedAt: string;
  nickname: string;
  email: string;
  accessToken: string | null;
  refreshToken: string | null;
}
