const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm a message from app.js");
    const author = ref("Bruce Wayne");

    const changeName = () => {
      message.value = "I'm a new message";
      author.value = "I'm Batman";
    };

    return {
      message,
      author,
      changeName,
    };
  },
});

app.mount("#myApp");
