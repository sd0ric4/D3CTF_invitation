import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start'

// 导入 i18n 配置
import './i18n/i18n'

import { createRouter } from './router'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)
