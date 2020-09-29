import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化 
  // 疑问:init方法哪来的呢  initMixin()  mixin混入
  this._init(options)
}

initMixin(Vue)  //通过该方法给vue添加_init方法, mixin

// 定义实例方法
stateMixin(Vue)  // $set, $watch, $delete   状态相关的混入
eventsMixin(Vue)  // $emit $on $off $once
lifecycleMixin(Vue)  // _update $forceUpdate $destroy
renderMixin(Vue)  // _render $nextTick

export default Vue
