
import React from 'react';
import Search from './components/Search';
import Recipes from './components/Recipes';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRecipe=this.searchRecipe.bind(this);

    this.state = {
     recipes: []
    }
  } 
  
  searchRecipe(recipeName)
  { 
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`)
    .then(response=>response.json())
    .then(data=>{this.setState({
       recipes: data.recipes      
     })});
}
render(){
  let searchText = "";
  if(this.state.recipes.length == 0){
    searchText = "Type and search a food item to get various recipes!";
  }
  return (
    <div className="App"> 
    <header className="App-header">
    <h2 className="App-title">Recipe search</h2>
    </header>
      
    <Search  onSubmit={this.searchRecipe} />     

    <Recipes recipes={this.state.recipes} />
  
    <h2>{searchText}</h2>

   </div>
   
     
  );
  }
}

export default App;
