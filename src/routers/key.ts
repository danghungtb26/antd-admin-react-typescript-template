export const router_keys = {
  login: '/login',
  home: '/home',
  dashboard: '/dashboard',

  template: {
    table: {
      list: '/template/table',
      detail: (id: string) => `/template/table/${id}`,
    },
  },
}
