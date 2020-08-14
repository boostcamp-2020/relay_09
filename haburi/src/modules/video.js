const SAVE_VIDEO = "video/SAVE_VIDEO";

export const saveVideo = (data) => ({ type: SAVE_VIDEO, data });

const initialState = {
  videoList: [],
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case SAVE_VIDEO:
      return {
        ...state,
        videoList: action.data,
      };
    default:
      return state;
  }
}
