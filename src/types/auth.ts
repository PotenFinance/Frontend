interface ISignupReq {
  code: string;
  userId: string;
  budget: string;
  platforms: ISignupPlatform[];
}

interface ILoginRes extends IRes {
  data: {
    id: number;
    connected_at: string;
    properties: {
      nickname: string;
    };
    kakao_account: {
      profile_nickname_needs_agreement: boolean;
      profile: {
        nickname: string;
        is_default_nickname: boolean;
      };
      has_email: boolean;
      email_needs_agreement: boolean;
      is_email_valid: boolean;
      is_email_verified: boolean;
      email: string;
    };
    access_token: string | null;
    refresh_token: string | null;
  };
}
