import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';
import { IImgResponse } from './type';

const ROUTER = 'images';

export const PostImage = () => {
  const response = async (param: File) => {
    const formData = new FormData();
    formData.append('image', param);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await instance.post<IImgResponse>(
      `${ROUTER}`,
      formData,
      config
    );

    return data;
  };

  return useMutation(response, {
    onError: (e) => {
      alert(e);
    },
  });
};
