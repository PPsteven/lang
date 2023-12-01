import mitt from "mitt"

// 在 React 和 Vue 中，"bus"（总线）通常是指一种事件总线的概念，用于在应用程序中进行组件之间的通信。
// 在 React 中，你可以使用第三方库（如 eventemitter3 或 mitt）创建一个事件总线对象，并将其作为上下文传递给需要进行通信的组件。
// 通过订阅和发布事件，组件可以在事件总线上进行通信。这样可以避免直接在组件之间传递 props 或使用回调函数的方式，从而简化了组件之间的耦合。

type Events = {
  to: string
  gallery: string
  tool: string
  pathname: string
}

// bus 对mitt使用了<Events> 泛型
export const bus = mitt<Events>()
