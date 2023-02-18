export const textTemplate = (data: TextTemplateProps) => {
  const { daySalary } = data

  let text = 'Good Morning! \n\n'

  if (daySalary)
    text += `Stock Value: ${daySalary.stock_value} \n\nStock Total: ${daySalary.stock_total} \n\nSalary SGD: ${daySalary.salary_total_readable} \n\nSalary CNY: ${daySalary.salary_total_cny_readable}`

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
