import {browserHistory} from '../src/index'
import manager from '../src/manager'

const history = manager()

history.addListener(()=>{
  console.log('1')
})
history.addListener(()=>{ 
  console.log('2')
})
history.addListener(()=>{
  console.log('3')
})
history.addListener(()=>{
  console.log('4')
})

history.notifyListeners()