interface ResSalaryProps {
  stock_total: string
  stock_value: string
  salary_total_readable: string
  salary_monthly: string
  salary_monthly_cny: string
  salary_total_cny_readable: string
}

// goodEvening
type TextTemplateProps = {
  daySalary: ResSalaryProps | null
}
