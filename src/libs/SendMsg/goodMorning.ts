import API from '../../api/sendMsg'
import { wxNotify } from '../WxNotify'
import { textTemplate } from './templates/text'

const goodWord = async () => {
  try {
    const dataSource = await Promise.allSettled([
      API.getSalary(),
    ])

    const [daySalary] = dataSource.map(
      (n) => (n.status === 'fulfilled' ? n.value : null)
    )

    const data: any = {
      daySalary,
    }

    const template = textTemplate(data)
    console.log('goodWord', template)

    wxNotify(template)
  } catch (error) {
    console.log('goodWord:err', error)
  }
}

// goodMorning
export const goodMorning = async () => {
  await goodWord()
}
