```javascript
import React from 'react';
import Translations, {setTranslations,setLocale} from 'react-translations';

setTranslations({
  en:{
    greetings:values=>`Hello ${values.name}`
  },
  es:{
    greetings:values=>`Hola ${values.name}`
  }
})

setLocale('en')

class App extends React.Component{
  render(){
    return <div>
      <button onClick={(()=>{ setLocale('es'); this.forceUpdate(); }).bind(this)}>
        Change to ES
      </button>
      <Translations id="greetings" name="Jorge"></Translations>
    </div>
  }
}

export default App;
```
