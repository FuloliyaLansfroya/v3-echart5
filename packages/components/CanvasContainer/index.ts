import { watch, h, defineComponent, markRaw } from "vue";
import { isNumber } from "../../utils/index";
import _ from "lodash";
import echarts from "../../interface/echarts";
export default defineComponent({
  name: "CanvasContainer",
  props: {
    width: {
      type: [Number, String],
      default: 1000,
    },
    height: {
      type: [Number, String],
      default: 1000,
    },
    /** 是否启用图表事件 */
    listenEvent: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data: (): any => ({
    uniqueClassName: `ts-vview-${Math.floor(Math.random() * 10000)}`,
    el: null,
    chart: null,
    canvasWidth: 0,
    canvasHeight: 0,
  }),
  computed: {
    className(): String {
      return `ts-vview ${this.uniqueClassName}`;
    },
    containerStyle(): Object | String {
      return this.$props.width > 0
        ? {
            width: isNumber(this.$props.width) ? `${this.$props.width}px` : `${this.$props.width}`,
            height: isNumber(this.$props.height) ? `${this.$props.height}px` : `${this.$props.height}`,
          }
        : "";
    },
    canvasStyle(): Object {
      return {
        width: isNumber(this.$props.width) ? `${this.$props.width}px` : "100%",
        height: isNumber(this.$props.height) ? `${this.$props.height}px` : "100%",
      };
    },
  },
  methods: {
    // 初始化画布宽高
    initSize() {
      this.canvasWidth = this.$props.width;
      this.canvasHeight = this.$props.height;
    },

    // TODO: once被弃用 暂不使用
    // initEvent() {
    //   window.addEventListener('resize', this.onResize);
    //   this.$once('hook:beforeDestroy', () => {
    //     window.removeEventListener('resize', this.onResize);
    //   });
    // },

    // 初始化画布类
    initCanvas() {
      const wrapClass = `.${this.uniqueClassName}`;
      const { width, height } = document.querySelector(wrapClass)?.getBoundingClientRect() || { width: 0, height: "100%" };
      if (!this.$props.width) {
        this.canvasWidth = width;
      }
      this.canvasHeight = height;
      this.el = this.el || document.querySelector(`${wrapClass} .ts-canvas`);
    },

    // 图表配置项，由子类来填充
    getOptions(): Record<string, any> {
      //   if (this.originalOptions) return this.originalOptions;
      throw new Error("getOptions must be implemented!");
    },

    // 图表事件注册
    initChartEvent() {
      const { listenEvent } = this;
      listenEvent &&
        this.chart?.on("click", (params: any) => {
          this.$emit("chartEvent", params);
        });
    },

    // 图表渲染
    renderChart(animation = true) {
      const render = () => {
        if (this.chart) {
          echarts.dispose(this.chart);
          this.chart = null;
        }
        const options = _.merge(this.getOptions(), this.$props.options);
        options.animation = animation;
        if (this.el && options) {
          this.chart = markRaw(echarts.init(this.el));
          this.chart.setOption(options);
          this.initChartEvent();
        }
      };
      this.initCanvas();
      this.$nextTick(() => render());
    },

    // 重渲染
    reRender() {
      const options = _.merge(this.getOptions(), this.$props.options);
      options.animation = true;
      if (this.chart && options) {
        this.chart.clear();
        this.chart.setOption(options);
      }
    },

    //监听宽高变化
    initWatch() {
      watch(this.$props, (newVal, oldVal) => {
        if (this.$props.width > 0) {
          this.canvasWidth = this.$props.width;
          this.renderChart(false);
        }
        if (newVal.height !== oldVal.height) {
          this.renderChart();
        }
      });
    },
    /** 子类可在此定制dom 内容 */
    extraDOMElement(dom?: "<div>123</div>" | JSX.Element) {
      return dom;
    },
  },
  created() {
    this.initSize;
  },
  mounted() {
    this.renderChart();
    this.initWatch();
    // this.initEvent();
  },
  onBeforeUnmount() {
    this.chart?.dispose();
  },
  render() {
    const _this = this;
    return h("div", { class: this.className, style: this.containerStyle }, [
      h("div", { class: "ts-canvas", style: this.canvasStyle }),
      this.extraDOMElement(),
      h("div", null, this.$slots.chartSlot ? this.$slots.chartSlot() : ""),
    ]);
  },
});
