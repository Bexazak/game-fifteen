export function register(app) {
  const layouts = import.meta.glob('../layouts/*.vue', { eager: true })

  Object.entries(layouts).forEach(([, layout]) => {
    app.component(layout?.default?.name, layout?.default)
  })
}