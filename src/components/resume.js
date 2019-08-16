import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'

class Resume extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>Omar Dakkak</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Adress</h5>
            <p>41, Bloc 4, Hay Al Andalous, Taza, Morocco</p>
            <h5>Phone</h5>
            <p>+212 6 50 58 48 61</p>
            <h5>Email</h5>
            <p>omardakkak98@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2021}
              schoolName="National School of Applied Sciences of Al Hoceïma"
              schoolDescription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2016}
              joblName="Capgemini"
              jobDescription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="JavaScript"
              progress={41}
            />
            <Skills
              skill="HTML5/CSS3"
              progress={80}
            />
            <Skills
              skill="C++"
              progress={50}
            />
            <Skills
              skill="C"
              progress={40}
            />
            <Skills
              skill="Python"
              progress={41}
            />
            <Skills
              skill="Deep Learning"
              progress={49}
            />
            <Skills
              skill="Machine Learning"
              progress={58}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
