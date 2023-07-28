export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

// Action creators
export const loadingStart = () => ({
  type: LOADING_START,
});

export const loadingEnd = () => ({
  type: LOADING_END,
});