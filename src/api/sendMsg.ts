import axios from 'axios'

enum SendMsgURL {
  // salary_api
  salary_url = 'http://127.0.0.1:5000/salary',
}

class API {
  key: string
  constructor(key?: string) {
    this.key = key || ''
  }

  getKey() {
    return this.key
  }

  // get salary
  async getSalary(): Promise<string | null> {
    try {
      const response = await axios(SendMsgURL.salary_url, { timeout: 60000 })
      return response.data
    }
    catch (error) {
      console.log(error)
      return null
    }
  }
}

export default new API()
