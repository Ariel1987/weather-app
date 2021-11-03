import formatDate from '../../utils/formatDate'

const CurrentDate = () => (<p>{formatDate(new Date())}</p>)

export default CurrentDate