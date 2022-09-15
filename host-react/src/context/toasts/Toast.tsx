type Props = {
  text: string
}

export const Toast = ({text}: Props) => {
  return (
    <div className='toast'>
      {text}
    </div>
  )
}