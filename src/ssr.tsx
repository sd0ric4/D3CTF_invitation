import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'

// 导入 i18n 配置
import './i18n/i18n'

import { createRouter } from './router'

let streamHandler = defaultStreamHandler

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(streamHandler)
