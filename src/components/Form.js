import React from "react";
import clsx from "clsx";
import {
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      source: "../assets/account_details_screenshot.png",
      formfilled: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  handleChangeImg(e) {
    console.log(e.target.value);
    this.setState({
      source: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      formfilled: true
    });
  }

  render() {
    const username = this.state.username;
    const source = this.state.source;

    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
      },
      card: {
        maxWidth: 345
      },
      media: {
        height: 0,
        paddingTop: "56.25%", // 16:9,
        marginTop: "30"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      },
      dense: {
        marginTop: 19
      }
    }));
    return (
      <Container fixed className="outlayer">
        <Card className={useStyles.card}>
          <CardActionArea>
            <CardMedia square style={{ height: 0 }} imageUrl={source}>
              <img src={source} alt={username} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Please make sure that this is the picture you uploaded along
                with your name you entered. ThankYou.
                <br />
                To upload another image and a new name fill the below form.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <form>
          <input type="file" name="pic" accept="image/*" />
          <input type="submit" />
        </form> */}
        <hr className="separator" />
        <Card className={useStyles.card}>
          <form onSubmit={this.handleSubmit}>
            <CardContent>
              <input
                type="file"
                name="pic"
                accept="image/*"
                className="imageinput"
                onChange={this.handleChangeImg}
                required
              />
              <Typography gutterBottom variant="h5" component="h2">
                <TextField
                  id="standard-dense"
                  label="Your Name Here"
                  placeholder="Name"
                  className={clsx(useStyles.textField, useStyles.dense)}
                  margin="dense"
                  onChange={this.handleChangeText}
                  required
                />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Button size="large" type="submit" color="primary">
                  Submit
                </Button>
              </Typography>
            </CardContent>
          </form>
        </Card>
      </Container>
    );
  }
}

export default Form;
