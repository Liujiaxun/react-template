class App {
  private _access: number[] = []

  constructor() {
    const token = window.localStorage.getItem("AdminToken")
    console.log(token, 'token')
  }

  public user = {}

  public userId = {}

  public setAccess(data: number[]) {
    this._access = data
  }

  public check(access: number | number[]) {
    let status = false
    const list = this._access
    if (Array.isArray(access)) {
      status = access.every((item) => list.includes(item))
    } else if (list.includes(access)) {
      status = true
    }
    return status
  }
}

const app = new App()

export default app
