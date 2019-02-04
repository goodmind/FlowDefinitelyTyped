declare module 'v-chart-plugin' {
        import type {
          PluginObject
        } from 'vue';

	declare var Chart: PluginObject<void>;
	declare export default typeof Chart

    }
