import {browserHistory} from '../src/index'

const History = browserHistory()

History.listen((a, b) => {
  console.log(a, b)
}) 

History.push('/strong')


