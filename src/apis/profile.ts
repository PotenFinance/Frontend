import axiosInstance from './axiosInstance';

export const updateUserInfo = async ({ userId, newUserName }: IEditProfileData) => {
  try {
    const data = await axiosInstance.post(
      `/v1/user/edit-name?userId=${userId}&newUserName=${newUserName}`,
    );
    return { success: true, data };
  } catch (err: any) {
    const { error, path, status } = err;
    console.error(`내정보 수정 요청 중 오류발생: ${status} ${error}`);
    console.error(err);
    return { success: false, status };
  }
};
