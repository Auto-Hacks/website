// https://stackoverflow.com/a/63659100
import path from 'path'
import getConfig from 'next/config'

const serverPath = (staticFilePath: string) => {
  return path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, staticFilePath)
}

export default serverPath

