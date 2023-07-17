const TabBody = ({
  content,
  label
}) => {

  return (
    <>
    <h1>{label}</h1>
        {content}
    </>
  )
}

export default TabBody