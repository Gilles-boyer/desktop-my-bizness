import router from '../router'
import apiUser from '../services/axios/user';
import index from "./index";

export default {
    state:{
        authenticated:false,
        user:{},
        token:""
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        },
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        },
        SET_LOGOUT (state) {
            state.user = {};
            state.token = "";
            state.authenticated = false;
            window.localStorage.clear();
            router.push('/login');
        }
    },
    actions:{
        login({commit}, login){
            index.commit("SET_OVERLAY_ON");
            apiUser.login(login).then(res => {
                localStorage.setItem('token', res.data.data.token);
                window.location.href ="/home"
                commit('SET_USER', {
                    id: res.data.data.id,
                    name: res.data.data.name
                })
                commit('SET_AUTHENTICATED', true)
                index.commit("SET_OVERLAY_OFF");
            }).catch(err => {
                commit('SET_SNACK_DATA', {
                    message:"echec login",
                    color:"error"
                })
                console.log(err.toString());
            })
        },
    }
}