import React, { Component } from 'react';

//Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';



const styles = (theme) => ({
   
    productsSectionPaper: {
        display: 'flex',
        overflow: 'auto',
        alignItems: 'center',
        height: '90%',
        margin: theme.spacing(1),
        // maxWidth: '90vw',
        
    },
    eachProductsSectionButton: {
        display: 'block',
        textOverflow: 'clip',
        // textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginLeft: theme.spacing(1), 
        marginRight: theme.spacing(1),
        // width: '200px'
    }

  
});


const productsSection = [
    {
        id: 0,
        name: 'Drinks'

    },
    {
        id: 1,
        name: 'Petiscos'

    },
    {
        id: 2,
        name: 'Sobremesas'

    },
    {
        id: 3,
        name: 'Promo'

    },
    {
        id: 4,
        name: 'Mais'

    },
    {
        id: 5,
        name: 'Pratos-Brasil'

    },
    {
        id: 6,
        name: 'Pratos-Família'

    },
];


export class HorizontalMenuSectionPaper extends Component {
    render() {
         //Nunca esqucer disso abaixo
       const { classes } = this.props;


        return (
            <Paper className={classes.productsSectionPaper}>

            {productsSection.map(eachsection => (
                  <React.Fragment key={eachsection.id}>
                        
                        
                        {/* <Button
                            className={classes.eachProductsSectionButton}
                            variant="text"
                            color="primary"
                            size="small"
                           
                            // startIcon={<LocalBarIcon />}
                            fullWidth
                            
                        >
                            {eachsection.name}
                        </Button> */}

                        <ButtonBase>
                      
                        <Typography 
                        className={classes.eachProductsSectionButton}
                        align='center'
                        // variant="subtitle2"
                        variant="button"
                      // noWrap
                        >
                        {eachsection.name}
                        </Typography>
                        </ButtonBase>
                        
                        {/* <Divider
                        orientation='vertical'
                         /> */}

                         

                         

                 </React.Fragment>
                        // <ProductPaper  productInfo= {eachsection}  key={eachsection.id} />
                    
            ))} 

            </Paper>
        )
    }
}

// export default ProductsSectionPaper
export default withStyles(styles)(HorizontalMenuSectionPaper);

