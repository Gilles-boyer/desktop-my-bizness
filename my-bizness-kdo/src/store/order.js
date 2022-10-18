import apiOrder from "../services/axios/order";
import apiVoucher from "../services/axios/voucher";
import index from "./index";
import axios from "axios";

export default {
  state: {
    orders: [],
    dialogOpenOrder: false,
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    dialogOpenOrder(state) {
      return state.dialogOpenOrder;
    }
  },
  mutations: {
    SET_ORDERS(state, data) {
      state.orders = data;
    },
    PUSH_ORDER(state, data) {
      state.orders.push(data);
    },
    SET_DIALOG_ORDER(state) {
      state.dialogOpenOrder = !state.dialogOpenOrder;
    }
  },
  actions: {
    async initOrders({ commit }) {
      index.commit("SET_OVERLAY_ON");
      
      apiOrder
        .getAllOrder()
        .then((res) => {
          commit("SET_ORDERS", res.data.data);
          index.commit("SET_OVERLAY_OFF");
        })
        .catch((err) => console.log(err.toString()));
    },
    newOrders({ commit }, data) {
      index.commit("SET_OVERLAY_ON");
      apiVoucher
        .createVoucher(data)
        .then((res) => {
          console.log(res);
          commit("PUSH_ORDER", res.data.data);
          index.commit("SET_OVERLAY_OFF");
        })
        .catch((err) => console.log(err.toString()));
    },
    setDialogOrder({commit}) {
      commit('SET_DIALOG_ORDER');
    }
  },
};
