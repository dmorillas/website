export const state = () => ({
  menu: {
    opened: false
  }
})

export const mutations = {
  menu (state, data) {
    if (data === false) {
      state.menu.opened = false
    } else {
      state.menu.opened = !state.menu.opened
    }
  }
}
