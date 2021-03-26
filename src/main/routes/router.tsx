import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SurveyList } from '@/presentation/pages'
import { makeLogin, makeSignUp } from '@/main/factories/pages'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { ApiContext } from '@/presentation/contexts'
import { PrivateRoute } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider value={{
      setCurrentAccount: setCurrentAccountAdapter,
      getCurrentAccount: getCurrentAccountAdapter
    }}
    >
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={makeSignUp} />
        <PrivateRoute path="/" exact component={SurveyList} />
      </Switch>
    </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router