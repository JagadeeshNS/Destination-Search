// Write your code here
const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="">
      <img src={imgUrl} className="" alt={name} />
      <p className="">{name}</p>
    </li>
  )
}
export default DestinationItem
