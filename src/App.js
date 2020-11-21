import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Student from './components/Student.js';
import StudentC from './components/StudentC.js';
import Message from './components/Message.js';
import Event from './components/Event.js';
import EventC from './components/EventC.js';
import ParentComp from './components/ParentComp';
import ListRend from './components/ListRend';
import StyleSheet from './components/Stylesheet.js'
import LifecycleA from './components/LifecycleA.js'
import Fragment from './components/Fragment.js'
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counter from './components/Counter';
import ComponentA from './components/ComponentA.js'
import{ UserProvider} from './components/UserContext'
import HookCounter from './components/HookCounter.js'
import HookCounterTwo from './components/HookCounterTwo.js'
import HooksCounterThree from './components/HooksCounterThree.js'
import HookCounterFour from './components/HookCounterFour.js'
import HooksEffectOne from './components/HooksEffectOne.js'
import HooksEffectTwo from './components/HooksEffectTwo.js'
import MouseContainer from './components/MouseContainer';
import FetchingHooksOne from './components/FetchingHooksOne'
import ContextHooksOne from './components/ContextHooksOne'
import ReducerHooksOne from './components/ReducerHooksOne';
import ReducerHooksTwo from './components/ReducerHooksTwo';
import ReducerHooksThree from './components/ReducerCounterThree';
import FetchingDataOne from './components/FetchingDataOne';
import FetchingDataTwo from './components/FetchingDataTwo';

export const UserContext = React.createContext()
export const AgeContext = React.createContext()

function App() {
  
  return (
    <div className="App">
      {/* <Greet name = "Jan" initial = "S" />
      <Greet name = "V" initial = "G" />
      <Greet name = "Nini" initial = "R" />
      <Welcome name = "Jan" initial = "S" />
      <Welcome name = "V" initial = "G" />
      <Welcome name = "Nini" initial = "R" /> */}
      {/* <Student name = "Jan" id = "1" year = "2017" dept = "cardio" />
      <Student name = "V" id = "2" year = "2011" dept = "neuro" />
      <Student name = "Nini" id = "3" year = "2015" dept = "general" />
      <StudentC name = "Jan" id = "1" year = "2017" dept = "cardio"  />
      <p>This is a child component</p>
      <StudentC name = "V" id = "2" year = "2011" dept = "neuro" />
      <p>This is a child component</p>
      <StudentC name = "Nini" id = "3" year = "2015" dept = "general" />
      <p>This is a child component</p> */}
      {/* <Message/> */}
      {/* <Event/>
      <EventC/> */}
      {/* <ParentComp/> */}
      {/* <ListRend/>
      <StyleSheet/> */}
      {/* <LifecycleA/> */}
      {/* <Fragment/> */}
      {/* <PureComp/> */}
      {/* <RefsDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName = "Jan"/>
      </ErrorBoundary>
      <ErrorBoundary>  
        <Hero heroName = "V"/>
      </ErrorBoundary>  
      <ErrorBoundary>  
        <Hero heroName = "Nini"/>
      </ErrorBoundary> */}
      {/* <ClickCounter name = "Jan"/>
      <HoverCounter/> */}
      {/* <Counter 
      render = {(count , incrementCount)=> (
        <ClickCounterTwo count = {count} incrementCount={incrementCount} />
      )}
      />
      <Counter 
      render = {(count , incrementCount)=> (
        <HoverCounterTwo count = {count} incrementCount={incrementCount} />
      )}
      /> */}
      
      {/* <Counter>
          {(count, incrementCounter) => <ClickCounterTwo count={count} incrementCounter={incrementCounter}></ClickCounterTwo>}
      </Counter>
      <Counter>
          {(count, incrementCounter) => <HoverCounterTwo count={count} incrementCounter={incrementCounter}></HoverCounterTwo>}
      </Counter> */}
      {/* <UserProvider value = "Jan">
        <ComponentA/>
      </UserProvider> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HooksCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HooksEffectOne/> */}
      {/* <HooksEffectTwo/> */}
      {/* <MouseContainer/> */}
      {/* <FetchingHooksOne/> */}
      {/* <UserContext.Provider value = {'Janusha'}>
        <AgeContext.Provider value = {25}>
          <ContextHooksOne/>
        </AgeContext.Provider> 
      </UserContext.Provider>    */}
      {/* <ReducerHooksOne/> */}
      {/* <ReducerHooksTwo/> */}
      {/* <ReducerHooksThree/> */}
      {/* <FetchingDataOne/> */}
      <FetchingDataTwo/>
    </div>
  );
}

export default App;
