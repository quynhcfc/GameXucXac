import { LUA_CHON, PLAY_GAME, RESET_GAME } from "../contants/constants";

export let luaChonAction = (luaChon) => {
  return {
    type: LUA_CHON,
    payload: luaChon,
  };
};

export let playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};

export let resetGameAction = () => {
  return {
    type: RESET_GAME,
  };
};
