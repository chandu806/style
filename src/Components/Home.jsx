import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  h1{
    color:green;
  }
  .button{
    border:1px solid black;
    height:180px;
    width:500px;
    margin-left:300px;
    margin-top:0px;
    background-color:white;
  }
  .flex{
    display:flex;
    margin:20px;
  }
  button{
    margin:5px;
  }
  .primary{
    background-color:blue;
  }
  .linkbutton{
    color:blue;
    margin-left:10px;
  }
  .next{
    background-color:blue;
    margin-top:150px;
    margin-left:400px;
  }
  .wrapper{
    background-color:black; 
  }
  .box{
    margin-left:70%;
    height:200px;
    width:300px;
    background-color:grey;
    margin-top:-200px;
  }
  .box1{
     background-color:grey;
     height:200px;
    width:300px;
    margin-left:70%;
  }
  img{
    height:50px;
    width:50px;
  }
`
export const Home = () => {
  return (
    <Wrapper className="wrapper">
      <div className="wrapper">
      <div>
        <button className="next">Next -- </button>
      </div>
      <div className="button">
        <div className="flex">
          <button className="primary">Primary</button>
          <button>Default Button</button>
          <button>Dashed Button</button>
        </div>
        <div className="flex">
          <p>Text Button</p>
          <p className="linkbutton">Link Button</p>
        </div>
        
      </div>
      <div className="box">

      </div>
      <div className="box1">
        <hr></hr>
        <div className="flex">
            <img src="https://i.imgur.com/3rnGaNe.jpeg"></img>
            <p>Academy</p>
        </div>
        <div className="flex">
          <img src="https://i.imgur.com/3rnGaNe.jpeg"></img>
          <p>Morbidly interesting</p>

        </div>

      </div>
      </div>
    </Wrapper>

    
  )
}