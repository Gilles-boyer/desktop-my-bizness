import Vue from 'vue'
import Vuex from 'vuex'
import order from './order';
import login from './login';
import overlay from './overlay';
import snackbar from './snackBar';
import category from './category';
import color from './color';
import font from './font';
import image from './image';
import payment from './payment';
import shipping from './shipping';
import step1 from './step1';
import step2 from './step2';
import step3 from './step3';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    order:order,
    login:login,
    overlay: overlay,
    snackbar:snackbar,
    category:category,
    color:color,
    font:font,
    image:image,
    payment:payment,
    shipping:shipping,
    step1:step1,
    step2:step2,
    step3:step3,
  }
})
