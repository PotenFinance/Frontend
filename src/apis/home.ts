import axiosInstance from './axiosInstance';

export const getHomeData = async ({ userId }: { userId: string }) => {
  try {
    const data = await axiosInstance.get(`/subscriptions/summary`, {
      params: {
        userId,
      },
    });
    return { success: true, data };
  } catch (err: any) {
    const { error, path, status } = err;
    console.error(`홈화면 정보 요청 중 오류발생: ${status} ${error}`);
    console.error(err);
    return { success: false, status };
  }
};
