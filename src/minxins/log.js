const log = {
    data() {
      return {
        name: undefined,
        time: undefined
      };
    },
    created() {
      this.time = new Date();
      console.log(`${this.name}出生了`);
    },
    beforeDestroy() {
      const now = new Date();
      console.log(`${this.name}死亡了，共存在了${now - this.time}`);
    }
  };
  export default log;
  