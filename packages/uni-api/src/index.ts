export * from './service/base/base64'
export * from './service/base/upx2px'
export * from './service/base/interceptor'

export * from './service/ui/createIntersectionObserver'
export * from './service/ui/createSelectorQuery'

// protocols
export * from './protocols/base/canIUse'

export * from './protocols/device/makePhoneCall'
export * from './protocols/device/setClipboardData'

export * from './protocols/file/openDocument'

export * from './protocols/location/chooseLocation'
export * from './protocols/location/getLocation'
export * from './protocols/location/openLocation'

// helpers
export { createApi } from './helpers/api'
export { isSyncApi, isContextApi, promisify } from './helpers/promise'