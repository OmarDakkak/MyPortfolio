import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Omar Dakkak </h2>
            <img
              src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-1-dot-version/380/17-512.png"
              alt="avatar"
              style={{height: '250px' }}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me!</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +212 6 50 58 48 61
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    omardakkak98@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
