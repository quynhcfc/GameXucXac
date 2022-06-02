import { randomIntFromInterval } from "../../XucXacUtil";
import {
  LUA_CHON,
  PLAY_GAME,
  RESET_GAME,
  TAI,
  XIU,
} from "../contants/constants";

let initialState = {
  mangXucXac: [
    { giaTri: 3, img: "./imgXucSac/1.png" },
    { giaTri: 3, img: "./imgXucSac/2.png" },
    { giaTri: 3, img: "./imgXucSac/3.png" },
  ],
  luaChon: null,
  soBanThang: 0,
  soLuotChoi: 0,
  thongKe: [],
};

export const xucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LUA_CHON: {
      state.luaChon = payload;
      return { ...state };
    }

    case PLAY_GAME: {
      let tongDiemXucXacRandom = 0;

      let newMangXucXac = state.mangXucXac.map(() => {
        let randomNum = randomIntFromInterval(1, 6);

        tongDiemXucXacRandom += randomNum;

        return {
          giaTri: randomNum,
          img: `./imgXucSac/${randomNum}.png`,
        };
      });

      let ketQua = tongDiemXucXacRandom >= 11 ? TAI : XIU;
      let newSoLuotChoi = state.soLuotChoi + 1;
      let newSoBanThang =
        state.luaChon === ketQua ? state.soBanThang + 1 : state.soBanThang;

      state.mangXucXac = newMangXucXac;
      state.soLuotChoi = newSoLuotChoi;
      state.soBanThang = newSoBanThang;

      return { ...state };
    }

    case RESET_GAME: {
      return { ...initialState };
    }

    default:
      return { ...state };
  }
};
