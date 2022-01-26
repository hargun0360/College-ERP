import React                from 'react'
import Otp        from 'components/Otp'
class App extends React.Component {



    resendEvent() {  console.log("***************Resend button pressed do whatever you want*********************")

    }


    render() {
      let style = {
          otpTimer:{
              margin:'10px',
              color:'blue',
          },
          resendBtn:{
            backgroundColor:'#5cb85c',
            color:'white',
            border: '1 px solid #ccc'
          }
      }

    return (
        <div>
             <h1>Otp Timer counter</h1>
            <Otp
                style={style}
                minutes={1.5}      // Minutes ( Pass the no of minutes that you want count )
                resendEvent={this.resendEvent.bind(this)} //  Resend button event you can pass your function name here
            />


        </div>
    )
  }
}
export default App
