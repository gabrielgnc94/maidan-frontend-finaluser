import React, { Component } from 'react';

//Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';


const styles = (theme) => ({

    productPhotoGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    eachSectionPaper: {
        backgroundColor: '#ecf0f1',
        margin: theme.spacing(1),
        padding:  theme.spacing(0),
        minHeight: '100px'
    },
    productPhoto: {
        height: '90px',
        width: '90px',
        borderRadius: '10px',
        // marginRight: theme.spacing(1),
    },
    gridRoot: {
        // height: '200px',
        // backgroundColor: 'grey'
    },
    
  
});

export class VerticalMenuSectionAndProductsPaper extends Component {


    componentDidMount() {
        console.log('abaixo this.props do ProductPaper');
        // console.log(this.props.menuSectionInfo.itens[0].code);
        console.log(this.props);


        
       
      
    }


    render() {
         //Nunca esqucer disso abaixo
       const { classes, menuSections } = this.props;
        return (

            <React.Fragment>

            {menuSections.map(eachMenuSection => (


                <React.Fragment  key={eachMenuSection.code}>      
                <Paper
                className={classes.eachSectionPaper}
               
                >
        
                  <Grid 
                  container 
                  spacing={0}
                  direction = 'row'
                  className={classes.gridRoot}
                  >
        
                      
                            <Grid 
                            item 
                            xs={12}
                            >
                                <Typography variant="subtitle2" gutterBottom>
                                {eachMenuSection.name}
                                </Typography>
                                
                            </Grid>
        
                           
        
                            
                        
                    </Grid>                       
                </Paper>


                </React.Fragment>



            
            ))} 

            </React.Fragment>

       

       

        )
    }
}

// export default ProductPaper
export default withStyles(styles)(VerticalMenuSectionAndProductsPaper);

