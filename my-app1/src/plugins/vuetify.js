import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        dark: true,
        themes: {
            dark: {
                primary: '#240046',
                secondary: '#10002B',
                success: '#00C853',
                warning: '#FFD600',
                info: '#2962FF',
                error: '#D50000'
            }
        }
    }
});
