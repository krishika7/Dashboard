import React, { useState } from 'react'
import { Grid, makeStyles } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";


function Skills() {

    const useStyles = makeStyles((theme) => ({
      body: {
        padding: "60px 60px",
      },
      inputBox: {
        width: "400px",
      },
      submitButton: {
        width: "400px",
      },
    }));

    const [skills, setSkills] = useState({
      skill: [],
    }); 
const classes = useStyles();
  return (
    <div>
      <Grid item>
        <ChipInput
          className={classes.inputBox}
          label="Skills"
          variant="outlined"
          helperText="Press enter to add skills"
          onChange={(chips) => setSkills({ ...skills, skill: chips })}
        />
      </Grid>
    </div>
  );
}

export default Skills;
