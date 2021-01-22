import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <h1>{props.namelist.name}</h1>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Part part={props.namelist.names[0]}/>
      <Part part={props.namelist.names[1]}/>
      <Part part={props.namelist.names[2]}/>
      <Part part={props.namelist.names[3]}/>
      <Part part={props.namelist.names[4]}/>
      <Part part={props.namelist.names[5]}/>
      <Part part={props.namelist.names[6]}/>
      <Part part={props.namelist.names[7]}/>
      <Part part={props.namelist.names[8]}/>
      <Part part={props.namelist.names[9]}/>
      <Part part={props.namelist.names[10]}/>
      <Part part={props.namelist.names[11]}/>
      <Part part={props.namelist.names[12]}/>
      <Part part={props.namelist.names[13]}/>
      <Part part={props.namelist.names[14]}/>
      <Part part={props.namelist.names[15]}/>
      <Part part={props.namelist.names[16]}/>
      <Part part={props.namelist.names[17]}/>
      <Part part={props.namelist.names[18]}/>
      <Part part={props.namelist.names[19]}/>
    </div>  
  )
}

const Part = (props) => {
  return(
    <p>{props.part.name} {props.part.amount}</p>
  )
}

const Total = (props) => {
  return(
    <p>Total amount of all names: {props.names[0].amount+props.names[1].amount+props.names[2].amount+props.names[3].amount+
              props.names[4].amount+props.names[5].amount+props.names[6].amount+props.names[7].amount+
              props.names[8].amount+props.names[9].amount+props.names[10].amount+props.names[11].amount+
              props.names[12].amount+props.names[13].amount+props.names[14].amount+props.names[15].amount+
              props.names[16].amount+props.names[17].amount+props.names[18].amount+props.names[19].amount}
    </p>
  )
}

const App = () => {
  const namelist = {
    name: 'Dev Academy Name Application',
    "names": [
      {
        "name": "Ville",
        "amount": 24
      },
      {
        "name": "Anna",
        "amount": 6
      },
      {
        "name": "Antti",
        "amount": 22
      },
      {
        "name": "Sanna",
        "amount": 5
      },
      {
        "name": "Mikko",
        "amount": 19
      },
      {
        "name": "Minna",
        "amount": 5
      },
      {
        "name": "Timo",
        "amount": 18
      },
      {
        "name": "Satu",
        "amount": 5
      },
      {
        "name": "Tuomas",
        "amount": 16
      },
      {
        "name": "Tiina",
        "amount": 5
      },
      {
        "name": "Tero",
        "amount": 15
      },
      {
        "name": "Kati",
        "amount": 5
      },
      {
        "name": "Sami",
        "amount": 15
      },
      {
        "name": "Henna",
        "amount": 4
      },
      {
        "name": "Mika",
        "amount": 12
      },
      {
        "name": "Liisa",
        "amount": 4
      },
      {
        "name": "Janne",
        "amount": 12
      },
      {
        "name": "Paula",
        "amount": 4
      },
      {
        "name": "Petri",
        "amount": 11
      },
      {
        "name": "Suvi",
        "amount": 4
      }
    ]
  }

  return (
    <div>
      <Header namelist={namelist} />
      <Contents namelist={namelist} />
      <Total names={namelist.names} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)