import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {activeTab:0};
  }

  toggleCategories(){
          if(this.state.activeTab === 0){
            return (
              <div className="projects-grid">
              {/* Project 1*/}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                  React Project #1
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Project 2*/}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                  React Project #2
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Project 3*/}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{color: "#fff", height: "176px", background:'url(https://fr.reactjs.org/logo-og.png) center / cover'}}>
                  React Project #3
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </div>


            )
          }else if(this.state.activeTab === 1){
            return (
              <div><h1>This is VueJs</h1></div>
            )
          }else if(this.state.activeTab === 2){
            return (
              <div><h1>This is MongoDB</h1></div>
            )
          }else if(this.state.activeTab === 3){
            return (
              <div><h1>This is Deep Learning</h1></div>
            )
          }else if(this.state.activeTab === 4){
              return (
                <div><h1>This is Machine Learning</h1></div>
              )
            }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>VueJs</Tab>
          <Tab>MongoDB</Tab>
          <Tab>DL</Tab>
          <Tab>ML</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}
export default Projects;
