import { ss } from '@/utils/storage'
import { t } from '@/locales'
import { homeStore } from "@/store";
const LOCAL_NAME = 'userStorage'
const backgroundImage = homeStore.myData.session.backgroundImage ?? "https://t.alcy.cc/fj/"

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: '@/assets/avatar.jpg',
      name:  ('Cormac'),//'AI绘图',
      description: '欢迎访问 <a href="https://cormac.top" class="text-blue-500" target="_blank" >我的主页</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
